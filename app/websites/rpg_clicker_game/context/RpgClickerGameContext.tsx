"use client";

import { createContext, useContext, useState } from "react";
import Item from "../classes/Item";
import Inventory from "../types/Inventory";

type Context = {
  inventory: Inventory;
  addItem: (item: Item) => void;
  addRandomItem: () => void;
  removeItem: (item: Item) => void;
};

const RpgClickerGameContext = createContext<Context>({
  inventory: [],
  addItem: () => {},
  addRandomItem: () => {},
  removeItem: () => {},
});

export function RpgClickerGameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inventory, setInventory] = useState<Item[]>([]);

  function addItem(item: Item): void {
    setInventory((prev) => [...prev, item]);
  }

  function addRandomItem(): void {
    addItem(generateRandomItem());
  }

  function removeItem(item: Item): void {
    setInventory((prev) => prev.filter((i) => i !== item));
  }

  function generateRandomItem(): Item {
    return new Item("Random");
  }

  return (
    <RpgClickerGameContext.Provider
      value={{
        inventory,
        addItem,
        addRandomItem,
        removeItem,
      }}
    >
      {children}
    </RpgClickerGameContext.Provider>
  );
}

export function useRpgClickerGameContext() {
  return useContext(RpgClickerGameContext);
}
