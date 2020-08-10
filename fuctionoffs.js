let total=0;   // total money of user (made)
let balance=0;   //user money
let countA=0;
let budget=0;

function input()
{
    balance=parseInt(document.querySelector("#balance").value);
    alert(balance+ " added.");
    document.querySelector("#balance2").innerHTML=balance;
}


// Grapes
function add()
{

if(total<=budget)
{   
    budget=balance;
    document.querySelector("#items").innerHTML=++countA;
    total=countA*10;
    document.querySelector("#total").innerHTML=total; 
    budget-= 10;
    document.getElementById("left").innerHTML = balance - total;       
}

else{
    alert("you cant have more money!");
}

}

function minus()
{
if (countA<=0)
{
alert("you don't have anything");
}
else
{ 
    budget=balance;
    document.querySelector("#items").innerHTML=--countA;
    total=countA*10;
    document.querySelector("#total").innerHTML=total; 
    budget+= 10;
    document.getElementById("left").innerHTML = balance -total;   

}

}