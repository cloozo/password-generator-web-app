// Assignment Code
var generateBtn = document.querySelector("#generate");
// random lower, random upper, random numbers, special
var random_lower_case = 'abcdefghijklmnopqrstuvwxyz';
var random_upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var random_numbers = '0123456789';
var specialChr = '~`!@#$%^&*()-_+={}[]|\/:";<>.?';
//option to confirm
var user_password_length;
var confirm_Lower_choice;
var confirm_upper_choice;
var confirm_number_choice;
var confirm_special_character;
var different_options = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //password value
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GeneratePassword Function
function generatePassword() {
  //  the user  is prompted for password
  user_password_length = prompt("Please choose between 8 and 128/field can't be left empty");
  if (user_password_length < 8 || user_password_length > 128 || !user_password_length) {
  
    user_password_length = prompt("Sorry!:( You need to choose a number between 8 and 128");
  
  
  } else { 
    confirm_Lower_choice = confirm("Lower case letters?");
    confirm_upper_choice = confirm("Upper case letters?");
    confirm_number_choice = confirm("Contain random_numbers?");
    confirm_special_character = confirm("Special characters?");
  };

  // based on user choice
 if (confirm_Lower_choice && confirm_upper_choice && confirm_number_choice && confirm_special_character) {
    different_options = random_lower_case.concat(random_upper_case, random_numbers, specialChr);
  
  }
  //based on user choice
  else if (confirm_Lower_choice && confirm_upper_choice && confirm_number_choice) {
    different_options = random_lower_case.concat(random_upper_case, random_numbers);

  }
  else if (confirm_Lower_choice && confirm_upper_choice && confirm_special_character) {
    different_options = random_lower_case.concat(random_upper_case, specialChr);
  
  }
  else if (confirm_Lower_choice && confirm_number_choice && confirm_special_character) {
    different_options = random_lower_case.concat(random_numbers, special);
 
  }
  else if (confirm_upper_choice && confirm_number_choice && confirm_special_character) {
    different_options = random_upper_case.concat(random_numbers, specialChr);
 
  }
  //
  else if (confirm_Lower_choice && confirm_upper_choice) {
    different_options = random_lower_case.concat(random_upper_case);

  }
  else if (confirm_Lower_choice && confirm_number_choice) {
    different_options = random_lower_case.concat(random_numbers);

  }
  else if (confirm_Lower_choice && confirm_special_character) {
    different_options = random_lower_case.concat(specialChr);
 
  }
  else if (confirm_upper_choice && confirm_number_choice) {
    different_options = random_upper_case.concat(random_numbers);
    console.log(different_options); }
  else if (confirm_upper_choice && confirm_special_character) {
    different_options = random_upper_case.concat(specialChr);
  
  }
  else if (confirm_number_choice && confirm_special_character) {
    different_options = random_numbers.concat(specialChr);
 
  }
  // 
  else if (confirm_Lower_choice) {
    different_options = random_lower_case;

  }
  else if (confirm_upper_choice) {
    different_options = blankUpper.concat(random_upper_case);

  }
  else if (confirm_number_choice) {
    different_options = random_numbers;
 
  }
  else if (confirm_special_character) {
    different_options = specialChr;
   
  };

  // setting blank password
  var empty_password = [];
  
  // iteration for selecton
  for (var y = 0; y < user_password_length; y++) {
    var options_selection = different_options[Math.floor(Math.random() * different_options.length)];
    empty_password.push(options_selection);
    console.log(options_selection);
  }

  // passord generated here
  var password = empty_password.join("");
  console.log("Congratulations! :) Your Secured & Protected Generated Pasword is: " + password);
  return password;
  
}
