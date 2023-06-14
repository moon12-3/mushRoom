import { useState } from 'react'
import styles from './Game.module.css'
import wArrow from './img/wArrow.png'
import {Link} from 'react-router-dom'

function Game() {
    let [next, setNext] = useState(true);
          
    return (
        <div id={styles.container}>
           {next?<First setNext={setNext}/>:<Second/>}
        </div>
    )
}

export default Game;

function First(props) {
    return (
        <div id={styles.first}>
            <center><img src={wArrow}/></center>
            <div className='nanum' id={styles.gTitle}>
                <div className={styles.up}>
                    다시&nbsp;
                    <svg width="153" height="25">
                        <line x1="0" y1="5" x2="153" y2="5" stroke-width="5" stroke="white" />
                    </svg>
                    &nbsp;상상한 세계
                </div>
                <div id={styles.middle}>
                    1. 각자의 입장을 담은 두 장의 카드가 배치되어 있습니다.<br/>
                    대결의 구도가 아니라 다른 가치의 공존의 구도입니다.<br/><br/>

                    2. 둘 중 좀 더 동의하는 방향의 카드를 스와이프하여 넘기세요.<br/>
                    하나에 대한 선택은 다른 하나에 대한 거부가 아닙니다.<br/><br/>

                    3. 보류도 가능하지만 질문은 사라지지 않습니다.<br/>
                    언젠가는 당신이 선택해야 할 문제로 돌아옵니다.<br/><br/>

                    4. 카드의 뒷면에는 더 많은 정보가 있습니다.<br/>
                    카드를 뒤집어(click) 항상 양면을 살피세요.<br/>
                </div>
                <div className={styles.down} onClick={()=>props.setNext(false)}>
                    게임 시작하기
                </div>
            </div>
            <center><img src={wArrow} className={styles.upArr}/></center>
        </div>
    )
}

function Second() {
    return(
        <>
            야호
        </>
    )
}