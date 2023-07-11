import {Link, useLocation} from "react-router-dom";
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import { useEffect, useState } from "react";

function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showBackground, setShowBackground] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
    
          setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [prevScrollPos]);

    useEffect(()=> {
        if(location.pathname ==='/game') {
            setShowBackground(false);
        } else {
            setShowBackground(true);
        }
    }, [location.pathname]);

    return (
        <header className={`sticky-header ${showHeader ? 'show' : 'hide'}`}>
            <div className={showBackground ? 'nav-bg' : 'nav'}>
                <div className='in-nav'>
                    <div>
                    <Link to='/'><img className = "logo" src={showBackground ? logo : logo2}/></Link>
                    </div>
                    <ul className="nav-list">
                        <li><Link to='/mushRoom'>소개</Link></li>
                        <li><Link to='/game'>게임</Link></li>
                        <li><Link to='/thesis'>기록</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
