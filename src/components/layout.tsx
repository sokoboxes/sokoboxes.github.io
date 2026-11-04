import * as React from "react";
import {Link} from "gatsby";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <header>
            <nav className="navbar navbar-light navbar-expand navbar-expand-lg fixed-top" id="mainNav">
                    <div className="container">
                        <Link to="/" className="navbar-brand js-scroll-trigger sokoboxes-title">Sokoboxes</Link>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation">
                                    <Link to="/" className="nav-link js-scroll-trigger">Home</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link to="/info" className="nav-link js-scroll-trigger">Info</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link to="/articles" className="nav-link js-scroll-trigger">Articles</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {children}

            <footer>
                <div className="container">
                    <p>&copy; 2020-2026 Carlos Montiers Aguilera. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}