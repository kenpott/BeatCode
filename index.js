function topKFrequent(nums, k) {
  const freqMap = {};
  const topKFreq = [];
  let low = 0;
  let high = 0;

  // this fills the freqMap
  for (let i = 0; i < nums.length; i++) {
    freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;

    if (freqMap[nums[i]] >= low) {
      if (topKFreq.length > k) {
        // issue is here
        topKFreq.shift();
      }
      // i have to sort while pushing values into the array (e.g. if statement)
      if (freqMap[nums[i]] < high) {
        topKFreq.unshift(nums[i]);
      } else {
        // must be greater than the high
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
  return new Set(top);
}

const nums = [3, 0, 1, 0];
const k = 1;

console.log(topKFrequent(nums, k));
