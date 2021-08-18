const range = (start, end) => {
    let arr=[]
    if (start<end) {
        for (let i=start; i<=end; i++) {
            arr.push(i)
        }
    } else {
        for (let i=start; i>=end; i--) {
            arr.push(i)
        }
    }
    return arr;
}
  
console.log(range(1, 10))
console.log(range(5, 2))

const sum = (arr) => {
    let answer=0

    for (let i=0; i<arr.length; i++) {
        answer+=arr[i]
    }
    return answer
}

console.log(sum(range(1, 10)))

  
const bonusRange = (start, end, step=start<end ? 1 : -1) => {
    let arr=[]
    if (step>0) {
        for (let i=start; i<=end; i+=step) {
           arr.push(i)
        }
    } else {
        for (let i=start; i>=end; i+=step) {
            arr.push(i)
        }
    }
    return arr;
}
  
console.log(bonusRange(20, 2, -2));