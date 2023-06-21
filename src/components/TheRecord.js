import { useParams } from "react-router-dom";

import Chat from './Chat'
import styles from './TheRecord.module.css'
import logo from '../img/logo.png'
import dummy from "../db/data.json";

function TheRecord() {
    const {subject} = useParams();
    let data = dummy.record.find(a => a.name === subject);
    return(
        <>
            <div id={styles.first}>
                <div className={styles.rTitle}>
                    {data.name}&nbsp;<img src={logo} id={styles.logo}/>
                    <br/>
                    {data.title}
                </div>
                <div id={styles.subContent}>
                   <Para img={`${data.name}1`} sub={data.sub1} text={data.text11} text2={data.text12}/>
                   <Para img={`${data.name}2`} sub={data.sub2} text={data.text21} text2={data.text22}/>
                </div>
            </div>
            <div id={styles.second}>    
                <Chat title={`${subject}`}/>
            </div>
        </>
    )
}

function Para(props) {
    return(
        <div id={styles.pContent}>
            <img src={require(`./thesis/${props.img}.png`)} id={styles.pImg}/>
            <div id={styles.pTitle}>{props.sub}</div>
            <div id={styles.pText}>
                {props.text}<br/><br/>
                {props.text2}
            </div>
        </div>
    )
}

export default TheRecord;