"use client";
import { CURRENCIES, GENERIC_DENOMINATIONS } from "@/data";
import { CountState, CurrencyConfig } from "@/types";
import { countries, currencies } from "country-data-list";
import { useMemo, useState } from "react";

export function useCashCounter() {
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

  const handleCountryChange = (code: string) => {
    setCountryAlpha2(code);
    setCounts({});
  };

  return {
    countryAlpha2,
    counts,
    selectedCurrency,
    total,
    handleCountChange,
    handleReset,
    handleCountryChange,
  };
}
