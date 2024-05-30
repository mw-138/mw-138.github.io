import { shuffleArray } from "@/utils";
import Fixture from "./Fixture";
import Team from "./Team";

export default class FixtureSimulator {
  public teams: Team[];
  public fixtures: Fixture[];

  constructor(teams: Team[]) {
    this.teams = teams;
    this.fixtures = this.generateFixtures();
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
        firstFixture.simulate();
        reverseFixture.simulate();
        fixtures.push(firstFixture, reverseFixture);
      }
      this.teams.splice(1, 0, this.teams.pop()!);
    }

    return fixtures;
  }

  public distributeFixturesToGameweeks(
    fixtures: Fixture[],
    numGameweeks: number,
  ): Fixture[][] {
    const gameweeks: Fixture[][] = Array.from(
      { length: numGameweeks },
      () => [],
    );
    let currentGameweek = 0;
    fixtures.forEach((fixture) => {
      let placed = false;
      for (let gameweek = 0; gameweek < numGameweeks; gameweek++) {
        if (
          !gameweeks[gameweek].some(
            (f) =>
              f.homeTeam.name === fixture.homeTeam.name ||
              f.awayTeam.name === fixture.homeTeam.name ||
              f.homeTeam.name === fixture.awayTeam.name ||
              f.awayTeam.name === fixture.awayTeam.name,
          )
        ) {
          gameweeks[gameweek].push(fixture);
          placed = true;
          break;
        }
      }
      if (!placed) {
        currentGameweek++;
        if (currentGameweek >= numGameweeks) {
          currentGameweek = 0;
        }
        gameweeks[currentGameweek].push(fixture);
      }
    });
    return gameweeks;
  }
}
