import styles from '../Accodi.module.css';
import ac1 from '../img/ac2-1.png'
import ac2 from '../img/ac2-2.png'

function Acco2() {
    return (
        <div>
            <div className={styles.ac2First}>
                <div id={styles.a2Title}>
                    <div>기술의 발전으로 인간과 자연을</div>
                    구분하는 것조차 무의미해지는 시대이지만, 대신 인간,<br/>
                    기술, 환경이 공생하는 보다 확장적이고 선순환적인<br/>
                    <div id={styles.a2sub}>미래를 상상해보는 것은 어떠한가?</div>
                </div>
                <img src={ac1} className={styles.a2Img}/>
                <div className={styles.aText} id={styles.aText3}>
                    <div>두걸음</div>
                    송이버섯의 주요 생존 전략은 나무들 및 기타 식물들, 미생물들과의<br/>
                    공생관계로 진입하는 것이다. 버섯은 다양한 맥락에서 그것을 취하고<br/>
                    훔치고 선물로 주거나 판매하는   사람들과   일종의 파트너 관계를 맺고<br/>
                    있다. 왜 양식으로는 키울 수 없는 야생 버섯인 송이버섯에 그렇게<br/>
                    주의를 기울이는 것일까? 이 강인하고 꾀바른 버섯은 파열된 생태계나<br/>
                    폐허가 된 풍경들에서 자라는 경향을 가진다. 마치 세계 전역의 수십억<br/>
                    명의 사람들이, 현재 세계 전체를 장악하고 있고 약탈적이기 일쑤인<br/>
                    자본주의 체제 및 황폐화된 환경에서 어떻게든 살아가야 하듯이 말이다.<br/> 
                    북방의 풍경들에서 자라는 숨은 버섯인 송이버섯은 황폐한 장소들에서<br/> 
                    나무들이 자라는 것을 돕는 소중한 역할을 한다. 버섯들은 불안정성을<br/> 
                    <div className={styles.aleft}>다루는 전문가들이라고 말할 수도 있다.</div>
                    <br/>
                    매우 희한하게도 버섯을 채취하는 사람들도 그렇다. 미국 북서부의<br/>
                    태평양 연안 지방에서 버섯을 따는 사람들은 주로 라오스와 캄보디아<br/>
                    에서 온 피난민들, 미국 퇴역 군인들, 빈민들이다. 이들은 정규 직업을<br/>
                    얻을 수 없는 사람들이거나, 아니면 자연의 열린 공간에서 독립적으로<br/> 
                    <div className={styles.aleft}>존재하는 ‘자유’를 좇아 정규 직업을 원하지 않는 사람들이다.</div>
                </div>
            </div>
            <div className={styles.ac2First}>
                <div className={styles.mush}>
                    <div id={styles.a2Title2}>
                        버섯무역과<br/>
                        인간사회의 공통점
                    </div>
                    <div>
                    <div className={styles.aText} id={styles.aText4}>
                        <div>기준</div>
                        판매용 야생버섯 채취는 안전이 보장되지 않은 불안정한 생계의 표본적<br/>
                        사례이다. 수확 후 버섯들은 도매상들에게 팔리고, 분류업자들에게<br/>
                        수송하여 일본으로 수출한다. 이미 형성되어 있는 일본의 거대한 시장<br/>
                        에서 고급 고객들이 열심히 이 버섯들을 사는데, 보통 선물의 목적이다.
                        <br/><br/>
                        버섯무역을 연구하는 것은 계몽적이다. 투자자들이 오늘날 모든 것을<br/>
                        상품화하고 인간과 자연을 “마치 삶의 얽힘은 중요하지 않다는 듯이”<br/>
                        취급하는 모습을 보여주기 때문이다. 소외를 통해 인간과 사물들은<br/>
                        유동자산이 된다. 인간과 사물은 그 삶의 세계로부터 빼내어져 거리를<br/>
                        무시하는 수송을 통해 다른 곳에 있는 다른 삶의 세계에 속하는 다른<br/>
                        <div className={styles.aleft}>자산과 교환될 수 있다.</div>
                    </div>
                    <img src={ac2}/>
                    <div className={styles.aText} id={styles.aText5}>
                        『세상 끝에 있는 버섯』이 자본주의 하에서의 불안정한 버섯채취자들의<br/>
                        생존기술을 서술한다면, 우리는 자본주의 하에서의 충돌하는 의미와<br/>
                        가치의 우선적인 생존 순서를 결정해 나간다. 선택과 집중의 시대에<br/>  
                        조직은 보호와 자율, 중앙집권과 분권, 자율과 통제, 개인과 집단 등<br/>
                        상호 배타적인 가치 사이에서 선택해야 한다. 그러나 모든 가치의 공존<br/>
                        은 상업화나 민영화가 아닌 개인의 기준에 따라 주관적 우선순위가<br/>
                        판단되는 세상의 끝에서 명백해진다. 상충되는 가치는 상충되는 상황을<br/> 
                        만들 수 있지만 궁극적인 목표는 어느 하나의 가치를 무시하는 것이<br/>
                        <div className={styles.aleft}>아닌 모든 가치가 공존할 수 있는 균형을 찾는 것이다.</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Acco2;