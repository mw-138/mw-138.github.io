"use client";

import Footer from "@/app/components/Footer";
import WebsiteNavigation from "@/app/components/WebsiteNavigation";
import React, { FormEvent, useEffect, useState } from "react";
import useLocalStorageState from "../../../utils/useLocalStorageState";
import {
  formatCurrency,
  formatDateToYyyyMmDd,
  generateUUID,
  isIndexOutOfRange,
} from "@/utils/helperFunctions";

type SubscriptionType = "monthly" | "yearly";

interface Subscription {
  id: string;
  label: string;
  price: number;
  type: SubscriptionType;
  nextPaymentDate: string;
  isPaused: boolean;
}

interface SubscriptionFormData {
  label: string;
  price: number;
  type: SubscriptionType;
  nextPaymentDate: string;
  isPaused: boolean;
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

export default function page() {
  const [subscriptions, setSubscriptions] = useLocalStorageState<
    Subscription[]
  >("subscriptions_tracker", []);
  const [selectedSubscriptionIndex, setSelectedSubscriptionIndex] =
    useState<number>(-1);
  const [formData, setFormData] = useState<SubscriptionFormData>({
    label: "",
    price: 0,
    type: "monthly",
    nextPaymentDate: formatDateToYyyyMmDd(new Date()),
    isPaused: false,
  });
  const [editingSubscription, setEditingSubscription] =
    useState<boolean>(false);
  const sortedSubscriptions = subscriptions.sort((a, b) => {
    if (a.isPaused !== b.isPaused) {
      return a.isPaused ? 1 : -1;
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
        nextPaymentDate: date,
        isPaused: false,
      },
    ]);
  }

  function calculateTotalPerMonth(): number {
    const monthlySubscriptions = subscriptions.filter(
      (subscription) =>
        subscription.type === "monthly" && !subscription.isPaused,
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
      (subscription) =>
        subscription.type === "yearly" && !subscription.isPaused,
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
        nextPaymentDate: formData.nextPaymentDate,
        isPaused: formData.isPaused,
      };
      setSubscriptions(subscriptionsCopy);
    } else {
      addSubscription(
        formData.label,
        formData.price,
        formData.type,
        formData.nextPaymentDate,
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
      label: subscription.label,
      price: subscription.price,
      type: subscription.type,
      nextPaymentDate: subscription.nextPaymentDate,
      isPaused: subscription.isPaused,
    });
  }

  function cancelEdit(): void {
    setEditingSubscription(false);
    setFormData({
      label: "",
      price: 0,
      type: "monthly",
      nextPaymentDate: formatDateToYyyyMmDd(new Date()),
      isPaused: false,
    });
  }

  function deleteSubscription(index: number): void {
    if (isIndexOutOfRange(subscriptions, index)) return;
    const newArray = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(newArray);
    cancelEdit();
  }

  function getSubscriptionDueDate(subscription: Subscription): number {
    const today = new Date();
    const nextPaymentDate = new Date(subscription.nextPaymentDate);
    while (nextPaymentDate <= today) {
      nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
    }
    const timeDiff = nextPaymentDate.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return days;
  }

  function updateSubscriptionProperties(): void {
    const subs = [...subscriptions];
    subs.forEach((subscription) => {
      if (subscription.isPaused === undefined) {
        subscription.isPaused = false;
      }
    });
    setSubscriptions(subs);
  }

  const [locale, setLocale] = useLocalStorageState<string>(
    "subscription_tracker_locale",
    "en-UK",
  );
  const [currency, setCurrency] = useLocalStorageState<string>(
    "subscription_tracker_currency",
    "GBP",
  );

  function formatToCurrencyString(num: number): string {
    return formatCurrency(num, locale, currency);
  }

  return (
    <>
      <main className="flex h-screen select-none flex-col gap-4 bg-[url('https://static.vecteezy.com/system/resources/previews/019/135/816/original/blue-dark-gradient-blur-abstract-background-free-vector.jpg')] bg-cover bg-center p-4">
        <div className="flex h-16 items-center justify-between rounded-md bg-white/10 p-4 text-white shadow-lg ring-1 ring-white/5 backdrop-blur-md">
          <h1 className="font-bold uppercase">Subscription Tracker</h1>
          {/* <button onClick={updateSubscriptionProperties}>Update JSON</button> */}
          <div className="flex gap-4">
            <span>
              {formatToCurrencyString(calculateTotalPerMonth())} per month /{" "}
              {formatToCurrencyString(calculateTotalPerYear())} per year
            </span>
          </div>
          <div className="flex flex-row gap-4">
            <select
              name="type"
              id="locale"
              defaultValue="en-UK"
              onChange={(e: any) => setLocale(e.target.value)}
              value={locale}
              className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
            >
              {locales.map((locale, index) => (
                <option
                  key={index}
                  value={locale}
                  className="bg-zinc-500 text-white"
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
              className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
            >
              {currencies.map((currency, index) => (
                <option
                  key={index}
                  value={currency}
                  className="bg-zinc-500 text-white"
                >
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-1 flex-row gap-4 overflow-hidden">
          <div className="minimal-scrollbar flex w-96 flex-col gap-4 overflow-auto rounded-md bg-white/10 p-4 shadow-lg ring-1 ring-white/5 backdrop-blur-md">
            {sortedSubscriptions.map((subscription, index) => (
              <button
                key={index}
                className="flex flex-col gap-2 rounded-md bg-white/0 p-2 text-white shadow-lg ring-1 ring-white/5 backdrop-blur-md transition-colors hover:bg-white/20"
                onClick={() => editSubscription(index)}
              >
                <div className="flex w-full flex-row items-center justify-between">
                  <h1 className="font-bold">{subscription.label}</h1>
                  {subscriptions[index].isPaused ? (
                    <h1 className="font-bold capitalize text-red-500">
                      Paused
                    </h1>
                  ) : (
                    <h1 className="font-bold text-white/60">
                      Due in {getSubscriptionDueDate(subscriptions[index])}{" "}
                      {getSubscriptionDueDate(subscriptions[index]) <= 1
                        ? "day"
                        : "days"}
                    </h1>
                  )}
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
          <div className="flex-1 rounded-md bg-white/10 p-4 text-white shadow-lg ring-1 ring-white/5 backdrop-blur-md">
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
                <label htmlFor="nextPaymentDate">Next Payment Date</label>
                <input
                  type="date"
                  name="nextPaymentDate"
                  placeholder="Enter next payment date"
                  onChange={handleFormChange}
                  value={formData.nextPaymentDate}
                  className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
                />
              </div>
              <div className="flex flex-row gap-2">
                <label htmlFor="isPaused">Is Paused?</label>
                <input
                  type="checkbox"
                  name="isPaused"
                  onChange={handleFormChange}
                  checked={formData.isPaused}
                  className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
                />
              </div>
              {editingSubscription ? (
                <div className="flex flex-row gap-4">
                  <button
                    className="flex-1 rounded-md bg-white p-2 text-black shadow-lg ring-1 ring-white/5 transition-colors hover:bg-green-500 hover:text-white disabled:bg-red-500/50 disabled:text-white"
                    onClick={handleFormSubmit}
                  >
                    Save Changes
                  </button>
                  <button
                    className="flex-1 rounded-md bg-white p-2 text-black shadow-lg ring-1 ring-white/5 transition-colors hover:bg-red-500 hover:text-white disabled:bg-red-500/50 disabled:text-white"
                    onClick={() =>
                      deleteSubscription(selectedSubscriptionIndex)
                    }
                  >
                    Delete
                  </button>
                  <button
                    className="flex-1 rounded-md bg-white p-2 text-black shadow-lg ring-1 ring-white/5 transition-colors hover:bg-zinc-500 hover:text-white disabled:bg-red-500/50 disabled:text-white"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="rounded-md bg-white p-2 text-black shadow-lg ring-1 ring-white/5 disabled:bg-red-500/50 disabled:text-red-300/50"
                  onClick={handleFormSubmit}
                  disabled={formData.label === ""}
                >
                  Add Subscription
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
      {/* <WebsiteNavigation />
      <Footer /> */}
    </>
  );
}
