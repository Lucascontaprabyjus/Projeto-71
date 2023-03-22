import firebase from "firebase";
import { initializeApp } from "firebase/app";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyDFpJXcedutVVwjRzMmT1XKCJS9Im1U_jQ",
    authDomain: "ciclista-eletronico-ed4b0.firebaseapp.com",
    projectId: "ciclista-eletronico-ed4b0",
    storageBucket: "ciclista-eletronico-ed4b0.appspot.com",
    messagingSenderId: "133834659740",
    appId: "1:133834659740:web:436946503db93a32deda59"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
