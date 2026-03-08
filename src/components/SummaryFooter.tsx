import { numberToWords } from "@/lib/utils";
import { Copy, Share2, Trash2 } from "lucide-react";
import React from "react";

interface SummaryFooterProps {
  total: number;
  symbol: string;
  onReset: () => void;
  onCopy: () => void;
  onShare: () => void;
}

export const SummaryFooter: React.FC<SummaryFooterProps> = ({
  total,
  symbol,
  onReset,
  onCopy,
  onShare,
}) => {
  const words = numberToWords(total);

  return (
    <div className="p-4 md:p-6 glass-card rounded-2xl border-t-4 border-t-primary shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
        <div className="flex-1">
          <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Grand Total
          </span>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              {symbol}
              {total.toLocaleString()}
            </h2>
          </div>
          <p className="mt-1 text-[10px] md:text-sm font-semibold text-primary italic line-clamp-2">
            {words}
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onReset}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-destructive text-destructive-foreground font-bold text-xs md:text-sm hover:bg-destructive/90 transition-colors"
          >
            <Trash2 className="w-3.5 md:w-4 h-4" />
            <span className="md:inline">Reset</span>
          </button>
          <button
            onClick={onCopy}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-bold text-xs md:text-sm hover:bg-secondary/80 transition-all active:scale-95"
          >
            <Copy className="w-3.5 md:w-4 h-4" />
            <span className="md:inline">Copy</span>
          </button>
          <button
            onClick={onShare}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs md:text-sm hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all active:scale-95"
          >
            <Share2 className="w-3.5 md:w-4 h-4" />
            <span className="md:inline">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
