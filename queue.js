class Queue {
  constructor() {
    this.stack1 = new Stack(); // Stand for push stack
    this.stack2 = new Stack(); // Stand for pop stack
    this.size = 0;
  }
  enqueue(value) {
    this.stack1.push(value);
    this.size = this.stack1.length + this.stack2.length;
  }

  dequeue() {
    if (this.stack2.length > 0) {
      this.size = this.stack1.length + this.stack2.length - 1;
      return this.stack2.pop();
    }
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.size = this.stack1.length + this.stack2.length - 1;
    return this.stack2.pop();
  }

  showHead() {
    if (this.stack2.length > 0) {
      return this.stack2.peek();
    } else {
      return null;
    }
  }
};

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const newItem = new Item(value);
    if (!this.length) {
      this.first = newItem;
      this.last = newItem;
    } else {
      const currentValue = this.first;
      this.first = newItem;
      this.first.next = currentValue;
    }
    this.length++;
  }

  pop() {
    if (!this.length) return null;
    const popValue = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return popValue;
  }

  peek() {
    if (!this.length) return null;
    const peekValue = this.first;
    return peekValue;
  }
};

class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};
