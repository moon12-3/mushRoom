import styles from '../Accodi.module.css';

import ac11 from '../img/ac1-1.png'
import ac12 from '../img/ac1-2.png'
import arrow from "../../img/arrow.png"

function Acco1() {
    return (
        <div id={styles.a1Container}>
            <div id={styles.a1Title}>
                <div>우리의 <span className='nanum'>시작점.</span></div>
                <div>
                    다양한 정체성과&nbsp;
                    <svg width="73" height="30">
                        <line x1="0" y1="5" x2="73" y2="5" stroke-width="5" stroke="black" />
                    </svg>
                    &nbsp;가치가 존중받는 <br/>
                    미래는 어디인가
                </div>
            </div>
            <div className={styles.aText} id={styles.aText1}>
                <div>첫걸음</div>
                급변하는 현대사회에서는 한 가지 가치만을 바라보고는 오래가지 못한다.<br/>  
                흔히들 ‘선택과 집중’의 시대라고 한다. 경쟁력 확보를 위해 특정한 부분을<br/>
                선택하고 집중하는 것은 그리 어렵지 않다. 진정한 문제는 급변하는 시장<br/>
                상황 속 선택된 경쟁력을 매번 재빨리 바꿔야 한다는 것이다. 보호와 자립, <br/>
                집권과 분권, 자율과 통제, 개인과 집단 등 상호 배타적인 가치들이 모순적<br/>
                상황을 일으킨다. 이전 시대까지는 양자 중에 하나만 선택에서 집중하고<br/>
                경쟁력을 확보하면 됐기 때문에 대립적인 가치의 충돌은 그다지 없었으나 <br/>

                <div className={styles.aleft}>현대사회에서는 양자 모두를 선택할 것을 요구한다.</div>
            </div>
            <div>
                <img src={ac11}/>
                <img src={ac12} className={styles.img2}/><br/>
            </div> 
            <img src={arrow} id={styles.img3}/>
            <div className={styles.aText} id={styles.aText2}>
                <div>기준</div>
                분명 초기의 의도와 다르게 결국 자본주의의 시대에서 살고 있기에,<br/>
                가치를 가늠하는 일의 가장 큰 분류 기준은 기저에 상업적인 면을 띠고 <br/>
                있을 것이다. 두 상반된 가치가 충돌할 때, 우리는 그것의 본질에 대해서<br/>
                토론을 나누지만 가장 간단한 해결책은 ‘얼마냐 돈이 드느냐.’를 판단<br/>
                하는 것이다. 결국 우리는 모든 측면을 상품화하고 사유화하는 일에<br/>
                혈안이 되어 있을 수 밖에 없는 세상에서 살고 있다. 그럼에도 불구하고<br/>
                세상의 끝에는 모든 가치의 공존을 바라보는 시선이 존재한다. 누구든 <br/>
                자신만의 기준으로 주관적인 가치를 판단하여 진행 순서를 정할 것이고, <br/>
                결국 그것은 다른 한 가치에 대한 무시가 아닌 ‘우선순위’일 뿐이라는  <br/>
                것이다.
            </div>
        </div>
    )
}

export default Acco1;