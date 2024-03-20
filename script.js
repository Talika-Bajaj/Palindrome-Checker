function checkWord() {
  let word = document.getElementById("word").value;

  let len = word.length;
  let j = word.length - 1;
  console.log(j);

  // METHOD 1 - USING for loop
  // Use for loop to divide the words into 2 half
  for (let i = 0; i < len / 2; i++) {
    if (word.charAt(i) != word.charAt(j)) {
      check.innerText = "NOT a PALINDROME!";
    } else {
      check.innerText = "It's a PALINDROME!";
    }
    j--;
  }

  // METHOD 2 - USING split, reverse, join methods
  // let reverse = word.split("").reverse().join("");
  // console.log(reverse);
  // if (word != reverse) {
  // show.innerText = "NO"
  // } else {
  // show.innerText = "YES"
  // }


  show.style.display = "block";
}

document.getElementById("btn").addEventListener("click", checkWord);


// String.prototype.mySplit = function (delimiter) {
//     const res = [];
//     let startIndex = 0;
//     let foundIndex = this.indexOf(delimiter);

//     while(foundIndex !== -1) {
//         res.push(this.substring(startIndex, foundIndex));
//         startIndex = foundIndex + delimiter.length;
//         foundIndex = this.indexOf(delimiter, startIndex) 
//     }
//     res.push(this.substring(startIndex))
//     return res;
// };

// let str = "name jbjkj bj bjkb";
// let res = str.mySplit(" ");
// console.log(res);