var pic = [];
var id = [];

firebase.auth().onAuthStateChanged(async function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if (user != null) {
      var username = user.displayName;

      document.getElementById("profile").innerHTML =
        document.getElementById("profile").innerHTML + " : " + username;
      await getmeme();

      showpic();
    }
  }
});
function showpic() {
  console.log(pic.length);

  for (i = 0; i < pic.length; i++) {
    var new_pic = document.createElement("img");
    var pic_pane = document.getElementById("images");
    new_pic.src = pic[i];
    new_pic.width = 380;
    new_pic.height = 300;
    new_pic.id = id[i];
    
    new_pic.addEventListener("click", setonaction);

    pic_pane.appendChild(new_pic);
  }
}
async function setonaction() {
  var clickedid_ref=firebase.firestore().collection("id_save").doc("data");
  await clickedid_ref.set({id: this.id})
  await clickedid_ref.get().then((doc) => {
  
      console.log("Document data:", doc.data().id);
  /////HEREEEEEE//////
  //console.log(clickedid_ref.doc("data").data())
  //console.log(this.id);
  window.location.href = "Meme.html";
})
}
async function getmeme() {
  var meme = await firebase.firestore().collection("meme").get();
  var user = firebase.auth().currentUser;
  meme.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    if (doc.data().user == user.email) {
      pic.push(doc.data().image);
      id.push(doc.id);
    }
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
