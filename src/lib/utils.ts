import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numberToWords = (
  num: number,
  currencyCode: string = "INR",
): string => {
  if (num === 0) return "Zero";

  const currencyNames: Record<string, string> = {
    INR: "Rupees",
    USD: "Dollars",
    EUR: "Euros",
    GBP: "Pounds",
    JPY: "Yen",
    AUD: "Dollars",
    CAD: "Dollars",
    CHF: "Francs",
    CNY: "Yuan",
    SEK: "Kronor",
    NZD: "Dollars",
    MXN: "Pesos",
    SGD: "Dollars",
    HKD: "Dollars",
    NOK: "Kroner",
    KRW: "Won",
    TRY: "Lira",
    RUB: "Rubles",
    BRL: "Reais",
    ZAR: "Rand",
    // Add more as needed
  };

  const currencyName = currencyNames[currencyCode] || "Units";

  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  // const format = (n: number): string => {
  //   if (n < 20) return a[n];
  //   if (n < 100)
  //     return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
  //   if (n < 1000)
  //     return (
  //       a[Math.floor(n / 100)] +
  //       " Hundred" +
  //       (n % 100 !== 0 ? " and " + format(n % 100) : "")
  //     );
  //   return "";
  // };

  const format = (n: number): string => {
    if (n < 20) return a[n];

    if (n < 100) {
      const tenWord = b[Math.floor(n / 10)];
      const ones = n % 10;

      // Positive condition – clearer
      if (ones > 0) {
        return tenWord + " " + a[ones];
      }
      return tenWord;
    }

    if (n < 1000) {
      const hundredWord = a[Math.floor(n / 100)] + " Hundred";
      const remainder = n % 100;

      // Same idea here – positive is more readable
      if (remainder > 0) {
        return hundredWord + " and " + format(remainder);
      }
      return hundredWord;
    }

    return ""; // or throw new Error("Number too large") etc.
  };

  const makeGroup = (n: number, label: string): string => {
    if (n === 0) return "";
    return format(n) + " " + label + " ";
  };

  let res = "";
  // Indian numbering system: Crores, Lakhs, Thousands, Hundreds
  const crore = Math.floor(num / 10000000);
  const lakh = Math.floor((num % 10000000) / 100000);
  const thousand = Math.floor((num % 100000) / 1000);
  const remaining = num % 1000;

  res += makeGroup(crore, "Crore");
  res += makeGroup(lakh, "Lakh");
  res += makeGroup(thousand, "Thousand");
  res += format(remaining);

  return res.trim() + " " + currencyName + " Only";
};
