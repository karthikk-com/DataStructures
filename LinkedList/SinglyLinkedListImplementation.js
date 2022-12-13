/* 
Singly Linked List
   .----. .----. .----.
   :    : :    : :    :
   :    v :    v :    v 
|5|*|  |6|*|  |7|*|  |8|null|
 Head                 Tail
*/

/* Node class to create a New Node with default structure */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* Singly Linked List class */
class SinglyLinkedList {
    constructor(value) {
        this.head = {
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
        this.head = newNode;
        this.length++;
        return this;
    }

    /*  Add a data in the End of the linked list
        Big O -> O(1)
    */
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    /*  Add a data in the middle 
        Big O -> O(n)
    */
    insert(value, index) {
        if(index <= 0)
            return this.prepend(value);

        if(index >= this.length-1)
            return this.append(value);
        
        const newNode = new Node(value);
        const prevNode = this.traverseToIndex(index-1);
        const currNode = prevNode.next;

        newNode.next = currNode;
        prevNode.next = newNode;
        this.length++;
        return this;
    }

    /*  remove a data from the linked list 
        If we have remove the first element, then Big O -> O(1)
        else Big O -> O(n) as we need to travers to the respective index and remove the links
    */
    delete(index) {
        if(index >= this.length)
            return `No value correspond to index : ${index} `;

        if(index === 0) { //If we have remove the first element, then Big O -> O(1)
            this.head = this.head.next;
        } else {
            const prevNode = this.traverseToIndex(index - 1);
            const unwantedNode = prevNode.next;
            prevNode.next = unwantedNode.next;

            if(prevNode.next === null)
                this.tail = prevNode;
        }

        this.length--;
        return this;
    }

    /*  Method to travers to respective input index 
        Note : Created a separate method due to Single Reponsibility Principle (Good Coding Practice)*/
    traverseToIndex(index){
        let counter = 0;
        let currNode = this.head;

        while(currNode){
            if(counter === index)
                return currNode
            
            currNode = currNode.next;
            counter++;
        }
        return undefined;
    }

    /* Method to print the linked list value as an array for better understanding. */
    printAsArrays(){
        let currentNode = this.head;
        let arrValue = [];
        while(currentNode){
            arrValue.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arrValue;
    }
}

const mySinglyLinkedList = new SinglyLinkedList(10);
console.log(mySinglyLinkedList);
/* SinglyLinkedList {
  head: { value: 10, next: null },
  tail: { value: 10, next: null },
  length: 1
} */
console.log(mySinglyLinkedList.printAsArrays()); //[10]
console.log(mySinglyLinkedList.prepend(9));
console.log(mySinglyLinkedList.prepend(8));
console.log(mySinglyLinkedList.prepend(7));
console.log(mySinglyLinkedList.append(11));
console.log(mySinglyLinkedList.append(12));
console.log(mySinglyLinkedList.printAsArrays()); //[ 7, 8, 9, 10, 11, 12 ]
console.log(mySinglyLinkedList.insert(8.5,2));
console.log(mySinglyLinkedList.insert(6,0));
console.log(mySinglyLinkedList.insert(5,-2));
console.log(mySinglyLinkedList.insert(40,20));
console.log(mySinglyLinkedList.insert(11.5,8));
console.log(mySinglyLinkedList.printAsArrays()); //[ 5,  6,  7,  8, 8.5,  9, 10, 11, 11.5, 12, 40]
console.log(mySinglyLinkedList.delete(0));
console.log(mySinglyLinkedList.delete(50)); //No value correspond to index : 50
console.log(mySinglyLinkedList.printAsArrays()); //[ 6,  7,  8,  8.5, 9, 10, 11, 11.5, 12, 40 ]
console.log(mySinglyLinkedList.delete(3));
console.log(mySinglyLinkedList.printAsArrays()); //[ 6,  7,  8,  9, 10, 11, 11.5, 12, 40 ]
console.log(mySinglyLinkedList.delete(8));
console.log(mySinglyLinkedList.printAsArrays()); //[ 6,  7,  8,  9, 10, 11, 11.5, 12 ]
console.log(mySinglyLinkedList);
/* SinglyLinkedList {
    head: Node { value: 6, next: Node { value: 7, next: [Node] } },
    tail: Node { value: 12, next: null },
    length: 8
  } */