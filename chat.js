function addUser(){
var User_name = document.getElementById("user_name").value;
    localStorage.setItem("username", User_name);
    window.location = "chat_room.html";
    console.log("hi")
}