import {Link} from "react-router-dom";
import logo from "../img/logo.png";

function Header() {

    return (
        <header>
            <div className="nav">
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
