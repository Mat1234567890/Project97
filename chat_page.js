//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        Msg = message_data['message'];
                        Name = message_data['name'];
                        likes = message_data['like'];
                        name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + Msg + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + likes + "onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: " + likes + "</span> </button> <hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id){
console.log("clicked on like btn" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
});
}

function Send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("chat.html");
}