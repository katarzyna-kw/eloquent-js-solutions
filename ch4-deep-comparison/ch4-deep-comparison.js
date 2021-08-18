const deepEqual = (a, b) => {
    if (a===b) return true;
    //if either is null or not an obj, false
    if (a==null || typeof a!="object" || b==null || typeof b!="object") return false;
    //store property names as array
    let keysA = Object.keys(a), keysB = Object.keys(b);
    
    //if arrays different length, false
    if (keysA.length!=keysB.length) return false
    //iternate through keysA
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
    }
    return true
}



let obj = {here: {is: "an"}, object: 2};
console.log('should be true: ', deepEqual(obj, obj));
// → true
console.log('should be false: ', deepEqual(obj, {here: 1, object: 2}));
// → false
console.log('should be true: ', deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true