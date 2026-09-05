import React from "react";
import Layout from "../../../components/layout";

import img_bibo4_walls from "./../../../assets/img/bibo4_walls.png";

const articleDate = 'September 5, 2026';

const level_patel = ` ##################
 #                #
 #@************** #
#  .            * #
# $************$* #
## .            * #
 # ************** #
 #                #
 ##################
Author: Vipul Patel
Title: A cell
Set: Mastervip
Order: 1`;

const level_nakamiya = ` ############
 #    @     #
 #********  #
##       $ ##
#  ******.*# 
#          # 
############ 
Author: Hirohiko Nakamiya
Title: nakamiya #04`;

const level_spain = ` ############# 
 #           # 
## *#**#**#* ##
## *          #
#.*****#****$ #
##         * @#
## *#*****#* ##
 #           # 
 ############# 
Author: Jordi Domènech
Title: Spain - S
Comment: dedicated to laizhufu
Date: 2011.11.30`;

const level_s = `############# 
#           # 
# ********* # 
# *         ##
# .********$ #
#         *  #
# ********* ##
###   @     # 
  ########### 
Author: Jordi Domènech
Title: S
Comment: This level is hard. If you can't solve it, leave it.
Date: 2015.12.01
Difficulty: 8`;

const level_s_remodel_aka_bibo = `############### 
#             # 
# #########** # 
# #           ##
# .**********$ #
#           *  #
#####*#####** ##
    #   @     # 
    ########### 
Author: Jordi Domènech + Přemysl Zíka
Title: Life #32 S - a
Comment: enlarge map, stoned many boxes
Date: 2016.12.15
Difficulty: 9.5 (P.Z.)
Best moves/pushes: 3089/845 (P.Z.)`;

const fibo_bibo_level_3 = ` #####  #######
 # + #  #     #
 #$.$#  # .## #
 # * #  # * # #
 # * #### * # #
 # * ## * * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
## *  # # * # #
#  *  # * * * #
#  *  # *** * #
##  #     $   #
 ########  ####
        ####   
Title: Level 3
Set: Fibo & Bibo
Author: Aymeric du Peloux ; Jordi Domènech + Přemysl Zíka + Archanfel`;

const bibo4_mf8_101 = `################# 
#               # 
# ###########** # 
# #             ##
# .************$ #
#             *  #
#####*#######** ##
    #    @      # 
    ############# 
Title: 长驱直入 vs 寸步难行 (MF8 101st Sokoban Competition, Main)
Collection: MF8 Sokoban Competition
Author: Jordi Domènech + Přemysl Zíka + anian`;

const fibo_bibo_level_4 = ` #####  #######
 # + #  #     #
 #$.$#  # .## #
 # * #  # * # #
 # * #### * # #
 # * ## * * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
 # * ## # * # #
## *  # # * # #
#  *  # * * * #
#  *  # *** * #
##  #     $   #
 ########  ####
        ####   
Title: Level 4
Set: Fibo & Bibo
Author: Aymeric du Peloux ; Jordi Domènech + Přemysl Zíka + anian + Archanfel`;

const bibo5 = `  #######
  #     #
  # .## #
  # * # #
### * # #
# * * # #
# # * # #
# # * # #
# # * # #
# # * # #
# # * # #
# # * # #
# # * # #
# # * # #
# # * # #
# * * * #
# *** * #
#@  $   #
###  ####
  ####   
Title: Bibo #5
Author: Jordi Domènech + Přemysl Zíka + Archanfel`;

const blockade = `# #$ $# #`;

export default function Index() {
    return (
        <>
            <Layout>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 rounded bg-white">
                                <h3 className="title mb-0">
                                    Bibo level
                                </h3>
                                <p className="text-right">
                                    <sub>Published: {articleDate}</sub>
                                </p>
                                <p>
                                    "Bibo" refers to a Sokoban level created by Přemysl Zíka in 2016. The term is used
                                    as an alias for the level and also refers to an expanded version of it.
                                </p>
                                <p>
                                    The expansion follows the orientation of the original presentation: vertically
                                    when the level is presented in portrait orientation, and horizontally when it is
                                    presented in landscape orientation.
                                </p>
                                <p>
                                    With every expansion, the difficulty of Bibo increases significantly. Unlike <a
                                    className="text-primary"
                                    href="../fibo-puzzles"
                                    target="_blank"
                                    rel="noopener noreferrer">Fibo puzzles</a>, where the same solving pattern can be
                                    reused across different sizes, Bibo requires a different approach for each
                                    expansion. The solution from a previous size could be mimicked up to a certain
                                    point, but eventually a new way of thinking or strategy is required.
                                </p>

                                <h5>Origin</h5>
                                <p>
                                    The predecessor of Bibo is a level called "S", created by Jordi Domènech in 2015.
                                </p>
                                <pre className="sokoban-map">{level_s}</pre>
                                <p>
                                    However, "S" itself had an earlier predecessor.
                                </p>
                                <p>
                                    Jordi explains further:
                                </p>
                                <p className="answer">
                                    &gt; The origin of "S" is as follows. When constructing a puzzle, dozens of tests
                                    are made. I don't throw these tests away; instead, I keep them in a folder
                                    containing hundreds of discarded puzzles. Sometimes I look through that folder in
                                    case I come up with an idea. "S" came from one of those tests.
                                </p>
                                <p className="answer">
                                    &gt; It took me some time to find it, but I eventually did. The discarded level, the
                                    predecessor of "S", is this one:
                                </p>
                                <pre className="sokoban-map">{level_spain}</pre>
                                <p className="answer">
                                    &gt; As you can see, it dates from much earlier than "S". I don't remember if I
                                    published it anywhere, but in any case, I discarded it, and years later I recovered
                                    it and used it as the basis for constructing "S" from the Life collection. The
                                    puzzle was dedicated to "laizhufu", a great friend and a puzzle constructor who
                                    creates very imaginative puzzles.
                                </p>
                                <p>
                                    Jordi also identified earlier puzzles that may have served as sources of
                                    inspiration:
                                </p>
                                <p className="answer">
                                    &gt; "A cell" by Vipul Patel is from June 2008 (Mastervip collection), much earlier
                                    than "S". It may have served as inspiration, since, after all, all these puzzles
                                    are problems involving lines or columns of "parallel" boxes; that is the basic
                                    structure.
                                </p>
                                <pre className="sokoban-map">{level_patel}</pre>
                                <p className="answer">
                                    &gt; There is yet another very good precedent: "Nakamiya #04" from 2000 by Hirohiko
                                    Nakamiya. I think it could be considered the origin of the "parallel" puzzles.
                                    Along with Vipul Patel's, I certainly also had that classic puzzle in mind.
                                </p>
                                <pre className="sokoban-map">{level_nakamiya}</pre>
                                <p className="answer">
                                    &gt; So the complete sequence would be:<br/>
                                    Nakamiya --> Patel --> JD "Spain" --> JD "S" --> Přemysl
                                </p>

                                <h5>The 2016 remodel</h5>

                                <p>
                                    In 2016, Přemysl Zíka remodeled the level "S", enlarging the map and converting
                                    some boxes into walls.
                                </p>
                                <pre className="sokoban-map">{level_s_remodel_aka_bibo}</pre>
                                <p>
                                    Přemysl Zíka provided the following answers when I asked him about the level:
                                </p>
                                <p className="question">
                                    How did you originally title this level?
                                </p>
                                <p className="answer">
                                    &gt; This level has no name from me
                                </p>
                                <p className="question">
                                    Please, some story about how you created this awesome level structure?
                                </p>
                                <p className="answer">
                                    &gt; Jordi inspired me to redesign his one level. The foundation is from him.<br/>
                                    &gt; How did I do it?... I don't know. It just occurred to me...
                                </p>
                                <p className="question">
                                    Did Jordi ask you to remodel his level, or did you remodel it after seeing it?
                                </p>
                                <p className="answer">
                                    &gt; Of course I redid it myself after I saw the level
                                </p>
                                <p>
                                    Jordi added more information about the remodel:
                                </p>
                                <p className="answer">
                                    &gt; Přemysl sent me the remodel by email. I gave it the name "Life #32 S - a",
                                    since it
                                    is the "a" version of Life #32, which was the number it had in the old Life
                                    collection. At that time, Přemysl made excellent remodels of all the puzzles I
                                    created or remodeled.
                                </p>
                                <p>
                                    Jordi rated the remodel's difficulty at 9.5, while the original "S" was rated 8
                                    and was already considered difficult. He commented: "This remodel by Přemysl Zíka
                                    is extremely hard".
                                </p>

                                <h5>When did the term "Bibo" appear?</h5>
                                <p>
                                    Archanfel popularized the term in a series of levels called "Fibo & Bibo", published
                                    in October 2019. At each size in the series, the levels feature a version of
                                    Picokosmos 17 by Aymeric du Peloux (flipped horizontally) on the left, and the
                                    corresponding size of the Přemysl Zíka puzzle, rotated 90° clockwise, on the right.
                                </p>
                                <p>
                                    The original puzzle size appeared in level 3 of the Fibo & Bibo set.
                                </p>
                                <pre className="sokoban-map">{fibo_bibo_level_3}</pre>
                                <p>
                                    The first person to expand the Přemysl Zíka remodel by adding two boxes and solving
                                    it was Anian. It was published in the Main MF8 101st Sokoban Competition in 2017.
                                </p>
                                <pre className="sokoban-map">{bibo4_mf8_101}</pre>
                                <p>
                                    The rotated version became part of level 4 of the Fibo & Bibo set.
                                </p>
                                <pre className="sokoban-map">{fibo_bibo_level_4}</pre>
                                <p>
                                    Archanfel published all levels up to 10, without knowing whether they were solvable.
                                    Later, the collection was reduced to only the first five.
                                </p>
                                <p>
                                    The level number corresponds to the size of the puzzle:
                                </p>
                                <ul>
                                    <li>Level 1. Size: 1. Map height: 12.</li>
                                    <li>Level 2. Size: 2. Map height: 14.</li>
                                    <li>Level 3. Size: 3. Map height: 16.</li>
                                    <li>Level 4. Size: 4. Map height: 18.</li>
                                    <li>Level 5. Size: 5. Map height: 20.</li>
                                    <li>Level 6. Size: 6. Map height: 22.</li>
                                    <li>Level 7. Size: 7. Map height: 24.</li>
                                    <li>Level 8. Size: 8. Map height: 26.</li>
                                    <li>Level 9. Size: 9. Map height: 28.</li>
                                    <li>Level 10. Size: 10. Map height: 30.</li>
                                </ul>

                                <p>
                                    The levels were originally published by Archanfel as Fibo and Bibo together. Later,
                                    Mark published the Bibo levels separately, placing the player's starting position
                                    at the bottom-left, where the player naturally ends up after moving from the Fibo
                                    section.
                                </p>

                                <h5>Difficulty</h5>
                                <p>
                                    The difficulty of Bibo increases dramatically with each size expansion. What makes
                                    it particularly difficult within its series is that it is not possible to reuse a
                                    recursive pattern throughout the solution, as is possible with Fibo puzzles. The
                                    two boxes added with each expansion change the overall handling. Therefore,
                                    strategies from previous Bibos cannot simply be reused, and each expansion requires
                                    a different Sokoban solution.
                                </p>
                                <p>
                                    Interestingly, in his 2016 remodel, whose 90-degree clockwise rotation with the
                                    bottom-left player position is now known as Bibo #3, Přemysl identified a <a
                                    className="text-primary"
                                    href="https://web.archive.org/web/20260903000348/https://sokoban-jd.blogspot.com/2016/12/life-32-s-a.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >state</a> where the position becomes comparable to that of a Fibo level. From that
                                    point, recursive patterns can be used, but this occurs only at a late stage of the
                                    solution.
                                </p>

                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Bibo and some of its size versions are available <a
                                                className="text-primary"
                                                href="../../resources/bibos.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                                The reader can load each level in a Sokoban program and compare the
                                                solutions step by step.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <h5>Solvability</h5>

                                <pre className="sokoban-map">{bibo5}</pre>

                                <p>
                                    After solving Bibo #5 in 2023, Mark investigated the larger sizes and determined
                                    that Bibo #6 and beyond are unsolvable.
                                </p>
                                <p>
                                    This would contrast with Fibo puzzles, which can be expanded without bound while
                                    remaining solvable.
                                </p>
                                <p>
                                    The reason Mark gives is that, starting at size 6, the left wall (excluding the
                                    frame) becomes higher, preventing some required blockades from being undone later.
                                </p>
                                <p>
                                    <img
                                        loading={"eager"}
                                        className={`img-fluid`}
                                        src={img_bibo4_walls}
                                        alt=""
                                    />
                                </p>
                                <p>
                                    (In the image, the left wall is marked with the letter L.)
                                </p>
                                <p>
                                    By "blockade", he means two boxes touching opposite walls, one on the left and one
                                    on the right, positioned on the same horizontal row within the tunnel, with a space
                                    between them: <pre>{blockade}</pre>
                                </p>

                                <h5>Bibo #5 Solvers</h5>
                                <ul>
                                    <li>
                                        <a
                                            className="text-primary"
                                            href="https://web.archive.org/web/20260905153624/https://letslogic.com/level/97868"
                                            target="_blank"
                                            rel="noopener noreferrer">Mark</a> solved on April 10, 2023.
                                    </li>
                                    <li>
                                        <a
                                            className="text-primary"
                                            href="https://web.archive.org/web/20260905153617/https://letslogic.com/level/111122"
                                            target="_blank"
                                            rel="noopener noreferrer">Carlos</a> solved on September 2, 2026.
                                    </li>
                                </ul>

                                <h5>Thanks</h5>
                                <p>
                                    Thanks to Mark for contributing information to this article.
                                </p>

                                <p>
                                    —Article by Carlos Montiers Aguilera.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
        ;
}
