function topKFrequent(nums, k) {
  const freqMap = {};
  const topKFreq = [];
  let topFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
    if (freqMap[nums[i]] >= topFreq && !topKFreq.includes(nums[i])) {
      topKFreq.push(nums[i]);
      topFreq = freqMap[nums[i]];
    }
    if (topKFreq.length > k) {
      topKFreq.shift();
    }
  }
  return topKFreq;
}

const nums = [1, 2, 2, 3, 3, 3];
const k = 2;

console.log(topKFrequent(nums, k));

// My solution: assumes that the nums array is in order from least freq to most freq

// track index of the k freq
// how tf do u not iterate through the map to find out which num has the most freq
// instead of tracking the topfreq track the minfreq