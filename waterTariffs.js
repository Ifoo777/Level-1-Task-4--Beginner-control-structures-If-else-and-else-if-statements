let user = prompt(" Enter amount of litres used"); 

let litersOfWater = parseInt(user);

let step1 = 15.73;
let step2 = 22.38;
let step3 = 31.77;
let step4 = 69.76;


let totalLitersOfWater1 = step1 * litersOfWater / 1000; 
let totalLitersOfWater2 = step2 * litersOfWater / 1000;
let totalLitersOfWater3 = step3 * litersOfWater / 1000;
let totalLitersOfWater4 = step4 * litersOfWater / 1000;

if  (0 <= 6){

   console.log(" The total amount to pay in Rands is " + totalLitersOfWater1); 
}

else if (6 <= 10.5){

    console.log(" The total amount to pay in Rands is " + totalLitersOfWater2); 
}


else if (10.5 <= 35){

    console.log(" The total amount to pay in Rands is " + totalLitersOfWater3); 
}


else if (0 <= 35){

    console.log(" The total amount to pay in Rands is " + totalLitersOfWater4);
}


else {
    console.log(user + "User has not entered any amount");
}








