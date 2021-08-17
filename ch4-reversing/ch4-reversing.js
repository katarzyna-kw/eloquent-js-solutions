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
    //loop through 1st half of arr
    for (i=0; i<(Math.floor(arr.length/2)); i++) {
        //bind oldEl to arr[i]
        let oldEl = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = oldEl
    }
    return arr
}

console.log(reverseArrayInPlace(['a', 'b', 'c', 'd']))
