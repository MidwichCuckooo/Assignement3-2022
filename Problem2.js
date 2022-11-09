// 2. Write a code that for a given grade from 0 to 100 will print:
// 1. The letter grade of the user (Using if/else).
// 2. Using the calculated grade letter, check if the grade is passing or failing (Using switch).
//expected: “Your grade is 89 which corresponds to B+. You passed!”


let grade = 72;
let letter = "";
let outcome = "";

if (90 <= grade) {
    letter = "A"
} else if (80 <= grade) {
    letter = "B"
} else if (70 <= grade) {
    letter = "C"
} else if (60 <= grade) {
    letter = "D"
} else {
    letter = "F"
}
if (grade == 100 || grade % 10 >= 7) {
    letter += "+"
} else if (grade % 10 <= 2) {
    letter += "-"
}

switch (letter) {
    case "A+":
    case "A":
    case "A-":
    case "B+":
    case "B":
    case "B-":
    case "C+":
    case "C":
        outcome += "passed!"
        break;
    default:
        outcome += "failed!"
}
console.log("Your grade is " + grade + " which correspopnds to " + letter + ". You " + outcome);
