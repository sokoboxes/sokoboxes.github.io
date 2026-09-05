import React from "react";
import Layout from "../../../components/layout";

import img_sokoban_pc8801_english_title from "../../../assets/screenshots/sokoban_pc8801_english_title.png";
import img_sokoban_pc8801_english_options from "../../../assets/screenshots/sokoban_pc8801_english_options.png";
import img_sokoban_pc8801_english_012 from "../../../assets/screenshots/sokoban_pc8801_english_012.png";
import img_sokoban_pc8801_english_014 from "../../../assets/screenshots/sokoban_pc8801_english_014.png";

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Sokoban (PC-8801) (English)</h3>
                            <p className="text-right">
                                <sub>Published: June 2, 2022</sub>
                            </p>
                            <p>
                                Have you ever wondered what Sokoban 1 says on its main menu?
                            </p>
                            <p>
                                I asked my Japanese friend Mr Takatoshi and he gave me a direct
                                English translation.
                            </p>
                            <p>
                                Now we know that the warehouse keeper's job was part-time :)
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_english_title}
                                    alt="Sokoban 1 (PC-8801) english title"
                                />
                            </p>
                            <p>Also, he added some cool features for fun:</p>
                              <ol>
                                  <li>
                                    <p>Fixed a bug related to designated locations.</p>
                                  </li>
                                  <li>
                                    <p>Different options to make the breakable walls visible.</p>
                                  </li>
                                  <li>
                                    <p>Added features from the MULTI-8 port like sound effects and
                                      show the warehouse number in the gameplay.</p>
                                  </li>
                              </ol>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_english_options}
                                    alt="Sokoban 1 (PC-8801) English options"
                                />
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_english_012}
                                    alt="Sokoban 1 (PC-8801) English puzzle 12 breakable walls reverse colour"
                                />
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_pc8801_english_014}
                                    alt="Sokoban 1 (PC-8801) English puzzle 14 breakable walls arrow + reverse colour"
                                />
                            </p>
                            <p>
                                Because I need permission to distribute the original source
                                code, I only share specific changes/requirements in the patch
                                format.
                            </p>
                            <p>
                                <a
                                    className="btn btn-sm btn-primary"
                                    target="_blank"
                                    href="../../patches/soko1-english-patch.zip"
                                    role="button"
                                >
                                    Download Patch
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
