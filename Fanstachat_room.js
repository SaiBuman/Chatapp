
var firebaseConfig = {
  apiKey: "AIzaSyA4ItMm7wI-PzzEdMIgl1PMha1CYBYQiPo",
  authDomain: "kwitter-d7d70.firebaseapp.com",
  databaseURL: "https://kwitter-d7d70-default-rtdb.firebaseio.com",
  projectId: "kwitter-d7d70",
  storageBucket: "kwitter-d7d70.appspot.com",
  messagingSenderId: "85469687541",
  appId: "1:85469687541:web:2d29840519c683f91b5fbc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
