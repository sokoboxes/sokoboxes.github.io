import React from "react";
import Layout from "../../../components/layout";

import img_sokoban_ibm_dos_title from "../../../assets/screenshots/sokoban_ibm_dos_title.png";
import img_sokoban_ibm_dos_black_box from "../../../assets/img/sokoban_ibm_dos_black_box.png";
import img_sokoban_ibm_dos_white_box from "../../../assets/img/sokoban_ibm_dos_white_box.png";
import img_sokoban_ibm_dos_samurai from "../../../assets/screenshots/sokoban_ibm_dos_samurai.png";
import img_sokoban_ibm_dos_042_1987_aug_26 from "../../../assets/screenshots/sokoban_ibm_dos_042_1987_aug_26.png";
import img_sokoban_ibm_dos_042_1987_dec_22 from "../../../assets/screenshots/sokoban_ibm_dos_042_1987_dec_22.png";

export default function ArticleSokobanIbmPc() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Soko-ban (IBM-PC)</h3>
                            <p className="text-right">
                                <sub>Published: September 24, 2023</sub>
                            </p>
                            <p>
                                Until 1988, the Sokoban game was exclusively distributed in Japan.
                            </p>
                            <p>
                                However, in 1988 (or possibly late 1987), it was published in the U.S. as Soko-Ban by
                                Spectrum Holobyte for IBM PC/XT/AT.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_ibm_dos_title}
                                    alt="Soko-ban (IBM-PC) title"
                                />
                            </p>
                            <p>
                                The game was first sold in a black package showing a worker and the message 'A Strategy
                                Maze Game' on the front and back.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_ibm_dos_black_box}
                                    alt="Soko-ban (IBM-PC) black box"
                                />
                            </p>
                            <p>
                                Later, it came in a white package and 'Hundreds of thousands sold!' on the front and
                                'The Japanese Challenge' on the back.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_ibm_dos_white_box}
                                    alt="Soko-ban (IBM-PC) white box"
                                />
                            </p>
                            <p>
                                One interesting thing about this game is that, at least in my copy (in a black box
                                package), it was initially distributed with puzzle 42 unsolvable. However, this issue was
                                later corrected in some or all white box package versions. More than the box color, the
                                hint if solvable is the date of the file TAB4142; the one dated 1987-Aug-26 is
                                unsolvable, and the one dated 1987-Dec-22 is solvable.
                            </p>
                            <table className={`table`}>
                                <thead>
                                <tr>
                                  <th>File TAB4142 date</th>
                                  <th>Solvable</th>
                                  <th>Screenshot</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <span>1987-Aug-26</span>
                                    </td>
                                    <td>
                                        <span>No</span>
                                    </td>
                                    <td>
                                        <img
                                            loading={"eager"}
                                            className={`img-fluid`}
                                            src={img_sokoban_ibm_dos_042_1987_aug_26}
                                            alt="Soko-ban (IBM-PC) puzzle 42 unsolvable"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>1987-Dec-22</span>
                                    </td>
                                    <td>
                                        <span>Yes</span>
                                    </td>
                                    <td>
                                        <img
                                            loading={"eager"}
                                            className={`img-fluid`}
                                            src={img_sokoban_ibm_dos_042_1987_dec_22}
                                            alt="Soko-ban (IBM-PC) puzzle 42 solvable"
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <p>
                                There was a white box edition that included a samurai in the intro. That version
                                contains a file named WARRIOR.BIN.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_ibm_dos_samurai}
                                    alt="Soko-ban (IBM-PC) samurai"
                                />
                            </p>
                            <table className={`table`}>
                                <thead>
                                <tr>
                                <th>Source</th>
                                <th>File SOKOBAN.EXE date</th>
                                <th>Samurai at intro</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <span>Black box package</span>
                                    </td>
                                    <td>
                                        <span>1987-Nov-16</span>
                                    </td>
                                    <td>
                                        <span>No</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>White box package</span>
                                    </td>
                                    <td>
                                        <span>1988-Jan-13</span>
                                    </td>
                                    <td>
                                        <span>No</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>White box package</span>
                                    </td>
                                    <td>
                                        <span>1988-Jul-22</span>
                                    </td>
                                    <td>
                                        <span>Yes</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
