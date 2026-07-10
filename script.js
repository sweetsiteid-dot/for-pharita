function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "1234"){

document.getElementById("passwordScreen")
.style.display="none";

document.getElementById("websiteContent")
.style.display="block";

}else{

alert("Wrong Password 🤍");

}

}

function openGift(){

document.getElementById("giftSection")
.style.display="block";

document.getElementById("music").play();

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}

const images=[
"pharita1.jpg",
"pharita2.jpg",
"pharita3.jpg",
"pharita4.jpg",
"pharita5.jpg",
"pharita6.jpg"
];

const quotes=[
"You deserve every beautiful thing life has to offer.",
"Twenty-one looks beautiful on you.",
"Keep shining and keep smiling.",
"The world is brighter with you in it.",
"Your story is only getting started.",
"The best years are still ahead."
];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length){
current=0;
}

document.getElementById("slide").src=
images[current];

document.getElementById("quote").innerText=
quotes[current];

},3000);

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="🤍";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";

heart.style.fontSize=
(Math.random()*20+20)+"px";

heart.style.animation=
"fall 8s linear";

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(100vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
