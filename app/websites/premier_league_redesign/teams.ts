import FixtureSimulator from "./classes/FixtureSimulator";
import Team from "./classes/Team";

export const Teams: Team[] = [
  new Team(
    "Arsenal",
    "Arsenal",
    "ARS",
    "https://resources.premierleague.com/premierleague/badges/50/t3.png",
    9,
  ),
  new Team(
    "Aston Villa",
    "Aston Villa",
    "AVL",
    "https://resources.premierleague.com/premierleague/badges/50/t7.png",
    7,
  ),
  new Team(
    "AFC Bournemouth",
    "Bournemouth",
    "BOU",
    "https://resources.premierleague.com/premierleague/badges/50/t91.png",
    5,
  ),
  new Team(
    "Brentford",
    "Brentford",
    "BRE",
    "https://resources.premierleague.com/premierleague/badges/50/t94.png",
    5,
  ),
  new Team(
    "Brighton & Hove Albion",
    "Brighton",
    "BHA",
    "https://resources.premierleague.com/premierleague/badges/50/t36.png",
    6,
  ),
  // new Team(
  //   "Burnley",
  //   "Burnley",
  //   "BUR",
  //   "https://resources.premierleague.com/premierleague/badges/50/t90.png",
  //   3,
  // ),
  new Team(
    "Ipswich Town",
    "Ipswich",
    "IPS",
    "https://resources.premierleague.com/premierleague/badges/50/t40.png",
    3,
  ),
  new Team(
    "Chelsea",
    "Chelsea",
    "CHE",
    "https://resources.premierleague.com/premierleague/badges/50/t8.png",
    7,
  ),
  new Team(
    "Crystal Palace",
    "Crystal Palace",
    "CRY",
    "https://resources.premierleague.com/premierleague/badges/50/t31.png",
    6,
  ),
  new Team(
    "Everton",
    "Everton",
    "EVE",
    "https://resources.premierleague.com/premierleague/badges/50/t11.png",
    4,
  ),
  new Team(
    "Fulham",
    "Fulham",
    "FUL",
    "https://resources.premierleague.com/premierleague/badges/50/t54.png",
    5,
  ),
  new Team(
    "Liverpool",
    "Liverpool",
    "LIV",
    "https://resources.premierleague.com/premierleague/badges/50/t14.png",
    8,
  ),
  // new Team(
  //   "Luton Town",
  //   "Luton",
  //   "LUT",
  //   "https://resources.premierleague.com/premierleague/badges/50/t102.png",
  //   3,
  // ),
  new Team(
    "Southampton",
    "Southampton",
    "SOU",
    "https://resources.premierleague.com/premierleague/badges/50/t20.png",
    4,
  ),
  new Team(
    "Manchester City",
    "Man City",
    "MCI",
    "https://resources.premierleague.com/premierleague/badges/50/t43.png",
    9,
  ),
  new Team(
    "Manchester United",
    "Man Utd",
    "MUN",
    "https://resources.premierleague.com/premierleague/badges/50/t1.png",
    7,
  ),
  new Team(
    "Newcastle United",
    "Newcastle",
    "NEW",
    "https://resources.premierleague.com/premierleague/badges/50/t4.png",
    7,
  ),
  new Team(
    "Nottingham Forest",
    "Nott'm Forest",
    "NOT",
    "https://resources.premierleague.com/premierleague/badges/50/t17.png",
    4,
  ),
  // new Team(
  //   "Sheffield United",
  //   "Sheffield Utd",
  //   "SHE",
  //   "https://resources.premierleague.com/premierleague/badges/50/t49.png",
  //   3,
  // ),
  new Team(
    "Leicester City",
    "Leicester",
    "LEI",
    "https://resources.premierleague.com/premierleague/badges/50/t13.png",
    4,
  ),
  new Team(
    "Tottenham Hotspur",
    "Spurs",
    "TOT",
    "https://resources.premierleague.com/premierleague/badges/50/t6.png",
    7,
  ),
  new Team(
    "West Ham United",
    "West Ham",
    "WHU",
    "https://resources.premierleague.com/premierleague/badges/50/t21.png",
    6,
  ),
  new Team(
    "Wolverhampton Wanderers",
    "Wolves",
    "WOL",
    "https://resources.premierleague.com/premierleague/badges/50/t39.png",
    5,
  ),
];

export const FixtureSim = new FixtureSimulator([...Teams]);
export const GameWeeks = FixtureSim.distributeFixturesToGameweeks(
  FixtureSim.fixtures,
  38,
);

export const SortedTeams = [...Teams].sort((a, b) => {
  const pointsDifference = b.getPoints() - a.getPoints();
  if (pointsDifference !== 0) {
    return pointsDifference;
  }
  return b.getGoalDifference() - a.getGoalDifference();
});

export const AlphabeticalTeams = [...Teams].sort((a, b) =>
  a.name.localeCompare(b.name),
);
