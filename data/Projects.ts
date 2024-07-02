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

import DesktopSimulator_Screenshot01 from "@/public/projects/desktop_simulator/screenshot_01.png";
import DesktopSimulator_Screenshot02 from "@/public/projects/desktop_simulator/screenshot_02.png";
import DesktopSimulator_Screenshot03 from "@/public/projects/desktop_simulator/screenshot_03.png";

export const Projects: Project[] = [
  {
    id: "pixel_platformer",
    visible: true,
    title: "Pixel Platformer",
    description: "A 2D platformer prototype game.",
    publishDate: new Date("03/21/2024"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: PixelPlatformer_Screenshot01,
    pageUrl: "",
    screenshots: [PixelPlatformer_Screenshot01],
    tags: [Tag.Game],
  },
  {
    id: "rpg_board_game",
    visible: true,
    title: "RPG Board Game",
    description:
      "A prototype game based on Monopoly where the player rolls a dice and moves around the board collecting resources and fighting enemies. When the player moves around the entire board, the tiles re-generate and change the contents of each tile.",
    publishDate: new Date("02/11/2024"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: RpgBoardGame_Screenshot01,
    pageUrl: "",
    screenshots: [
      RpgBoardGame_Screenshot01,
      RpgBoardGame_Screenshot02,
      RpgBoardGame_Screenshot03,
    ],
    tags: [Tag.Game],
  },
  {
    id: "money_catcher",
    visible: true,
    title: "Money Catcher",
    description:
      "Money Catcher is a game where you catch money falling from the sky and obtain a score as high as possible in 60 seconds whilst also being able to collect pickups that extend the clock.",
    publishDate: new Date("01/03/2018"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: MoneyCatcher_Screenshot01,
    pageUrl: "https://lionstargames.itch.io/money-catcher",
    screenshots: [
      MoneyCatcher_Screenshot01,
      MoneyCatcher_Screenshot02,
      MoneyCatcher_Screenshot03,
    ],
    tags: [Tag.Game],
  },
  {
    id: "wave_survival",
    visible: true,
    title: "Wave Survival",
    description:
      "This is a first-person zombie survival game created in Unity that was made for a college assignment. In this game, you fight waves of enemies whilst also being able to unlock new areas of the map, get new weapons with an RPG loot system, weapon upgrades and boss fights.",
    publishDate: new Date("01/14/2022"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: WaveSurvival_Screenshot01,
    pageUrl: "https://lionstargames.itch.io/waved-based-survival",
    screenshots: [WaveSurvival_Screenshot01],
    tags: [Tag.Game],
  },
  {
    id: "rpg_clicker",
    visible: true,
    title: "RPG Clicker",
    description:
      "An RPG clicker game that includes enemies, bosses and loot. Collect loot to be able to do more damage to your enemies.",
    publishDate: new Date("05/27/2018"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: RpgClicker_Screenshot01,
    pageUrl: "https://lionstargames.itch.io/rpg-clicker",
    screenshots: [
      RpgClicker_Screenshot01,
      RpgClicker_Screenshot02,
      RpgClicker_Screenshot03,
      RpgClicker_Screenshot04,
    ],
    tags: [Tag.Game],
  },
  {
    id: "jlda",
    visible: true,
    title: "John Lowe's Darts Adventure",
    description:
      "This is a game that I was a part of developing at Bubble Creations within a small group of developers and artists. The game contains multiple game modes such as story missions, bonus games, 9 dart challenges and arcade games. The main gameplay loop is you throw darts at enemies in different game modes to earn rewards.",
    publishDate: new Date("08/16/2022"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: Jlda_Screenshot01,
    pageUrl: "",
    screenshots: [
      Jlda_Screenshot01,
      Jlda_Screenshot02,
      Jlda_Screenshot03,
      Jlda_Screenshot04,
      Jlda_Screenshot05,
      Jlda_Screenshot06,
      Jlda_Screenshot07,
    ],
    tags: [Tag.Game],
  },
  {
    id: "bobs_adventure",
    visible: true,
    title: "Bob's Adventure",
    description: "A prototype platformer game.",
    publishDate: new Date("05/27/2023"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: BobsAdventure_Screenshot01,
    pageUrl: "",
    screenshots: [BobsAdventure_Screenshot01],
    tags: [Tag.Game],
  },
  {
    id: "pigeon_and_pete",
    visible: true,
    title: "Pigeon and Pete",
    description:
      "Pigeon & Pete is a game I worked on as part of a game jam with 3 other people. It's a puzzle platformer game where you take control of both Pigeon and Pete to solve puzzles by pooping and platforming.",
    publishDate: new Date("05/27/2022"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: PigeonAndPete_Screenshot01,
    pageUrl: "https://moholty.itch.io/pigeon-and-pete",
    screenshots: [
      PigeonAndPete_Screenshot01,
      PigeonAndPete_Screenshot02,
      PigeonAndPete_Screenshot03,
      PigeonAndPete_Screenshot04,
      PigeonAndPete_Screenshot05,
    ],
    tags: [Tag.Game],
  },
  {
    id: "coin_catcher",
    visible: true,
    title: "Coin Catcher",
    description:
      "Coin Catcher is a 2D platformer where the objective is to collect as many coins as possible under the time limit while dodging danger falling from the sky. The game is based off a previous game called Money Catcher that was only just a prototype.",
    publishDate: new Date("03/27/2024"),
    tools: [Tool.Unity],
    languages: [Language.CSharp],
    thumbnail: CoinCatcher_Screenshot01,
    pageUrl: "https://lionstargames.itch.io/coin-catcher",
    screenshots: [
      CoinCatcher_Screenshot01,
      CoinCatcher_Screenshot02,
      CoinCatcher_Screenshot03,
      CoinCatcher_Screenshot04,
      CoinCatcher_Screenshot05,
      CoinCatcher_Screenshot06,
      CoinCatcher_Screenshot07,
      CoinCatcher_Screenshot08,
    ],
    tags: [Tag.Game],
  },
  {
    id: "miyoo_mini_theme_preview",
    visible: true,
    title: "Miyoo Mini Theme Preview",
    description:
      "A program for previewing Miyoo Mini themes without the need to repeatedly eject/re-insert micro SD card to preview themes.",
    publishDate: new Date("05/18/2024"),
    tools: [Tool.DotNet, Tool.ASP],
    languages: [Language.CSharp, Language.HTML, Language.CSS, Language.Razor],
    thumbnail: MiyooMiniThemePreview_Screenshot03,
    pageUrl: "",
    screenshots: [
      MiyooMiniThemePreview_Screenshot01,
      MiyooMiniThemePreview_Screenshot02,
      MiyooMiniThemePreview_Screenshot03,
    ],
    tags: [Tag.Software],
  },
  {
    id: "portfolio",
    visible: true,
    title: "Portfolio",
    description:
      "My personal portfolio that showcases my skills, abilities and my projects. When I push changes to the main branch from the development branch, I use GitHub Actions to automatically create a web build using GitHub Pages which hosts the website.",
    publishDate: new Date("02/28/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: Portfolio_Screenshot01,
    pageUrl: "",
    screenshots: [
      Portfolio_Screenshot01,
      Portfolio_Screenshot02,
      Portfolio_Screenshot03,
    ],
    tags: [Tag.Website],
  },
  {
    id: "netflix_redesign",
    visible: true,
    title: "Netflix Re-Design",
    description:
      "A Netflix re-design that uses TMDB API to retrieve movies and TV shows.",
    publishDate: new Date("05/26/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: NetflixReDesign_Screenshot01,
    pageUrl: "/websites/netflix",
    screenshots: [NetflixReDesign_Screenshot01, NetflixReDesign_Screenshot02],
    tags: [Tag.Website, Tag.WorkInProgress],
  },
  {
    id: "premier_league_redesign",
    visible: true,
    title: "Premier League Re-Design",
    description:
      "A Premier League website re-design. The site features a league table with fixture simulation.",
    publishDate: new Date("05/29/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: PremierLeagueReDesign_Screenshot01,
    pageUrl: "/websites/premier_league_redesign",
    screenshots: [PremierLeagueReDesign_Screenshot01],
    tags: [Tag.Website, Tag.WorkInProgress],
  },
  {
    id: "subscription_tracker",
    visible: true,
    title: "Subscription Tracker",
    description:
      "A subscription tracker tool that helps keeps track of subscriptions and provides costs per month and per year.",
    publishDate: new Date("06/16/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: SubscriptionTracker_Screenshot01,
    pageUrl: "/websites/subscription_tracker",
    screenshots: [
      SubscriptionTracker_Screenshot01,
      SubscriptionTracker_Screenshot02,
      SubscriptionTracker_Screenshot03,
      SubscriptionTracker_Screenshot04,
    ],
    tags: [Tag.Website],
  },
  {
    id: "life_simulator",
    visible: false,
    title: "Life Simulator",
    description: "A WIP life simulation game.",
    publishDate: new Date("06/15/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: LifeSimulator_Screenshot01,
    pageUrl: "/websites/life_simulator",
    screenshots: [LifeSimulator_Screenshot01],
    tags: [Tag.Website, Tag.Game, Tag.WorkInProgress],
  },
  {
    id: "tic_tac_toe",
    visible: true,
    title: "Tic Tac Toe",
    description: "A tic tac toe game.",
    publishDate: new Date("06/19/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: TicTacToe_Screenshot01,
    pageUrl: "/websites/tic_tac_toe",
    screenshots: [TicTacToe_Screenshot01],
    tags: [Tag.Website, Tag.Game],
  },
  {
    id: "google",
    visible: true,
    title: "Google",
    description: "A Google homepage clone.",
    publishDate: new Date("06/21/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: Google_Screenshot01,
    pageUrl: "/websites/google",
    screenshots: [Google_Screenshot01],
    tags: [Tag.Website],
  },
  {
    id: "rpg_adventure_game",
    visible: false,
    title: "RPG Adventure Game",
    description: "An RPG adventure game.",
    publishDate: new Date("06/20/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: TemporaryThumbnail,
    pageUrl: "/websites/rpg_adventure_game",
    tags: [Tag.Website, Tag.Game, Tag.WorkInProgress],
  },
  {
    id: "borderlands_3_modding_library",
    visible: true,
    title: "Borderlands 3 Modding Library",
    description:
      "A Borderlands 3 modding library tool that helps creating mods for Borderlands 3 using hotfixes. There are other tools out there to create mods using lua, but I wanted to do it my own way and created this tool. It works by adding the mod library .dll file to an empty C# .NET project and creating a new Mod object in the main C# file. The mod class will then convert the code and export it into a text file that can be read by compatible Borderlands 3 mod loaders. It also automatically comments hotfixes in the exported file to make it easy to understand what changes have been made. There is a code example in the GitHub repository.",
    publishDate: new Date("03/04/2024"),
    tools: [Tool.VisualStudio],
    languages: [Language.CSharp],
    thumbnail: Borderlands3ModdingLibrary_Screenshot01,
    pageUrl: "https://github.com/mw-138/borderlands-3-modding-library",
    tags: [Tag.Software, Tag.Game],
  },
  {
    id: "desktop_simulator",
    visible: true,
    title: "Desktop Simulator",
    description: "A desktop simulation project.",
    publishDate: new Date("06/25/2024"),
    tools: [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    languages: [Language.TypeScript, Language.HTML, Language.CSS],
    thumbnail: DesktopSimulator_Screenshot01,
    pageUrl: "/websites/desktop_simulator",
    screenshots: [
      DesktopSimulator_Screenshot01,
      DesktopSimulator_Screenshot02,
      DesktopSimulator_Screenshot03,
    ],
    tags: [Tag.Website, Tag.WorkInProgress],
  },
];

export const EnabledProjects: Project[] = Projects.filter(
  (project) => project.visible,
);

export const RecentProjects: Project[] = EnabledProjects.sort(
  (a, b) => b.publishDate.getTime() - a.publishDate.getTime(),
).slice(0, 3);

export const HighlightedProjects = EnabledProjects.filter((project) => {
  const projects = ["coin_catcher", "netflix_redesign", "subscription_tracker"];
  return projects.includes(project.id);
})
  .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
  .slice(0, 3);

export const HeroProject: Project | undefined = EnabledProjects.find(
  (project) => project.id === "coin_catcher",
);
