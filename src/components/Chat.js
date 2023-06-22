import React, { useEffect, useState, useRef } from 'react';
import { addDoc, collection, getDocs, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase';
import styles from './Chat.module.css';
import $ from 'jquery';

function Chat(props) {
  const bucket = collection(firestore, props.title);

  const [comment, setComment] = useState('');
  const [firebaseData, setFirebaseData] = useState([]);

  const textareaRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(bucket, orderBy('timestamp', 'desc'), limit(10)),
      (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setFirebaseData(data);
      }
    );
    return () => unsubscribe();
  }, []);

  const checkCnt = () => {
    var content = textareaRef.current.value;
    $('#counter').html(content.length); //글자수 실시간 카운팅
    if (content.length === 0) $('#counter').html(0);
    if (content.length > 700) {
      alert('최대 700자까지 입력 가능합니다.');
      textareaRef.current.value = content.substring(0, 700);
      $('#counter').html('700');
    }
  };

  const getRandomColor = () => {
    const colors = ['#008D62', '#325928', '#005666', '#81C147', '#009874', '#BDCF28', '#86A250', '#88DE88', '#AAEEAA', '#2ABCB4', '#008000', '#134F2C', '#0A3711', 
    '#728000', '#306754', '#3EA99F', '#3B9C9C', '#4E8975'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomName = () => {
    const names = ['잎새버섯','먹물버섯','밤버섯','잣버섯','꾀꼬리버섯','까치버섯','싸리버섯','큰갓버섯','달걀버섯','치마버섯','벚꽃버섯','비늘버섯','개암버섯','뽕나무버섯',
    '광대버섯','느타리버섯','팽이버섯','큰낙엽버섯','표고버섯','말불버섯','만가닥버섯','능이버섯','말굽버섯','송이버섯','기와버섯','망태버섯','풀버섯','팽나무버섯','목이버섯','영지버섯'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return '익명의 ' + names[randomIndex];
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (comment === '') {
      alert('내용을 입력해주세요.');
    } else {
      alert('댓글을 작성했습니다!');
      await addDoc(bucket, { comment, timestamp: new Date().getTime(), color : getRandomColor(), name : getRandomName() });
      setComment('');
      textareaRef.current.value = '';
      textareaRef.current.focus();
    }
  };

  return (
    <>
      <div id={styles.ctitle}>의견 작성하기</div>
      <form onSubmit={onSubmit}>
        <textarea
          className={`${styles.ta} ta`}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="당신의 의견을 마음껏 작성해주세요"
          onKeyUp={checkCnt}
          ref={textareaRef}
        />
        <div className={styles.twrap}>
          <div>
            <span className={styles.cnt} id="counter">
              0
            </span>
            <span className={styles.cnt}>/700</span>
          </div>
          <button type="submit" className={styles.subtn}>
            등록
          </button>
        </div>
      </form>
      {firebaseData.map((item) => (
        <Content key={item.id} content={item.comment} color={item.color} name={item.name} time={item.timestamp}/>
      ))}
    </>
  );
}

function Content(props) {

    const detailDate = (createdAt) => {
            console.log(createdAt);
            const milliSeconds = new Date().getTime() - createdAt;
            const seconds = milliSeconds / 1000
            console.log(`현재 : ${Date.now()}, 올린 시간 : ${createdAt}`);
            if (seconds < 60) return `방금 전`
            const minutes = seconds / 60
            if (minutes < 60) return `${Math.floor(minutes)}분 전`
            const hours = minutes / 60
            if (hours < 24) return `${Math.floor(hours)}시간 전`
            const days = hours / 24
            if (days < 7) return `${Math.floor(days)}일 전`
            const weeks = days / 7
            if (weeks < 5) return `${Math.floor(weeks)}주 전`
            const months = days / 30
            if (months < 12) return `${Math.floor(months)}개월 전`
            const years = days / 365
            return `${Math.floor(years)}년 전`
    };
    

  return (
    <div className={styles.content}>
      <svg>
        <circle cx="29" cy="29" r="29" fill={props.color}></circle>
      </svg>
      <div className={styles.cText}>
        <div>{props.name}</div>
                <div>{detailDate(props.time)}</div>
                <div>
                {props.content}
                </div>
            </div> 
        </div>
    );
}

export default Chat;