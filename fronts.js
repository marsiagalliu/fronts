// Add Front

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    // constructor, other methods, removed for brevity
    constructor(){
        this.head=null;
    }

    addFront(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
// Remove Front

    removeFront(value){
        if (this.head == null){
            return value;
        }

        newNode=this.head;
        this.head=newNode.next;
        newNode.next=null;
        return this;
    }
// Front

    front()  {
        if (this.head == null){
            return value;
        }else{
            return this.head.value;
        }
    }

}
newNode=new SLL();
console.log(newNode.addFront(18));
console.log(newNode.addFront(5));
console.log(newNode.addFront(73));
console.log(newNode.front());