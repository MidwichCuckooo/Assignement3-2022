//1) Using while write a program that prints the following 
//figure for given number of lines. 

let n = 4;
let i = 0;
let j = 0;
let row = "";

while (i++ < n) {
    row = row + "+ ";
}
while (j++ < n) {
    console.log(row);
}