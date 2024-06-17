"use client";

import React from "react";
import { MdAdd, MdCancel, MdDelete, MdSave } from "react-icons/md";
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
  } = useSubscriptionTrackerContext();
  return (
    <div className="flex-1 p-4 text-white backdrop-blur-md">
      <div className="mb-2 flex h-10 items-center justify-between py-2">
        <h1 className="font-bold uppercase">
          {editingSubscription ? "Edit" : "Add"} Subscription
        </h1>
        {editingSubscription && (
          <div className="flex flex-row gap-4">
            <button
              className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 px-4 py-2 text-slate-700 transition-colors hover:bg-green-500 hover:text-white active:bg-green-600 disabled:bg-red-900 disabled:text-red-600"
              onClick={handleFormSubmit}
            >
              <MdSave />
              Save
            </button>
            <button
              className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 px-4 py-2 text-slate-700 transition-colors hover:bg-red-500 hover:text-white active:bg-red-600 disabled:bg-red-900 disabled:text-red-600"
              onClick={() => deleteSubscription(selectedSubscriptionIndex)}
            >
              <MdDelete />
              Delete
            </button>
            <button
              className="flex flex-1 flex-row items-center justify-center gap-2 rounded-md bg-white p-2 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-500 hover:text-white active:bg-slate-600 disabled:bg-red-900 disabled:text-red-600"
              onClick={cancelEdit}
            >
              <MdCancel />
              Cancel
            </button>
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
            <div className="rounded-md bg-white/20 p-2">
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
  );
}
