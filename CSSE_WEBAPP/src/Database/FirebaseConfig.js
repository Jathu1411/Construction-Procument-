import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCbvXM7h19Sqi2V2aNWHpT_lSqlgYKs1RA",
    authDomain: "keen-hope-224307.firebaseapp.com",
    databaseURL: "https://keen-hope-224307.firebaseio.com",
    projectId: "keen-hope-224307",
    storageBucket: "keen-hope-224307.appspot.com",
    messagingSenderId: "766943959049",
    appId: "1:766943959049:web:700ae6f34b60dff6f3c0d8",

  // apiKey: "AIzaSyBNDK_uDob2wyUphTLrh_JzJGtFfVu3UoA",
  // authDomain: "csse-27f45.firebaseapp.com",
  // projectId: "csse-27f45",
  // storageBucket: "csse-27f45.appspot.com",
  // messagingSenderId: "482505536843",
  // appId: "1:482505536843:web:ef2f66e65cb6366146e4ce",
  // databaseURL: "https://csse-27f45-default-rtdb.firebaseio.com/",
  // measurementId: "G-G0SVV949KT",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
