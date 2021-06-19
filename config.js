 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjNZk-CX_uI2nAskR6HOn3LW4IWh7oF50",
  authDomain: "attendance-534f5.firebaseapp.com",
  databaseURL: "https://attendance-534f5-default-rtdb.firebaseio.com",
  projectId: "attendance-534f5",
  storageBucket: "attendance-534f5.appspot.com",
  messagingSenderId: "902143546913",
  appId: "1:902143546913:web:9d66d6f191e1cc87f73560"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  