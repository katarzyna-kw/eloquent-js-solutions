const pyramid = (height) => {
   // base case
   if (height<=0) {
      return 0
   } 
   //recursive case
   return (2*height-1) + pyramid(height - 1)
}
console.log(pyramid(3))