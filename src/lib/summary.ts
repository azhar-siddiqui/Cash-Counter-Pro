import { CountState, CurrencyConfig } from "@/types";

export function generateSummaryText(
  selectedCurrency: CurrencyConfig,
  counts: CountState,
  total: number,
): string {
  const summary = selectedCurrency.denominations
    .filter((den) => (counts[den.value] || 0) > 0)
    .map(
      (den) =>
        `${den.label} x ${counts[den.value]} = ${selectedCurrency.symbol}${(den.value * counts[den.value]).toLocaleString()}`,
    )
    .join("\n");

  return `CashCounter Pro Summary\n-------------------\nCurrency: ${selectedCurrency.name} (${selectedCurrency.code})\n\n${summary}\n\n-------------------\nGrand Total: ${selectedCurrency.symbol}${total.toLocaleString()}\nWords: ${total.toLocaleString()} ${selectedCurrency.code} Only`;
}

export async function shareSummary(summary: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "CashCounter Pro Summary",
        text: summary,
      });
    } catch (err: any) {
      if (err.name === "AbortError") return;
      console.error("Error sharing:", err);
      copyToClipboard(summary);
    }
  } else {
    copyToClipboard(summary);
  }
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
