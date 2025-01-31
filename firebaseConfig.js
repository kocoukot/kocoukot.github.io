// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


// 🔥 Замените на свои данные из Firebase Console!
const firebaseConfig = {
    apiKey: "AIzaSyBk_ti7-wJq5Qo80l7PvMBzplE6zqYYIsQ",
    authDomain: "test2-97c82.firebaseapp.com",
    databaseURL: "https://test2-97c82.firebaseio.com",
    projectId: "test2-97c82",
    storageBucket: "test2-97c82.firebasestorage.app",
    messagingSenderId: "464257082515",
    appId: "1:464257082515:web:e37f8c7e30d3b3a1cb5966",
    measurementId: "G-C6Z6N2Y450"
};

// 🏗 Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, set };
