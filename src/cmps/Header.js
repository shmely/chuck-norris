import React from "react";
import logo from '../style/img/logo.svg';
import { useResolvedPath } from "react-router-dom";
 
const Header = (props, to) => {

    let resolved = useResolvedPath(to);    
    return (

        <header className="header">
            <div className="spacing"/>

            
            <div className="logo">
                <img src={logo} alt="chuk norris logo" />
            </div>
            <nav className="nav">
                <a href="/" className={`left ${resolved.pathname==='/' ? 'selected' : ''}`}>Random</a>
                <a href="/search" className={resolved.pathname==='/search' ? 'selected' : ''  }>Search</a>
            </nav>

        </header >
    )

}

export default Header;