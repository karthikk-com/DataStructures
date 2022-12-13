/* 
Doubly Linked List

        .------. .------. .------.
        :      v :      v :      v 
|null|5|*|  |*|6|*|  |*|7|*|  |*|8|null|
      ^      : ^      : ^      :
      `------` `------` `------`
 Head                           Tail
*/

/* Node class to create a New Node with default structure */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* Doubly Linked List class */
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            prev : null,
            value : value,
            next : null
        }

        this.tail = this.head;
        this.length = 1;
    }

    /*  Add a data in the Begining of the linked list 
        Big O -> O(1)
    */
    prepend(value) {
        const newNode = new Node(value);
        
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this;
    }

    /*  Add a data in the End of the linked list
        Big O -> O(1)
    */
    append(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;

        return this;
    }

    /*  Add a data in the middle 
        Big O -> O(n)
    */
    insert(value, index) {
        if(index === 0)
            return this.prepend(value);
        
        if(index >= this.length)
            return this.append(value);
        
        const newNode = new Node(value);
        let prevNode = this.traverseToIndex(index-1);
        let currNode = prevNode.next;

       prevNode.next = newNode;
       newNode.prev= prevNode;

       currNode.prev = newNode;
       newNode.next = currNode;

        this.length++;
        return this;
    }

    /*  remove a data from the linked list 
        If we have remove the first element, then Big O -> O(1)
        else Big O -> O(n) as we need to travers to the respective index and remove the links
    */
    delete(index) {
        if(index >= this.length)
            return `The index value exceeds the DoublyLinkedlist Length of ${this.length}`;

        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            let prevNode = this.traverseToIndex(index - 1);
            let currNode = prevNode.next;

            prevNode.next = currNode.next;
            if(prevNode.next === null)
                this.tail = prevNode;
            else 
                currNode.next.prev=prevNode;
        }

        this.length--;
        return this;
    }

    /*  Method to travers to respective input index 
        Note : Created a separate method due to Single Reponsibility Principle (Good Coding Practice)*/
    traverseToIndex(index) {
        let currentVal = this.head;
        let counter = 0;

        while(currentVal){
            if(counter === index)
                return currentVal;

            currentVal = currentVal.next;
            counter++;
        }
        return undefined;
    }

    /*  Method to print the doubly linked list value as an array for better understanding. 
        ie. [  '6 - 6.5 - 8' ]
           [ Previous pointer's node Value - (current/actual) Node value - Next pointer's node value ]
    */
    printAsDoublyLinkedList(){
        let arrVal = [];
        let currentNode = this.head;

        while(currentNode){
            arrVal.push(`${(!currentNode.prev) ? null : currentNode.prev.value} - ${currentNode.value} - ${(!currentNode.next) ? null : currentNode.next.value}`)
            currentNode = currentNode.next;
        }
        return arrVal;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList);
/* 
DoublyLinkedList {
  head: { prev: null, value: 10, next: null },
  tail: { prev: null, value: 10, next: null },
  length: 1
}
 */
console.log(myDoublyLinkedList.prepend(9));
console.log(myDoublyLinkedList.prepend(8));
console.log(myDoublyLinkedList.prepend(7));
console.log(myDoublyLinkedList.prepend(6));
console.log(myDoublyLinkedList.prepend(5));
console.log(myDoublyLinkedList.append(11));
console.log(myDoublyLinkedList.append(12));
console.log(myDoublyLinkedList.append(13));
console.log(myDoublyLinkedList.printAsDoublyLinkedList());
/* 
[
  'null - 5 - 6',
  '5 - 6 - 7',
  '6 - 7 - 8',
  '7 - 8 - 9',
  '8 - 9 - 10',
  '9 - 10 - 11',
  '10 - 11 - 12',
  '11 - 12 - 13',
  '12 - 13 - null'
] */
console.log(myDoublyLinkedList.traverseToIndex(3));
console.log(myDoublyLinkedList.insert(6.5,2));
console.log(myDoublyLinkedList.insert(65,30));
console.log(myDoublyLinkedList.printAsDoublyLinkedList());
/* 
[
  'null - 5 - 6',
  '5 - 6 - 6.5',
  '6 - 6.5 - 7',
  '6.5 - 7 - 8',
  '7 - 8 - 9',
  '8 - 9 - 10',
  '9 - 10 - 11',
  '10 - 11 - 12',
  '11 - 12 - 13',
  '12 - 13 - 65',
  '13 - 65 - null'
] */
console.log(myDoublyLinkedList.delete(0));
console.log(myDoublyLinkedList.printAsDoublyLinkedList());
/* 
[
  'null - 6 - 6.5',
  '6 - 6.5 - 7',
  '6.5 - 7 - 8',
  '7 - 8 - 9',
  '8 - 9 - 10',
  '9 - 10 - 11',
  '10 - 11 - 12',
  '11 - 12 - 13',
  '12 - 13 - 65',
  '13 - 65 - null'
] */
console.log(myDoublyLinkedList.delete(2));
console.log(myDoublyLinkedList.delete(8));
console.log(myDoublyLinkedList.printAsDoublyLinkedList());
/* 
[
  'null - 6 - 6.5',
  '6 - 6.5 - 8',
  '6.5 - 8 - 9',
  '8 - 9 - 10',
  '9 - 10 - 11',
  '10 - 11 - 12',
  '11 - 12 - 13',
  '12 - 13 - null'
]*/
console.log(myDoublyLinkedList);
/* DoublyLinkedList {
    head: <ref *1> Node {
      value: 6,
      next: Node { value: 6.5, next: [Node], prev: [Circular *1] },
      prev: null
    },
    tail: <ref *2> Node {
      value: 13,
      next: null,
      prev: Node { value: 12, next: [Circular *2], prev: [Node] }
    },
    length: 8
} */

