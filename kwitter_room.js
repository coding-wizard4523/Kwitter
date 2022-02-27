
const firebaseConfig = {
      apiKey: "AIzaSyBhhHeenxgWBxnqcVOTDLyX66Q_pE0g5mI",
      authDomain: "kwitter-d8158.firebaseapp.com",
      databaseURL: "https://kwitter-d8158-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8158",
      storageBucket: "kwitter-d8158.appspot.com",
      messagingSenderId: "890199146038",
      appId: "1:890199146038:web:d3990a18d33d3056fb6297"
    };
     firebase.initializeApp(firebaseConfig);      
     user_name=localStorage.getItem("user_name");
     function addRoom(){
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose:"adding room name"
           });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room-name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onClick='redirectToRoomName(this.Id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}