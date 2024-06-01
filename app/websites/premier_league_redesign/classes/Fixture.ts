import Team from "./Team";

export enum FixtureResult {
  Win = "W",
  Loss = "L",
  Draw = "D",
}

export default class Fixture {
  public homeTeam: Team;
  public awayTeam: Team;
  public homeScore: number;
  public awayScore: number;
  public hasBeenPlayed: boolean;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
    this.hasBeenPlayed = false;
  }

  public didHomeTeamWin(): boolean {
    return this.homeScore > this.awayScore;
  }

  public didAwayTeamWin(): boolean {
    return this.awayScore > this.homeScore;
  }

  public isDraw(): boolean {
    return this.homeScore === this.awayScore;
  }

  public getTeamResult(team: Team): FixtureResult {
    const isHomeTeam = team === this.homeTeam;
    const isAwayTeam = team === this.awayTeam;

    if (!isHomeTeam && !isAwayTeam) return FixtureResult.Loss;

    if (isHomeTeam && this.didHomeTeamWin()) {
      return FixtureResult.Win;
    } else if (isHomeTeam && this.didAwayTeamWin()) {
      return FixtureResult.Loss;
    } else if (isAwayTeam && this.didAwayTeamWin()) {
      return FixtureResult.Win;
    } else if (isAwayTeam && this.didHomeTeamWin()) {
      return FixtureResult.Loss;
    } else if (this.isDraw()) {
      return FixtureResult.Draw;
    }

    return FixtureResult.Loss;
  }
}
