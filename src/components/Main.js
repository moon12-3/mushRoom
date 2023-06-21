import title from "../img/title.png";
import '../App.css'
import styles from "./Main.module.css"
import logo from "../img/logo.png"
import logo2 from "../img/logo2.png"
import arrow from "../img/arrow.png"
import arrow2 from "../img/arrow2.png"
import rect from "../img/rect.png"
import rect2 from "../img/rect2.png"
import rect3 from "../img/rect3.png"
import {Link} from "react-router-dom";
import { useState } from "react";

function Main() {
    const [isListHover, setIsListHover] = useState(false);
    return (
        <div id={styles.top}>
            <div id={styles.first}>
                <img src={title} className={styles.title}/>
            </div>
            <div id={styles.second}>
                <div className={styles.intro}   >
                    <span>소개하며</span>
                    <span>다시 상상한 세계</span>
                </div>
                <div className={styles.tContent}>
                    <div>인간관계와 자연세계, 모든<img src={logo} className={styles.logo}/></div>
                    <div>측면의 상품 가치를 매기는 세계 속에서 </div>
                    <div>현재의 우리는 생존과 협동의 동학을</div>
                    <Link
                        to = '/accodion' 
                        onMouseOver={() => setIsListHover(true)}
                        onMouseOut={() => setIsListHover(false)}
                        className={styles.hText}>
                        어떻게 이해할 것인가?
                        <img src={isListHover ? arrow2 : arrow} className={styles.arrow}/>
                    </Link>
                    <div>급변하는 현대사회에서는 한 가지 가치만을 바라<br/>
                        보고는 오래가지 못한다. 흔히들 ‘선택과 집중’의<br/>
                        시대라고 한다. 선택과 집중의 진정한 문제는 급변하는<br/>
                        시장 상황 속에서 선택된 경쟁력을 매번 재빠르게 변경<br/>
                        해야 한다는 것이다.
                    </div>
                </div>
                <div className={styles.gContent}>
                    <div id={styles.gTitle}>
                        <div id={styles.gLo}>
                            <img src={logo} className={styles.logo3}/>
                            <div id={styles.gTitle2}><span id={styles.gr}>「다시 상상한 세계」</span>게임은 일종의 밸런스 게임 형식을<br/>
                                활용하여 각자의 ‘우선순위’를 구성할 수 있습니다.
                            </div>
                        </div>
                        <div>
                            연결되어 있는 가치와 그사이에서의 선택에 대해 질문합니다. 당신의 선택을 토대로<br/>
                            모든 가치가 존중받는, 공존하는, 그 세계에 도달할 가능성을 가늠해 보세요. 
                        </div>
                    </div>
                </div>
                <div className={styles.intro}>
                    <span>기록</span>
                    <span>다시 상상한 세계</span>
                </div>
                <div className={styles.rContent}>
                    
                    <div><span className="nanum">모든 가치의 선택</span><br/>
                        혹은 공존
                    </div>
                    <div>우리의 <span className="nanum">선택</span></div>
                    <div>동물원은유지되어야하는가</div>
                    <div className="nanum">다양한 &nbsp;지구 &nbsp;생태<br/>
                        조건과 시나리오
                    </div>
                    <div className="nanum">(공존?)이란</div>
                    <div>
                        <div>자유시장</div>
                        <div>공동체</div>
                        <div className="nanum">전부</div>
                    </div>
                    <div className="nanum">모든 이야기의 기록</div>
                    <div><span>논제확인하러가기</span></div>
                    <div id={styles.thesis}><Link to='/thesis' id={styles.thesis}>클릭해서 자세히</Link></div>
                    <Link to='/thesis'><img src={arrow2} id={styles.arrow2}/></Link>
                    <img src={rect} id={styles.r1}/>
                    <img src={rect2} id={styles.r2}/>
                    <img src={rect3} id={styles.r3}/>
                    <img src={logo2} className={styles.logo2}/>
                </div>
            </div>
        </div>
    )
}

export default Main;
