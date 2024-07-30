function checkRefresh() {
    if (!sessionStorage.getItem("rollDice")) {
      sessionStorage.setItem("rollDice", "extra")
   
    } else(
      rollTheDice()
    )
   
  }

function rollTheDice(){


var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

var randomDiceImage = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1 img").setAttribute("src",`./images/dice${randomNumber1}.png`);
// you can use backticks with $ for concatenation

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2 img").setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
        document.querySelector("h1").innerHTML = "DRAW !";
}

}

document.querySelector("body").onload = checkRefresh();  