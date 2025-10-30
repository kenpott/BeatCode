function topKFrequent(nums, k) {
  const freqMap = {};
  const topKFreq = [];
  let low = 0;
  let high = 0;

  // this fills the freqMap
  for (let i = 0; i < nums.length; i++) {
    freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;

    if (freqMap[nums[i]] >= low&& !topKFreq.includes(nums[i])) {
      if (topKFreq.length >= k) {
        topKFreq.shift();
      }
      // i have to sort while pushing values into the array (e.g. if statement)
      if (freqMap[nums[i]] < high) {
        topKFreq.unshift(nums[i]);
      } else {
        topKFreq.push(nums[i]);
      }
    }
    // Determining high and low
    if (low === 0) {
      low = freqMap[nums[i]];
    }
    if (freqMap[nums[i]] > high) {
      high = freqMap[nums[i]];
    } else if (freqMap[nums[i]] > low) {
      low = freqMap[nums[i]];
    }
    console.log(freqMap, topKFreq, low, high);
  }
  return topKFreq;
}

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
const k = 10;

console.log(topKFrequent(nums, k));
// Expected output: [1,2,5,3,6,7,4,8,10,11]

// the issue is the new low is being too high so it doesnt solve the of unsorted values (low freq to high freq)