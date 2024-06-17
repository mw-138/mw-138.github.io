"use client";

import React from "react";
import { FaFileImport } from "react-icons/fa";
import { MdBackup, MdDeleteForever } from "react-icons/md";
import { locales, currencies } from "../locales";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

export default function Header() {
  const context = useSubscriptionTrackerContext();
  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-slate-700 p-4 text-white lg:flex-row">
      <h1 className="font-bold uppercase text-slate-200">
        Subscription Tracker
      </h1>
      <div className="flex gap-4 text-slate-200">
        <span>
          {context.formatToCurrencyString(context.calculateTotalPerMonth())} per
          month /{" "}
          {context.formatToCurrencyString(context.calculateTotalPerYear())} per
          year
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="flex flex-row gap-4">
          <select
            name="type"
            id="locale"
            defaultValue="en-UK"
            onChange={(e: any) => context.setLocale(e.target.value)}
            value={context.locale}
            className="rounded-md bg-slate-500 p-2 text-xs text-slate-100 hover:bg-slate-300 hover:text-slate-800"
          >
            {locales.map((locale, index) => (
              <option
                key={index}
                value={locale}
                className="bg-slate-500 text-slate-100"
              >
                {locale}
              </option>
            ))}
          </select>
          <select
            name="type"
            id="currency"
            defaultValue="GBP"
            onChange={(e: any) => context.setCurrency(e.target.value)}
            value={context.currency}
            className="rounded-md bg-slate-500 p-2 text-xs text-slate-100 hover:bg-slate-300 hover:text-slate-800"
          >
            {currencies.map((currency, index) => (
              <option
                key={index}
                value={currency}
                className="bg-slate-500 text-slate-100"
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={context.backupSubscriptions}
            className="flex flex-row items-center gap-2 rounded-md bg-slate-500 px-4 py-2 text-xs text-slate-100 transition-colors hover:bg-slate-300 hover:text-slate-800 active:bg-slate-200 disabled:bg-red-900 disabled:text-red-600"
          >
            <MdBackup />
            Backup
          </button>
          <button
            onClick={context.startImport}
            className="flex flex-row items-center gap-2 rounded-md bg-slate-500 px-4 py-2 text-xs text-slate-100 transition-colors hover:bg-slate-300 hover:text-slate-800 active:bg-slate-200 disabled:bg-red-900 disabled:text-red-600"
          >
            <FaFileImport />
            Import
          </button>
          <button
            onClick={context.deleteAllSubscriptions}
            className="flex flex-row items-center gap-2 rounded-md bg-slate-500 px-4 py-2 text-xs text-slate-100 transition-colors hover:bg-slate-300 hover:text-slate-800 active:bg-slate-200 disabled:bg-red-900 disabled:text-red-600"
          >
            <MdDeleteForever />
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
}
