import React from "react";
import Layout from "../../../components/layout";

import img_sokoban_pc8801_title from "../../../assets/screenshots/sokoban_pc8801_title.png";
import img_sokoban_pc8801_001 from "../../../assets/screenshots/sokoban_pc8801_001.png";
import img_sokoban_pc8801_011 from "../../../assets/screenshots/sokoban_pc8801_011.png";

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Sokoban (PC-8801)</h3>
                            <p className="text-right">
                                <sub>Published: May 22, 2022</sub>
                            </p>
                            <p>
                                The first commercial Sokoban game was created in 1982 for
                                PC-8801 and was distributed in a cassette tape format in 1982.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_title}
                                    alt="Sokoban 1 (PC-8801) title"
                                />
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_001}
                                    alt="Sokoban 1 (PC-8801) puzzle 1"
                                />
                            </p>
                            <p>
                                The source code of the game was also included in the 1987 book
                                "THE 倉庫番" (pages 117-122).
                            </p>
                            <p>
                                This game featured 20 puzzles, but only the first 10 used the core Sokoban mechanics.
                                Puzzles 11 to 20 introduced a secret mechanic: the player can break certain predefined
                                walls by pressing them from a specific side, leaving a free space in their wake.
                            </p>
                            <p>
                                The breakable walls did not differ visually from ordinary walls, but breaking them is
                                essential to solving the puzzle.
                            </p>
                            <p>
                                A review in the book <em>The Sokoban</em> (THE 倉庫番) by Junji Tanaka said that solving
                                these puzzles required Ultra C thinking, a Japanese term meaning to go beyond your
                                limits. Although he acknowledged that discovering the trick brought a moment of
                                satisfaction, he felt it was a technique that defied common sense and said it should
                                never be allowed in the world of puzzles.
                            </p>
                            <p>
                                Puzzles with breakable walls never appeared again in the Sokoban games.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_011}
                                    alt="Sokoban 1 (PC-8801) puzzle 11"
                                />
                            </p>
                            <p>
                                Curiosity: The cassette tape for this game is physically blank on side B, but reading
                                the content reveals the entire game is present on both sides!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
