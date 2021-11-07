//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyCK0fnFvErtLa5ikZc19V6Sf6sGkQlxbL0",
      authDomain: "letschat-28ee0.firebaseapp.com",
      databaseURL: "https://letschat-28ee0-default-rtdb.firebaseio.com",
      projectId: "letschat-28ee0",
      storageBucket: "letschat-28ee0.appspot.com",
      messagingSenderId: "926315960458",
      appId: "1:926315960458:web:30dbd4f658c10c9bcd3573"
    };
// Initializing Fire Base
firebase.initializeApp(firebaseConfig);
User_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + User_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name: " + Room_names);
                  row = "<div class='room_name id='+room_names+' onclick='redirectToRoomName(this.id)'> #" + Room_names + " </div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
localStorage.removeItem("Room_name");
window.location = "chat.html";
}