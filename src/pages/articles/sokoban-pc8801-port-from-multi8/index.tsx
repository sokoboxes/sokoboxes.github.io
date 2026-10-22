import React from "react";
import Layout from "../../../components/layout";

import img_soko_multi8_ports_cover from "../../../assets/img/soko_multi8_ports_cover.png";
import img_sokoban_pc8801_popcom_1984_issue_august_title
    from "../../../assets/screenshots/sokoban_pc8801_popcom_1984_issue_august_title.png";
import img_sokoban_pc8801_popcom_1984_issue_august_001
    from "../../../assets/screenshots/sokoban_pc8801_popcom_1984_issue_august_001.png";

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <div className="row mb-4">
                                <div className="col-12 rounded bg-white">
                                    <h3 className="title mb-0">
                                        Sokoban 1 (PC-8801 port from Multi-8)
                                    </h3>
                                    <p className="text-right">
                                        <sub>Published: October 27, 2024</sub>
                                    </p>
                                    <p>
                                        The Japanese magazine <em>POPCOM</em> published type-in programs for Sokoban in
                                        its August 1984 issue (pages 162–172), including the original Mitsubishi Multi-8
                                        version and ports for the FM-7, X1, PC-8801, PC-9801, MB-S1, and PASOPIA 7.
                                    </p>
                                    <p>
                                        <img
                                            loading={"eager"}
                                            className={`img-fluid magazine-cover ml-4`}
                                            src={img_soko_multi8_ports_cover}
                                            alt=""
                                        />
                                    </p>
                                    <p>
                                        The PC-8801 port differs slightly from the commercial tape version: the main
                                        menu omits player sprites, and during gameplay, the warehouse number is
                                        displayed at the top of the screen. A sound effect plays each time the player
                                        walks. While the Multi-8 version plays computer-generated music upon puzzle
                                        completion, this feature is absent in the PC-8801 port. However, my friend Taka
                                        found a way to incorporate that music into the PC-8801 port, making it
                                        compatible only with the PC-8801mkIISR or higher.
                                    </p>
                                    <p>
                                        <img
                                            loading={"eager"}
                                            className={`img-fluid`}
                                            src={img_sokoban_pc8801_popcom_1984_issue_august_title}
                                            alt="Sokoban 1 (PC-8801) (POPCOM 1984 issue 8 version) main menu"
                                        />
                                    </p>
                                    <p>
                                        <img
                                            loading={"eager"}
                                            className={`img-fluid`}
                                            src={img_sokoban_pc8801_popcom_1984_issue_august_001}
                                            alt="Sokoban 1 (PC-8801) (POPCOM 1984 issue 8 version) puzzle 1"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
