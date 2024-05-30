import { poissonRandom } from "@/utils";
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

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
  }

  public didHomeWin(): boolean {
    return this.homeScore > this.awayScore;
  }

  public didAwayWin(): boolean {
    return this.awayScore > this.homeScore;
  }

  public didDraw(): boolean {
    return this.homeScore === this.awayScore;
  }

  public getTeamResult(team: Team): FixtureResult {
    const isHomeTeam = team === this.homeTeam;
    const isAwayTeam = team === this.awayTeam;

    if (!isHomeTeam && !isAwayTeam) return FixtureResult.Loss;

    if (isHomeTeam && this.didHomeWin()) {
      return FixtureResult.Win;
    } else if (isHomeTeam && this.didAwayWin()) {
      return FixtureResult.Loss;
    } else if (isAwayTeam && this.didAwayWin()) {
      return FixtureResult.Win;
    } else if (isAwayTeam && this.didHomeWin()) {
      return FixtureResult.Loss;
    } else if (this.didDraw()) {
      return FixtureResult.Draw;
    }

    return FixtureResult.Loss;
  }

  public simulate(): void {
    const homeAdvantage = 0.15;

    const homeExpectedGoals = this.homeTeam.getExpectedGoals(
      this.homeTeam.skillRating,
      this.awayTeam.skillRating,
      homeAdvantage,
    );
    const awayExpectedGoals = this.awayTeam.getExpectedGoals(
      this.awayTeam.skillRating,
      this.homeTeam.skillRating,
    );

    this.homeScore = poissonRandom(homeExpectedGoals);
    this.awayScore = poissonRandom(awayExpectedGoals);

    if (this.didHomeWin()) {
      this.homeTeam.gamesWon++;
      this.awayTeam.gamesLost++;
    } else if (this.didAwayWin()) {
      this.homeTeam.gamesLost++;
      this.awayTeam.gamesWon++;
    } else if (this.didDraw()) {
      this.homeTeam.gamesDrawn++;
      this.awayTeam.gamesDrawn++;
    }

    this.homeTeam.goalsFor += this.homeScore;
    this.homeTeam.goalsAgainst += this.awayScore;

    this.awayTeam.goalsFor += this.awayScore;
    this.awayTeam.goalsAgainst += this.homeScore;

    this.homeTeam.gamesPlayed++;
    this.awayTeam.gamesPlayed++;
  }
}
