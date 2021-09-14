

  var firebaseConfig = {
      apiKey: "AIzaSyC6oSU7OBQk6BzR6lwMKejcpnfs4yOUTlw",
      authDomain: "kwitter-35c81.firebaseapp.com",
      databaseURL: "https://kwitter-35c81-default-rtdb.firebaseio.com",
      projectId: "kwitter-35c81",
      storageBucket: "kwitter-35c81.appspot.com",
      messagingSenderId: "159051360563",
      appId: "1:159051360563:web:117659eb9bf975563cf646",
      measurementId: "G-NTRJ0Y5RZ7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("RoomName- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}