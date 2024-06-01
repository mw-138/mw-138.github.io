import Fixture from "./Fixture";

export default class Gameweek {
  public number: number;
  public fixtures: Fixture[];

  constructor(number: number, fixtures: Fixture[]) {
    this.number = number;
    this.fixtures = fixtures;
  }
}
