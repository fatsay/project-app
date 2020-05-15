import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-inner bg-white mb-4">
                    <Link id='test-app' className="navbar-dark text-muted" to="/">CI/CD</Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link id='home-link' className="nav-link text-muted" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link id='link-link' className="nav-link text-muted" to="/features">Features</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
