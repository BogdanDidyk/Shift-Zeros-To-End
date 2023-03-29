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