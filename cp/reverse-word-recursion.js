const reverse = (str) => {
   //base
   if (str.length===0) {
      return ""
   }
   //recursive
   let last=str[str.length-1]
   while (str.length>1) {
      let strMinusLast = str.slice(0, str.length-1)
      return last + reverse(strMinusLast)
   }
   return last
}


console.log(reverse("Hello"))