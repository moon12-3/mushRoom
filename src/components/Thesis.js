import {Link} from "react-router-dom";

import styles from './Thesis.module.css'
import barrow from './img/bArrow.png';
import bottom from './img/bottom.png'
import arrbtn from './mimg/arrBtn.png'

import water from './mimg/water-1.png'
import water2 from './mimg/water-2.png'
import zoo from './mimg/zoo.png'
import traffic from './mimg/traffic.png'
import world from './mimg/world.png'
import free from './mimg/free-market.png'
import vegetable from './mimg/vegetable.png'
import community from './mimg/community.png'

function Thesis() {
    return (
        <>
            <div id={styles.first}>
                <div>
                    조금더자세히알아보고싶다면
                    <div id={styles.fText}>논제&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <img src={barrow} id={styles.bArrow}/> 
                        당신의 선택과 이야기</div>
                    <span className='nanum'>모든 이야기의 기록</span>
                </div>
            </div>
            <div id={styles.second}>
                <img src={bottom}/>
                <div>논제확인하러가기</div>
            </div>   

            <div id={styles.third}>
                <div id={styles.water}>
                    <img src={water}/>
                    <img src={water2} className={styles.wimg}/>
                    <div><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn}/></div>
                    <div className={styles.theText} id={styles.theText}>
                        <div>식수</div>
                        제목과 정확한 논제를?
                    </div>
                </div>

                <div id={styles.zoo}>
                    <img src={zoo}/>
                    <div><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn2}/></div>
                    <div className={styles.theText} id={styles.theText2}>
                        <div>동물원</div>
                        동물원은 유지되어야 하는가?
                    </div>
                </div>

                <div id={styles.traffic}>
                    <img src={traffic}/>
                    <div><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn3}/></div>
                    <div className={styles.theText} id={styles.theText2}>
                        <div>교통편</div>
                        편리함과 탄소 배출량, 책임은 누구에게?
                    </div>
                </div>

                <div id={styles.world}>
                    <img src={world}/>
                    <div><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn4}/></div>
                    <div className={styles.theText} id={styles.theText3}>
                        <div>세계</div>
                        당신의 고민과 가치는<br/>
                        어디에 있나요?
                    </div>
                </div>

                <div id={styles.free}>
                    <div className={styles.theText} id={styles.theText4}>
                        <div>자유시장</div>
                        동물복지 시장과 물가
                    </div>
                    <img src={free}/>
                    <div><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn5}/></div>
                </div>

                <div id={styles.vegetable}>
                    <div className={styles.theText} id={styles.theText5}>
                        <div>채식</div>
                        학교 급식 의무 채식일과<br/>
                        개인의 자유 사이
                    </div>
                    <img src={vegetable}/>
                    <Link to='/ex'><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn6}/></Link>
                </div>

                <div id={styles.community}>
                    <img src={community}/>
                    <div><img src={arrbtn} className={styles.arrBtn} id={styles.arrBtn7}/></div>
                    <div className={styles.theText} id={styles.theText6}>
                        <div>공동체</div>
                        제목과 정확한 논제를?
                    </div>
                </div>
             </div>   
        </>
    )
}

  

  

export default Thesis;