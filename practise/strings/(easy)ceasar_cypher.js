// Complete the caesarCipher function below.
function caesarCipher(s, k) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      let c = (s[i].charCodeAt() + k - 65) % 26;
      c = c + 65;
      c;
      result.push(String.fromCharCode(c));
    } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
      let c = (s[i].charCodeAt() + k - 97) % 26;
      c = c + 97;

      result.push(String.fromCharCode(c));
    } else {
      result.push(s[i]);
    }
  }
  return result.join("");
}
