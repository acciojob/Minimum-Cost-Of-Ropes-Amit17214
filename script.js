// Function to find the minimum cost of connecting ropes
function findMinimumCostRopes(arr) {
  // Create a min heap
  const minHeap = new MinHeap();

  // Insert all ropes into the min heap
  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }

  let totalCost = 0;

  // Merge the ropes until there is only one rope left in the heap
  while (minHeap.size() > 1) {
    // Extract the two smallest ropes
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();

    // Calculate the cost of merging and add it to the total cost
    const cost = rope1 + rope2;
    totalCost += cost;

    // Insert the merged rope back into the heap
    minHeap.insert(cost);
  }

  return totalCost;
}

// Priority queue (min heap) implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        // Swap current element with its parent
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    const lastIndex = this.heap.length - 1;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (currentIndex === smallestIndex) {
        break;
      }

      // Swap current element with the smallest child
      [this.heap[currentIndex], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[currentIndex],
      ];
      currentIndex = smallestIndex;
    }
  }
}

// Get the input from the user
const inputElement = document.querySelector('input[type="text"]');
const resultElement = document.querySelector('#result');

inputElement.addEventListener('change', () => {
  const inputValues = inputElement.value
    .split(',')
    .map((value) => parseInt(value.trim(), 10));

  const minimumCost = findMinimumCostRopes(inputValues);

  // Display the minimum cost in the result element
  resultElement.textContent = `Minimum Cost: ${minimumCost}`;
});
