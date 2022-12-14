/* 
QUEUE
First In------.
              |
              V           
             |1|2|3|4|5|6|7|8|       <--- [8] Adding data in queue 
              |
First Out <---'
*/


/* Node class to create a New Node with default structure */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/* For better understanding we can convert the linked list head and tail naming accordingly with 
respect to STACK
head --> first 
tail --> last */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    /* Method to output the head/first node of the linkedlist (i.e first in the queue) */
    peek(){
        return this.first;
    }

     /* Method to add an element/data at the end/tail/last of the Linkedlist (i.e last in the queue) */
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    /* Method to remove an element/data at the begining of the Linkedlist (i.e first in the queue) */
    dequeue(){
        if(!this.first) 
            return null;

        this.first = this.first.next;
        if(!this.first) 
        this.last = null;

        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log(myQueue); // Queue { first: null, last: null, length: 0 }
console.log(myQueue.peek()); //null
console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(20));
console.log(myQueue.enqueue(30));
/* Queue {
  first: Node { value: 10, next: Node { value: 20, next: [Node] } },
  last: Node { value: 30, next: null },
  length: 3
} */
console.log(myQueue.peek());
/* Node {
  value: 10,
  next: Node { value: 20, next: Node { value: 30, next: null } }
} */
console.log(myQueue.dequeue());
/* Queue {
  first: Node { value: 20, next: Node { value: 30, next: null } },
  last: Node { value: 30, next: null },
  length: 2
} */
console.log(myQueue.dequeue());
/* Queue {
  first: Node { value: 30, next: null },
  last: Node { value: 30, next: null },
  length: 1
} */
console.log(myQueue.dequeue());  //Queue { first: null, last: null, length: 0 }