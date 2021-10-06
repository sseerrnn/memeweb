function forgotpassword(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById("email").value;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        window.location.href = 'SignIn.html';
}).catch(function(error) {
    window.alert("Error : "+ errorMessage);
  // An error happened.
});
}