"use client";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
import { Command } from "cmdk";
import { countries } from "country-data-list";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import React, { useState } from "react";
import { CircleFlag } from "react-circle-flags";
import { Button } from "./ui/button";

interface CountrySelectorProps {
  selectedCode: string;
  onSelect: (code: string) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCode,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  // Filter countries that have a currency
  const countryList = countries.all.filter(
    (c) => c.currencies && c.currencies.length > 0 && c.alpha2,
  );
  const selectedCountry = countryList.find((c) => c.alpha2 === selectedCode);

  return (
    <div className="mb-6">
      <label
        htmlFor="country-selector"
        className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest"
      >
        Select Country & Currency
      </label>

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            id="country-selector"
            variant="outline"
            className="w-full justify-between"
            role="combobox"
            size="lg"
            aria-expanded={open}
          >
            <div className="flex items-center gap-3 truncate">
              <div className="shrink-0 size-5 overflow-hidden rounded-full shadow-sm">
                <CircleFlag countryCode={selectedCode.toLowerCase()} />
              </div>
              <span className="truncate">
                {selectedCountry
                  ? `${selectedCountry.name} (${selectedCountry.currencies[0]})`
                  : "Select country..."}
              </span>
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
          {/* <button
            role="combobox"
            aria-expanded={open}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all text-sm font-semibold text-foreground outline-none focus:ring-2 focus:ring-ring"
          ></button> */}
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="z-50 w-[--radix-popover-trigger-width] min-w-50 overflow-hidden rounded-xl border border-border bg-popover shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            align="start"
            sideOffset={4}
          >
            <Command className="flex h-full w-full flex-col overflow-hidden">
              <div className="flex items-center border-b border-border px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <Command.Input
                  placeholder="Search country..."
                  className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Command.List className="max-h-75 overflow-y-auto overflow-x-hidden p-1">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No country found.
                </Command.Empty>
                <Command.Group>
                  {countryList.map((country) => (
                    <Command.Item
                      key={country.alpha2}
                      value={country.name}
                      onSelect={() => {
                        onSelect(country.alpha2);
                        setOpen(false);
                      }}
                      className={cn(
                        "relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground transition-colors",
                        selectedCode === country.alpha2 &&
                          "bg-accent text-accent-foreground",
                      )}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="shrink-0 h-5 w-5 overflow-hidden rounded-full shadow-sm">
                          <CircleFlag
                            countryCode={country.alpha2.toLowerCase()}
                          />
                        </div>
                        <span className="truncate font-medium">
                          {country.name}
                        </span>
                        <span className="ml-auto text-[10px] font-bold text-muted-foreground uppercase">
                          {country.currencies[0]}
                        </span>
                      </div>
                      <Check
                        className={cn(
                          "ml-2 h-4 w-4 shrink-0",
                          selectedCode === country.alpha2
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
