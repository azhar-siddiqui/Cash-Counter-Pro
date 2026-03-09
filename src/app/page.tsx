"use client";

import { CountrySelector } from "@/components/CountrySelector";
import { DenominationGrid } from "@/components/DenominationGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { SummaryFooter } from "@/components/SummaryFooter";
import { useCashCounter } from "@/hooks/useCashCounter";
import {
  copyToClipboard,
  generateSummaryText,
  shareSummary,
} from "@/lib/summary";

export const dynamic = "force-dynamic";

export default function Home() {
  const {
    countryAlpha2,
    counts,
    selectedCurrency,
    total,
    handleCountChange,
    handleReset,
    handleCountryChange,
  } = useCashCounter();

  const handleCopy = () => {
    const summary = generateSummaryText(selectedCurrency, counts, total);
    copyToClipboard(summary);
  };

  const handleShare = async () => {
    const summary = generateSummaryText(selectedCurrency, counts, total);
    await shareSummary(summary);
  };

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background p-3 sm:p-6 md:p-8 font-sans transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <Header />

          <main className="pb-24 md:pb-0">
            <section aria-labelledby="country-selector" className="mb-8">
              <h2 id="country-selector" className="sr-only">
                Select Country and Currency
              </h2>
              <CountrySelector
                selectedCode={countryAlpha2}
                onSelect={handleCountryChange}
              />
            </section>

            <section aria-labelledby="denominations" className="mb-8">
              <h2 id="denominations" className="sr-only">
                Currency Denominations Counter
              </h2>
              <DenominationGrid
                selectedCurrency={selectedCurrency}
                counts={counts}
                onCountChange={handleCountChange}
              />
            </section>

            <section
              aria-labelledby="summary"
              className="sticky bottom-4 md:static md:mt-8 z-30"
            >
              <h2 id="summary" className="sr-only">
                Cash Summary and Actions
              </h2>
              <SummaryFooter
                total={total}
                symbol={selectedCurrency.symbol}
                currencyCode={selectedCurrency.code}
                onReset={handleReset}
                onCopy={handleCopy}
                onShare={handleShare}
              />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
