import React from 'react';
import Layout from "../../components/layout";
import img_sokoboxes_duo_logo from "../../assets/img/sokoboxes_duo_logo.png";

export default function DuoPage() {
    return (
        <Layout>
            <section>
                <div className="container">
                    <div className="row rounded bg-white mb-2">
                        <div className="col-12 mt-2">
                            <p>
                                <img
                                    className="duo_logo"
                                    loading="eager"
                                    src={img_sokoboxes_duo_logo}
                                    alt="Sokoboxes Duo"
                                />
                            </p>
                            <p>
                                The demo of the game is no longer available, but the adventure continues!
                            </p>
                            <p>
                                <a
                                    className="text-primary"
                                    href="https://store.steampowered.com/app/2107780/Sokoboxes_Duo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    👉 Get the game on Steam
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
);
}
