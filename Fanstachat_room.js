var firebaseConfig = {
  apiKey: "AIzaSyA4Itm,Mm7wI-PzzEdMIgl1PMha1CYBYQiPo",
  authDomain: "kwitter-d7d70.firebaseapp.com",
  databaseURL: "https://kwitter-d7d70-default-rtdb.firebaseio.com",
  projectId: "kwitter-d7d70",
  storageBucket: "kwitter-d7d70.appspot.com",
  messagingSenderId: "85469687541",
  appId: "1:85469687541:web:2d29840519c683f91b5fbc"
};

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Fanstagram.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}