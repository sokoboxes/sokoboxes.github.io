import React from "react";
import Layout from "../../../components/layout";

import img_sokoban_pc8801_cassette_tape_front from "../../../assets/img/sokoban_pc8801_cassette_tape_front.jpg";
import img_sokoban_pc8001mkii_cassette_tape_front from "../../../assets/img/sokoban_pc8001mkii_cassette_tape_front.jpg";
import img_sokoban2_pc8001mkii_box_package from "../../../assets/img/sokoban2_pc8001mkii_box_package.jpg";

export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Sokoban 80s Product Codes</h3>
                            <p className="text-right">
                                <sub>Published: April 23, 2024</sub>
                            </p>
                            <p>
                                There is something interesting found in early Sokoban games between 1982 and 1984
                                released on cassette tape.
                            </p>
                            <p>
                                These games came with a product code provided by SoftBank, a company that distributed
                                business and game software. You can read about this (in Japanese) <a
                                className="text-primary"
                                href="https://www.gamepres.org/2022/09/28/newsbknumber-2020v10-sbhistory/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >here</a>.
                            </p>
                            <p>
                                The product code is in the format AAAA-00000 and is known in Japan as the 'SB code.'
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid cassette-tape-front`}
                                    src={img_sokoban_pc8801_cassette_tape_front}
                                    alt="Sokoban 1 (PC-8801) cassette tape front"
                                />
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid cassette-tape-front`}
                                    src={img_sokoban_pc8001mkii_cassette_tape_front}
                                    alt="Sokoban 1 (PC-8001mkII) cassette tape front"
                                />
                            </p>
                            <p>
                                <img
                                    loading={"eager"}
                                    className={`img-fluid cassette-tape-front`}
                                    src={img_sokoban2_pc8001mkii_box_package}
                                    alt="Sokoban 2 (PC-8001mkII) box package"
                                />
                            </p>
                            <p>
                                This is interesting because it allows us to discover insights about the release order of
                                the games.
                            </p>
                            <p>List of known product codes:</p>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Product</th>
                                    <th>Platform</th>
                                    <th>Format *</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        NETQ-12001
                                    </td>
                                    <td>
                                        倉庫番
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12004
                                    </td>
                                    <td>
                                        倉庫番2
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12005
                                    </td>
                                    <td>
                                        倉庫番2
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        FD 5.25"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SITQ-16001
                                    </td>
                                    <td>
                                        倉庫番
                                    </td>
                                    <td>
                                        Sharp-X1
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SITQ-16002
                                    </td>
                                    <td>
                                        倉庫番2
                                    </td>
                                    <td>
                                        Sharp-X1
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        SHTQ-18001
                                    </td>
                                    <td>
                                        倉庫番
                                    </td>
                                    <td>
                                        MZ-2000
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-19001
                                    </td>
                                    <td>
                                        倉庫番
                                    </td>
                                    <td>
                                        PC-6001mkII (side B: 32K or blank)
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-17001
                                    </td>
                                    <td>
                                        倉庫番2
                                    </td>
                                    <td>
                                        PC-8001mkII
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-17002
                                    </td>
                                    <td>
                                        倉庫番
                                    </td>
                                    <td>
                                        PC-8001mkII
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        FUTQ-13001
                                    </td>
                                    <td>
                                        倉庫番2
                                    </td>
                                    <td>
                                        FM-7
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        FUTQ-13002
                                    </td>
                                    <td>
                                        倉庫番2
                                    </td>
                                    <td>
                                        FM-7
                                    </td>
                                    <td>
                                        FD 5.25"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        FUTQ-13003
                                    </td>
                                    <td>
                                        倉庫番
                                    </td>
                                    <td>
                                        FM-7
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan={4}>
                                        <sub>Formats: CT = CASSETTE TAPE, FD = FLOPPY DISK.</sub>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                            <p>
                                Considering all Sokoban 2 releases occurred in 1984, the product codes suggest the
                                following release order for Sokoban:
                            </p>
                            <ul>
                                <li>December 1982: Sokoban 1 for PC-8801 only.</li>
                                <li>1983 or 1984: Sokoban 1 for Sharp-X1, MZ-2000, and PC-6001mkII (including 32K
                                    version). An article in LOGiN magazine's December 1983 issue, <a
                                        className="text-primary"
                                        href="https://archive.org/details/login-magazine-dec-1983-thinking-rabbit/page/8/mode/1up"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >page 138</a> states that those versions were in preparation. The article mentions
                                    Sokoban Extra, which is known to have been published in August, suggesting the
                                    article was prepared between September and November, so releases could have occurred
                                    in late 1983 or 1984.
                                </li>
                                <li>1984: Sokoban 2 for PC-8801, and Sokoban 2 and Sokoban 1 for both PC-8001mkII and
                                    FM-7. (Compare with magazine I/O
                                    January 1984, <a
                                        className="text-primary"
                                        href="https://archive.org/details/Io19841/page/n105/mode/2up"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >page 104</a>)
                                </li>
                                <li>1985: Sokoban 2 for PC-6001mkII (including 32K version). (Compare with magazine I/O
                                    July 1985, <a
                                        className="text-primary"
                                        href="https://archive.org/details/Io19857/page/n97/mode/2up"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >page 97</a>)
                                </li>
                            </ul>
                            <p>
                                There's a question about the official December 1982 release date for Sokoban 1 on the
                                PC-8001mkII. According to Wikipedia, the PC-8001mkII launched in March 1983. This is
                                further supported by a picture of the machine offered for sale in magazine I/O March
                                1983, <a className="text-primary"
                                         href="https://archive.org/details/Io19833/page/n1/mode/2up"
                                         target="_blank"
                                         rel="noopener noreferrer">page 2</a>.
                            </p>
                            <p>
                                Analysis of the product codes suggests a 1984 release for this version, which aligns
                                with the known launch date of the PC-8001mkII.
                            </p>
                            <p>
                                Here's a table summarizing other known product codes for Thinking Rabbit games:
                            </p>
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Product</th>
                                    <th>Platform</th>
                                    <th>Format *</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        NETQ-12002
                                    </td>
                                    <td>
                                        鍵穴殺人事件
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        FD 5.25"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12003
                                    </td>
                                    <td>
                                        鍵穴殺人事件
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        FD 8"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12006
                                    </td>
                                    <td>
                                        T.N.T. Bomb Bomb
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12009
                                    </td>
                                    <td>
                                        道化師殺人事件
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        FD 5.25"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12010
                                    </td>
                                    <td>
                                        カサブランカに愛を 殺人者は時空を超えて
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        FD 5.25"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-12011
                                    </td>
                                    <td>
                                        ザ・マン・アイ・ラブ
                                    </td>
                                    <td>
                                        PC-8801
                                    </td>
                                    <td>
                                        FD 5.25"
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NETQ-17004
                                    </td>
                                    <td>
                                        T.N.T. Bomb Bomb
                                    </td>
                                    <td>
                                        PC-8001mkII
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        FUTQ-13005
                                    </td>
                                    <td>
                                        T.N.T. Bomb Bomb
                                    </td>
                                    <td>
                                        FM-7
                                    </td>
                                    <td>
                                        CT
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan={4}>
                                        <sub>Formats: FD = FLOPPY DISK, CT = CASSETTE TAPE.</sub>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                            <p className="text-center">
                                <sub>Last update: March 27, 2026</sub>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
