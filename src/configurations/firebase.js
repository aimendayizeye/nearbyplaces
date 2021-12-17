import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
let config = {
  apiKey: "AIzaSyCBLkz_ID46V2ISZsBK26jKjjXxMopGkP0",
  authDomain: "movieapp-679ae.firebaseapp.com",
  databaseURL: "https://movieapp-679ae-default-rtdb.firebaseio.com",
  projectId: "movieapp-679ae",
  storageBucket: "movieapp-679ae.appspot.com",
  messagingSenderId: "448757021790",
  appId: "1:448757021790:web:8c8097e3c04b49056088cf"
  };
  
const app = initializeApp(config)
const auth = getAuth(app)
export {auth}