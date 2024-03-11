/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const m = new Map();
    for (let i = 0; ; ++i) {
        const x = nums[i];
        const y = target - x;
        if (m.has(y)) {
            return [m.get(y), i];
        }
        m.set(x, i);
    }
};

// 2nd way to solve 
var twoSum = function(nums, target) {
    const map = new Map()
    for(const index in nums) {
        const pairNumber = target - nums[index]
        if (map.has(pairNumber)) return [parseInt(index), parseInt(map.get(pairNumber))]
        map.set(nums[index], index)
    }
};
