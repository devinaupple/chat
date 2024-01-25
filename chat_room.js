const firebaseConfig = {
    apiKey: "AIzaSyCYhKrI2iIx9qqXzTErdiKc4mIK_ECoQHQ",
    authDomain: "kwitter-5e41a.firebaseapp.com",
    databaseURL: "https://kwitter-5e41a-default-rtdb.firebaseio.com",
    projectId: "kwitter-5e41a",
    storageBucket: "kwitter-5e41a.appspot.com",
    messagingSenderId: "1050670594017",
    appId: "1:1050670594017:web:2270731af09a8c7b9544a0"
  };
  
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log ("Room Name -" +Room_names);
      row = "<div class=`Room_names` id="+Room_names+"onclick=`redirectToRoomName(this.id)`>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html";
}
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
  window.location="chat_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.Location ="index.html";
}

