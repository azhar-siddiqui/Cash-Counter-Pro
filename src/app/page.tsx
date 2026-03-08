"use client";
import { CountrySelector } from "@/components/CountrySelector";
import { DenominationRow } from "@/components/DenominationRow";
import { Header } from "@/components/Header";
import { SummaryFooter } from "@/components/SummaryFooter";
import { CURRENCIES, GENERIC_DENOMINATIONS } from "@/data";
import { CountState, CurrencyConfig } from "@/types";
import { countries, currencies } from "country-data-list";
import { useMemo, useState } from "react";

export default function Home() {
  const [countryAlpha2, setCountryAlpha2] = useState("IN");
  const [counts, setCounts] = useState<CountState>({});

  const selectedCurrency = useMemo((): CurrencyConfig => {
    const country = (countries as any)[countryAlpha2];
    const currencyCode = country?.currencies[0];
    const currencyInfo = (currencies as any)[currencyCode];

    // Check if we have specific denominations for this currency code
    const specificConfig = CURRENCIES.find((c) => c.code === currencyCode);

    if (specificConfig) {
      return specificConfig;
    }

    return {
      code: currencyCode || "???",
      name: country?.name || "Unknown",
      symbol: currencyInfo?.symbol || currencyCode || "",
      denominations: GENERIC_DENOMINATIONS as any,
    };
  }, [countryAlpha2]);

  const handleCountChange = (value: number, count: number) => {
    setCounts((prev) => ({
      ...prev,
      [value]: count,
    }));
  };

  const total = useMemo(() => {
    return selectedCurrency.denominations.reduce((acc, den) => {
      return acc + den.value * (counts[den.value] || 0);
    }, 0);
  }, [selectedCurrency, counts]);

  const handleReset = () => {
    setCounts({});
  };

  const handleCopy = () => {
    const summary = selectedCurrency.denominations
      .filter((den) => (counts[den.value] || 0) > 0)
      .map(
        (den) =>
          `${den.label} x ${counts[den.value]} = ${selectedCurrency.symbol}${(den.value * counts[den.value]).toLocaleString()}`,
      )
      .join("\n");

    const fullSummary = `CashCounter Pro Summary\n-------------------\nCurrency: ${selectedCurrency.name} (${selectedCurrency.code})\n\n${summary}\n\n-------------------\nGrand Total: ${selectedCurrency.symbol}${total.toLocaleString()}\nWords: ${total.toLocaleString()} ${selectedCurrency.code} Only`;

    navigator.clipboard.writeText(fullSummary);
    alert("Summary copied to clipboard!");
  };

  const handleShare = async () => {
    const summary = selectedCurrency.denominations
      .filter((den) => (counts[den.value] || 0) > 0)
      .map(
        (den) =>
          `${den.label} x ${counts[den.value]} = ${selectedCurrency.symbol}${(den.value * counts[den.value]).toLocaleString()}`,
      )
      .join("\n");

    const fullSummary = `CashCounter Pro Summary\n-------------------\nCurrency: ${selectedCurrency.name} (${selectedCurrency.code})\n\n${summary}\n\n-------------------\nGrand Total: ${selectedCurrency.symbol}${total.toLocaleString()}\nWords: ${total.toLocaleString()} ${selectedCurrency.code} Only`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "CashCounter Pro Summary",
          text: fullSummary,
        });
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.error("Error sharing:", err);
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6 md:p-8 font-sans transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <Header isDark={true} toggleTheme={() => {}} />

        <main className="pb-24 md:pb-0">
          <CountrySelector
            selectedCode={countryAlpha2}
            onSelect={(code) => {
              setCountryAlpha2(code);
              setCounts({});
            }}
          />

          <div className="mb-6">
            <div className="flex items-center justify-between px-2 mb-4">
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Denominations ({selectedCurrency.code})
              </h3>
              <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">
                Enter counts
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
              {selectedCurrency.denominations.map((den, index) => (
                <DenominationRow
                  key={`${den.value}-${index}`}
                  denomination={den}
                  count={counts[den.value] || 0}
                  symbol={selectedCurrency.symbol}
                  index={index}
                  onChange={(count) => handleCountChange(den.value, count)}
                />
              ))}
            </div>
          </div>

          <div className="sticky bottom-4 md:static md:mt-8 z-30">
            <SummaryFooter
              total={total}
              symbol={selectedCurrency.symbol}
              onReset={handleReset}
              onCopy={handleCopy}
              onShare={handleShare}
            />
          </div>
        </main>

        <footer className="mt-12 pb-8 text-center text-muted-foreground text-[10px] uppercase tracking-widest">
          <p>© 2026 CashCounter Pro • Built with Precision</p>
        </footer>
      </div>
    </div>
  );
}
