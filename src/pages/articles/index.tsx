import React from 'react';
import Layout from "../../components/layout";
import { Link } from "gatsby";

export default function ArticlesPage() {
    return (
        <Layout>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 rounded bg-white">
                        <h3>Articles</h3>
                        <ul className="nav navbar-nav ml-auto mb-3 bg-boxes">
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-ibm-pc"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Soko-ban (IBM-PC)
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-pc8801"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Sokoban (PC-8801)
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-extra-edition-pc8801"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Sokoban Extra Edition (PC-8801)
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-pc8801-port-from-multi8"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Sokoban (PC-8801 port from Multi-8)
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/my-conversation-with-mr-hiroyuki-imabayashi"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    My conversation with Mr Hiroyuki Imabayashi
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-pc8801-english"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Sokoban (PC-8801) (English)
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-80s-product-codes"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Sokoban 80s Product Codes
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/the-lost-archives-of-sokoban"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    The Lost Archives of Sokoban
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/my-conversation-with-mr-andreas-junghanns"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    My conversation with Mr Andreas Junghanns
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/forgotten-sokoban-puzzles"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Forgotten Sokoban Puzzles
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/reference-archive"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Reference Archive
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/sokoban-reverse-mode"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Sokoban reverse mode
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/rolling-stone-solver"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Rolling Stone solver
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/fibo-puzzles"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Fibo puzzles
                                </Link>
                            </li>
                            <li className="nav-item mb-1" role="presentation">
                                <Link
                                    to="/articles/bibo-level"
                                    className="nav-link js-scroll-trigger text-primary"
                                >
                                    Bibo level
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
}
