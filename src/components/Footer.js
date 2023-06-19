import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const [show, setShow] = useState(true);
    const location = useLocation();

    useEffect(()=> {
        if(location.pathname ==='/game' || location.pathname ==='/accodion') {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [location.pathname]);

    return (
        <footer id={show?'':'none'}>
            <div id='footer'>
                <div>다시 상상한 세계</div>
                <div>
                    소개<br/>
                    게임<br/>
                    기록
                </div>
                <div>
                    Design. HJ Lee <br/>
                    t.010 2352 0631<br/>
                    m. d2135@e-mirim.hs.kr
                </div>
                <div>
                    Develope. CY Moon<br/>
                    t.010 9749 7111<br/>
                    m. mooncy05@gmail.com
                </div>
            </div>
        </footer>
    )
}

export default Footer;
