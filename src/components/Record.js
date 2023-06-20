import { useState } from 'react';
import $ from 'jquery';
import styles from './Record.module.css'
import logo from '../img/logo.png'
import Chat from './Chat';

function Record() {
    let [rot, setRot] = useState(true);
    return (
        <>
            <div id={styles.first}>
                <div className={styles.rTitle}>
                    세계&nbsp;<img src={logo} id={styles.logo}/>
                    <br/>
                    당신의 고민과 가치는 어디에 있나요?
                </div>
                <div className={styles.accodi}>
                    <AccordionEx title="사용자 고민은 여기 위로 추가"/>
                </div>
            </div>
            <div id={styles.second}>
                <Chat title='recordschat'/>
            </div>
        </>
    )
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
            <div className={styles.hText}>
                <div>{props.title}</div>
                <div>{tab?'+':'-'}</div>
            </div>
            <div className={`${styles.bodyAnswer} ${tab}`}>
                    <div className={`${tab2}`}>
                        저는 테스트를 위해 존재해요저는 테스트를 위해 존재해요저는 테스트를 위해 존재해요<br/>
                        저는 테스트를 위해 존재해요저는 테스트를 위해 존재해요<br/>
                        저는 테스트를 위해 존재해요저는 테스트를 위해 존재해요저는 테스트를 위해 존재해요
                    </div>
            </div>
        </div>
          <svg width="1416" height="12">
                <line x1="0" y1="1" x2="1416" y2="1" stroke-width="2" stroke="black" />
            </svg>
      </div>
    );
}


export default Record;