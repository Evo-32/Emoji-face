const myCointer = document.getElementById("face");
const myButton = document.querySelector("button");
const emoji =['😒','😁','😂','😜','😅','🤗','😭','🐒','😘','🥱','🤤'];
function generate(){
    const randomFace = Math.floor(Math.random()*emoji.length);
    const emojie= emoji[randomFace];
    myCointer.textContent=emojie;
}
myButton.addEventListener("click",generate);

