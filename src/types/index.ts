export interface Denomination {
  value: number;
  label: string;
  type: "note" | "coin";
  color: string;
}

export interface CurrencyConfig {
  code: string;
  name: string;
  symbol: string;
  denominations: Denomination[];
}

export interface CountState {
  [key: number]: number;
}
