import React, { useEffect, useState } from 'react';
import styles from './Accodi.module.css';
import Acco1 from './ac/Acco1';
import Acco2 from './ac/Acco2';

function Accodi() {

    useEffect(()=> {
        // location.href = '#';
    }, []);
    return(
        <>
            <div id={styles.first}>
                <div id={styles.title}>
                    “다시 상상한 세계" 프로젝트는 누군가를 <span className='nanum'>(혹은 당신을),</span><br/>
                    그리고&nbsp;
                    <span className='nanum'>
                        다양성&nbsp;
                        <svg width="86" height="13">
                            <line x1="0" y1="4" x2="86" y2="4" stroke-width="3" stroke="black" />
                        </svg>
                        &nbsp;가치의
                    </span>
                    &nbsp;공유를
                </div>
                <div>
                    위해 시작되었습니다.
                </div>
            </div>
            <div id={styles.second}>
                <AccordionEx f='시작점' a ={1} outline='프로젝트 개요' title='세상의 가치와 다양성'/>
                <AccordionEx f='콘셉트' a ={2} outline='콘셉트 개요' title='세상 끝에 있는 - 버섯?'/>
            </div>
        </>
    );
}

function AccordionEx(props) {
    let [tab, setTab] = useState(`${styles.bodyNone}`);
    let [tab2, setTab2] = useState(`${styles.bTextNone} ${styles.bodyDisplay}`);

    return (
      <div className={styles.abox}>
        <div className={styles.aHeader} onClick={()=> {
            if(tab==='') {
                setTab(`${styles.bodyNone}`);
                setTab2(`${styles.bTextNone}`);
                setTimeout(()=> {setTab2(`${styles.bTextNone} ${styles.bodyDisplay}`);}, 200);
            }
            else {
                setTab('');
                setTab2('');
            }
          }
        }>
            <svg width="1416" height="12">
                <line x1="0" y1="1" x2="1416" y2="1" stroke-width="4" stroke="black" />
            </svg>
            <br/>
            <div className={styles.hText}>
                <div>{props.f} <span className='nanum'>{`0${props.a}`}</span></div> 
                <div>{props.outline} : <span className='nanum'>{props.title}</span></div>
            </div>
        </div>
          <div className={`${styles.bodyAnswer} ${tab}`}>
            <div className={`${tab2}`}>
                {
                    props.a == 1 ? <Acco1/> : <Acco2/>
                }
                </div>
          </div>
      </div>
    );
}

export default Accodi;