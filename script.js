function shiftZerosToEndArray(arr) {
    const len = arr.length;
    let nonZerosItems = 0;
    
    for (let i = 0; i < len; i++) {
        if (arr[i] != 0) {
            arr[nonZerosItems] = arr[i];
            nonZerosItems++;
        }
    }

    while (nonZerosItems < len) {
        arr[nonZerosItems] = 0;
        nonZerosItems++;
    }
}

let arr = [1, 0, 6, 0, 3];
shiftZerosToEndArray(arr);
console.log(arr);

arr = [0, 1.4, 2, 3, 4];
shiftZerosToEndArray(arr);
console.log(arr);

arr = [0, 0, 1, 0];
shiftZerosToEndArray(arr);
console.log(arr);

arr = [0, 0, 0, 0];
shiftZerosToEndArray(arr);
console.log(arr);