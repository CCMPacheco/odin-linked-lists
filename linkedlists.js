class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  prepend(data) {
    let node = new Node(data);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  getSize() {
    return console.log(this.size);
  }

  getHead() {
    let current = this.head;
    if (current) {
      return console.log(current.data);
    }
    return null;
  }

  getTail() {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === this.size - 1) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  pop() {
    this.removeAt(this.size - 1);
  }

  contains(data) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (data === current.data) {
        return console.log(true);
      }
      count++;
      current = current.next;
    }
    return console.log(false);
  }

  finds(data) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (data === current.data) {
        return console.log(count);
      }
      count++;
      current = current.next;
    }
    return console.log(null);
  }

  toString() {
    let current = this.head;
    let string = ``;

    while (current) {
      string += `(${current.data}) -> `;
      current = current.next;
    }

    if (string) {
      return console.log(`${string} null`);
    }

    return console.log("null");
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.append(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
}

const ll = new LinkedList();

ll.append(100);
ll.append(200);
ll.append(300);
ll.prepend(400);
ll.insertAt(500, 2);
ll.pop();

ll.toString();
ll.getSize();
ll.getHead();
ll.getTail();
ll.at(2);
ll.contains(1000);
ll.contains(200);
ll.finds(1000);
ll.finds(100);
