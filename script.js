// Assignment code here
function generatePassword(){
  var passLength=0;
  var passNum= false;
  var passUpperCase=false;
  var passSpecChar=false;
  var masterList=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var UpperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers=['0','1','2','3','4','5','6','7','8','9'];
  var specChar=[' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
  var output='';
  console.log(masterList)
  while (passLength<8 || passLength>128){
    passLength=prompt('How many characters for your password? Type a number between 8-128');
  }
  passNum=confirm('Include numbers in your password?');
  passUpperCase=confirm('Include uppercase letters in your password?');
  passSpecChar=confirm('Include special characters in your password?');
  if (passNum){
    masterList =masterList.concat(numbers);
  }
  if (passUpperCase){
    masterList =masterList.concat(UpperCase);
  }
  if (passSpecChar){
    masterList = masterList.concat(specChar);
  }
  console.log(masterList)
  for (i=0;i<passLength;i++){
    output += masterList[Math.floor(Math.random()*masterList.length)];
  }
  return output;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
