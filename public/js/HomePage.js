const popupbox=document.getElementById("popupbox");
const username = document.getElementById("USERNAME")

function closepopup(){
    popupbox.style.display = "none";    
    
}
function   popup(){
popupbox.style.display = "block";

}
username.addEventListener("mouseover", popup);
username.addEventListener("mouseout", closepopup);
popupbox.addEventListener("mouseover", popup);
popupbox.addEventListener("mouseout", closepopup);
closepopup();

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