"use client";

import { FaFileImport } from "react-icons/fa";
import { MdBackup, MdDeleteForever } from "react-icons/md";
import { locales, currencies } from "../locales";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

export default function Header() {
  const {
    formatToCurrencyString,
    calculateTotalPerMonth,
    calculateTotalPerYear,
    setLocale,
    locale,
    setCurrency,
    currency,
    backupSubscriptions,
    startImport,
    deleteAllSubscriptions,
  } = useSubscriptionTrackerContext();
  return (
    <div className="border-subscription-tracker-background-800 flex flex-col items-center justify-between gap-4 border-b p-4 lg:flex-row">
      <h1 className="font-bold uppercase">Subscription Tracker</h1>
      <div className="flex gap-4">
        <span>
          {formatToCurrencyString(calculateTotalPerMonth())} per month /{" "}
          {formatToCurrencyString(calculateTotalPerYear())} per year
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="flex flex-row gap-4">
          <select
            name="type"
            id="locale"
            onChange={(e: any) => setLocale(e.target.value)}
            value={locale}
            className="bg-subscription-tracker-background-800 hover:bg-subscription-tracker-background-300 hover:text-subscription-tracker-text-800 rounded-md p-2 text-xs transition-colors"
          >
            {locales.map((locale, index) => (
              <option
                key={index}
                value={locale}
                className="bg-subscription-tracker-background-500"
              >
                {locale}
              </option>
            ))}
          </select>
          <select
            name="type"
            id="currency"
            onChange={(e: any) => setCurrency(e.target.value)}
            value={currency}
            className="bg-subscription-tracker-background-800 hover:bg-subscription-tracker-background-300 hover:text-subscription-tracker-text-800 rounded-md p-2 text-xs transition-colors"
          >
            {currencies.map((currency, index) => (
              <option
                key={index}
                value={currency}
                className="bg-subscription-tracker-background-500"
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={backupSubscriptions}
            className="bg-subscription-tracker-background-800 hover:bg-subscription-tracker-background-300 hover:text-subscription-tracker-text-800 active:bg-subscription-tracker-background-200 flex flex-row items-center gap-2 rounded-md px-4 py-2 text-xs transition-colors disabled:bg-red-900 disabled:text-red-600"
          >
            <MdBackup />
            Backup
          </button>
          <button
            onClick={startImport}
            className="bg-subscription-tracker-background-800 hover:bg-subscription-tracker-background-300 hover:text-subscription-tracker-text-800 active:bg-subscription-tracker-background-200 flex flex-row items-center gap-2 rounded-md px-4 py-2 text-xs transition-colors disabled:bg-red-900 disabled:text-red-600"
          >
            <FaFileImport />
            Import
          </button>
          <button
            onClick={deleteAllSubscriptions}
            className="bg-subscription-tracker-background-800 hover:bg-subscription-tracker-background-300 hover:text-subscription-tracker-text-800 active:bg-subscription-tracker-background-200 flex flex-row items-center gap-2 rounded-md px-4 py-2 text-xs transition-colors disabled:bg-red-900 disabled:text-red-600"
          >
            <MdDeleteForever />
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
}
