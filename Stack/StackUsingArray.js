/* 
Stack - LIFO

     in           Out
   .----.       .----.
   :    V       :    V
 last               first
       ____Top____
       ___________
       ___________
       ___________
       ___________
       ___________
         Bottom
*/

class Stack {
    constructor() {
        this.array = [];
    }

   /* Method to output the last input data */
    peek(){
        return this.array[this.array.length - 1];
    }

    /* Method to remove the last input element in the array (i.e top of the stack) */
    pop(){
        this.array.pop();
        return this.array;
    }

    /* Method to add an element/data at the end of the array (i.e top of the stack) */
    push(value){
        this.array.push(value);
        return this.array;
    }
}

const myStack = new Stack();
console.log(myStack); //Stack { array: [] }
console.log(myStack.push(10)); //[ 10 ]
console.log(myStack.push(20)); //[ 10, 20 ]
console.log(myStack.push(30)); //[ 10, 20, 30 ]
console.log(myStack.push(40)); //[ 10, 20, 30, 40 ]
console.log(myStack.push(50)); //[ 10, 20, 30, 40, 50 ]
console.log(myStack.push(60)); //[ 10, 20, 30, 40, 50, 60 ]
console.log(myStack.pop()); // [ 10, 20, 30, 40, 50 ] ; 60 --> Last value got removed
console.log(myStack.peek()); // 50 --> Current Top/Last value in the stack
console.log(myStack.pop()); // [ 10, 20, 30, 40 ] ; 50 --> Last value got removed

console.log(myStack);//Stack { array: [ 10, 20, 30, 40 ] }
