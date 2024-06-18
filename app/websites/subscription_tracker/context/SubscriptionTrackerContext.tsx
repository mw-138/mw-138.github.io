"use client";

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import Subscription from "../interfaces/Subscription";
import {
  compressJSON,
  copyToClipboard,
  decompressJSON,
  formatCurrency,
  formatDateToYyyyMmDd,
  generateUUID,
  getMonthDifference,
  getYearDifference,
  isIndexOutOfRange,
} from "@/utils/helperFunctions";
import SubscriptionType from "../types/SubscriptionType";
import useLocalStorageState from "@/utils/useLocalStorageState";

const DefaultFormData: Subscription = {
  id: "",
  label: "",
  price: 0,
  type: "monthly",
  firstPaymentDate: formatDateToYyyyMmDd(new Date()),
};

type Context = {
  subscriptions: Subscription[];
  setSubscriptions: Dispatch<SetStateAction<Subscription[]>>;
  selectedSubscriptionIndex: number;
  setSelectedSubscriptionIndex: Dispatch<SetStateAction<number>>;
  formData: Subscription;
  setFormData: Dispatch<SetStateAction<Subscription>>;
  editingSubscription: boolean;
  setEditingSubscription: Dispatch<SetStateAction<boolean>>;
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  isImporting: boolean;
  setIsImporting: Dispatch<SetStateAction<boolean>>;
  importCode: string;
  setImportCode: Dispatch<SetStateAction<string>>;
  sortedSubscriptions: Subscription[];
  addSubscription: (
    label: string,
    price: number,
    type: SubscriptionType,
    date: string,
  ) => void;
  calculateTotalPerMonth: () => number;
  calculateTotalPerYear: () => number;
  handleFormSubmit: (e: FormEvent) => void;
  handleFormChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  editSubscription: (index: number) => void;
  cancelEdit: () => void;
  deleteSubscription: (index: number) => void;
  getSubscriptionDueDate: (subscription: Subscription) => number;
  isSubscriptionDueToday: (subscription: Subscription) => boolean;
  getSubscriptionTotalSpend: (subscription: Subscription) => number;
  formatToCurrencyString: (num: number) => string;
  backupSubscriptions: () => Promise<void>;
  importSubscriptions: () => void;
  closeImport: () => void;
  startImport: () => void;
  deleteAllSubscriptions: () => void;
  toggleMultiselectedSubscription: (id: string) => void;
  deleteMultiselectedSubscriptions: () => void;
  multiselectedSubscriptionsIds: string[];
  setMultisectedSubscriptionsIds: Dispatch<SetStateAction<string[]>>;
  toggleAllSubscriptions: (toggled: boolean) => void;
  isMultiselecting: boolean;
  setIsMultiselecting: (value: boolean) => void;
};

const SubscriptionTrackerContext = createContext<Context>({
  subscriptions: [],
  setSubscriptions: () => {},
  selectedSubscriptionIndex: 0,
  setSelectedSubscriptionIndex: () => {},
  formData: DefaultFormData,
  setFormData: () => {},
  editingSubscription: false,
  setEditingSubscription: () => {},
  locale: "en-GB",
  setLocale: () => {},
  currency: "GBP",
  setCurrency: () => {},
  isImporting: false,
  setIsImporting: () => {},
  importCode: "",
  setImportCode: () => {},
  sortedSubscriptions: [],
  addSubscription: () => {},
  calculateTotalPerMonth: () => 0,
  calculateTotalPerYear: () => 0,
  handleFormSubmit: (e: FormEvent) => {},
  handleFormChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {},
  editSubscription: () => {},
  cancelEdit: () => {},
  deleteSubscription: () => {},
  getSubscriptionDueDate: () => 0,
  isSubscriptionDueToday: () => false,
  getSubscriptionTotalSpend: () => 0,
  formatToCurrencyString: () => "",
  backupSubscriptions: async () => {},
  importSubscriptions: () => {},
  closeImport: () => {},
  startImport: () => {},
  deleteAllSubscriptions: () => {},
  toggleMultiselectedSubscription: () => {},
  deleteMultiselectedSubscriptions: () => {},
  multiselectedSubscriptionsIds: [],
  setMultisectedSubscriptionsIds: () => {},
  toggleAllSubscriptions: () => {},
  isMultiselecting: false,
  setIsMultiselecting: () => {},
});

export function SubscriptionTrackerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [subscriptions, setSubscriptions] = useLocalStorageState<
    Subscription[]
  >("subscriptions_tracker", []);
  const [selectedSubscriptionIndex, setSelectedSubscriptionIndex] =
    useState<number>(-1);
  const [formData, setFormData] = useState<Subscription>(DefaultFormData);
  const [editingSubscription, setEditingSubscription] =
    useState<boolean>(false);
  const [locale, setLocale] = useLocalStorageState<string>(
    "subscription_tracker_locale",
    "en-GB",
  );
  const [currency, setCurrency] = useLocalStorageState<string>(
    "subscription_tracker_currency",
    "GBP",
  );
  const [isImporting, setIsImporting] = useState<boolean>(false);
  const [importCode, setImportCode] = useState<string>("");
  const [multiselectedSubscriptionsIds, setMultisectedSubscriptionsIds] =
    useState<string[]>([]);
  const [isMultiselecting, setIsMultiselecting] = useState<boolean>(false);

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
      },
    ]);
  }

  function calculateTotalPerMonth(): number {
    return subscriptions
      .filter((sub) => sub.type === "monthly")
      .reduce((total, sub) => total + Number(sub.price), 0);
  }

  function calculateTotalPerYear(): number {
    const monthlyTotal = calculateTotalPerMonth() * 12;
    return (
      monthlyTotal +
      subscriptions
        .filter((sub) => sub.type === "yearly")
        .reduce((total, sub) => total + Number(sub.price), 0)
    );
  }

  function handleFormSubmit(e: FormEvent): void {
    e.preventDefault();
    if (editingSubscription) {
      const updatedSubscriptions = subscriptions.map((sub, index) =>
        index === selectedSubscriptionIndex ? formData : sub,
      );
      setSubscriptions(updatedSubscriptions);
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
    setFormData(DefaultFormData);
  }

  function deleteSubscription(index: number): void {
    if (isIndexOutOfRange(subscriptions, index)) return;
    const updatedSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updatedSubscriptions);
    cancelEdit();
  }

  function getSubscriptionDueDate(subscription: Subscription): number {
    if (
      subscription === undefined ||
      subscription.firstPaymentDate === undefined ||
      subscription.type === undefined
    )
      return 0;
    const currentDate = new Date();
    const nextDate = new Date(subscription.firstPaymentDate);

    while (nextDate < currentDate) {
      if (subscription.type === "monthly") {
        nextDate.setMonth(nextDate.getMonth() + 1);
      } else if (subscription.type === "yearly") {
        nextDate.setFullYear(nextDate.getFullYear() + 1);
      }
    }

    const timeDiff = nextDate.getTime() - currentDate.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days;
  }

  function isSubscriptionDueToday(subscription: Subscription): boolean {
    if (
      subscription === undefined ||
      subscription.firstPaymentDate === undefined
    )
      return false;
    const nextPaymentDate = new Date(subscription.firstPaymentDate);
    const currentDate = new Date();
    return nextPaymentDate.toDateString() === currentDate.toDateString();
  }

  function getSubscriptionTotalSpend(subscription: Subscription): number {
    if (
      subscription === undefined ||
      subscription.firstPaymentDate === undefined ||
      subscription.type === undefined
    )
      return 0;
    const currentDate = new Date();
    const startDate = new Date(subscription.firstPaymentDate);

    let totalSpend = 0;

    if (subscription.type === "monthly") {
      const months = getMonthDifference(startDate, currentDate);
      totalSpend += months * subscription.price;
    } else if (subscription.type === "yearly") {
      const years = Math.floor(getYearDifference(startDate, currentDate));
      totalSpend += years * subscription.price;
    }

    if (totalSpend < 0) {
      totalSpend = 0;
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

  function startImport(): void {
    setIsImporting(true);
  }

  function deleteAllSubscriptions(): void {
    setMultisectedSubscriptionsIds([]);
    setIsMultiselecting(false);
    setSubscriptions([]);
    cancelEdit();
  }

  function toggleMultiselectedSubscription(id: string): void {
    if (multiselectedSubscriptionsIds.includes(id)) {
      const updatedSubscriptions = multiselectedSubscriptionsIds.filter(
        (value) => value !== id,
      );
      setMultisectedSubscriptionsIds(updatedSubscriptions);
    } else {
      setMultisectedSubscriptionsIds((prev) => [...prev, id]);
    }
  }

  function deleteMultiselectedSubscriptions(): void {
    if (multiselectedSubscriptionsIds.length === 0) return;
    const updatedSubscriptions = subscriptions.filter(
      (sub) => !multiselectedSubscriptionsIds.includes(sub.id),
    );
    setSubscriptions(updatedSubscriptions);
    setMultisectedSubscriptionsIds([]);
  }

  function toggleAllSubscriptions(toggled: boolean): void {
    const ids = toggled ? subscriptions.map((sub) => sub.id) : [];
    setMultisectedSubscriptionsIds(ids);
  }

  return (
    <SubscriptionTrackerContext.Provider
      value={{
        subscriptions,
        setSubscriptions,
        selectedSubscriptionIndex,
        setSelectedSubscriptionIndex,
        formData,
        setFormData,
        editingSubscription,
        setEditingSubscription,
        locale,
        setLocale,
        currency,
        setCurrency,
        isImporting,
        setIsImporting,
        importCode,
        setImportCode,
        sortedSubscriptions,
        addSubscription,
        calculateTotalPerMonth,
        calculateTotalPerYear,
        handleFormSubmit,
        handleFormChange,
        editSubscription,
        cancelEdit,
        deleteSubscription,
        getSubscriptionDueDate,
        isSubscriptionDueToday,
        getSubscriptionTotalSpend,
        formatToCurrencyString,
        backupSubscriptions,
        importSubscriptions,
        closeImport,
        startImport,
        deleteAllSubscriptions,
        toggleMultiselectedSubscription,
        deleteMultiselectedSubscriptions,
        multiselectedSubscriptionsIds,
        setMultisectedSubscriptionsIds,
        toggleAllSubscriptions,
        isMultiselecting,
        setIsMultiselecting,
      }}
    >
      {children}
    </SubscriptionTrackerContext.Provider>
  );
}

export function useSubscriptionTrackerContext() {
  return useContext(SubscriptionTrackerContext);
}
