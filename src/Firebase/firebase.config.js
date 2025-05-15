import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXXeV261wO7eC2yIGw66h8BsC0D_12u9A",
  authDomain: "coffee-shop-eb6c8.firebaseapp.com",
  projectId: "coffee-shop-eb6c8",
  storageBucket: "coffee-shop-eb6c8.firebasestorage.app",
  messagingSenderId: "373244086401",
  appId: "1:373244086401:web:33bf2e8d7f75fba7fca580",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
