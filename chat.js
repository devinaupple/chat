
firebaseConfig = {
    apiKey: "AIzaSyCYhKrI2iIx9qqXzTErdiKc4mIK_ECoQHQ",
    authDomain: "kwitter-5e41a.firebaseapp.com",
    databaseURL: "https://kwitter-5e41a-default-rtdb.firebaseio.com",
    projectId: "kwitter-5e41a",
    storageBucket: "kwitter-5e41a.appspot.com",
    messagingSenderId: "1050670594017",
    appId: "1:1050670594017:web:2270731af09a8c7b9544a0"
  };
  
firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



