const countBs = (str) => {
    let counter=0
    for (let i=0; i<str.length; i++) {
        if (str[i]=='B') {
            counter++
        }
    }
    return counter
}

console.log(countBs("Free Britney"))

const countChar = (str, item) => {
    //set counter at 0
    let counter=0;
    //for loop to iterate through str looking for item
    for (let i=0; i<str.length; i++) {
        if (str[i]==item) {
            counter++
        }
    }
    return counter
}

console.log(countChar("Free Britney", "e"))