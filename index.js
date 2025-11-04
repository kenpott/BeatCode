function heapify(arr, n, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function topKFrequent(nums, k) {
  const startingNode = Math.floor(nums.length / 2) - 1;
  for (let i = startingNode; i >= 0; i--) {
    heapify(nums);
  }
  return nums;
}

const nums = [
  3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
  5, 6,
];
const k = 10;

console.log(topKFrequent(nums, k));
// Expected output: [1,2,5,3,6,7,4,8,10,11]

// the issue is the new low is being too high so it doesnt solve the of unsorted values (low freq to high freq)

// Solution
// 1. Heapify the frequency map
// 2. iterate through the heap to find the top k frequent elements
