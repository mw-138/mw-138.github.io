import Project, { Language, Tag, Tool } from "@/app/classes/Project";

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

import NetflixReDesign_Screenshot01 from "@/public/projects/netflix_redesign/screenshot_01.png";
import NetflixReDesign_Screenshot02 from "@/public/projects/netflix_redesign/screenshot_02.png";

import MinimalPortfolio01_Screenshot01 from "@/public/projects/minimal_portfolio_01/screenshot_01.png";

export const Projects: Project[] = [
  new Project(
    true,
    true,
    "pixel_platformer",
    "Pixel Platformer",
    "A 2D platformer prototype game.",
    2024,
    [Tool.Unity],
    [Language.CSharp],
    PixelPlatformer_Screenshot01,
    "",
    [PixelPlatformer_Screenshot01],
    [],
    [Tag.Game],
  ),
  new Project(
    true,
    true,
    "rpg_board_game",
    "RPG Board Game",
    "A prototype game based on Monopoly where the place rolls a dice and moves around the board collecting resources and fighting enemies. When the player moves around the entire board, the tiles re-generate and change the contents of each tile.",
    2024,
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
    false,
    true,
    "money_catcher",
    "Money Catcher",
    "Money Catcher is a game where you catch money falling from the sky and obtain a score as high as possible in 60 seconds whilst also being able to collect pickups that extend the clock.",
    2018,
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
    false,
    true,
    "wave_survival",
    "Wave Survival",
    "This is a first-person zombie survival game created in Unity that was made for a college assignment. In this game, you fight waves of enemies whilst also being able to unlock new areas of the map, get new weapons with an RPG loot system, weapon upgrades and boss fights.",
    2020,
    [Tool.Unity],
    [Language.CSharp],
    WaveSurvival_Screenshot01,
    "https://lionstargames.itch.io/waved-based-survival",
    [WaveSurvival_Screenshot01],
    [],
    [Tag.Game],
  ),
  new Project(
    false,
    true,
    "rpg_clicker",
    "RPG Clicker",
    "An RPG clicker game that includes enemies, bosses and loot. Collect loot to be able to do more damage to your enemies.",
    2018,
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
    false,
    true,
    "jlda",
    "John Lowe's Darts Adventure",
    "This is game that I was apart of developing at Bubble Creations within a small group of developers and artists. The game contains multiple game modes such as story missions, bonus games, 9 dart challenges and arcade games. The main gameplay loop is you throw darts at enemies in different game modes to earn rewards.",
    2022,
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
    false,
    true,
    "bobs_adventure",
    "Bob's Adventure",
    "A prototype platformer game.",
    2023,
    [Tool.Unity],
    [Language.CSharp],
    BobsAdventure_Screenshot01,
    "",
    [BobsAdventure_Screenshot01],
    [],
    [Tag.Game],
  ),
  new Project(
    false,
    true,
    "pigeon_and_pete",
    "Pigeon and Pete",
    "Pigeon & Pete is a game I worked on as part of a game jam with 3 other people. It's a puzzle platformer game where you take control of both Pigeon and Pete to solve puzzles by pooping and platforming.",
    2022,
    [Tool.Unity],
    [Language.CSharp],
    PigeonAndPete_Screenshot01,
    "",
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
    true,
    true,
    "coin_catcher",
    "Coin Catcher",
    "Coin Catcher is a 2D platformer where the objective is to collect as many coins as possible under the time limit while dodging danger falling from the sky. The game is based off a previous game called Money Catcher that was only just a prototype.",
    2024,
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
    true,
    true,
    "miyoo_mini_theme_preview",
    "Miyoo Mini Theme Preview",
    "A program for previewing Miyoo Mini themes without the need to repeatedly eject/re-insert micro SD card to preview themes.",
    2024,
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
    false,
    true,
    "portfolio",
    "Portfolio",
    "My personal portfolio that showcases my skills, abilities and my projects.",
    2024,
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    Portfolio_Screenshot01,
    "",
    [Portfolio_Screenshot01, Portfolio_Screenshot02],
    [],
    [Tag.Website],
  ),
  new Project(
    true,
    true,
    "netflix_redesign",
    "Netflix Re-Design",
    "A Netflix re-design that uses TMDB api to retrieve movies and TV shows.",
    2024,
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    NetflixReDesign_Screenshot01,
    "/websites/netflix",
    [NetflixReDesign_Screenshot01, NetflixReDesign_Screenshot02],
    [],
    [Tag.Website],
  ),
  new Project(
    true,
    true,
    "minimal_portfolio_01",
    "Minimal Portfolio 01",
    "A minimal portfolio design.",
    2024,
    [Tool.VsCode, Tool.NextJs, Tool.React, Tool.TailwindCSS],
    [Language.TypeScript, Language.HTML, Language.CSS],
    MinimalPortfolio01_Screenshot01,
    "/websites/minimal_portfolio_01",
    [MinimalPortfolio01_Screenshot01],
    [],
    [Tag.Website],
  ),
];
