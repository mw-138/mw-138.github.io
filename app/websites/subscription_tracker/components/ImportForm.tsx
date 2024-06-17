"use client";

import React from "react";
import { MdFileUpload, MdClose } from "react-icons/md";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

export default function ImportForm() {
  const {
    isImporting,
    importSubscriptions,
    importCode,
    setImportCode,
    closeImport,
  } = useSubscriptionTrackerContext();
  return (
    isImporting && (
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-slate-900/50 backdrop-blur-md">
        <div className="relative flex flex-col gap-2 rounded-md bg-slate-800 p-4 text-slate-200">
          <h1 className="font-bold uppercase">Import Subscriptions</h1>
          <form className="flex flex-col gap-2" onSubmit={importSubscriptions}>
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
    )
  );
}
