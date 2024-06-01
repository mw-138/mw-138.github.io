import Fixture from "./Fixture";

export default class Gameweek {
  public num: number;
  public fixtures: Fixture[];

  constructor(num: number, fixtures: Fixture[]) {
    this.num = num;
    this.fixtures = fixtures;
  }
}
