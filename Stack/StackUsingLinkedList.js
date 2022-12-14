/* Node class to create a New Node with default structure */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* 
    For better understanding we can convert the linked list head and tail naming accordingly with 
    respect to STACK
    head --> top 
    tail --> bottom

*/
class Stack {
    constructor() {
        this.top = null; 
        this.bottom = null; 
        this.length = 0;
    }

    /* Method to output the top/first node of the linkedlist (i.e top of the stack) */
    peek(){
        return this.top;
    }

    /* Method to add an element/data at the beigining of the Linkedlist (i.e top of the stack) */
    push(value){
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        
        if(this.length === 0) {
            this.bottom = newNode;
        }
        
        this.length++;
        return this;
    }

    /* Method to remove an element/data at the begining of the Linkedlist (i.e top of the stack) */
    pop(){
        if(this.length <=0)
            return this;
           
        this.top = this.top.next;
        if(!this.top) 
            this.bottom=null;
        
            this.length--;
        return this;
    }
}

const myStack = new Stack();
console.log(myStack); //Stack { top: null, bottom: null, length: 0 }
console.log(myStack.push(10)); 
console.log(myStack.push(11));
console.log(myStack.push(12));
/* Stack {
  top: Node { value: 12, next: Node { value: 11, next: [Node] } },
  bottom: Node { value: 10, next: null },
  length: 3
} */

console.log(myStack.peek());
/* Node {
  value: 12,
  next: Node { value: 11, next: Node { value: 10, next: null } }
} */
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop()); //Stack { top: null, bottom: null, length: 0 }

