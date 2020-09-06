// var kata = process.argv[2];

// function checkPalindrom(str) {
//     console.log("ini" + kata)
//     return str == str.split('').reverse().join('');
// }

// console.log("Cek Kalimat polindrom")
// checkPalindrom(kata);

// console.log("Please enter some text!!")
// var sys = require("sys");
// var stdin = process.openStdin();
// stdin.addListener("data", function (userInputedWord) {
//     var userString = userInputedWord.toString().substring(0, userInputedWord.length - 1);
//     if (userString === "exit") {
//         process.kill();
//     } else {
//         var userStringPaladrone = userString.split('').reverse().join('');
//         if (userString === userStringPaladrone) {
//             console.log(userStringPaladrone + " is a palindrome!")
//         } else {
//             console.log("Sorry!! Looks like " + userString + " is not a palindrome.")
//         };
//     };
// });

// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// palindrome(str);

// function polindrom(str) {
//     var reg = /[\W_]/g;

//     var smallStr = str.toLowerCase().replace(reg, "");

//     var reversed = smallStr.split("").reverse().join("");
//     if (reversed === smallStr) return true;

//     return false;
// }

// if (polindrom("kasur")) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

var kata = process.argv[2];

function checkPalindrome(inputString) {
  if (inputString.length == 1) {
    return true;
  } else {
    var i = 0;
    var j = inputString.length - 1;
    while (i < j) {
      if (inputString[i] != inputString[j]) {
        return false;
      }
      i++;
      j--;
    }
  }
  return true;
}

// function checkPalindrom(str) {
//     str = str.toLowerCase();
//     return str == str.split('').reverse().join('');
// }

if (checkPalindrome(kata)) {
  console.log("Kata Palindrome");
} else {
  console.log("Kata Tidak Palindrome");
}
