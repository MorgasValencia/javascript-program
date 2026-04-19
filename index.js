// Question 1 - Variable Score Program
let score = 85;

// Switch Cases with score ranges

switch (true) {
  case score >= 90 && score <= 100:
    console.log("Grade: A");
    break;

  case score >= 80:
    console.log("Grade: B");
    break;

  case score >= 70:
    console.log("Grade: C");
    break;

  case score >= 60:
    console.log("Grade: D");
    break;

  default:
    console.log("Grade: F");
}

// Pass or Fail Ternary Operator
let result = score >= 60 ? "Passed" : "Failed";
console.log(result);

///////////////////////////////////////////////////////////

// Question 2-Type Conversion
let userInput = "25";
let convertedNumber = Number(userInput);
console.log(convertedNumber, typeof convertedNumber);

//  Question 2-Truthy  & Falsy Values
let values = [0, "", "hello", null, undefined, NaN];
values.forEach((val) => {
  if (val) {
    console.log(`${val} is Truthy!`);
  } else {
    console.log(`${val} is Falsy!`);
  }
});

//////////////////////////////////////////////

// Question 3 Functions & Logical Operators

function greetingBot(name, isMorning) {
  if (name === "") {
    return "Please provide a name!";
  } else if (isMorning === true && name !== "") {
    return `Good morning ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greetingBot("Valencia", true));
console.log(greetingBot("", true));
console.log(greetingBot("Mpho", false));

/////////////////////////////////////////////
// Question 4 - Objects & Methods
const post = {
  username: "valencia_M",
  caption: "AI is changing the future of social media!",
  likes: 450,
  comments: [
    "Very interesting post!",
    "Please share the article to this info!",
    "I like your AI content ",
  ],

  addLike() {
    this.likes++;
    console.log(`Likes updated: ${this.likes}`);
  },
};

// Calling Methods to increase likes
post.addLike(); //this logs: Likes updated : 451
post.addLike(); // this logs: Likes updated: 452

// Object destructuring for printing
const { username, caption } = post;
console.log("Username:", username);
console.log("Caption:", caption);

////////////////////////////////////////////////////////
// Question 5-Loops, Spread Operator and Pattern Printing
// Merge and Spread two arrays

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

// Star Pattern Loop
for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i); //decrease space by row
  let stars = "* ".repeat(i); //increase star by row

  console.log(spaces + stars);
}

// While loop number printer
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}
