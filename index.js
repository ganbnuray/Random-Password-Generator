function generatePassword() {
  // Necessary DOM elements to be used or manipulated
  const includeLowerCase = document.getElementById("includeLowerCase");
  const includeUpperCase = document.getElementById("includeUpperCase");
  const includeSymbols = document.getElementById("includeSymbols");
  const includeNumbers = document.getElementById("includeNumbers");
  const lengthPassword = Number(
    document.getElementById("lengthPassword").value
  ); // we need the number user put in the input box
  const result = document.getElementById("result");
  const passwordBox = document.getElementById("password");

  // sets of characters we need for a random password
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*()-+.?;[]/";

  let allowedChars = "";
  let password = "";

  // Password should be at least 1 character long
  if (lengthPassword < 1) {
    result.textContent = "Password length should be greater than 0.";
    return;
  }

  allowedChars += includeLowerCase.checked ? lowercase : "";
  allowedChars += includeUpperCase.checked ? uppercase : "";
  allowedChars += includeSymbols.checked ? symbols : "";
  allowedChars += includeNumbers.checked ? numbers : "";

  // user should select at least 1 category
  if (allowedChars.length < 1) {
    result.textContent = "You should select at least one set of characters";
    return;
  }
  for (let i = 0; i < lengthPassword; i++) {
    let index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }

  // displaying the result
  result.textContent = "Password: ";
  passwordBox.textContent = password;
}
