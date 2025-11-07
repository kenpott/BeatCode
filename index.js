class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let startingIndex = 0;
        let subString = [];
        let dupe = 0;
        let longestSubString = 0;
        if (s === "") return 0;
        for (let i = 0; i < 1; i++) {
            subString.push(s[i]);
        }
        longestSubString = subString.length;
        for (let j = 1; j < s.length; j++) {
            console.log(subString);
            subString.push(s[j]); 
            let temp = new Set(subString);
            console.log("e", s.split(startingIndex, j));
            if (temp.size !== s.split(startingIndex, j).length) { // account for chars
                dupe++
                if (dupe > k) {
                    subString.shift();
                    startingIndex++;
                }
            }
            longestSubString = Math.max(longestSubString, subString.length);
        }
        return longestSubString
    }
}
