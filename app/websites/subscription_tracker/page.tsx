"use client";

import Footer from "@/app/components/Footer";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import React, { FormEvent, useState } from "react";
import useLocalStorageState from "../../../utils/useLocalStorageState";
import {
  compressJSON,
  copyToClipboard,
  decompressJSON,
  formatCurrency,
  formatDateToYyyyMmDd,
  generateUUID,
  isIndexOutOfRange,
} from "@/utils/helperFunctions";
import {
  MdAdd,
  MdBackup,
  MdCancel,
  MdClose,
  MdDelete,
  MdDeleteForever,
  MdFileUpload,
  MdSave,
} from "react-icons/md";
import { FaFileImport } from "react-icons/fa";

type SubscriptionType = "monthly" | "yearly";

interface Subscription {
  id: string;
  label: string;
  price: number;
  type: SubscriptionType;
  firstPaymentDate: string;
}

const locales: string[] = [
  "en-US", // English (United States)
  "en-GB", // English (United Kingdom)
  "en-CA", // English (Canada)
  "en-AU", // English (Australia)
  "fr-FR", // French (France)
  "fr-CA", // French (Canada)
  "es-ES", // Spanish (Spain)
  "es-MX", // Spanish (Mexico)
  "de-DE", // German (Germany)
  "it-IT", // Italian (Italy)
  "pt-BR", // Portuguese (Brazil)
  "pt-PT", // Portuguese (Portugal)
  "nl-NL", // Dutch (Netherlands)
  "sv-SE", // Swedish (Sweden)
  "da-DK", // Danish (Denmark)
  "fi-FI", // Finnish (Finland)
  "nb-NO", // Norwegian Bokmål (Norway)
  "tr-TR", // Turkish (Turkey)
  "ru-RU", // Russian (Russia)
  "zh-CN", // Chinese (Simplified, China)
  "ja-JP", // Japanese (Japan)
  "ko-KR", // Korean (South Korea)
  "ar-SA", // Arabic (Saudi Arabia)
];

const currencies: string[] = [
  "USD", // US Dollar
  "GBP", // British Pound Sterling
  "CAD", // Canadian Dollar
  "AUD", // Australian Dollar
  "EUR", // Euro
  "MXN", // Mexican Peso
  "SEK", // Swedish Krona
  "DKK", // Danish Krone
  "NOK", // Norwegian Krone
  "TRY", // Turkish Lira
  "RUB", // Russian Ruble
  "CNY", // Chinese Yuan
  "JPY", // Japanese Yen
  "KRW", // South Korean Won
  "SAR", // Saudi Riyal
  "BRL", // Brazilian Real
];

export default function Page() {
  const [subscriptions, setSubscriptions] = useLocalStorageState<
    Subscription[]
  >("subscriptions_tracker", []);
  const [selectedSubscriptionIndex, setSelectedSubscriptionIndex] =
    useState<number>(-1);
  const [formData, setFormData] = useState<Subscription>({
    id: "",
    label: "",
    price: 0,
    type: "monthly",
    firstPaymentDate: formatDateToYyyyMmDd(new Date()),
  });
  const [editingSubscription, setEditingSubscription] =
    useState<boolean>(false);
  const [locale, setLocale] = useLocalStorageState<string>(
    "subscription_tracker_locale",
    "en-UK",
  );
  const [currency, setCurrency] = useLocalStorageState<string>(
    "subscription_tracker_currency",
    "GBP",
  );
  const [isImporting, setIsImporting] = useState<boolean>(false);
  const [importCode, setImportCode] = useState<string>("");
  const sortedSubscriptions = subscriptions.sort((a, b) => {
    if (isSubscriptionDueToday(a) !== isSubscriptionDueToday(b)) {
      return isSubscriptionDueToday(b) ? 1 : -1;
    }
    return getSubscriptionDueDate(a) - getSubscriptionDueDate(b);
  });

  function addSubscription(
    label: string,
    price: number,
    type: SubscriptionType,
    date: string,
  ): void {
    setSubscriptions((prev) => [
      ...prev,
      {
        id: generateUUID(),
        label: label,
        price: price,
        type: type,
        firstPaymentDate: date,
        isPaused: false,
      },
    ]);
  }

  function calculateTotalPerMonth(): number {
    const monthlySubscriptions = subscriptions.filter(
      (subscription) => subscription.type === "monthly",
    );
    const total = monthlySubscriptions.reduce(
      (sum, subscription) => sum + Number(subscription.price),
      0,
    );
    return total;
  }

  function calculateTotalPerYear(): number {
    const monthlyTotal = calculateTotalPerMonth() * 12;
    const yearlySubscriptions = subscriptions.filter(
      (subscription) => subscription.type === "yearly",
    );
    const total = yearlySubscriptions.reduce(
      (sum, subscription) => sum + Number(subscription.price),
      0,
    );
    return total + monthlyTotal;
  }

  function handleFormSubmit(e: FormEvent): void {
    e.preventDefault();
    if (editingSubscription) {
      const subscriptionsCopy = [...subscriptions];
      subscriptionsCopy[selectedSubscriptionIndex] = {
        ...subscriptionsCopy[selectedSubscriptionIndex],
        label: formData.label,
        price: formData.price,
        type: formData.type,
        firstPaymentDate: formData.firstPaymentDate,
      };
      setSubscriptions(subscriptionsCopy);
    } else {
      addSubscription(
        formData.label,
        formData.price,
        formData.type,
        formData.firstPaymentDate,
      );
    }
    cancelEdit();
  }

  function handleFormChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void {
    const { name, type, value } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function editSubscription(index: number): void {
    if (isIndexOutOfRange(subscriptions, index)) return;
    const subscription = subscriptions[index];
    setSelectedSubscriptionIndex(index);
    setEditingSubscription(true);
    setFormData({
      id: subscription.id,
      label: subscription.label,
      price: subscription.price,
      type: subscription.type,
      firstPaymentDate: subscription.firstPaymentDate,
    });
  }

  function cancelEdit(): void {
    setEditingSubscription(false);
    setFormData({
      id: "",
      label: "",
      price: 0,
      type: "monthly",
      firstPaymentDate: formatDateToYyyyMmDd(new Date()),
    });
  }

  function deleteSubscription(index: number): void {
    if (isIndexOutOfRange(subscriptions, index)) return;
    const newArray = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(newArray);
    cancelEdit();
  }

  function getSubscriptionDueDate(subscription: Subscription): number {
    if (subscription === undefined) return 0;

    const today = new Date();

    if (subscription.firstPaymentDate === undefined) return 0;

    const nextPaymentDate = new Date(subscription.firstPaymentDate);
    while (nextPaymentDate <= today) {
      nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
    }
    const timeDiff = nextPaymentDate.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return days;
  }

  function isSubscriptionDueToday(subscription: Subscription): boolean {
    if (subscription === undefined) return false;

    const today = new Date();

    if (subscription.firstPaymentDate === undefined) return false;

    const paymentDate = new Date(subscription.firstPaymentDate);
    return (
      today.getDate() === paymentDate.getDate() &&
      today.getMonth() === paymentDate.getMonth() &&
      today.getFullYear() === paymentDate.getFullYear()
    );
  }

  function getSubscriptionTotalSpend(subscription: Subscription): number {
    const today = new Date();
    const nextPaymentDate = new Date(subscription.firstPaymentDate);
    let totalSpend = 0;
    while (nextPaymentDate <= today) {
      nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
      totalSpend += Number(subscription.price);
    }
    return totalSpend;
  }

  function formatToCurrencyString(num: number): string {
    return formatCurrency(num, locale, currency);
  }

  async function backupSubscriptions(): Promise<void> {
    const compressedData = compressJSON(subscriptions);
    await copyToClipboard(compressedData);
  }

  function importSubscriptions(): void {
    if (importCode === "") return;
    const data = decompressJSON(importCode) as Subscription[];
    setSubscriptions(data);
    closeImport();
  }

  function closeImport(): void {
    setIsImporting(false);
    setImportCode("");
  }

  return (
    <>
      <main className="flex select-none flex-col bg-slate-900 lg:h-screen">
        <div className="flex flex-col items-center justify-between gap-4 bg-slate-700 p-4 text-white lg:flex-row">
          <h1 className="font-bold uppercase text-slate-200">
            Subscription Tracker
          </h1>
          <div className="flex gap-4 text-slate-200">
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
                defaultValue="en-UK"
                onChange={(e: any) => setLocale(e.target.value)}
                value={locale}
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
                onChange={(e: any) => setCurrency(e.target.value)}
                value={currency}
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
                onClick={backupSubscriptions}
                className="flex flex-row items-center gap-2 rounded-md bg-slate-500 px-4 py-2 text-xs text-slate-100 transition-colors hover:bg-slate-300 hover:text-slate-800 active:bg-slate-200 disabled:bg-red-900 disabled:text-red-600"
              >
                <MdBackup />
                Backup
              </button>
              <button
                onClick={() => setIsImporting(true)}
                className="flex flex-row items-center gap-2 rounded-md bg-slate-500 px-4 py-2 text-xs text-slate-100 transition-colors hover:bg-slate-300 hover:text-slate-800 active:bg-slate-200 disabled:bg-red-900 disabled:text-red-600"
              >
                <FaFileImport />
                Import
              </button>
              <button
                onClick={() => setSubscriptions([])}
                className="flex flex-row items-center gap-2 rounded-md bg-slate-500 px-4 py-2 text-xs text-slate-100 transition-colors hover:bg-slate-300 hover:text-slate-800 active:bg-slate-200 disabled:bg-red-900 disabled:text-red-600"
              >
                <MdDeleteForever />
                Delete All
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col-reverse overflow-hidden lg:flex-row">
          <div className="minimal-scrollbar flex h-96 w-auto flex-col gap-4 overflow-auto bg-slate-800 p-4 backdrop-blur-md lg:h-auto lg:w-96">
            {sortedSubscriptions.map((subscription, index) => (
              <button
                key={index}
                className="flex flex-col gap-2 rounded-md bg-slate-700 p-4 text-white backdrop-blur-md transition-colors hover:bg-slate-900 active:bg-slate-600"
                onClick={() => editSubscription(index)}
              >
                <div className="flex w-full flex-row items-center justify-between">
                  <h1 className="font-bold">{subscription.label}</h1>
                  <h1 className="font-bold text-white/60">
                    {isSubscriptionDueToday(subscriptions[index]) ? (
                      <p className="capitalize">Due today</p>
                    ) : (
                      <p className="capitalize">
                        Due in {getSubscriptionDueDate(subscriptions[index])}{" "}
                        {getSubscriptionDueDate(subscriptions[index]) <= 1
                          ? "day"
                          : "days"}
                      </p>
                    )}
                  </h1>
                </div>
                <div className="flex w-full flex-row items-center justify-between">
                  <h2 className="font-semibold text-white">
                    {formatToCurrencyString(subscription.price)}
                  </h2>
                  <h2 className="font-semibold capitalize text-white/30">
                    {subscription.type}
                  </h2>
                </div>
              </button>
            ))}
          </div>
          <div className="flex-1 p-4 text-white backdrop-blur-md">
            <h1 className="pb-2 font-bold uppercase">
              {editingSubscription ? "Edit" : "Add"} Subscription
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="label">Label</label>
                <input
                  type="text"
                  name="label"
                  placeholder="Enter label"
                  onChange={handleFormChange}
                  value={formData.label}
                  className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  onChange={handleFormChange}
                  value={formData.price}
                  className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  id="type"
                  defaultValue="monthly"
                  onChange={handleFormChange}
                  value={formData.type}
                  className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
                >
                  <option value="monthly" className="bg-zinc-500 text-white">
                    Monthly
                  </option>
                  <option value="yearly" className="bg-zinc-500 text-white">
                    Yearly
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="firstPaymentDate">First Payment Date</label>
                <input
                  type="date"
                  name="firstPaymentDate"
                  placeholder="Enter first payment date"
                  onChange={handleFormChange}
                  value={formData.firstPaymentDate}
                  className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
                />
              </div>
              {editingSubscription ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-4">
                    <button
                      className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 text-slate-700 transition-colors hover:bg-green-500 hover:text-white active:bg-green-600 disabled:bg-red-900 disabled:text-red-600"
                      onClick={handleFormSubmit}
                    >
                      <MdSave />
                      Save
                    </button>
                    <button
                      className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 text-slate-700 transition-colors hover:bg-red-500 hover:text-white active:bg-red-600 disabled:bg-red-900 disabled:text-red-600"
                      onClick={() =>
                        deleteSubscription(selectedSubscriptionIndex)
                      }
                    >
                      <MdDelete />
                      Delete
                    </button>
                    <button
                      className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 text-slate-700 transition-colors hover:bg-slate-500 hover:text-white active:bg-slate-600 disabled:bg-red-900 disabled:text-red-600"
                      onClick={cancelEdit}
                    >
                      <MdCancel />
                      Cancel
                    </button>
                  </div>
                  <div className="rounded-md bg-slate-700 p-2">
                    <h1 className="font-bold uppercase">Stats</h1>
                    <div
                      className="tooltip cursor-help"
                      data-tip="Calculation uses current subscription cost. Fluctuating costs or manually changing costs will show an inaccurate total spend."
                    >
                      <p>
                        Total Spend:{" "}
                        {formatCurrency(
                          getSubscriptionTotalSpend(
                            subscriptions[selectedSubscriptionIndex],
                          ),
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 text-slate-700 transition-colors hover:bg-slate-500 hover:text-white active:bg-slate-600 disabled:bg-red-900 disabled:text-red-600"
                  onClick={handleFormSubmit}
                  disabled={formData.label === ""}
                >
                  <MdAdd />
                  Add Subscription
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
      {isImporting && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900/50 backdrop-blur-md">
          <div className="relative flex flex-col gap-2 rounded-md bg-slate-800 p-4 text-slate-200">
            <h1 className="font-bold uppercase">Import Subscriptions</h1>
            <form
              className="flex flex-col gap-2"
              onSubmit={importSubscriptions}
            >
              <label htmlFor="import_code">Enter Share Code</label>
              <input
                type="text"
                name="import_code"
                placeholder="Enter Share Code"
                onChange={(e: any) => setImportCode(e.target.value)}
                value={importCode}
                className="rounded-md bg-slate-200 p-2 text-slate-800 placeholder-slate-800"
              />
              <button
                className="flex flex-row items-center justify-center gap-2 rounded-md bg-green-500 p-2 text-slate-100 transition-colors hover:bg-green-600 active:bg-green-400 disabled:bg-red-900 disabled:text-red-600"
                onClick={importSubscriptions}
                disabled={importCode === ""}
              >
                <MdFileUpload />
                Submit
              </button>
              <button
                className="flex flex-row items-center justify-center gap-2 rounded-md bg-slate-500 p-2 text-slate-100 transition-colors hover:bg-slate-600 active:bg-slate-400 disabled:bg-red-900 disabled:text-red-600"
                onClick={closeImport}
              >
                <MdClose />
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      <WebsiteNavigation />
      <Footer />
    </>
  );
}
