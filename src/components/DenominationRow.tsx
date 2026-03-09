import { Banknote, Coins } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Denomination } from "../types";
import { Input } from "./ui/input";

interface DenominationRowProps {
  denomination: Denomination;
  count: number;
  symbol: string;
  onChange: (value: number) => void;
  index: number;
}

export const DenominationRow: React.FC<DenominationRowProps> = ({
  denomination,
  count,
  symbol,
  onChange,
  index,
}) => {
  const subtotal = denomination.value * count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center justify-between p-3 md:p-4 glass-card rounded-xl group hover:border-primary/30 transition-colors"
    >
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        <div
          className={`shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg ${denomination.color} font-bold shadow-sm`}
        >
          {denomination.type === "note" ? (
            <Banknote className="w-4 h-4 md:w-5 md:h-5" />
          ) : (
            <Coins className="w-4 h-4 md:w-5 md:h-5" />
          )}
        </div>

        <div className="min-w-0">
          <span className="text-base md:text-lg font-bold text-foreground truncate block">
            {symbol}
            {denomination.label}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3 mx-2">
        <span className="text-muted-foreground font-medium text-sm md:text-base">
          x
        </span>
        <Input
          type="number"
          min="0"
          value={count || ""}
          placeholder="0"
          onChange={(e) => onChange(Number.parseInt(e.target.value) || 0)}
          className="w-16 md:w-24 px-2 md:px-3 py-1.5 md:py-2 font-bold text-base md:text-lg rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>

      <div className="flex-1 text-right min-w-20 md:min-w-25">
        <span className="hidden sm:block text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">
          Subtotal
        </span>
        <span className="text-sm md:text-lg font-bold text-primary whitespace-nowrap">
          {symbol}
          {subtotal.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};
