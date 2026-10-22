import React from "react";
import Layout from "../../components/layout";

import {
    gamesChina,
    gamesInternational,
    gamesJapan1984to1989various,
    gamesJapan1990to1993,
    gamesJapan1995to2000,
    gamesJapanKeitai,
    gamesJapan2015to2020,
    gamesJapanGameBoy,
    gamesUSAGameBoy,
    gamesJapanOthers,
    gamesJapanPC9801,
    gamesJapanSokoban1,
    gamesJapanSokoban1Extra,
    gamesJapanSokoban2,
    gamesOthersJapan,
    gamesOthersOutsideJapan,
    gamesSpectrumHoloByte,
} from "../../data/sokoban.data";
import {sokobanVariantsGames} from "../../data/sokoban-variants.data";
import {puzzleSimilarGames} from "../../data/puzzle-similar-games.data";
import {GameCard} from "../../components/game-card/game-card";

import img_sokoban_puzzle_xbfh from "../../assets/img/sokoban_puzzle_xbfh.png";
import img_sokoban_items_1_cmontiers from "../../assets/img/sokoban_items_1_cmontiers.jpg";

const lastUpdate = "April 23, 2026"

export default function Index() {

    return (
        <Layout>
        <section>
            <div className="container">

                <div className="row">
                    <div className="col-12 mb-2 rounded bg-white">
                        <h3>Introduction</h3>
                        <p>
                            Sokoban is a type of puzzle video game in which the player pushes boxes around in a
                            warehouse, trying to get them to storage locations. This might seem simple, but the limited
                            space can make it surprisingly challenging.
                        </p>
                    </div>
                </div>
                <div className="row rounded bg-white mb-2">
                    <div className="col-12">
                        <h3>Gameplay</h3>
                        <div className="mr-3">
                            <p>
                                The warehouse is a grid composed of floor squares and impassable wall squares.
                                Some floor squares contain a box and some are marked as storage locations.
                                The number of boxes equals the number of storage locations.
                            </p>
                            <p className="text-center">
                                <img
                                    loading={"eager"}
                                    className="img-fluid puzzle-img"
                                    src={img_sokoban_puzzle_xbfh}
                                    alt=""
                                />
                            </p>
                            <p>
                                The player moves in four directions (up, down, left, or right) and cannot pass through
                                walls or boxes.
                            </p>
                            <p>
                                Boxes are heavy and can only be pushed one square forward if directly in front of the
                                player, and the space directly beyond the box is free of obstacles (a wall or another
                                box). Boxes cannot be pulled or lifted, and only one can be pushed at a time.
                            </p>
                            <p>
                                The puzzle is solved when all boxes are on storage locations.
                            </p>
                            <p>
                                Sokoban requires strategic thinking and careful planning. A misplaced box can block
                                pathways or create dead ends, often forcing players to undo moves or restart the puzzle.
                            </p>
                            <p>
                              Some puzzles can be really tricky, but the thrill of success makes it all worthwhile!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 rounded bg-white">
                        <h3 className="mb-0">History</h3>
                        <p className="text-right">
                            <sub>Last update: November 26, 2025</sub>
                        </p>
                        <p>
                            Sokoban (倉庫番) is a puzzle video game created in Japan in 1981
                            by Hiroyuki Imabayashi.
                        </p>
                        <p>
                            In 1982, he founded his software company Thinking Rabbit and
                            began to publish and license many Sokoban games.
                        </p>
                        <img
                            loading={"eager"}
                            className="img-thumbnail text-center mb-3"
                            src={img_sokoban_items_1_cmontiers}
                            alt=""
                        ></img>
                        <p>
                            However, around the year 2000, Thinking Rabbit became inactive. Subsequently, in 2001,
                            Falcon, another Japanese software company, acquired the Sokoban and Thinking Rabbit
                            trademarks, and has since continued to develop Sokoban games and publish them under the
                            Thinking Rabbit brand, as well as license official Sokoban titles.
                        </p>
                        <p>
                            In addition, over the years, other companies and individuals created games with the same
                            mechanics, often called Sokoban clones, which also contributed to Sokoban's popularity.
                        </p>
                        <p>
                            To get an idea of what the official games and clones look like, see the screenshots below.
                        </p>
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan - Sokoban 1</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanSokoban1.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan - Sokoban 1 Extra</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanSokoban1Extra.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan - Sokoban 2</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanSokoban2.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases 1984-1989 (various)</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapan1984to1989various.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases PC-9801</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanPC9801.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases Others</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanOthers.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-6 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases Game Boy</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanGameBoy.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>USA releases Game Boy</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesUSAGameBoy.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases 1990-1993</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapan1990to1993.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases 1995-2000</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapan1995to2000.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases for mobile phones (keitai) 2004-2007</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapanKeitai.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-3 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Japan releases 2015-2020</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesJapan2015to2020.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>International releases</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesInternational.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>U.S. releases by Spectrum HoloByte</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesSpectrumHoloByte.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>China releases</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesChina.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Others (Japan)</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesOthersJapan.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 mt-2 mb-2 rounded bg-white">
                        <h6>Others (International)</h6>
                    </div>
                    <div className="row mb-2">
                        {gamesOthersOutsideJapan.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-2 rounded bg-white">
                        <h3>Sokoban Variants</h3>
                        <p>
                            Games that follow Sokoban’s core mechanics but introduce additional behaviors or new
                            elements, such as different types of boxes.
                        </p>
                    </div>

                    <div className="row mb-2">
                        {sokobanVariantsGames.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-2 rounded bg-white">
                        <h3>Puzzle games similar to Sokoban</h3>
                        <p>
                            Some puzzle games resemble Sokoban because they involve pushing objects through a maze, but the gameplay objective is completely different.
                        </p>
                    </div>

                    <div className="row mb-2">
                        {puzzleSimilarGames.map((game, index) => (
                            <div key={index} className="col-12 col-sm-12 col-lg-4 mb-2">
                                <GameCard game={game}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12 rounded bg-white">
                        <h3>What does the word 'Sokoban' mean?</h3>
                        <p>The word Sokoban is written using Kanji.</p>
                        <p>
                            Ming Wu, a Chinese fan of the game, kindly explained to me how it
                            was written:
                        </p>
                        <ul>
                            <li>倉庫番 (Traditional Chinese characters).</li>
                            <li>仓库番 (Simplified Chinese characters).</li>
                            <li>
                                倉庫番 == 仓库番 are exactly the same in meaning and in saying.
                            </li>
                            <li>倉庫番 in Japanese means "warehouse keeper".</li>
                            <li>
                                倉庫番 in Chinese means "spending time in the warehouse" or
                                "things happening in the warehouse".
                            </li>
                            <li>Most people in China call the game 推箱子 (Push box).</li>
                        </ul>
                        <p>Katakana: ソウコバン. Hiragana: そうこばん.</p>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12 rounded bg-white">
                        <h3>Thanks</h3>
                        <p className="mb-2">I'm really grateful to Mr. Takatoshi, who helped me with:</p>
                        <ul className="mb-2">
                          <li>Transcription of the type-in programs: Sokoban Tiny Editor (MZ-700, PC-8001), Sokoban for Pasopia 7.</li>
                          <li>Dump of the cassette tapes: Sokoban 2 (PC-6001 mk2, PC-6001 32k).</li>
                        </ul>
                        <p className="mb-2">I'm also grateful to Mr. Sato for his assistance with:</p>
                        <ul className="mb-4">
                            <li>Sokoban 2 and Sokoban Takeishi screenshots (MB-S1).</li>
                        </ul>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12 rounded bg-white">
                        <h3>Contact</h3>
                        <p className="mb-0">
                            If you have any questions or just want to get in touch, please send an email to: <a
                            className="text-primary" href="mailto:cmontiers@gmail.com"
                            >cmontiers@gmail.com</a>
                        </p>
                        <p>— Carlos</p>

                    </div>
                </div>

                <div className="row mb-1">
                    <div className="col-12 rounded bg-white">
                        <p className="text-center mb-2">
                            <sub>Last update: {lastUpdate}</sub>
                        </p>
                    </div>
                </div>

            </div>
        </section>
        </Layout>
    );
}
