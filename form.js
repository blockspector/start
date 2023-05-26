 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDoD0rX8HTUOVkdNCK4wYCNV3ynKA2ttEI",
   authDomain: "blockspectorsite.firebaseapp.com",
   databaseURL: "https://blockspectorsite-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "blockspectorsite",
   storageBucket: "blockspectorsite.appspot.com",
   messagingSenderId: "314864375763",
   appId: "1:314864375763:web:d2a0b823a2649baf3f8126",
   measurementId: "G-M7WV116X82"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);document.getElementById("myButton").onclick = function() {
  var myEmail = document.getElementById("textInput").value
  console.log(document.getElementById('textInput').value);}
  
 const analytics = getAnalytics(app);
const db = getDatabase(app);

document.getElementById("myButton").onclick = function() {
    var myEmail = document.getElementById("textInput").value
    console.log(document.getElementById(myEmail).value);}

