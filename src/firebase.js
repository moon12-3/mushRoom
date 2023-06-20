//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyAolg7XSaJns9bP9k5EVxFw9-HtbALOON0",
  authDomain: "mush-room-f503b.firebaseapp.com",
  projectId: "mush-room-f503b",
  storageBucket: "mush-room-f503b.appspot.com",
  messagingSenderId: "809960602470",
  appId: "1:809960602470:web:8da5e1ed784171ef7866a7",
  measurementId: "G-L83QDL13QR"
};
  

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };