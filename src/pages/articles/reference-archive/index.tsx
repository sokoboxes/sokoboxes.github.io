import React from "react";
import Layout from "../../../components/layout";

const pdfVersion = '20260805';
const articleDate = 'August 5, 2026';
const wikipediaURL = 'https://en.wikipedia.org/w/index.php?title=Sokoban&oldid=1365491198';


export default function Index() {
    return (
        <>
            <Layout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 rounded bg-white">
                            <h3 className="title mb-0">Reference Archive</h3>
                            <p className="text-right">
                                <sub>Published: {articleDate}</sub>
                            </p>

                            <p className="text-center">📚Sokoban Articles</p>
                            <p>
                                ▪ Phil Shapiro’s 1995 article: explains how Sokoban puzzles help develop spatial
                                thinking, logical reasoning, and problem-solving skills in both children and adults.
                                <br/>
                                🌐 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.his.com/~pshapiro/about.ss.html"
                            >View page</a>
                            </p>

                            <p>
                                ▪ Japanese article: firsthand account by a player who experienced Sokoban’s earliest
                                versions at the time of their release.
                                <br/>
                                🌐 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.beep-shop.com/column_entry/67956/"
                            >View page</a>
                            </p>

                            <p>
                                ▪ Sokoban Wikipedia article: last version I maintained or reviewed, listed here for
                                reference.
                                <br/>
                                🌐 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={wikipediaURL}
                            >View page</a>
                                <br/>
                                📄 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`../../pdfs/sokoban_wikipedia.pdf?v=${pdfVersion}`}
                            >Download PDF</a>
                            </p>

                            <p className="text-center">🎮 Pushbox Group Topics</p>

                            <p>
                                ▪ Konami Wai Wai Sokoban
                                <br/>
                                🌐 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://groups.io/g/pushbox/message/21"
                            >View topic</a>
                            </p>

                            <p>
                                ▪ Sokoban (Sega SG-1000) hidden levels
                                <br/>
                                🌐 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://groups.io/g/pushbox/message/23"
                            >View topic</a>
                            </p>

                            <p>
                                ▪ Sokoban Special of Tears (Famicom) cheat code
                                <br/>
                                🌐 <a
                                className="text-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://groups.io/g/pushbox/message/25"
                            >View topic</a>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
}
