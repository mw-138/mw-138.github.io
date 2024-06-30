"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FormEvent,
} from "react";
import { formatCurrency } from "@/lib/utils";
import Job from "../classes/Job";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import { useClampedLocalStorageState } from "@/hooks/useClampedState";

type LifeSimulatorContextValue = {
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
  isNewGame: boolean;
  setIsNewGame: (value: boolean) => void;
  name: string;
  setName: (name: string) => void;
  cash: number;
  setCash: (amount: number) => void;
  bank: number;
  setBank: (newValue: number | ((prevValue: number) => number)) => void;
  health: number;
  setHealth: (amount: number) => void;
  hunger: number;
  setHunger: (amount: number) => void;
  thirst: number;
  setThirst: (amount: number) => void;
  energy: number;
  setEnergy: (amount: number) => void;
  cashToBank: (amount: number) => void;
  bankToCash: (amount: number, force: boolean) => void;
  inDebt: boolean;
  storyEntries: StoryEntry[];
  addStoryEntry: (timestamp: number, text: string) => void;
  resetData: () => void;
  currentTimestamp: number;
  startTimestamp: number;
  getAge: () => number;
  currentJob: Job | undefined;
  setCurrentJob: (newValue: string | ((prevValue: string) => string)) => void;
  jobs: Job[];
};

export const LifeSimulatorContext = createContext<LifeSimulatorContextValue>({
  isPaused: true,
  setIsPaused: () => {},
  isNewGame: true,
  setIsNewGame: () => {},
  name: "",
  setName: () => {},
  cash: 0,
  setCash: () => {},
  bank: 0,
  setBank: () => {},
  health: 0,
  setHealth: () => {},
  hunger: 0,
  setHunger: () => {},
  thirst: 0,
  setThirst: () => {},
  energy: 0,
  setEnergy: () => {},
  cashToBank: () => {},
  bankToCash: () => {},
  inDebt: false,
  storyEntries: [],
  addStoryEntry: () => {},
  resetData: () => {},
  currentTimestamp: 0,
  startTimestamp: 0,
  getAge: () => 0,
  currentJob: undefined,
  setCurrentJob: () => {},
  jobs: [],
});

interface FormData {
  name: string;
  difficulty: string;
}

interface StoryEntry {
  timestamp: number;
  text: string;
}

interface LifeSimulatorProviderProps {
  children: ReactNode;
}

export const LifeSimulatorProvider = ({
  children,
}: LifeSimulatorProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    difficulty: "normal",
  });
  const [isPaused, setIsPaused] = useLocalStorageState<boolean>(
    "is_paused",
    true,
  );
  const [isNewGame, setIsNewGame] = useLocalStorageState<boolean>(
    "is_new_game",
    true,
  );
  const [name, setName] = useLocalStorageState<string>("name", "");
  const [cash, setCash] = useClampedLocalStorageState(
    "cash",
    0,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
  );
  const [bank, setBank] = useClampedLocalStorageState(
    "bank",
    1000,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
  );
  const [health, setHealth] = useClampedLocalStorageState(
    "health",
    100,
    0,
    100,
  );
  const [hunger, setHunger] = useClampedLocalStorageState(
    "hunger",
    100,
    0,
    100,
  );
  const [thirst, setThirst] = useClampedLocalStorageState(
    "thirst",
    100,
    0,
    100,
  );
  const [energy, setEnergy] = useClampedLocalStorageState(
    "energy",
    100,
    0,
    100,
  );
  const [inDebt, setInDebt] = useLocalStorageState<boolean>("in_debt", false);
  const [storyEntries, setStoryEntries] = useLocalStorageState<StoryEntry[]>(
    "story_entries",
    [],
  );
  const [currentTimestamp, setCurrentTimestamp] = useLocalStorageState<number>(
    "current_timestamp",
    Date.now(),
  );
  const [startTimestamp, setStartTimestamp] = useLocalStorageState<number>(
    "start_timestamp",
    currentTimestamp,
  );
  const [jobs] = useState<Job[]>([
    new Job("unemployed", "Unemployed", "", 4000),
    new Job("dishwasher", "Dishwasher", "Wash dishes.", 23000),
  ]);
  const [currentJobId, setCurrentJob] = useLocalStorageState<string>(
    "current_job",
    jobs[0].id,
  );
  const [currentJob] = useState<Job | undefined>(undefined);

  function getAge(): number {
    const current = new Date(currentTimestamp);
    const start = new Date(startTimestamp);
    const yearDiff = current.getFullYear() - start.getFullYear();
    return 18 + yearDiff;
  }

  function cashToBank(amount: number): void {
    if (cash < amount) return;
    setBank((prev) => {
      const newVal = prev + amount;
      setInDebt(newVal < 0);
      return newVal;
    });
    setCash((prev) => prev - amount);
  }

  function bankToCash(amount: number, force: boolean): void {
    if (!force && bank < amount) return;
    setCash((prev) => prev + amount);
    setBank((prev) => {
      const newVal = prev - amount;
      setInDebt(newVal < 0);
      return newVal;
    });
  }

  function addStoryEntry(timestamp: number, text: string): void {
    setStoryEntries((prev) => [...prev, { timestamp: timestamp, text: text }]);
  }

  function resetData(): void {
    setIsPaused(true);
    setIsNewGame(true);
    setName("");
    setCash(0);
    setBank(0);
    setHealth(100);
    setHunger(100);
    setThirst(100);
    setEnergy(100);
    setStoryEntries([]);
    setCurrentTimestamp(Date.now());
    setStartTimestamp(currentTimestamp);
    setCurrentJob(jobs[0].id);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentTimestamp((prev) => {
          const date = new Date(prev);
          const start = new Date(startTimestamp);
          date.setDate(date.getDate() + 1);
          if (
            date.getDate() === start.getDate() &&
            date.getMonth() === start.getMonth()
          ) {
            const monthlyIncome = currentJob?.salary.getMonthlyWage() ?? 0;
            setBank((prev) => prev + monthlyIncome);
            addStoryEntry(
              date.getTime(),
              `Received ${formatCurrency(monthlyIncome)} monthly income.`,
            );
          }
          return date.getTime();
        });
        setHunger((prev) => prev - 1);
        setThirst((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    setName(formData.name);
    const isEasy = formData.difficulty === "easy";
    const isNormal = formData.difficulty === "normal";
    const isHard = formData.difficulty === "hard";
    const startingMoney = isEasy ? 250000 : isNormal ? 2000 : 0;
    setBank(startingMoney);
    setIsNewGame(false);
    setIsPaused(false);
    setStartTimestamp(Date.now());
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return isNewGame ? (
    <div className="bg-base-100 flex h-screen flex-col gap-4 p-4">
      <h1 className="text-lg font-bold uppercase">New Game</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="p-2"
          onChange={handleChange}
        />
        <label htmlFor="difficulty" className="font-bold">
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          defaultValue="normal"
          onChange={handleChange}
          value={formData.difficulty}
        >
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
        </select>
        <button
          className="rounded-md bg-blue-500 px-4 py-2 transition-colors hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  ) : (
    <LifeSimulatorContext.Provider
      value={{
        isPaused,
        setIsPaused,
        isNewGame,
        setIsNewGame,
        name,
        setName,
        cash,
        setCash,
        bank,
        setBank,
        health,
        setHealth,
        hunger,
        setHunger,
        thirst,
        setThirst,
        energy,
        setEnergy,
        cashToBank,
        bankToCash,
        inDebt,
        storyEntries,
        addStoryEntry,
        resetData,
        currentTimestamp,
        startTimestamp,
        getAge,
        currentJob,
        setCurrentJob,
        jobs,
      }}
    >
      {children}
    </LifeSimulatorContext.Provider>
  );
};
