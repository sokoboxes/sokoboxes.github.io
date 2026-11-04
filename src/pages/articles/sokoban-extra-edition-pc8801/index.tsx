import React from "react";
import Layout from "../../../components/layout";

import img_soko_extra_pc8801_cover from "../../../assets/img/soko_extra_pc8801_cover.png";
import img_sokoban_extra_pc8801_title from "../../../assets/screenshots/sokoban_extra_pc8801_title.png";
import img_sokoban_extra_pc8801_001 from "../../../assets/screenshots/sokoban_extra_pc8801_001.png";

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Sokoban Extra Edition (PC-8801)</h3>
                            <p className="text-right">
                                <sub>Published: May 22, 2022</sub>
                            </p>
                            <p>
                                An additional Sokoban game for PC-8801 was published as a type-in program in the
                                Japanese magazine <em>PCマガジン</em> in its August 1983 issue (pages 52–56).
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid magazine-cover ml-4`}
                                    src={img_soko_extra_pc8801_cover}
                                    alt=""
                                />
                            </p>
                            <p>
                                It featured 10 new puzzles.
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_extra_pc8801_title}
                                    alt="Sokoban Extra (PC-8801) title"
                                />
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid`}
                                    src={img_sokoban_extra_pc8801_001}
                                    alt="Sokoban Extra (PC-8801) puzzle 1"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
