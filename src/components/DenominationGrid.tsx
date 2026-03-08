import { DenominationRow } from "@/components/DenominationRow";
import { CountState, CurrencyConfig } from "@/types";

interface DenominationGridProps {
  selectedCurrency: CurrencyConfig;
  counts: CountState;
  onCountChange: (value: number, count: number) => void;
}

export function DenominationGrid({
  selectedCurrency,
  counts,
  onCountChange,
}: Readonly<DenominationGridProps>) {
  return (
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
            onChange={(count) => onCountChange(den.value, count)}
          />
        ))}
      </div>
    </div>
  );
}
