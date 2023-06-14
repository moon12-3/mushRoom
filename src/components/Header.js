import {Link, useLocation} from "react-router-dom";
import logo from "../img/logo.png";
import { useEffect, useState } from "react";

function Header() {

    const [showBackground, setShowBackground] = useState(true);
    const location = useLocation();

    useEffect(()=> {
        if(location.pathname ==='/game') {
            setShowBackground(false);
        } else {
            setShowBackground(true);
        }
    }, [location.pathname]);

    return (
        <header>
            <div className={showBackground ? 'nav-bg' : 'nav'}>
                <ul className="nav-list">
                    <li><Link to='/'>소개</Link></li>
                    <li><Link to='/game'>게임</Link></li>
                    <li><Link to='/record'>기록</Link></li>
                    <li><img className = "logo" src={logo}/></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
