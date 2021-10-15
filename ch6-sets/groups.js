class Group {
   constructor() {
      this.group=[]
   }

   add(value) {
      if (!this.has(value)) {
         this.group.push(value);
      }
   }

   delete(value) {
      this.group=this.group.filter(el=>el!==value);
   }

   has(value) {
      return (this.group.includes(value));
   }

   static from (collection) {
      let grouping=new Group;
      for (let val of collection) {
         grouping.add(val);
      }
      return grouping;
   }
}

let kat=Group.from([5, 10]);
console.log(kat.has(10)); //true
console.log(kat.has(50)); //false
kat.add(55);
console.log(kat.has(55)); //true
kat.delete(55);
console.log(kat.has(55)); //false