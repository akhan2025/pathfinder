/**
 * Queue object to perform fifo type operations
 */
class Queue {

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  /**
   * Adds the element to the end of the queue
   * 
   * @param {any} element 
   */
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  /**
   * 
   * @returns Element at the front of the queue
   */
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  /**
   * 
   * @returns Element at front without removing from queue
   */
  peek() {
    return this.elements[this.head];
  }
  /**
   * Length of the queue
   */
  get length() {
    return this.tail - this.head;
  }
  /**
   * Checks if queue is empty
   */
  get isEmpty() {
    return this.length === 0;
  }
}

  export default Queue