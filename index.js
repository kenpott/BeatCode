class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
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
            let temp = new Set(subString); // although i am trying to detect dupes if there are multiple chars then it wont work.
            if (temp.size !== 1) {
                dupe++;
                subString[subString.length - 1] = temp[0];
                if (dupe > k) {
                    subString.shift();
                }
            }
            longestSubString = Math.max(longestSubString, subString.length);
        }
        return longestSubString
    }
}
