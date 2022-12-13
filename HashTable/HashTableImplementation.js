class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    /* Method to store key - value pair*/
    set(key,value) {
        const address = this._hashKey(key);
        
        if(!this.data[address])
            this.data[address] = [];
        
        this.data[address].push([key,value]);
        return this.data;
    }

    /* Returns the respective value of the key input passed*/
    get(key) {
        const address = this._hashKey(key);
        const value = this.data[address];

        if(!value || value === undefined)
            return undefined;
        
        if(value.length > 1) { //INFO : If collision then Big O -> O(n)
            for(let i=0; i < value.length; i++)
                if(value[i][0] === key)
                    return value[i][1];
        } else {
            return value[0][1];//INFO :  If no collision Big O -> O(1) (most of the time).
        }
    }

    /* Retrieve all the keys from the hash tables */
    key() {
        let keys = [];
        console.log(this.data);
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                if(this.data[i].length > 1){ //INFO : If collision then Big O -> O(n^2)
                    for(let j = 0; j < this.data[i].length; j++) {
                        keys.push(this.data[i][j][0]);
                    }
                } else {//INFO : If no collision then Big O -> O(n)
                    keys.push(this.data[i][0][0]);
                }
            }
        }
        return keys;
    }

    /* Simulating a hash function that returns a hash value based on the inuput string
    Note : The naming convention followed in javascript community starting with "_" (underscore), 
    represent that this is a private function that shouldn't be accessed outside the class. 
    */
    _hashKey(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}

const myHashtable = new HashTable(2);
console.log(myHashtable);
console.log(myHashtable.set('grapes',1000)); //[ <23 empty items>, [ [ 'grapes', 1000 ] ], <26 empty items> ]
console.log(myHashtable.set('Oranges',2000)); //[ <23 empty items>,[ [ 'grapes', 1000 ] ],<21 empty items>,[ [ 'Oranges', 2000 ] ],<4 empty items>]
console.log(myHashtable.set('apples',3000)); //[<23 empty items>,[ [ 'grapes', 1000 ] ],<15 empty items>,[ [ 'apples', 3000 ] ],<5 empty items>,[ [ 'Oranges', 2000 ] ],<4 empty items>]

console.log(myHashtable.get('Oranges')); //2000
console.log(myHashtable.get('apples')); //3000
console.log(myHashtable.get('vegetable')); //undefined

console.log(myHashtable.key());
