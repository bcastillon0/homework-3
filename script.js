//GETTING VARIABLES SET 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArr = lowerCase.split("");
var number = "0123456789";
var numberArr = number.split("");
var symbol = "!@#$%^&*()_+";
var symbolArr = symbol.split("");

//ALERT WINDOW TO GET THE USER TO CLICK INTO FUNCTION (START THE PROCESS)
window.onload = alert("Click the Generate Password");

//PASSWORD FUNCTION(MAIN)
function generatePassword(){
    var totalInput = [];
    var finalPassword = "";
    var passwordLength = prompt("How many characters would you like your password to be?");
    if(passwordLength <8 || passwordLength > 128){
      alert("Keep it between 8 and 128 next time");
    }
    
    //RETRIEVING PASSWORD PARAMETERS FROM THE USER  
    //Using Array push to add the confirmed parameters to the overall list
    //USING ARRAY PUSH TO ADD THE CONFIRMED PARAMETERS TO THE PASSWORD TOTAL INPUT
    //IDEA OF UTILIZING ARRAY PUSH WAS FROM SEEING A GENERATOR USING LOWER CASED CHARACTERS AND NUMBERS
    else{
    if(confirm("Do you want lower case characters to be included?")){
        Array.prototype.push.apply(totalInput, lowerCaseArr);
    }

    if(confirm("Do you want upper case characters to be included?")){
        Array.prototype.push.apply(totalInput, upperCaseArr);
    }

    if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(totalInput, numberArr);
    }

    if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(totalInput, symbolArr);
    }
    // IF NON OF THE OTHER PARAMETERS ARE ADDED TO THE PASSWORD TOTAL INPUT IT SENDS AN ALERT 
    if(totalInput.length===0){
        alert("You have to choose at least one criteria.");
    }

    else{
        for(var i=0; i<passwordLength; i++){
            var random = Math.floor(Math.random()*totalInput.length);
            finalPassword += totalInput[random];
        }
    }
    }
//ALERT MESSAGE WILL DISPLAY THE GENERATED PASSWORD
      alert(finalPassword);

}

