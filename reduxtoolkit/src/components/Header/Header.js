import React from 'react';
import {Link} from "react-router-dom"
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}><div className="logo">Moive App</div></Link>
            <div className="user-image">
                Mf
            </div>
            
        </div>
    );
};

export default Header;
//<img src={} alt="user-image"/> 