"use client";

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
      <div className="bg-subscription-tracker-background-900/50 absolute left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md">
        <div className="bg-subscription-tracker-background-800 relative flex flex-col gap-2 rounded-md p-4">
          <h1 className="font-bold uppercase">Import Subscriptions</h1>
          <form className="flex flex-col gap-2" onSubmit={importSubscriptions}>
            <label htmlFor="import_code">Enter Share Code</label>
            <input
              type="text"
              name="import_code"
              placeholder="Enter Share Code"
              onChange={(e: any) => setImportCode(e.target.value)}
              value={importCode}
              className="bg-subscription-tracker-background-700 placeholder-subscription-tracker-text-100 rounded-md p-2"
            />
            <button
              className="bg-subscription-tracker-primary-500 hover:bg-subscription-tracker-primary-600 active:bg-subscription-tracker-primary-400 flex flex-row items-center justify-center gap-2 rounded-md p-2 transition-colors disabled:bg-red-900 disabled:text-red-600"
              onClick={importSubscriptions}
              disabled={importCode === ""}
            >
              <MdFileUpload />
              Submit
            </button>
            <button
              className="bg-subscription-tracker-secondary-900 hover:bg-subscription-tracker-secondary-800 active:bg-subscription-tracker-secondary-600 flex flex-row items-center justify-center gap-2 rounded-md p-2 transition-colors disabled:bg-red-900 disabled:text-red-600"
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
