/* 
Cirular Linked List
   .----. .----. .----.
   :    : :    : :    :
   :    v :    v :    v 
|5|*|  |6|*|  |7|*|  |8|*|
 ^                      :
 :                      :
 '----------------------'
 Head                 Tail
*/

/* Node class to create a New Node with default structure */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* Circular Linked List Class defining all the predefined function */
class CircularLinkedList {
    constructor(value) {
        this.head = {
            value : value
        }

        this.head.next=this.head;
        this.tail = this.head;
        this.length = 1;
    }

    /*  Add a node to the begining of the linkedlist
        Big O -> O(1)
    */
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
        this.length++;
        return this;
    }

    /*  5->6->4->9->5(head)
        Add a Node to the end of the linked list. This also include updating the tail.next pointer 
        pointing to head node.
        Big O -> O(1)
    */
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
        this.length++;
        return this;
    }

    /*  5->6->4->9->5(head)
        Insert a node at the given index.
        Big O -> O(n)
    */
    insert(index, value) {
        if(index <= 0)
            return this.prepend(value);

        if(index >= this.length-1)
            return this.append(value);

        const newNode = new Node(value);
        let prevNode = this.traverseToIndex(index - 1);
        let currNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = currNode;

        this.length++;
        return this;
    }

   /*   5->6->4->9->5(head)
        Delete a node at the given index.
        If we have remove the first element, then Big O -> O(1)
        else Big O -> O(n) as we need to travers to the respective index and remove the links
    */
    delete(index) {
        if(index >= this.length)
            return ` No value correspond to index : ${index} `;

        if(index === 0) {
            this.head = this.head.next;
            this.tail.next = this.head;
        } else {
            let prevNode = this.traverseToIndex(index - 1);
            console.log(prevNode.value);
            let unwantedNode = prevNode.next;

            prevNode.next = unwantedNode.next;
        }

        this.length--
        return this;
    }

    /*  5->6->4->9->5(head)
        Return a node of the respective index.
        Note : Created a separate method due to Single Reponsibility Principle (Good Coding Practice)
    */
    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;

        if(index<1)
            return undefined;

        while(currentNode) {
            if(counter === index)
                return currentNode;
            currentNode = currentNode.next;
            counter++;
        }

        return undefined;
    }

    /* 5->6->4->9->5(head)
       Method to print the Node values and the next pointer value for better visualizations.

       ie. [ '10 - 10' ]
           [ Node value - Next pointer's node value ]
    */
    printNodeValues(){
        let arrVal =[];
        let currentNode = this.head;
        let counter = 1;

        while(currentNode){ 
            arrVal.push(`${currentNode.value} - ${currentNode.next.value}`);//Print value & Next Pointer value
            ///arrVal.push(`${currentNode.value}`); //Print only the value
            currentNode = currentNode.next;            
            if(counter === this.length)
                return arrVal;
            counter++;
        }
    }
}

const myCircularLinkedList = new CircularLinkedList(10);
console.log(myCircularLinkedList);
/* 
CircularLinkedList {
  head: <ref *1> { value: 10, next: [Circular *1] },
  tail: <ref *1> { value: 10, next: [Circular *1] },
  length: 1
}
*/
console.log(myCircularLinkedList.printNodeValues()); //[ '10 - 10' ]
console.log(myCircularLinkedList.prepend(9));
console.log(myCircularLinkedList.prepend(8));
console.log(myCircularLinkedList.prepend(7));
console.log(myCircularLinkedList.append(11));
console.log(myCircularLinkedList.append(12));
console.log(myCircularLinkedList.printNodeValues()); //[ '7 - 8', '8 - 9', '9 - 10', '10 - 11', '11 - 12', '12 - 7' ]
console.log(myCircularLinkedList.insert(0, 6));
console.log(myCircularLinkedList.insert(7, 11.5));
console.log(myCircularLinkedList.insert(3, 8.5));
console.log(myCircularLinkedList.printNodeValues()); //['6 - 7', '7 - 8', '8 - 8.5', '8.5 - 9','9 - 10', '10 - 11','11 - 12','12 - 11.5','11.5 - 6']
console.log(myCircularLinkedList.delete(0));
console.log(myCircularLinkedList.printNodeValues()); //['7 - 8', '8 - 8.5', '8.5 - 9','9 - 10', '10 - 11','11 - 12','12 - 11.5','11.5 - 7']
console.log(myCircularLinkedList.delete(2));
console.log(myCircularLinkedList.printNodeValues());//['7 - 8', '8 - 9','9 - 10', '10 - 11','11 - 12','12 - 11.5','11.5 - 7']
console.log(myCircularLinkedList);
/* 
CircularLinkedList {
  head: Node { value: 7, next: Node { value: 8, next: [Node] } },
  tail: Node { value: 11.5, next: Node { value: 7, next: [Node] } },
  length: 7
}
 */