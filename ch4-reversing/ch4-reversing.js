//produces new array that has same elements as argument array in inverse order with loop/push method
const reverseArrayP = (arr) => {
    newArr=[]
    for (let i=arr.length-1; i>=0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArrayP(['a', 'b', 'c', 'd']))


//produces new array that has same elements as argument array in inverse order with loop/unshift method
const reverseArrayU = (arr) => {
    let newArr=[]
    for (let i=0; i<arr.length; i++) {
        newArr.unshift(arr[i])
    }
    return newArr
}

console.log(reverseArrayU(['a', 'b', 'c', 'd']))


//modify the given array using clue
const reverseArrayInPlace = (arr) => {
    //loop through 1st half of arr to be able to make swaps
    for (i=0; i<(Math.floor(arr.length/2)); i++) {
        //local to bind hold on to element
        let oldEl = arr[i]
        //swap/overwrite current index with its partner on other end of array
        arr[i] = arr[arr.length-1-i]
        //put the value from local binding where its partner used to be
        arr[arr.length-1-i] = oldEl
    }
    return arr
}

console.log(reverseArrayInPlace(['a', 'b', 'c', 'd']))