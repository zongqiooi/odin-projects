let array = [1, 7, 19, 4, 3, 25, 6, 8, 8, 27, 23]; 

function sort(left, middle, right) {
    let i = left; 
    let j = middle + 1; 
    let temp = []; 

    while (i <= middle && j <= right) {
        if (array[i] <= array[j]) {
            temp.push(array[i]); 
            i += 1; 
        } else {
            temp.push(array[j]); 
            j += 1; 
        }
    }

    while (i <= middle) {
        temp.push(array[i]); 
        i += 1; 
    }

    while (j <= right) {
        temp.push(array[j]); 
        j += 1; 
    }

    for (let k = 0; k < temp.length; k++) {
        array[left + k] = temp[k]; 
    }
}

function mergesort(left, right) {
    if (left >= right) {
        return 
    }
    
    let middle = Math.floor((left + right) / 2); 
    mergesort(left, middle); 
    mergesort(middle + 1, right); 
    sort(left, middle, right); 
}

console.log("Before sorting"); 
console.log(array);

mergesort(0, array.length - 1); 

console.log("After sorting"); 
console.log(array); 