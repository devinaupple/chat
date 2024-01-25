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
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;


    } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref("/").child(room_name).push({
          like:0,
          name:user_name,
          message:msg
    })
    document.getElementById("msg").value="";
}
