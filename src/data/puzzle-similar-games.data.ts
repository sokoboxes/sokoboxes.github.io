import {InterfaceGameItem} from "../interfaces/interface-game-item";

import img_tnt_bomb_bomb_pc8001_mk2_001 from "../assets/screenshots/tnt_bomb_bomb_pc8001_mk2_001.png";
import img_tnt_bomb_bomb_pc8001_mk2_title from "../assets/screenshots/tnt_bomb_bomb_pc8001_mk2_title.png";
import img_tnt_bomb_bomb_pc8001_mk2_opening from "../assets/screenshots/tnt_bomb_bomb_pc8001_mk2_opening.png";

import img_puk_puk_msx_001 from "../assets/screenshots/puk_puk_msx_001.png";
import img_puk_puk_msx_title from "../assets/screenshots/puk_puk_msx_title.png";

import img_adventures_of_lolo_nes_002 from "../assets/screenshots/adventures_of_lolo_nes_002.png";
import img_adventures_of_lolo_nes_004 from "../assets/screenshots/adventures_of_lolo_nes_004.png";
import img_adventures_of_lolo_nes_title from "../assets/screenshots/adventures_of_lolo_nes_title.png";

import img_kickle_cubicle_nes_001 from "../assets/screenshots/kickle_cubicle_nes_001.png";
import img_kickle_cubicle_nes_title from "../assets/screenshots/kickle_cubicle_nes_title.png";

import img_little_magic_snes_001 from "../assets/screenshots/little_magic_snes_001.png";
import img_little_magic_snes_title from "../assets/screenshots/little_magic_snes_title.png";

import img_princess_confusion_pc98_002 from "../assets/screenshots/princess_confusion_pc98_002.png";
import img_princess_confusion_pc98_006 from "../assets/screenshots/princess_confusion_pc98_006.png";
import img_princess_confusion_pc98_title from "../assets/screenshots/princess_confusion_pc98_title.png";

import img_rescue_rover_msdos_001 from "../assets/screenshots/rescue_rover_msdos_001.png";
import img_rescue_rover_msdos_002 from "../assets/screenshots/rescue_rover_msdos_002.png";

import img_rescue_rover2_msdos_001 from "../assets/screenshots/rescue_rover2_msdos_001.png";
import img_rescue_rover2_msdos_002 from "../assets/screenshots/rescue_rover2_msdos_002.png";

import img_fasta_sharp_x68000_001 from "../assets/screenshots/fasta_sharp_x68000_001.png";
import img_fasta_sharp_x68000_007 from "../assets/screenshots/fasta_sharp_x68000_007.png";
import img_fasta_sharp_x68000_title from "../assets/screenshots/fasta_sharp_x68000_title.png";

import img_shyre_msx_play from "../assets/screenshots/shyre_msx_play.png";
import img_shyre_msx_title from "../assets/screenshots/shyre_msx_title.png";

export const puzzleSimilarGames: Array<InterfaceGameItem> = [
    {
        title: "TNT Bomb Bomb (PC-8001 mk2)",
        year: "1984",
        publisher: "Thinking Rabbit",
        images: [
            img_tnt_bomb_bomb_pc8001_mk2_001,
            img_tnt_bomb_bomb_pc8001_mk2_title,
            img_tnt_bomb_bomb_pc8001_mk2_opening,
        ],
        width: 640,
        height: 400,
        comment: "Push one or more pieces at a time to connect them and solve each puzzle."
    },
    {
        title: "Puk Puk (MSX)",
        year: "1986 February",
        publisher: "POPCOM",
        images: [
            img_puk_puk_msx_001,
            img_puk_puk_msx_title,
        ],
        width: 544,
        height: 480,
        comment: "Push boxes to open a path and collect all the stars."
    },
    {
        title: "Adventures of Lolo (Nintendo)",
        year: "1989",
        publisher: "HAL America",
        images: [
            img_adventures_of_lolo_nes_004,
            img_adventures_of_lolo_nes_002,
            img_adventures_of_lolo_nes_title,
        ],
        width: 256,
        height: 240,
        comment: "Collect hearts, pushing boxes and avoiding monsters when needed, to unlock the Jewel Box and get the item inside."
    },
    {
        title: "Kickle Cubicle (Nintendo)",
        year: "1990",
        publisher: "Irem",
        images: [
            img_kickle_cubicle_nes_001,
            img_kickle_cubicle_nes_title,
        ],
        width: 256,
        height: 240,
        comment: "Collect the red Dream Bags, freezing enemies and creating walkways as you go."
    },
    {
        title: "Rescue Rover (MS-DOS)",
        year: "1991",
        publisher: "Softdisk",
        images: [
            img_rescue_rover_msdos_001,
            img_rescue_rover_msdos_002,
        ],
        width: 320,
        height: 200,
        comment: "Puzzle-action. Push crates, marble balls and mirrors to disable or avoid robots, and rescue the dog."
    },
    {
        title: "Rescue Rover 2 (MS-DOS)",
        year: "1991",
        publisher: "Softdisk",
        images: [
            img_rescue_rover2_msdos_001,
            img_rescue_rover2_msdos_002,
        ],
        width: 320,
        height: 200,
        comment: "Puzzle-action. Part 2."
    },
    {
        title: "Princess Confusion (PC-98)",
        year: "1992",
        publisher: "Initialize",
        images: [
            img_princess_confusion_pc98_002,
            img_princess_confusion_pc98_006,
            img_princess_confusion_pc98_title,
        ],
        width: 640,
        height: 400,
        comment: "Push balls into the target square. L, U, R, and D balls shift gravity when they fall, moving other balls automatically and preventing the player's movement in the opposite direction; N resets gravity, and B explodes along with weaker wall tiles on contact."
    },
    {
        title: "Fasta (Sharp X68000)",
        year: "1993",
        publisher: "Meet-Net",
        images: [
            img_fasta_sharp_x68000_001,
            img_fasta_sharp_x68000_007,
            img_fasta_sharp_x68000_title,
        ],
        width: 512,
        height: 512,
        comment: "Push the yellow stones into the water. Wall blocks with a dent are movable. The player can walk on the red floor and on grass, but movable walls and yellow stones can only be moved on the red floor."
    },
    {
        title: "Little Magic (Super Nintendo)",
        year: "1993",
        publisher: "Altron",
        images: [
            img_little_magic_snes_001,
            img_little_magic_snes_title,
        ],
        width: 256,
        height: 224,
        comment: "Push a magic stone to the target square with your hands, or throw magic bubbles whose explosions move the stone."
    },
    {
        title: "Shyre (MSX)",
        year: "2023",
        publisher: "Raul Portales",
        images: [
            img_shyre_msx_play,
            img_shyre_msx_title,
        ],
        width: 544,
        height: 480,
        comment: "Puzzle exploration."
    },
];
