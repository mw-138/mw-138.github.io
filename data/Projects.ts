import Project, { Language, Tag, Tool } from "@/data/classes/Project";

import TemporaryThumbnail from "@/public/temporary_thumbnail.jpg";

import PixelPlatformer_Screenshot01 from "@/public/projects/pixel_platformer/screenshot_01.png";

import RpgBoardGame_Screenshot01 from "@/public/projects/rpg_board_game/screenshot_01.png";
import RpgBoardGame_Screenshot02 from "@/public/projects/rpg_board_game/screenshot_02.png";
import RpgBoardGame_Screenshot03 from "@/public/projects/rpg_board_game/screenshot_03.png";

import MoneyCatcher_Screenshot01 from "@/public/projects/money_catcher/screenshot_01.png";
import MoneyCatcher_Screenshot02 from "@/public/projects/money_catcher/screenshot_02.png";
import MoneyCatcher_Screenshot03 from "@/public/projects/money_catcher/screenshot_03.png";

import WaveSurvival_Screenshot01 from "@/public/projects/wave_survival/screenshot_01.jpeg";

import RpgClicker_Screenshot01 from "@/public/projects/rpg_clicker/screenshot_01.png";
import RpgClicker_Screenshot02 from "@/public/projects/rpg_clicker/screenshot_02.png";
import RpgClicker_Screenshot03 from "@/public/projects/rpg_clicker/screenshot_03.png";
import RpgClicker_Screenshot04 from "@/public/projects/rpg_clicker/screenshot_04.png";

import Jlda_Screenshot01 from "@/public/projects/jlda/screenshot_01.png";
import Jlda_Screenshot02 from "@/public/projects/jlda/screenshot_02.png";
import Jlda_Screenshot03 from "@/public/projects/jlda/screenshot_03.png";
import Jlda_Screenshot04 from "@/public/projects/jlda/screenshot_04.png";
import Jlda_Screenshot05 from "@/public/projects/jlda/screenshot_05.png";
import Jlda_Screenshot06 from "@/public/projects/jlda/screenshot_06.png";
import Jlda_Screenshot07 from "@/public/projects/jlda/screenshot_07.png";

import BobsAdventure_Screenshot01 from "@/public/projects/bobs_adventure/screenshot_01.jpg";

import PigeonAndPete_Screenshot01 from "@/public/projects/pigeon_and_pete/screenshot_01.png";
import PigeonAndPete_Screenshot02 from "@/public/projects/pigeon_and_pete/screenshot_02.png";
import PigeonAndPete_Screenshot03 from "@/public/projects/pigeon_and_pete/screenshot_03.png";
import PigeonAndPete_Screenshot04 from "@/public/projects/pigeon_and_pete/screenshot_04.png";
import PigeonAndPete_Screenshot05 from "@/public/projects/pigeon_and_pete/screenshot_05.png";

import CoinCatcher_Screenshot01 from "@/public/projects/coin_catcher/screenshot_01.png";
import CoinCatcher_Screenshot02 from "@/public/projects/coin_catcher/screenshot_02.png";
import CoinCatcher_Screenshot03 from "@/public/projects/coin_catcher/screenshot_03.png";
import CoinCatcher_Screenshot04 from "@/public/projects/coin_catcher/screenshot_04.png";
import CoinCatcher_Screenshot05 from "@/public/projects/coin_catcher/screenshot_05.png";
import CoinCatcher_Screenshot06 from "@/public/projects/coin_catcher/screenshot_06.png";
import CoinCatcher_Screenshot07 from "@/public/projects/coin_catcher/screenshot_07.png";
import CoinCatcher_Screenshot08 from "@/public/projects/coin_catcher/screenshot_08.png";

import MiyooMiniThemePreview_Screenshot01 from "@/public/projects/miyoo_mini_theme_preview/screenshot_01.png";
import MiyooMiniThemePreview_Screenshot02 from "@/public/projects/miyoo_mini_theme_preview/screenshot_02.png";
import MiyooMiniThemePreview_Screenshot03 from "@/public/projects/miyoo_mini_theme_preview/screenshot_03.png";

import Portfolio_Screenshot01 from "@/public/projects/portfolio/screenshot_01.png";
import Portfolio_Screenshot02 from "@/public/projects/portfolio/screenshot_02.png";
import Portfolio_Screenshot03 from "@/public/projects/portfolio/screenshot_03.png";

import NetflixReDesign_Screenshot01 from "@/public/projects/netflix_redesign/screenshot_01.png";
import NetflixReDesign_Screenshot02 from "@/public/projects/netflix_redesign/screenshot_02.png";

import PremierLeagueReDesign_Screenshot01 from "@/public/projects/premier_league_redesign/screenshot_01.png";

import SubscriptionTracker_Screenshot01 from "@/public/projects/subscription_tracker/screenshot_01.png";
import SubscriptionTracker_Screenshot02 from "@/public/projects/subscription_tracker/screenshot_02.png";
import SubscriptionTracker_Screenshot03 from "@/public/projects/subscription_tracker/screenshot_03.png";
import SubscriptionTracker_Screenshot04 from "@/public/projects/subscription_tracker/screenshot_04.png";

import LifeSimulator_Screenshot01 from "@/public/projects/life_simulator/screenshot_01.png";

import TicTacToe_Screenshot01 from "@/public/projects/tic_tac_toe/screenshot_01.png";

import Google_Screenshot01 from "@/public/projects/google/screenshot_01.png";

import Borderlands3ModdingLibrary_Screenshot01 from "@/public/projects/borderlands_3_modding_library/screenshot_01.jpg";

export const Projects: Project[] = [
  new Project(
    new Date("03/21/2024"),
    true,
    "pixel_platformer",
    "Pixel Platformer",
    "A 2D platformer prototype game.",
    [Tool.Unity],
    [Language.CSharp],
    PixelPlatformer_Screenshot01,
    "",
    [PixelPlatformer_Screenshot01],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("02/11/2024"),
    true,
    "rpg_board_game",
    "RPG Board Game",
    "A prototype game based on Monopoly where the place rolls a dice and moves around the board collecting resources and fighting enemies. When the player moves around the entire board, the tiles re-generate and change the contents of each tile.",
    [Tool.Unity],
    [Language.CSharp],
    RpgBoardGame_Screenshot01,
    "",
    [
      RpgBoardGame_Screenshot01,
      RpgBoardGame_Screenshot02,
      RpgBoardGame_Screenshot03,
    ],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("01/03/2018"),
    true,
    "money_catcher",
    "Money Catcher",
    "Money Catcher is a game where you catch money falling from the sky and obtain a score as high as possible in 60 seconds whilst also being able to collect pickups that extend the clock.",
    [Tool.Unity],
    [Language.CSharp],
    MoneyCatcher_Screenshot01,
    "https://lionstargames.itch.io/money-catcher",
    [
      MoneyCatcher_Screenshot01,
      MoneyCatcher_Screenshot02,
      MoneyCatcher_Screenshot03,
    ],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("01/14/2022"),
    true,
    "wave_survival",
    "Wave Survival",
    "This is a first-person zombie survival game created in Unity that was made for a college assignment. In this game, you fight waves of enemies whilst also being able to unlock new areas of the map, get new weapons with an RPG loot system, weapon upgrades and boss fights.",
    [Tool.Unity],
    [Language.CSharp],
    WaveSurvival_Screenshot01,
    "https://lionstargames.itch.io/waved-based-survival",
    [WaveSurvival_Screenshot01],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("05/27/2018"),
    true,
    "rpg_clicker",
    "RPG Clicker",
    "An RPG clicker game that includes enemies, bosses and loot. Collect loot to be able to do more damage to your enemies.",
    [Tool.Unity],
    [Language.CSharp],
    RpgClicker_Screenshot01,
    "https://lionstargames.itch.io/rpg-clicker",
    [
      RpgClicker_Screenshot01,
      RpgClicker_Screenshot02,
      RpgClicker_Screenshot03,
      RpgClicker_Screenshot04,
    ],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("08/16/2022"),
    true,
    "jlda",
    "John Lowe's Darts Adventure",
    "This is game that I was apart of developing at Bubble Creations within a small group of developers and artists. The game contains multiple game modes such as story missions, bonus games, 9 dart challenges and arcade games. The main gameplay loop is you throw darts at enemies in different game modes to earn rewards.",
    [Tool.Unity],
    [Language.CSharp],
    Jlda_Screenshot01,
    "",
    [
      Jlda_Screenshot01,
      Jlda_Screenshot02,
      Jlda_Screenshot03,
      Jlda_Screenshot04,
      Jlda_Screenshot05,
      Jlda_Screenshot06,
      Jlda_Screenshot07,
    ],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("05/27/2023"),
    true,
    "bobs_adventure",
    "Bob's Adventure",
    "A prototype platformer game.",
    [Tool.Unity],
    [Language.CSharp],
    BobsAdventure_Screenshot01,
    "",
    [BobsAdventure_Screenshot01],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("05/27/2022"),
    true,
    "pigeon_and_pete",
    "Pigeon and Pete",
    "Pigeon & Pete is a game I worked on as part of a game jam with 3 other people. It's a puzzle platformer game where you take control of both Pigeon and Pete to solve puzzles by pooping and platforming.",
    [Tool.Unity],
    [Language.CSharp],
    PigeonAndPete_Screenshot01,
    "https://moholty.itch.io/pigeon-and-pete",
    [
      PigeonAndPete_Screenshot01,
      PigeonAndPete_Screenshot02,
      PigeonAndPete_Screenshot03,
      PigeonAndPete_Screenshot04,
      PigeonAndPete_Screenshot05,
    ],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("03/27/2024"),
    true,
    "coin_catcher",
    "Coin Catcher",
    "Coin Catcher is a 2D platformer where the objective is to collect as many coins as possible under the time limit while dodging danger falling from the sky. The game is based off a previous game called Money Catcher that was only just a prototype.",
    [Tool.Unity],
    [Language.CSharp],
    CoinCatcher_Screenshot01,
    "https://lionstargames.itch.io/coin-catcher",
    [
      CoinCatcher_Screenshot01,
      CoinCatcher_Screenshot02,
      CoinCatcher_Screenshot03,
      CoinCatcher_Screenshot04,
      CoinCatcher_Screenshot05,
      CoinCatcher_Screenshot06,
      CoinCatcher_Screenshot07,
      CoinCatcher_Screenshot08,
    ],
    [],
    [Tag.Game],
  ),
  new Project(
    new Date("05/18/2024"),
    true,
    "miyoo_mini_theme_preview",
    "Miyoo Mini Theme Preview",
    "A program for previewing Miyoo Mini themes without the need to repeatedly eject/re-insert micro SD card to preview themes.",
    [Tool.DotNet, Tool.ASP],
    [Language.CSharp, Language.HTML, Language.CSS, Language.Razor],
    MiyooMiniThemePreview_Screenshot03,
    "",
    [
      MiyooMiniThemePreview_Screenshot01,
      MiyooMiniThemePreview_Screenshot02,
      MiyooMiniThemePreview_Screenshot03,
    ],
    [],
    [Tag.Software],
  ),
  new Project(
    new Date("02/28/2024"),
    true,
    "portfolio",
    "Portfolio",
    "My personal portfolio that showcases my skills, abilities and my projects. When I push changes to the main branch from the development branch, I use GitHub Actions to automatically create a web build using GitHub Pages which hosts the website.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    Portfolio_Screenshot01,
    "",
    [Portfolio_Screenshot01, Portfolio_Screenshot02, Portfolio_Screenshot03],
    [],
    [Tag.Website],
  ),
  new Project(
    new Date("05/26/2024"),
    true,
    "netflix_redesign",
    "Netflix Re-Design",
    "A Netflix re-design that uses TMDB API to retrieve movies and TV shows.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    NetflixReDesign_Screenshot01,
    "/websites/netflix",
    [NetflixReDesign_Screenshot01, NetflixReDesign_Screenshot02],
    [],
    [Tag.Website, Tag.WorkInProgress],
  ),
  new Project(
    new Date("05/29/2024"),
    true,
    "premier_league_redesign",
    "Premier League Re-Design",
    "A Premier League website re-design. The site features a league table with fixture simulation.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    PremierLeagueReDesign_Screenshot01,
    "/websites/premier_league_redesign",
    [PremierLeagueReDesign_Screenshot01],
    [],
    [Tag.Website, Tag.WorkInProgress],
  ),
  new Project(
    new Date("06/16/2024"),
    true,
    "subscription_tracker",
    "Subscription Tracker",
    "A subscription tracker tool that helps keeps track of subscriptions and provides costs per month and per year.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    SubscriptionTracker_Screenshot01,
    "/websites/subscription_tracker",
    [
      SubscriptionTracker_Screenshot01,
      SubscriptionTracker_Screenshot02,
      SubscriptionTracker_Screenshot03,
      SubscriptionTracker_Screenshot04,
    ],
    [],
    [Tag.Website],
  ),
  new Project(
    new Date("06/15/2024"),
    true,
    "life_simulator",
    "Life Simulator",
    "A WIP life simulation game.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    LifeSimulator_Screenshot01,
    "/websites/life_simulator",
    [LifeSimulator_Screenshot01],
    [],
    [Tag.Website, Tag.Game, Tag.WorkInProgress],
  ),
  new Project(
    new Date("06/19/2024"),
    true,
    "tic_tac_toe",
    "Tic Tac Toe",
    "A tic tac toe game.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    TicTacToe_Screenshot01,
    "/websites/tic_tac_toe",
    [TicTacToe_Screenshot01],
    [],
    [Tag.Website, Tag.Game],
  ),
  new Project(
    new Date("06/21/2024"),
    true,
    "google",
    "Google",
    "A Google homepage clone.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    Google_Screenshot01,
    "/websites/google",
    [Google_Screenshot01],
    [],
    [Tag.Website],
  ),
  new Project(
    new Date("06/20/2024"),
    true,
    "rpg_adventure_game",
    "RPG Adventure Game",
    "An RPG adventure game.",
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    TemporaryThumbnail,
    "/websites/rpg_adventure_game",
    [],
    [],
    [Tag.Website, Tag.Game, Tag.WorkInProgress],
  ),
  new Project(
    new Date("03/04/2024"),
    true,
    "borderlands_3_modding_library",
    "Borderlands 3 Modding Library",
    "A Borderlands 3 modding library tool that helps creating mods for Borderlands 3 using hotfixes. There are other tools out there to create mods using lua, but I wanted to do it my own way and created this tool. It works by adding the mod library .dll file to an empty C# .NET project and creating a new Mod object in the main C# file. The mod class will then convert the code and export it into a text file that can be read by compatible Borderlands 3 mod loaders. It also automatically comments hotfixes in the exported file to make it easy to understand what changes have been made. There is an code example in the GitHub repository.",
    [Tool.VisualStudio],
    [Language.CSharp],
    Borderlands3ModdingLibrary_Screenshot01,
    "https://github.com/mw-138/borderlands-3-modding-library",
    [],
    [],
    [Tag.Software, Tag.Game],
  ),
];

export const RecentProjects: Project[] = Projects.filter(
  (project) => project.visible,
)
  .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
  .slice(0, 3);

export const HighlightedProjects = Projects.filter((project) => {
  const projects = ["coin_catcher", "netflix_redesign", "subscription_tracker"];
  return projects.includes(project.id);
})
  .filter((project) => project.visible)
  .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
  .slice(0, 3);

export const HeroProject: Project | undefined = Projects.find(
  (project) => project.id === "coin_catcher",
);
