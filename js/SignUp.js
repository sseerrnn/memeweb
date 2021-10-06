firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if (user != null) {
      // window.alert(user.displayName);
      window.location.href = "Profile.html";
    }
  }
});
function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("passwordconfirmation").value;
  var username = document.getElementById("username").value;
  
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
      })
      .then(() => {
        var user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: document.getElementById("username").value,
          });
        });
        // window.alert(document.getElementById("username").value);
    } else {
      window.alert("password don't match");
    }
  }
}

