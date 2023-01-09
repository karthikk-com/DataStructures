/* Datastructure : Array (Datastructures are simply things that we can built from scratch)
Implementing an array datastructure using object
*/

class Array{
    constructor() {
        this.length = 0;
        this.data = {};
    }

    //Look up --> O(1) Constant Time
    get(index) {
        return this.data[index];
    }

    /*  push() --> O(1) Constant Time
        Method will insert a element at the end of the array
    */
    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this;
    }

    /*  pop() --> O(1) Constant Time
        Method will remove a element at the end of the array
   */
    pop() {
        if(this.length > 0) {
            delete this.data[this.length-1];
            this.length--;
          }
          return this.data;
    }

    /*  delete(index) --> O(n) Linear Time
        Method will remove an element at the index specified and shift the following elements to prev index.
   */
    delete(index) {
        if(index >= this.length-1)
            return this.pop();

        for(let i = index; i < this.length-1; i++) {
            this.data[index] = this.data[index+1];
        }

        delete this.data[this.length-1];
        this.length--;
        return this;
    }

    /* insert(value,index) --> O(n) linear Time
    Method will add an element at the index specified and shift the following elements to next index */
    insert(value,index) {
        if(index > this.length-1)
            return this.push(value)

        for(let i = this.length; i >= index ; i--) {
            this.data[i] = (this.data[i-1]);
        }

        this.data[index] = value;
        this.length++;
        return this;
    }
}

const myArray = new Array();
console.log(myArray); //{ length: 0, data: {} 
console.log(myArray.get(0)); //undefined

console.log(myArray.push(10)); //Array { length: 1, data: { '0': 10 } }
console.log(myArray.push(20)); //Array { length: 2, data: { '0': 10, '1': 20 } }
console.log(myArray.push(30)); //Array { length: 3, data: { '0': 10, '1': 20, '2': 30 } }

console.log(myArray.pop()); //Array { length: 2, data: { '0': 10, '1': 20 } }
console.log(myArray.push(40)); //Array { length: 3, data: { '0': 10, '1': 20, '2': 40 } }
console.log(myArray.delete(2)); //Array { length: 2, data: { '0': 10, '1': 20 } }
console.log(myArray.delete(0)); //Array { length: 1, data: { '0': 20 } }
console.log(myArray.insert(30,1)); //Array { length: 2, data: { '0': 20, '1': 10 } }
console.log(myArray.insert(10,0)); //Array { length: 3, data: { '0': 10, '1': 20, '2': 30 } }