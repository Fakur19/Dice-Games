// Generate random number and address it to images
// var randomNumber1=Math.floor(Math.random()*6)+1;
// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomDiceImage1 = "images/"+"dice"+randomNumber1+".png";
// var randomDiceImage2 = "images/"+"dice"+randomNumber2+".png";
// var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
// var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

// // Condition to decide who win 
// if(randomDiceImage1>randomDiceImage2){
//     document.querySelector("h1").textContent = "🏆Player 1 Wins";
// }else if(randomDiceImage1===randomDiceImage2){
//     document.querySelector("h1").textContent = "Draw!";
// }else{
//     document.querySelector("h1").textContent = "Player 2 Wins🏆";
// }



// using Jquery for DOM implementation

// img Animation
$("h1").hide().fadeIn(2000);
$("img").hide().show(1000);
$("p").hide().show(2000);
// Generate random number

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "images/"+"dice"+randomNumber1+".png";
var randomDiceImage2 = "images/"+"dice"+randomNumber2+".png";

var image1 = $(".player-1-img").attr("src",randomDiceImage1);
var image2 = $(".player-2-img").attr("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    $("h1").text("🏆 Player 1 Wins");
}else if(randomNumber1<randomNumber2){
    $("h1").text("Player 2 Wins 🏆");
}else{
    $("h1").text("Draw!");
}

