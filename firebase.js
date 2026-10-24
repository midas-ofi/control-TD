import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebas-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebasConfig = {
  apiKey: "AIzaSyDAWAnEjIkcZrtSMFmG-3gnT3uCskMPh8",
  authDomain: "td-midas.firebaseapp.com",
  projectId: "td-midas",
  storageBucket: "td-midas.firebasestorage.app",
  messagingSenderId: "10618748360",
  appId: "1:10618748360:web:eca9eb9abed0dbb55654fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);