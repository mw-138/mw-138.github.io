"use client";

import { useRpgClickerGameContext } from "../context/RpgClickerGameContext";

export default function InventoryList() {
  const { inventory, addRandomItem } = useRpgClickerGameContext();
  return (
    <div className="flex flex-col">
      <button className="bg-blue-500 p-2 text-white" onClick={addRandomItem}>
        Add Random Item
      </button>
      {inventory.map((item, index) => (
        <button key={index} className="bg-green-500 p-2 text-white">
          {item.label}
        </button>
      ))}
    </div>
  );
}
