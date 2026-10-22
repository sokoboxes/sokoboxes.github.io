import img_sokomania_nintendo_dsi_episode2_002 from "../assets/screenshots/sokomania_nintendo_dsi_episode2_002.png";
import img_sokomania_nintendo_dsi_title from "../assets/screenshots/sokomania_nintendo_dsi_title.png";

import img_sokomania2_nintendo_dsi_003 from "../assets/screenshots/sokomania2_nintendo_dsi_003.png";
import img_sokomania2_nintendo_dsi_title from "../assets/screenshots/sokomania2_nintendo_dsi_title.png";

import img_picoban_pico8_001 from "../assets/screenshots/picoban_pico8_001.png";
import img_picoban_pico8_title from "../assets/screenshots/picoban_pico8_title.png";

import img_grabbot_web_002 from "../assets/screenshots/grabbot_web_002.png";

import img_boxbob_web_002 from "../assets/screenshots/boxbob_web_002.png";

import img_a_maze_fox_win_001 from "../assets/screenshots/a_maze_fox_win_001.png";

import img_sokoboxes_duo_win_001 from "../assets/screenshots/sokoboxes_duo_win_001.png";

import img_cats_love_boxes_win_001 from "../assets/screenshots/cats_love_boxes_win_001.png";

import img_soko_banana_nes_001 from "../assets/screenshots/soko_banana_nes_001.png";
import img_soko_banana_nes_title from "../assets/screenshots/soko_banana_nes_title.png";


import {InterfaceGameItem} from "../interfaces/interface-game-item";

export const sokobanVariantsGames: Array<InterfaceGameItem> = [
    {
        title: "Sokomania (Nintendo DSi)",
        year: "2010",
        publisher: "Cinemax",
        images: [
            img_sokomania_nintendo_dsi_episode2_002,
            img_sokomania_nintendo_dsi_title
        ],
        width: 480,
        height: 384,
    },
    {
        title: "Sokomania 2: Cool Job (Nintendo DSi)",
        year: "2014",
        publisher: "Cinemax",
        images: [
            img_sokomania2_nintendo_dsi_003,
            img_sokomania2_nintendo_dsi_title
        ],
        width: 480,
        height: 384,
    },
    {
        title: "Picoban (Pico-8)",
        year: "2018",
        publisher: "Carlos Pedroso",
        images: [
            img_picoban_pico8_001,
            img_picoban_pico8_title
        ],
        width: 400,
        height: 256,
    },
    {
        title: "BoxBob (Web)",
        year: "2021",
        publisher: "Carlos Pedroso",
        images: [img_boxbob_web_002],
        width: 960,
        height: 768,
    },
    {
        title: "Grabbot (Web)",
        year: "2021",
        publisher: "Carlos Pedroso",
        images: [img_grabbot_web_002],
        width: 800,
        height: 600,
    },
    {
        title: "A Maze Fox (Windows)",
        year: "2022 January",
        publisher: "Chubby Potato",
        images: [img_a_maze_fox_win_001],
        width: 1280,
        height: 720,
    },
    {
        title: "Sokoboxes Duo (Windows)",
        year: "2023 June",
        publisher: "Carlos Montiers Aguilera",
        images: [img_sokoboxes_duo_win_001],
        width: 1280,
        height: 720,
    },
    {
        title: "Cats Love Boxes (Windows)",
        year: "2024 February",
        publisher: "Devcats",
        images: [img_cats_love_boxes_win_001],
        width: 1280,
        height: 720,
    },
    {
        title: "Soko Banana (NES)",
        year: "2025",
        publisher: "Flip For Fate",
        images: [
            img_soko_banana_nes_001,
            img_soko_banana_nes_title
        ],
        width: 400,
        height: 240,
    },
    //
];
