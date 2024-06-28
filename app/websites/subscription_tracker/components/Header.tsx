"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { MdBackup, MdDeleteForever } from "react-icons/md";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import { currencies, locales } from "../locales";
import { EditSubscriptionDialog } from "./SubscriptionDialog";
import ImportDialog from "./ImportDialog";

export default function Header() {
  const {
    formatToCurrencyString,
    calculateTotalPerMonth,
    calculateTotalPerYear,
    setLocale,
    locale: currentLocale,
    setCurrency,
    currency: currentCurrency,
    backupSubscriptions,
    deleteAllSubscriptions,
  } = useSubscriptionTrackerContext();

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-b border-muted p-4 lg:flex-row">
      <h1 className="font-bold uppercase">Subscription Tracker</h1>
      <div className="flex gap-4">
        <span>
          {formatToCurrencyString(calculateTotalPerMonth())} per month /{" "}
          {formatToCurrencyString(calculateTotalPerYear())} per year
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="flex flex-row gap-4">
          <Select onValueChange={(e: any) => setLocale(e)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue
                placeholder={currentLocale}
                defaultValue={currentLocale}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locale</SelectLabel>
                {locales.map((locale, index) => (
                  <SelectItem key={index} value={locale}>
                    {locale}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={(e: any) => setCurrency(e)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue
                placeholder={currentCurrency}
                defaultValue={currentCurrency}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locale</SelectLabel>
                {currencies.map((currency, index) => (
                  <SelectItem key={index} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-4">
          <Button
            variant="outline"
            onClick={backupSubscriptions}
            className="flex flex-row items-center gap-2"
          >
            <MdBackup />
            Backup
          </Button>
          <ImportDialog />
          <Button
            variant="outline"
            onClick={deleteAllSubscriptions}
            className="flex flex-row items-center gap-2"
          >
            <MdDeleteForever />
            Delete All
          </Button>
          <EditSubscriptionDialog
            mode="add"
            buttonLabel="Add New"
            buttonIcon={Plus}
          />
        </div>
      </div>
    </div>
  );
}
