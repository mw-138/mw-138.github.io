"use client";

import {
  MdAdd,
  MdArrowLeft,
  MdCancel,
  MdChevronLeft,
  MdDelete,
  MdSave,
} from "react-icons/md";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

export default function SubscriptionForm() {
  const {
    subscriptions,
    editingSubscription,
    handleFormChange,
    handleFormSubmit,
    formData,
    deleteSubscription,
    selectedSubscriptionIndex,
    formatToCurrencyString,
    getSubscriptionTotalSpend,
    cancelEdit,
    getNextPaymentDate,
  } = useSubscriptionTrackerContext();

  function ActionButton({
    label,
    icon,
    onClick,
  }: {
    label: string;
    icon: React.ReactNode;
    onClick: (e: any) => void;
  }): React.ReactNode {
    return (
      <button
        className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-subscription-tracker-primary-300 px-4 py-2 text-subscription-tracker-text-700 transition-colors hover:bg-subscription-tracker-primary-500 hover:text-subscription-tracker-text-100 active:bg-subscription-tracker-primary-600 disabled:bg-red-900 disabled:text-red-600"
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    );
  }

  return (
    <div className="flex-1 p-4 backdrop-blur-md">
      <div className="mb-2 flex h-10 items-center justify-between py-2">
        <h1 className="flex items-center gap-4 font-bold uppercase">
          {editingSubscription && (
            <MdChevronLeft
              className="aspect-square rounded-md p-2 transition-colors hover:bg-subscription-tracker-primary-500 hover:text-subscription-tracker-text-900 active:bg-subscription-tracker-primary-600"
              onClick={cancelEdit}
              size={32}
            />
          )}
          {editingSubscription ? "Edit" : "Add"} Subscription
        </h1>
        {editingSubscription && (
          <div className="flex flex-row gap-4">
            <ActionButton
              label="Save"
              icon={<MdSave />}
              onClick={handleFormSubmit}
            />
            <ActionButton
              label="Delete"
              icon={<MdDelete />}
              onClick={() => deleteSubscription(selectedSubscriptionIndex)}
            />
          </div>
        )}
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="label">Label</label>
          <input
            type="text"
            name="label"
            placeholder="Enter label"
            onChange={handleFormChange}
            value={formData.label}
            className="rounded-md bg-subscription-tracker-background-800 p-2 placeholder-subscription-tracker-text-100"
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
            className="rounded-md bg-subscription-tracker-background-800 p-2 placeholder-subscription-tracker-text-100"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleFormChange}
            value={formData.type}
            className="rounded-md bg-subscription-tracker-background-800 p-2 placeholder-subscription-tracker-text-100"
          >
            <option
              value="monthly"
              className="bg-subscription-tracker-background-800"
            >
              Monthly
            </option>
            <option
              value="yearly"
              className="bg-subscription-tracker-background-800"
            >
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
            className="rounded-md bg-subscription-tracker-background-800 p-2 placeholder-subscription-tracker-text-100"
          />
        </div>
        {editingSubscription ? (
          <div className="flex flex-col gap-4">
            <div className="rounded-md bg-subscription-tracker-background-800 p-2">
              <h1 className="font-bold uppercase">Stats</h1>
              <div
                className="tooltip cursor-help"
                data-tip="Calculation uses current subscription cost. Fluctuating costs or manually changing costs will show an inaccurate total spend."
              >
                <p>
                  Total Spend:{" "}
                  {formatToCurrencyString(
                    getSubscriptionTotalSpend(
                      subscriptions[selectedSubscriptionIndex],
                    ),
                  )}
                </p>
              </div>
              <p>
                Next Payment Date:{" "}
                {getNextPaymentDate(subscriptions[selectedSubscriptionIndex])}
              </p>
            </div>
          </div>
        ) : (
          <button
            className="flex flex-row items-center justify-center gap-2 rounded-md bg-subscription-tracker-primary-500 p-2 transition-colors hover:bg-subscription-tracker-primary-600 active:bg-subscription-tracker-primary-400 disabled:bg-red-900 disabled:text-red-600"
            onClick={handleFormSubmit}
            disabled={formData.label === ""}
          >
            <MdAdd />
            Add Subscription
          </button>
        )}
      </form>
    </div>
  );
}
