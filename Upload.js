
var meme_ref = firebase.firestore().collection("meme");
var meme_url;




function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type,
    };
    const task = ref.child(name).put(file, metadata);
    task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            alert("Image Upload Successful");
            const image = document.querySelector("#image");
            image.src = url;
            meme_url=url;
        })
        .catch(console.error);
}

async function createData() {
    var memeName = document.getElementById("meme-name").value;
    var memeDescription = document.getElementById("description").value;
    var memeImage = document.getElementById("photo").value;
    var user = firebase.auth().currentUser;
    
    
    
    
    if (memeImage == "") {
        window.alert("please upload an image");
    }

    if (memeName == "") {
        window.alert("please fill meme name");
    }

    if (memeDescription == "") {
        window.alert("please fill meme description");
    }

    if (memeName != "" && memeDescription != "" && memeImage != "") {
       var classifications = await window.apicall([memeDescription]);
        console.log(classifications);
        
        meme_ref.add({
            description: memeDescription,
            image: meme_url,
            name: memeName,
            user: user.email,
            type: classifications
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            window.location.href = "Profile.html";
        }).catch((error) => {
            console.error("Error adding document: ", error);
        })

            
        
    }
}

