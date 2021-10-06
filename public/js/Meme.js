var imgdata = firebase.firestore().collection("id_save").doc("data");

imgdata.get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data().id);
    var meme = firebase.firestore().collection("meme").doc(doc.data().id);
    meme.get().then((res)=>{
         document.getElementById("memename").innerHTML= "MEME NAME : " + res.data().name;
        document.getElementById("description").innerHTML= "MEME DESCRIPTION : "+res.data().description;
        document.getElementById('username').innerHTML=res.data().user;
        document.getElementById("img").src=res.data().image;
        console.log(document.getElementById("memename").innerHTML);
    })
    
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});
