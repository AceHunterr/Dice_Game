var randomNumber1 = Math.ceil(Math.random()*6);
var img_src1 = "images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",img_src1);


var randomNumber2 = Math.ceil(Math.random()*6);
var img_src2 = "images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",img_src2);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "⛳Player 1 Wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins⛳";
}
else
{
    document.querySelector("h1").innerHTML = "⛳Draw⛳";
}