let input_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function arr_reverse(input_arr) {
    let output_arr = []
    for (let i = 0; i < input_arr.length; i++) {
        output_arr.push(input_arr[(input_arr.length - 1) - i])
    }
    return output_arr;
}

console.log(arr_reverse(input_arr));