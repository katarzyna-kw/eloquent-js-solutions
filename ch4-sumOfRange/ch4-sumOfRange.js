const range = (start, end) => {
    let arr=[]
    for (let i=start; i<=end; i++) {
        arr.push(i)
    }
    return arr;
}
  
console.log(range(1, 10))

const sum = (arr) => {
//declare answer as 0/data type number
let answer=0

for (let i=0; i<arr.length; i++) {
    console.log('answer', answer)
    answer=answer+arr[i]
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
