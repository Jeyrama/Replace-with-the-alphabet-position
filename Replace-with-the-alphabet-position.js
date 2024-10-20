/*
In this challenge, you are required to, given a string, 
replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example:
  Input = "The sunset sets at twelve o' clock."
  Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/


// Solution

function alphabetPosition(text) {
  let result = "";
  for (let i = 0; i < text.length; i++){
    let code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

// or