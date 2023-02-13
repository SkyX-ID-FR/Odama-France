/* 
   _______     __                            _______                              
  |       |.--|  |.---.-.--------.---.-.    |    ___|.----.---.-.-----.----.-----.
  |   -   ||  _  ||  _  |        |  _  |    |    ___||   _|  _  |     |  __|  -__|
  |_______||_____||___._|__|__|__|___._|    |___|    |__| |___._|__|__|____|_____|
  Version 1.1.0 - By @skyx_id_fr - "Odama, you like it ! ✨"
*/

import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2aNhIXOCsm6ZwiRrfz7p2KSNlqn8qcew",
  authDomain: "odama-france-c5b1c.firebaseapp.com",
  projectId: "odama-france-c5b1c",
  storageBucket: "odama-france-c5b1c.appspot.com",
  messagingSenderId: "197078868316",
  appId: "1:197078868316:web:5745630203861a613e2199",
  measurementId: "G-PTDZTB7YCV"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);