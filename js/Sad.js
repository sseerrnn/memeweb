var classified_pic = [];
async function getmeme(text) {
  var meme = await firebase.firestore().collection("meme").get();

  meme.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());

    if (doc.data().type.includes(text)) {
      classified_pic.push(doc.id);
      console.log(classified_pic);
      console.log(doc.data().name);
    }

    //   if (doc.data().user == user.email) {
    //     pic.push(doc.data().image);
    //     id.push(doc.id);
    //   }
  });
}
async function showpic() {
  for (i = 0; i < classified_pic.length; i++) {
    var meme_ref = await firebase
      .firestore()
      .collection("meme")
      .doc(classified_pic[i]);
    meme_ref.get().then((res) => {
      console.log(res.data().image);
      
      var new_pic = document.createElement("img");
      new_pic.src = res.data().image;
      new_pic.id=res.id;
      new_pic.width = 240;
      new_pic.height = 200;
      new_pic.addEventListener("click", setonaction);
  
      var name_pic = document.createElement("p");
      name_pic.innerHTML = res.data().name;
      name_pic.className = "tag";
  
      var des_pic = document.createElement("p");
      des_pic.className = "text_column";
      des_pic.innerHTML = res.data().description;
      // console.log(meme_ref.image)
  
      var new_pic_pane =  document.createElement("div");
      new_pic_pane.className = "thumbnail";
      new_pic_pane.height = 460;
      new_pic_pane.appendChild(new_pic);
      new_pic_pane.appendChild(name_pic);
      new_pic_pane.appendChild(des_pic);
      document.getElementById("gallery").appendChild(new_pic_pane);
    });
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
async function main() {
  await getmeme("Sad");
  console.log(classified_pic);
  showpic();
}
main();
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