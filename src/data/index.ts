import { CurrencyConfig } from "@/types";

export const GENERIC_DENOMINATIONS = [
  {
    value: 1000,
    label: "1000",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 500,
    label: "500",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 200,
    label: "200",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 100,
    label: "100",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 50,
    label: "50",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 20,
    label: "20",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 10,
    label: "10",
    type: "note",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 5,
    label: "5",
    type: "coin",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 2,
    label: "2",
    type: "coin",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    value: 1,
    label: "1",
    type: "coin",
    color: "bg-secondary text-secondary-foreground",
  },
];

export const CURRENCIES: CurrencyConfig[] = [
  {
    code: "INR",
    name: "India",
    symbol: "₹",
    denominations: [
      {
        value: 2000,
        label: "2000",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 500,
        label: "500",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 200,
        label: "200",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 100,
        label: "100",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 50,
        label: "50",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 20,
        label: "20",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 10,
        label: "10",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 20,
        label: "20 Coin",
        type: "coin",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 10,
        label: "10 Coin",
        type: "coin",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 5,
        label: "5 Coin",
        type: "coin",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 2,
        label: "2 Coin",
        type: "coin",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 1,
        label: "1 Coin",
        type: "coin",
        color: "bg-secondary text-secondary-foreground",
      },
    ],
  },
  {
    code: "USD",
    name: "United States",
    symbol: "$",
    denominations: [
      {
        value: 100,
        label: "100",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 50,
        label: "50",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 20,
        label: "20",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 10,
        label: "10",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 5,
        label: "5",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 2,
        label: "2",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
      {
        value: 1,
        label: "1",
        type: "note",
        color: "bg-secondary text-secondary-foreground",
      },
    ],
  },
];
