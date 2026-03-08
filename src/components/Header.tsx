import { Banknote, Moon, Sun } from "lucide-react";
import React from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between p-6 mb-8 glass-card rounded-2xl">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-primary rounded-xl shadow-lg shadow-primary/30">
          <Banknote className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-display tracking-tight text-foreground">
            CashCounter <span className="text-primary">Pro</span>
          </h1>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
            Precision Currency Counter
          </p>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:scale-110 transition-transform active:scale-95"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
};
