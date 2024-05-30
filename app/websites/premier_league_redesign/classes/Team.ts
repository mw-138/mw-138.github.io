import Fixture from "./Fixture";

export default class Team {
  public name: string;
  public shortName: string;
  public abbreviation: string;
  public image: string;
  public skillRating: number;
  public gamesPlayed: number;
  public gamesWon: number;
  public gamesDrawn: number;
  public gamesLost: number;
  public goalsFor: number;
  public goalsAgainst: number;
  public fixtures: Fixture[];

  constructor(
    name: string,
    shortName: string,
    abbreviation: string,
    image: string,
    skillRating: number,
  ) {
    this.name = name;
    this.shortName = shortName;
    this.abbreviation = abbreviation;
    this.image = image;
    this.skillRating = skillRating;
    this.gamesPlayed = 0;
    this.gamesWon = 0;
    this.gamesDrawn = 0;
    this.gamesLost = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.fixtures = [];
  }

  public getGoalDifference(): number {
    return this.goalsFor - this.goalsAgainst;
  }

  public getPoints(): number {
    return this.gamesWon * 3 + this.gamesDrawn;
  }

  public getExpectedGoals(
    homeRating: number,
    awayRating: number,
    homeAdvantage: number = 0,
  ): number {
    return (homeRating / awayRating) * (1 + homeAdvantage);
  }

  public getHomeFixtures(): Fixture[] {
    const retval: Fixture[] = [];
    this.fixtures.forEach((fixture) => {
      if (fixture.homeTeam === this) {
        retval.push(fixture);
      }
    });
    return retval;
  }

  public getAwayFixtures(): Fixture[] {
    const retval: Fixture[] = [];
    this.fixtures.forEach((fixture) => {
      if (fixture.awayTeam === this) {
        retval.push(fixture);
      }
    });
    return retval;
  }

  public getFinalFiveFixtures(): Fixture[] {
    return this.fixtures.slice(-5);
  }
}
