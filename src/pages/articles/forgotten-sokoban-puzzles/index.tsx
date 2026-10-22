import React from "react";
import Layout from "../../../components/layout";

import img_soko_tiny_editor_mz700_cover from "./../../../assets/img/soko_tiny_editor_mz700_cover.png";

import img_soko_editor_fm7_cover from "../../../assets/img/soko_editor_fm7_cover.png";

import img_soko_tiny_editor_mz700_yasushi_inoue_puzzle
    from "../../../assets/screenshots/soko_tiny_editor_mz700_yasushi_inoue_puzzle.png";

import img_soko_tiny_editor_mz700_micro_puzzle
    from "../../../assets/screenshots/soko_tiny_editor_mz700_micro_puzzle.png";

import img_soko_editor_fm7_editorial_department_puzzle
    from "../../../assets/screenshots/soko_editor_fm7_editorial_department_puzzle.png";

const yasushi_inoue_puzzle_xsb =
    '------------###########-\n' +
    '----#####---#---#-----#-\n' +
    '----#---#####-#$--#$$$##\n' +
    '---##-#-##--#-#-$##--$-#\n' +
    '---#-$---------$----#--#\n' +
    '-###----###-###-##---$-#\n' +
    '-#--##-##....#--##--$-##\n' +
    '-#---$$-#....#-$####@##-\n' +
    '-#-#$#--#....#--#--###--\n' +
    '-#-#---##..#.####--$-#--\n' +
    '-#-$---#.....#--#--#-#--\n' +
    '##-$####.....#---$-#-#--\n' +
    '#--$---###-###--####-#--\n' +
    '#--#$#---$----$-#----#--\n' +
    '#----$-#-#-######-####--\n' +
    '####-###-#--------#-----\n' +
    '-#--$----##########-----\n' +
    '-#-$-##--#--------------\n' +
    '-#---#####--------------\n' +
    '-#####------------------\n' +
    'Title: A Work by Sokoban user Yasushi Inoue\n' +
    'Source: 1984-03 MICRO magazine\n';

const micro_puzzle_xsb =
    '---###-----####-----#####-#####-\n' +
    '####--######--########--###---#-\n' +
    '#-----@$-----$-----#---$----$-#-\n' +
    '#--#---##--#---###$#-$######--#-\n' +
    '##-##--#--##-$--#-----#.....#-#-\n' +
    '-#-###---###-$--#----#......#-#-\n' +
    '-#-#-##-##-#-$--#-$--#.....---##\n' +
    '-#-#--###--#-$--#--$-#.....----#\n' +
    '-#-#---#---#----#-----#.....#--#\n' +
    '-#-#-------#---###----######---#\n' +
    '-#-$----------$-----$--------$##\n' +
    '-#--$#--######----######--$---#-\n' +
    '-#--$---#-----#$-##----##-#$--#-\n' +
    '-#-$#$--#-----#--#------#-$---#-\n' +
    '-#--$---######---#------#--#--#-\n' +
    '-##-----#---#--#-##----##--$-##-\n' +
    '--##----#----##---######----##--\n' +
    '---##-----------------------#---\n' +
    '----##########---############---\n' +
    '-------------#####--------------\n' +
    'Title: When MICRO Makes It…\n' +
    'Source: 1984-03 MICRO magazine\n';

const ohfm7_editorial_department_puzzle =
    '################################\n' +
    '#-----#---#--------------------#\n' +
    '#-$-$---$-#--$-$-$-$----$-$-$--#\n' +
    '#####-#---#-$#########$####-$--#\n' +
    '#---#-#---#---------------#-$--#\n' +
    '#-$-$-##$############--#---#-$-#\n' +
    '#--$---$----------------#---#--#\n' +
    '#-$-$---$-#######$#####--#---#-#\n' +
    '#--$---$--#-----------#---#---##\n' +
    '#-$-$---$-#-#-###-###-#-$--#---#\n' +
    '#---#--#--#-#-#-----#-#-$---#--#\n' +
    '#---#--###--#-#-###-#--#--$--#-#\n' +
    '#---$--#---#--#@#---#-$-##-----#\n' +
    '#####-##$###$##$##$###---------#\n' +
    '#---$-..--.----.-....#.---.###-#\n' +
    '#-$-#.##.#.---#.#.-###..#..#---#\n' +
    '#--$#.##.#...##.#...--.-.-.#$$-#\n' +
    '#-$-#.##.-.--.###.--##.---.$---#\n' +
    '#---$-..##.--.-.#.#-##.#--.#---#\n' +
    '################################\n' +
    'Title: Example puzzle by editorial department\n' +
    'Source: 1984-06 Oh! FM magazine\n';

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Forgotten Sokoban Puzzles</h3>
                            <p className="text-right">
                                <sub>Published: April 28, 2025</sub>
                            </p>
                            <p>
                                A few years ago, while collecting 1980s Japanese computer magazines featuring articles
                                about Sokoban, I came across some puzzles I didn’t recognize. They didn’t appear to be
                                part of any official release. After extensive searching, I confirmed they only ever
                                appeared in these printed magazines. All of them date back to 1984.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid magazine-cover ml-4 mt-4`}
                                    src={img_soko_tiny_editor_mz700_cover}
                                    alt=""
                                />
                                <img
                                    loading={"eager"}
                                    className={`img-fluid magazine-cover ml-4 mt-4`}
                                    src={img_soko_editor_fm7_cover}
                                    alt=""
                                />
                            </p>
                            <p>
                                The first puzzle was found in the March 1984 issue of MICRO magazine, which included the
                                source code for the 倉庫番 Tiny Editor for the MZ-700. The magazine mentioned that,
                                unlike the commercially available Sokoban 2 editor (which didn’t specify its platform),
                                this version lacked graphics. Instead, the warehouse layout was displayed using the
                                MZ-700’s character set. Alongside this, the magazine featured eight puzzles as
                                screenshots — some from 倉庫番1 and others from 倉庫番2 for the PC-8801 — as well as
                                three additional puzzles for the MZ-700. While one of these puzzles had been published
                                in 倉庫番2, the other two were new to this issue.
                            </p>
                            <p>
                                The first of these unpublished puzzles is titled “A Work by Sokoban user Yasushi Inoue”
                                (「倉庫番」ユーザーの井上寧さんの作品). Below is a screenshot of that puzzle:
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid lost-puzzle-img`}
                                    src={img_soko_tiny_editor_mz700_yasushi_inoue_puzzle}
                                    alt=""
                                />
                            </p>
                            <p>
                                I consider this puzzle a gem — a room-based puzzle in the classic Thinking Rabbit style.
                                Here it is in XSB format:
                            </p>
                            <pre>{yasushi_inoue_puzzle_xsb}</pre>
                            <p>
                                Next to this puzzle was another, titled “When MICRO Makes It…” (MICROがつくると…).
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid lost-puzzle-img`}
                                    src={img_soko_tiny_editor_mz700_micro_puzzle}
                                    alt=""
                                />
                            </p>
                            <p>
                                While more straightforward, it is still an interesting puzzle. It uses walls to form the
                                word 'MICRO'. Here it is in XSB format:
                            </p>
                            <pre>{micro_puzzle_xsb}</pre>
                            <p>
                                Another puzzle appeared in the June 1984 issue of Oh! FM magazine, which included the
                                source code for 倉庫番EDITOR for the FM-7. This type-in program, which included machine
                                language data, allowed players to create their own Sokoban puzzles. The magazine noted
                                that this editor was part of 倉庫番2 for the FM-7. Since creating puzzles from scratch
                                was considered difficult for beginners, the article included three example puzzles: two
                                from 倉庫番2 and one created by the editorial department. I’d like to share that last
                                one here, as it’s not found elsewhere:
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid lost-puzzle-img`}
                                    src={img_soko_editor_fm7_editorial_department_puzzle}
                                    alt=""
                                />
                            </p>
                            <p>
                                The storage locations form the phrase 'Oh!FM', and once the puzzle is solved, the boxes
                                clearly reveal it. This puzzle may seem simple at first, but it requires a significant
                                number of moves to solve and presents some challenges. Here it is in XSB format:
                            </p>
                            <pre>{ohfm7_editorial_department_puzzle}</pre>
                            <p>
                                It’s fascinating to unearth these forgotten puzzles from 1980s magazines, reminding us
                                how, back then, creating your own Sokoban puzzles was a significant part of the fun.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
