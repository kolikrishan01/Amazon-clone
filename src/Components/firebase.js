import { initializeApp} from  "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyCc5MchjHx2UjATU4pq1eqRLxryUPPerSs",
    authDomain: "e-cart-9c2ae.firebaseapp.com",
    projectId: "e-cart-9c2ae",
    storageBucket: "e-cart-9c2ae.appspot.com",
    messagingSenderId: "331462215848",
    appId: "1:331462215848:web:dcdc4022c6e7c0deb9da9d",
    measurementId: "G-HF9D3V9VGV",
    dataaseURL: "https://e-cart-9c2ae-default-rtdb.firebaseio.com/"
  };
  export const app = initializeApp(firebaseConfig)