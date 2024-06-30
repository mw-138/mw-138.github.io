import { clsx, type ClassValue } from "clsx";
import pako from "pako";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchApi(
  apiPath: string,
  method: "POST" | "GET",
  data: any,
): Promise<Response> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/${apiPath}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(res);
  return res;
}

export function toBase64(value: string | number | object): string {
  let stringValue: string;

  if (typeof value === "string") {
    stringValue = value;
  } else if (typeof value === "number") {
    stringValue = value.toString();
  } else if (typeof value === "object" && value !== null) {
    stringValue = JSON.stringify(value);
  } else {
    throw new Error("Unsupported value type");
  }

  return Buffer.from(stringValue).toString("base64");
}

export function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomEnumValue<T extends object>(enumObj: T): T[keyof T] {
  const enumValues = Object.values(enumObj) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

export function poissonRandom(mean: number): number {
  let probabilityOfZero = Math.exp(-mean);
  let numberOfEvents = 0;
  let probability = 1;

  do {
    numberOfEvents++;
    probability *= Math.random();
  } while (probability > probabilityOfZero);

  return numberOfEvents - 1;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

export function formatCurrency(
  amount: number,
  locale: string = "en-UK",
  currency: string = "GBP",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

export function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function isIndexOutOfRange<T>(arr: T[], index: number): boolean {
  return index < 0 || index >= arr.length;
}

export function formatDateToYyyyMmDd(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {}
}

export function uint8ArrayToBinaryString(uint8Array: Uint8Array): string {
  return Array.from(uint8Array, (byte) => String.fromCharCode(byte)).join("");
}

export function binaryStringToUint8Array(binaryString: string): Uint8Array {
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function base64UrlEncode(str: string): string {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function base64UrlDecode(base64: string): string {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const base64Safe = base64.replace(/-/g, "+").replace(/_/g, "/") + padding;
  return atob(base64Safe);
}

export function compressJSON(jsonObject: object): string {
  const jsonString = JSON.stringify(jsonObject);
  const compressedData = pako.deflate(jsonString);
  const binaryString = uint8ArrayToBinaryString(compressedData);
  const base64String = base64UrlEncode(binaryString);
  return base64String;
}

export function decompressJSON(base64String: string): object {
  const binaryString = base64UrlDecode(base64String);
  const compressedData = binaryStringToUint8Array(binaryString);
  const jsonString = pako.inflate(compressedData, { to: "string" });
  const jsonObject = JSON.parse(jsonString);
  return jsonObject;
}

export function getMonthDifference(startDate: Date, endDate: Date): number {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  const yearsDifference = end.getFullYear() - start.getFullYear();
  const monthsDifference = end.getMonth() - start.getMonth();
  return yearsDifference * 12 + monthsDifference;
}

export function getYearDifference(startDate: Date, endDate: Date): number {
  // return endDate.getFullYear() - startDate.getFullYear();
  const months = getMonthDifference(startDate, endDate);
  return Math.floor(months / 12);
}
