function play(){
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2;
 
    document.getElementById("die1").innerHTML = "die1 = " + die1;
    document.getElementById("die2").innerHTML = "die2 = " + die2;
    document.getElementById("sum").innerHTML = "sum =" + sum;

if (sum == 7 || sum == 11){

    document.getElementById("final").innerHTML= "Seven out - try again!";
}
else if (die1 == die2 && die1 % 2 == 0){

    document.getElementById("final").innerHTML = "Even Doubles - you win";
}
else{
    document.getElementById("final").innerHTML = "Sorry try again!";
}

}
function nba(){
    var randnba = Math.ceil(Math.random()* 15);
    document.getElementById("randnba").innerHTML = "Your Nba player is... = " + randnba;
}
function rap(){
    var rapname = Math.ceil(Math.random()* 49);
    
    document.getElementById("rapname").innerHTML = "First part of your rap name is... = " + rapname;
 
}