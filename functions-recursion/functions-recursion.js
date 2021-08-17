const isEven = (num) => {
    //if 0 is false
    if (num===1) return false
    //if 1 is true
    else if (num===0) return true
    //if negative num negate neg symbol, then run through function again
    else if (num<0) return isEven(-num);
    //else run through n-2 through function again
    else return isEven(num-2)
}

console.log(isEven(-2))