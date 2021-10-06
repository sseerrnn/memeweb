firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if (user != null) {
      window.location.href = "Profile.html";
    }
  }
});
function login() {
  var userEmail = document.getElementById("username").value;
  var userPass = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)

    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });
}
function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "StartPage.html";
    })
    .catch((error) => {
      // An error happened.
    });
}
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("passwordconfirmation").value;
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var surname = document.getElementById("surname").value;

  if (username == "") {
    window.alert("fill username first");
  }

  if (username != "") {
    if (password == confirm_password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("Error : " + errorMessage);
          // ..
        });
      if (user != null) {
        // No user is signed in.
        if (
          window.location.href != "http://127.0.0.1:5500/MemeWeb/Profile.html"
        ) {
          window.location.href = "Profile.html";
        }
      }
    } else {
      window.alert("password don't match");
    }
  }
}
