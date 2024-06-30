import { generateUUID } from "@/lib/utils";

export default class Item {
  public id: string;
  public label: string;

  constructor(label: string) {
    this.id = generateUUID();
    this.label = label;
  }
}
