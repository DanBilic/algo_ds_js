// Complete the minimumNumber function below.
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let memory = {};
  let charactersMissing = 0;
  let result = 0;

  if (n < 6) {
    charactersMissing = 6 - n;
  }
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toLowerCase()) {
      memory["lowerCase"] = "lowerCase";
    }
    if (password[i] === password[i].toUpperCase()) {
      memory["upperCase"] = "upperCase";
    }
    if ("!@#$%^&*()-+".includes(password[i])) {
      memory["special"] = "special";
    }
    if ("123456789".includes(password[i])) {
      memory["number"] = "number";
    }
  }

  let count = Object.values(memory);
  console.log(memory);
  count = 4 - count.length;
  console.log("count", count);
  if (count < charactersMissing) {
    result = charactersMissing;
  } else {
    result = count;
  }
  return result;
}
