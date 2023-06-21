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
            </div>
            <div id={styles.second}>    
                <Chat title={`${subject}`}/>
            </div>
        </>
    )
}

export default TheRecord;