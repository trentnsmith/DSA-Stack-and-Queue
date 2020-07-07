class _Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class Queue {
    constructor() {
      this.first = null;
      this.last = null;
}
  
enqueue(data) {
    const node = new _Node(data);
    if(this.first === null) {
        this.first = node;
    }
    if(this.last) {
        this.last.next = node;
    };
    this.last = node;
};
  
dequeue() {
    if(this.first === null) {
        return;
    };
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last) {
        this.last = null;
    };
    return node.value;
    };
};

const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhara');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peek (queue) {
    if (!queue.first) return null;
    return queue.first.value;
  }
  
function isEmpty (queue) {
    return (queue.first === null);
};
  
function display (queue) {
    let currNode = queue.first;
    if (currNode === null) console.log('empty queue');
    while (currNode.next !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    };
    console.log(currNode.value);
};

starTrekQ.dequeue('Spock');
display(starTrekQ);

function pairDancers(dancers) {
    dancers.forEach(dancer => {
      if(dancer[0] === 'F') {
        fQueue.enqueue(dancer);
      }
      else {
        mQueue.enqueue(dancer);
      }
      if(fQueue.first && mQueue.first) {
        let maleDancer = mQueue.dequeue();
        let femDancer = fQueue.dequeue();
        console.log(`${femDancer} is paired with ${maleDancer}`)
      }
    });
    if(mQueue.length > 0) {
      console.log(`There are ${mQueue.length} male dancers waiting to dance`);
      } 
      else if (fQueue.length > 0) {
        console.log(`There are ${fQueue.length} female dancers waiting to dance`);
      };
};

function ophidinBank (queue) {
    while (queue.first){
      let person = queue.dequeue();
      let random = Math.random();
      if (random < .25) {
        queue.enqueue(person);
        console.log(`${person} paperwork isn't quite right, and moved back to the end of the queue`)
      } else {
        console.log(`${person} served`);
      }
    }
    console.log(`Served everybody`)
}

const bankQueue = new Queue()
bankQueue.enqueue('ted')
bankQueue.enqueue('elroy')
bankQueue.enqueue('phylis')
bankQueue.enqueue('jim')