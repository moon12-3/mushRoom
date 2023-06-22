import { useEffect, useState, useRef } from 'react'
import styles from './Game.module.css'
import wArrow from './img/wArrow.png'
import {Link} from 'react-router-dom'
import logo from '../img/logo2.png'
import world from './card/world.png'
import $ from 'jquery';
import { collection, addDoc } from 'firebase/firestore';

import { firestore } from '../firebase';

function Game() {
    let [next, setNext] = useState(true);
    let [fadeState, setFadeState] = useState('fade-in');

    const playClick = () => {
        setFadeState('fade-out');
        setTimeout(() => {
          setNext(!next);
          setFadeState('fade-in');
        }, 100); 
    }
          
    return (
        <div id={styles.container}>
            <div className={styles.content}>
                {next?
                <First click={playClick} fadeState={fadeState}/>
                :<Second fadeState={fadeState}/>}
           </div>
        </div>
    )
}

export default Game;

function First(props) {
    return (
        <div id={styles.first} className={props.fadeState}>
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
                <div className={styles.down} onClick={props.click}>
                    게임 시작하기
                </div>
            </div>
            <center><img src={wArrow} className={styles.upArr}/></center>
        </div>
    )
}



function Second(props) {
    let [next, setNext] = useState(true);
    let [fadeState, setFadeState] = useState('fade-in');

    const playClick = () => {
        setFadeState('fade-out');
        setTimeout(() => {
          setNext(!next);
          setFadeState('fade-in');
        }, 500); 
    }
          
    return (
        <div>
            {next?<Card fadeState={fadeState} click={playClick}/>:
            <Write fadeState={fadeState}/>}
        </div>
    )
}

function Write(props) {
    let [next, setNext] = useState(true);
    let [fadeState, setFadeState] = useState('fade-in');
    useEffect(()=> {
        setTimeout(()=> {
            setFadeState('fade-out');
            setTimeout(() => {
              setNext(!next);
              setFadeState('fade-in');
            }, 500); 
        }, 2000);
       
    }, [])

    return(
        <center><div id={styles.second} className={props.fadeState}>
            <Link to='/'>
                <div>
                    <img src={wArrow} className={styles.leftArr}/>
                    <div className={styles.btnText}>메인으로</div>
                </div>
                </Link>
            <div className={fadeState}>
                {next?
                    <div id={styles.worry}>이제 당신의 고민을 공유해주실래요?</div>:
                    <WriteCard/>
                }
            </div>
            <Link to='/record'>
                <div>
                    <img src={wArrow} className={styles.rightArr}/>
                    <div className={styles.btnText}>기록보기</div>
                </div>
            </Link>
        </div></center>
    )
}


function WriteCard() {
  const bucket = collection(firestore, 'world');
  const [comment, setComment] = useState('');
  const textareaRef = useRef(null);

  async function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // Enter 키 기본 동작 (줄바꿈) 방지

      if (comment === '') {
        alert('내용을 입력해주세요.');
      } else {
        alert('의견을 성공적으로 남겼습니다!');
        await addDoc(bucket, { comment });
        setComment('');
        textareaRef.current.value = '';
        textareaRef.current.focus();
      }
    }
  }

  return (
    <div className={styles.write}>
      <img src={world} id={styles.world} />
      <div>
        <textarea
          id={styles.worldText}
          placeholder="당신의 고민은 무엇인지 적어주실래요?"
          onKeyDown={handleKeyPress}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          ref={textareaRef}
        />
      </div>
    </div>
  );
}


function Card(props) {
    let [rot, setRot] = useState(true);
    let [rot2, setRot2] = useState(true);
    let [size1, setSize1] = useState(true);
    let [size2, setSize2] = useState(true);
    let [cnt, setCnt] = useState(0);
    let [cnt2, setCnt2] = useState(1);
    let [notStop, setStop] = useState(true);
    let [cards, setCards] = useState(['zoo', 'free', 'comm', 'vegetable', 'water', 'traffic']);
    let [go, setGo] = useState(false);

    useEffect(()=> {
        if(cnt==5) setGo(true);
    }, [cnt]);

        const goLeft = () => {
            if(!go) {
                setStop(false);
                $(".card1").css('left', '-1000px');
                $(".card1").css('transition', 'all 0.5s');
                opaRight();
                setSize1(false);
                setRot(true);
                setTimeout(()=>setCnt(cnt+=1),300);
                setTimeout(()=>{
                    setStop(true);
                    setSize1(true);
                    $(".card1").css('transition', 'all 0s');
                    $(".card1").css('left', '100px');
                    setCnt2((cnt2+=1)%6);
                }, 900);
            }
            else if(go) props.click();
        }

        const opaRight = () => {
            $(".card2").css('transition', 'all 0.3s');
            $('.card2').css('opacity', '0');
            setRot2(true);
            setTimeout(()=> {
                $('.card2').css('opacity', '1');
            }, 300);
        }

        const goRight = () => {
            if(!go) {
                setStop(false);
                $(".card2").css('right', '-1000px');
                $(".card2").css('transition', 'all 0.5s');
                opaLeft();
                setSize2(false);
                setRot2(true);
                setTimeout(()=>setCnt(cnt+=1),300);
                setTimeout(()=>{
                    setStop(true);
                    setSize2(true);
                    $(".card2").css('transition', 'all 0s');
                    $(".card2").css('right', '100px');
                    setCnt2((cnt2+=1)%6);
                }, 900);
            }
            else if(go) props.click();
        }

        const opaLeft = () => {
            $(".card1").css('transition', 'all 0.3s');
            $('.card1').css('opacity', '0');
            setRot(true);
            setTimeout(()=> {
                $('.card1').css('opacity', '1');
            }, 300);
        }

        const hold = () => {
            if(notStop) {
                opaLeft();
                opaRight();
                setTimeout(()=> {
                    let copy = [...cards];
                    copy.push(copy.splice(cnt, 1)[0]);
                    setCards(copy);
                }, 300)
            }
        }

    return(
        <center><div id={styles.second} className={props.fadeState}>
            <img src={wArrow} className={styles.leftArr} onClick={goLeft}/>
            <img src={require(`./card/left/${cards[cnt2]}.png`)} className={`l ${size1?'sm':'big'}`}/>
            <img src={require(`./card/right/${cards[cnt2]}.png`)} className={`r ${size2?'sm':'big'}`}/>
            <div className = {'container card1'}>
                <div className = {`card ${rot?'':'rot'}`} onClick={()=>setRot(!rot)}>
                <img src={require(`./card/left/${cards[cnt]}.png`)} className='front'/>
                <img src={require(`./card/left/${cards[cnt]}_back.png`)} className='back'/>
                </div>
            </div>
            <div>
                <img src={logo} onClick={hold}/>
                <p id={styles.wText}>보류하기</p>
            </div>
            <div className = {'container card2'}>
                <div className = {`card ${rot2?'':'rot'}`} onClick={()=>setRot2(!rot2)}>
                <img src={require(`./card/right/${cards[cnt]}.png`)} className='front'/>
                <img src={require(`./card/right/${cards[cnt]}_back.png`)} className='back'/>
                </div>
            </div>
            <img src={wArrow} className={styles.rightArr} onClick={goRight}/>
        </div></center>
    )
}