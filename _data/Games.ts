import Game from "@/app/classes/Game";

import PixelPlatformer_Screenshot01 from "@/public/games/pixel_platformer/screenshot_01.png";

import RpgBoardGame_Screenshot01 from "@/public/games/rpg_board_game/screenshot_01.png";
import RpgBoardGame_Screenshot02 from "@/public/games/rpg_board_game/screenshot_02.png";
import RpgBoardGame_Screenshot03 from "@/public/games/rpg_board_game/screenshot_03.png";

import MoneyCatcher_Screenshot01 from "@/public/games/money_catcher/screenshot_01.png";
import MoneyCatcher_Screenshot02 from "@/public/games/money_catcher/screenshot_02.png";
import MoneyCatcher_Screenshot03 from "@/public/games/money_catcher/screenshot_03.png";

import WaveSurvival_Screenshot01 from "@/public/games/wave_survival/screenshot_01.jpeg";

import RpgClicker_Screenshot01 from "@/public/games/rpg_clicker/screenshot_01.png";
import RpgClicker_Screenshot02 from "@/public/games/rpg_clicker/screenshot_02.png";
import RpgClicker_Screenshot03 from "@/public/games/rpg_clicker/screenshot_03.png";
import RpgClicker_Screenshot04 from "@/public/games/rpg_clicker/screenshot_04.png";

import Jlda_Screenshot01 from "@/public/games/jlda/screenshot_01.png";
import Jlda_Screenshot02 from "@/public/games/jlda/screenshot_02.png";
import Jlda_Screenshot03 from "@/public/games/jlda/screenshot_03.png";
import Jlda_Screenshot04 from "@/public/games/jlda/screenshot_04.png";
import Jlda_Screenshot05 from "@/public/games/jlda/screenshot_05.png";
import Jlda_Screenshot06 from "@/public/games/jlda/screenshot_06.png";
import Jlda_Screenshot07 from "@/public/games/jlda/screenshot_07.png";

import BobsAdventure_Screenshot01 from "@/public/games/bobs_adventure/screenshot_01.jpg";

import PigeonAndPete_Screenshot01 from "@/public/games/pigeon_and_pete/screenshot_01.png";
import PigeonAndPete_Screenshot02 from "@/public/games/pigeon_and_pete/screenshot_02.png";
import PigeonAndPete_Screenshot03 from "@/public/games/pigeon_and_pete/screenshot_03.png";
import PigeonAndPete_Screenshot04 from "@/public/games/pigeon_and_pete/screenshot_04.png";
import PigeonAndPete_Screenshot05 from "@/public/games/pigeon_and_pete/screenshot_05.png";

export const GameList: Game[] = [
  new Game(
    true,
    true,
    "pixel_platformer",
    "Pixel Platformer",
    "",
    2024,
    PixelPlatformer_Screenshot01,
    "",
    [PixelPlatformer_Screenshot01],
    []
  ),
  new Game(
    true,
    true,
    "rpg_board_game",
    "RPG Board Game",
    "",
    2024,
    RpgBoardGame_Screenshot01,
    "",
    [
      RpgBoardGame_Screenshot01,
      RpgBoardGame_Screenshot02,
      RpgBoardGame_Screenshot03,
    ],
    []
  ),
  new Game(
    true,
    true,
    "money_catcher",
    "Money Catcher",
    "Money Catcher is a game where you catch money falling from the sky and obtain a score as high as possible in 60 seconds.",
    2018,
    MoneyCatcher_Screenshot01,
    "",
    [
      MoneyCatcher_Screenshot01,
      MoneyCatcher_Screenshot02,
      MoneyCatcher_Screenshot03,
    ],
    []
  ),
  new Game(
    true,
    true,
    "wave_survival",
    "Wave Survival",
    "This is a first-person zombie survival game created in Unity that was made for a college assignment. In this game, you fight waves of enemies whilst also being able to unlock new areas of the map, get new weapons with an RPG loot system, weapon upgrades and boss fights.",
    2020,
    WaveSurvival_Screenshot01,
    "",
    [WaveSurvival_Screenshot01],
    []
  ),
  new Game(
    false,
    true,
    "rpg_clicker",
    "RPG Clicker",
    "An RPG clicker game that includes enemies, bosses and loot. Collect loot to be able to do more damage to your enemies.",
    2018,
    RpgClicker_Screenshot01,
    "",
    [
      RpgClicker_Screenshot01,
      RpgClicker_Screenshot02,
      RpgClicker_Screenshot03,
      RpgClicker_Screenshot04,
    ],
    []
  ),
  new Game(
    false,
    true,
    "jlda",
    "John Lowe's Darts Adventure",
    "This is game that I was apart of developing at Bubble Creations within a small group of developers and artists. The game contains multiple game modes such as story missions, bonus games, 9 dart challenges and arcade games. The main gameplay loop is you throw darts at enemies in different game modes to earn rewards.",
    2022,
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
    []
  ),
  new Game(
    false,
    true,
    "bobs_adventure",
    "Bob's Adventure",
    "",
    2023,
    BobsAdventure_Screenshot01,
    "",
    [BobsAdventure_Screenshot01],
    []
  ),
  new Game(
    false,
    true,
    "pigeon_and_pete",
    "Pigeon and Pete",
    "Pigeon & Pete is a game I worked on as part of a game jam with 3 other people. It's a puzzle platformer game where you take control of both Pigeon and Pete to solve puzzles by pooping and platforming.",
    2022,
    PigeonAndPete_Screenshot01,
    "",
    [
      PigeonAndPete_Screenshot01,
      PigeonAndPete_Screenshot02,
      PigeonAndPete_Screenshot03,
      PigeonAndPete_Screenshot04,
      PigeonAndPete_Screenshot05,
    ],
    []
  ),
];
