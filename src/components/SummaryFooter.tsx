import { numberToWords } from "@/lib/utils";
import { Check, Copy, Share2, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface SummaryFooterProps {
  total: number;
  symbol: string;
  currencyCode: string;
  onReset: () => void;
  onCopy: () => void;
  onShare: () => void;
}

export const SummaryFooter: React.FC<SummaryFooterProps> = ({
  total,
  symbol,
  currencyCode,
  onReset,
  onCopy,
  onShare,
}) => {
  const [copied, setCopied] = useState(false);
  const words = numberToWords(total, currencyCode);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <Button
            variant="destructive"
            size="lg"
            onClick={onReset}
            className="cursor-pointer"
          >
            <Trash2 className="size-4" />
            <span className="text-secondary-foreground">Reset</span>
          </Button>
          <Button
            variant={copied ? "success" : "secondary"}
            size="lg"
            onClick={handleCopy}
            className="cursor-pointer"
          >
            {copied ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            <span className="text-secondary-foreground">
              {copied ? "Copied" : "Copy"}
            </span>
          </Button>
          <Button
            variant="default"
            size="lg"
            onClick={onShare}
            className="cursor-pointer"
          >
            <Share2 className="size-4" />
            <span className="text-secondary-foreground">Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
