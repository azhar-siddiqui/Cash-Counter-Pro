"use client";

import { CountrySelector } from "@/components/CountrySelector";
import { DenominationGrid } from "@/components/DenominationGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SummaryFooter } from "@/components/SummaryFooter";
import { useCashCounter } from "@/hooks/useCashCounter";
import {
  copyToClipboard,
  generateSummaryText,
  shareSummary,
} from "@/lib/summary";

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
    <div className="min-h-screen bg-background p-3 sm:p-6 md:p-8 font-sans transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <Header />

        <main className="pb-24 md:pb-0">
          <CountrySelector
            selectedCode={countryAlpha2}
            onSelect={handleCountryChange}
          />

          <DenominationGrid
            selectedCurrency={selectedCurrency}
            counts={counts}
            onCountChange={handleCountChange}
          />

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

        <Footer />
      </div>
    </div>
  );
}
