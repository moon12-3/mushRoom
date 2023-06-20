import styles from './Chat.module.css';
import $ from 'jquery';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';

import { firestore } from '../firebase';

function Chat(props) {
    const bucket = collection(firestore, props.title);

    let [comment, setComment] = useState('');
    let [firebaseData, setFirebaseData] = useState([]);

    useEffect(() => {
        fetchFirebaseData();
    }, []);

    let checkCnt = () => {
        var content = $('.ta').val();
        $('#counter').html(content.length);    //글자수 실시간 카운팅
        if (content.length === 0)  $('#counter').html(0);
        if (content.length > 700){
            alert("최대 700자까지 입력 가능합니다.");
            $('.ta').val(content.substring(0, 700));
            $('#counter').html("700");
        }
    };

    const onSubmit = async (event) => { // 댓글 작성
        event.preventDefault();
        if(comment=='') alert("내용을 입력해주세요.");
        else {
            alert("댓글을 작성했습니다!");
            await addDoc(bucket, { comment });
            setComment('');
        }
    };

    const fetchFirebaseData = async () => { // 작성된 댓글 불러오기
        const querySnapshot = await getDocs(bucket);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
        });
        setFirebaseData(data);
    };

    return(
        <>
            <div id={styles.ctitle}>의견 작성하기</div>
            <form onSubmit={onSubmit}>
                <textarea
                    className={`${styles.ta} ta`}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder='당신의 의견을 마음껏 작성해주세요'
                    onKeyUp={checkCnt}
                />
                <div className={styles.twrap}>
                    <div>
                        <span className={styles.cnt} id='counter'>0</span>
                        <span className={styles.cnt}>/700</span>
                    </div>
                    <button type='submit' className={styles.subtn}>등록</button>
                </div>
            </form>
            {firebaseData.map((item) => (
                <Content content={item.comment}/>
            ))}
        </>
    );
}

function Content(props) {
    return (
        <div className={styles.content}>
            <svg>
                <circle cx="29" cy="29" r="29" fill="#D9D9D9"></circle>
            </svg>
            <div className={styles.cText}>
                <div>익명의 잎새버섯</div>
                <div>시간</div>
                <div>
                {props.content}
                </div>
            </div> 
        </div>
    );
}

export default Chat;