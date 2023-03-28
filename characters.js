 let user = prompt(" Insert a uppercase letter, a lowercase letter or a number ");

 let upperCase = user.toUpperCase();

 let lowerCase = user.toLowerCase();

 let num = parseInt(user)


 if ((Number.isInteger(num))){
     console.log(num + " is a number.");
 }

 else if (lowerCase == user){
     console.log(lowerCase + " is a lowercase letter.");
 }

 
  else if (user == upperCase){
    console.log(upperCase + " This is a uppercase letter");
}

 else{
    console.log( user + " ? is not a letter or number ");
}

