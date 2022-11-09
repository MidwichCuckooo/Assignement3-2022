// 5. Write a program that given a positive decimal number, will print its binary value. Hint: You
// can combine the remainders into a string and then reverse the string for the correct result.
// num = 20;
// result => 1100
let num = 128;
let bin = [];
let rem = num % 2;

while (num > 0) {
    if (rem == 0) {
        bin.push(0)
    } else {
        bin.push(1)
    }
    num = Math.floor(num / 2);
    rem = num % 2;
}

function arr_reverse(input_arr) {
    let output_arr = []
    for (let i = 0; i < input_arr.length; i++) {
        output_arr.push(input_arr[(input_arr.length - 1) - i])
    }
    return output_arr;
}

console.log(arr_reverse(bin).join(""));


