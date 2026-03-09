"use client";

import { Banknote, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

      <Button
        variant="outline"
        onClick={toggleTheme}
        className="rounded-full hover:scale-110 transition-transform active:scale-95"
        size="icon"
      >
        {mounted && theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </Button>
    </header>
  );
};
