import { poissonRandom, shuffleArray } from "@/utils";
import Fixture from "./Fixture";
import Team from "./Team";
import Gameweek from "./Gameweek";

export default class FixtureSimulator {
  public teams: Team[];
  public fixtures: Fixture[];
  public maxGameweeks: number;
  public gameweeks: Gameweek[];

  constructor(teams: Team[], maxGameweeks: number) {
    this.teams = teams;
    this.fixtures = this.generateFixtures();
    this.maxGameweeks = maxGameweeks;
    this.gameweeks = this.distributeFixturesToGameweeks(
      this.fixtures,
      this.maxGameweeks,
    );
  }

  public generateFixtures(): Fixture[] {
    const fixtures: Fixture[] = [];
    const numTeams = this.teams.length;

    for (let round = 0; round < numTeams - 1; round++) {
      for (let i = 0; i < numTeams / 2; i++) {
        const home = this.teams[i];
        const away = this.teams[numTeams - 1 - i];
        const firstFixture = new Fixture(home, away);
        const reverseFixture = new Fixture(away, home);
        home.fixtures.push(firstFixture, reverseFixture);
        away.fixtures.push(firstFixture, reverseFixture);
        fixtures.push(firstFixture, reverseFixture);
      }
      this.teams.splice(1, 0, this.teams.pop()!);
    }

    this.teams.forEach((team) => (team.fixtures = shuffleArray(team.fixtures)));

    return fixtures;
  }

  private simulateFixture(fixture: Fixture): void {
    const homeAdvantage = 0.15;

    const homeExpectedGoals = fixture.homeTeam.getExpectedGoals(
      fixture.homeTeam.skillRating,
      fixture.awayTeam.skillRating,
      homeAdvantage,
    );
    const awayExpectedGoals = fixture.awayTeam.getExpectedGoals(
      fixture.awayTeam.skillRating,
      fixture.homeTeam.skillRating,
    );

    fixture.homeScore = poissonRandom(homeExpectedGoals);
    fixture.awayScore = poissonRandom(awayExpectedGoals);

    if (fixture.didHomeWin()) {
      fixture.homeTeam.gamesWon++;
      fixture.awayTeam.gamesLost++;
    } else if (fixture.didAwayWin()) {
      fixture.homeTeam.gamesLost++;
      fixture.awayTeam.gamesWon++;
    } else if (fixture.didDraw()) {
      fixture.homeTeam.gamesDrawn++;
      fixture.awayTeam.gamesDrawn++;
    }

    fixture.homeTeam.goalsFor += fixture.homeScore;
    fixture.homeTeam.goalsAgainst += fixture.awayScore;

    fixture.awayTeam.goalsFor += fixture.awayScore;
    fixture.awayTeam.goalsAgainst += fixture.homeScore;

    fixture.homeTeam.gamesPlayed++;
    fixture.awayTeam.gamesPlayed++;

    fixture.hasBeenPlayed = true;
  }

  public sortTeams(): void {
    this.teams = this.teams.sort((a, b) => {
      const pointsDifference = b.getPoints() - a.getPoints();
      if (pointsDifference !== 0) {
        return pointsDifference;
      }

      const goalDifference = b.getGoalDifference() - a.getGoalDifference();
      if (goalDifference !== 0) {
        return goalDifference;
      }

      const goalsScoredDifference = b.goalsFor - a.goalsFor;
      if (goalsScoredDifference !== 0) {
        return goalsScoredDifference;
      }

      return 0;
    });
    this.teams.forEach((team, index) => {
      team.positions.push(index + 1);
    });
  }

  public simulateGameweek(gameweek: Gameweek): void {
    gameweek.fixtures.forEach((fixture) => this.simulateFixture(fixture));
    this.sortTeams();
  }

  public simulateGameweeks(gameweeks: Gameweek[], numGameweeks: number): void {
    if (numGameweeks <= 0 || numGameweeks > gameweeks.length) return;

    for (let index = 0; index < numGameweeks; index++) {
      const gameweek = gameweeks[index];
      this.simulateGameweek(gameweek);
    }
  }

  public distributeFixturesToGameweeks(
    fixtures: Fixture[],
    numGameweeks: number,
  ): Gameweek[] {
    const gameweeks: Gameweek[] = Array.from(
      { length: numGameweeks },
      (_, i) => new Gameweek(i + 1, []),
    );
    let currentGameweek = 0;
    fixtures.forEach((fixture) => {
      let placed = false;
      for (let gameweek = 0; gameweek < numGameweeks; gameweek++) {
        if (
          !gameweeks[gameweek].fixtures.some(
            (f) =>
              f.homeTeam.name === fixture.homeTeam.name ||
              f.awayTeam.name === fixture.homeTeam.name ||
              f.homeTeam.name === fixture.awayTeam.name ||
              f.awayTeam.name === fixture.awayTeam.name,
          )
        ) {
          gameweeks[gameweek].fixtures.push(fixture);
          placed = true;
          break;
        }
      }
      if (!placed) {
        currentGameweek++;
        if (currentGameweek >= numGameweeks) {
          currentGameweek = 0;
        }
        gameweeks[currentGameweek].fixtures.push(fixture);
      }
    });
    return gameweeks;
  }
}