var firebaseConfig = {
    apiKey: "AIzaSyB26-mgRYIIIZNpVWruau3cPyzpb2CEHgg",
    authDomain: "awdadwadadwadaw.firebaseapp.com",
    projectId: "awdadwadadwadaw",
    storageBucket: "awdadwadadwadaw.appspot.com",
    messagingSenderId: "808977648036",
    appId: "1:808977648036:web:bcda39021f9e6c65661931",
    measurementId: "G-1WHDSWVR4Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.database().ref("messages");
  
  document.getElementById("email-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getInputVal("name");
    var email = getInputVal("email");
    var subject = getInputVal("subject");
    var message = getInputVal("message");
    
     saveMessage(name, email, subject, message);
  
    document.querySelector(".sent-message").style.display = "block";
  
    setTimeout(function () {
      document.querySelector(".sent-message").style.display = "none";
    }, 3000);
  
    document.getElementById("email-form").reset();
  }
  
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  function saveMessage(name, email, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  }
  