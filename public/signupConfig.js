import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDd1XWHasOugIqtCt9eoJP0jER1OnKI5RI",
    authDomain: "posh-b40e0.firebaseapp.com",
    projectId: "posh-b40e0",
    storageBucket: "posh-b40e0.appspot.com",
    messagingSenderId: "969802140149",
    appId: "1:969802140149:web:b2cd34e3750144a4a7f8bc"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const signup = async () => {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  await setDoc(doc(db, "giveaway", email),{ 
    name,
    number,
    email,
    password,
  }).then (() =>{
     console.log("created");
  window.location.href = "./index.html";
  }).catch((err) => {
    console.log(err);
  });
};

module.signup = signup;
console.log(module);
