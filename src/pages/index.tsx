import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/layout";

import img_sokoban_puzzle_cmontiers from "../assets/img/sokoban_puzzle_cmontiers.png";
import img_sokoboxes_duo_logo from "../assets/img/sokoboxes_duo_logo.png";


const IndexPage: React.FC<PageProps> = () => {
  return (
      <Layout>
      <section>
        <div className="container rounded bg-white">
          <div className="row">
            <div className="col-12">
              <h3>Welcome</h3>
              <p>Sokoboxes is a site dedicated to Sokoban (倉庫番).</p>
              <p>It is an amazing puzzle video game.</p>
              <p>
                The goal of the player is to push boxes around in a warehouse
                until all of them are on storage locations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-1 mb-2">
              <p className="mb-1">I created a new puzzle game based on Sokoban:</p>
              <p className="mb-1">
                <img
                    className="duo_logo"
                    loading="eager"
                    src={img_sokoboxes_duo_logo}
                    alt="Sokoboxes Duo"
                />
              </p>
              <p>
                <a
                    className="text-primary"
                    href="https://store.steampowered.com/app/2107780/Sokoboxes_Duo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  👉 Check it out on Steam
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <br />
              <img
                  loading={"eager"}
                  className="img mb-3"
                  src={img_sokoban_puzzle_cmontiers}
                  alt="A Sokoban puzzle"
              />
              <p>
                I started playing Sokoban in 2009. In 2011, I created this puzzle to show the gameplay in the {" "}
                <a
                    className="text-primary"
                    href="https://en.wikipedia.org/wiki/Sokoban"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Wikipedia article
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      </Layout>
  )
}

export default IndexPage
