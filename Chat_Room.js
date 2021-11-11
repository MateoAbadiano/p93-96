// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqId57ST1MS-j4sA_5ajL5TO8wDQyDdIQ",
  authDomain: "kwitter-3cbdd.firebaseapp.com",
  databaseURL: "https://kwitter-3cbdd-default-rtdb.firebaseio.com",
  projectId: "kwitter-3cbdd",
  storageBucket: "kwitter-3cbdd.appspot.com",
  messagingSenderId: "771672743316",
  appId: "1:771672743316:web:234acbb811f2111a2c8381"
};    

// Initialize Firebase
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
    
    window.location = "Chat_Page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
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
    window.location = "Chat_Page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
