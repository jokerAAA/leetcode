/**
 * @desc 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。如果数组中不存在目标值 target，返回 [-1, -1]。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * 思路:
   * 1. 开始位置就是标准二分法模板时,如果判断target === nums[mid],此时舍弃右半边向左找
   * 2. 结束为止就是标准二分法模板,找到第一个不等于target的元素,
   */
  if (!nums || !nums.length || target == null) {
    return [-1, -1];
  }
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }
  const leftIndex = binarySearch(nums, target);
  const rightIndex = binarySearch(nums, target) - 1;
  console.log(`left: ${leftIndex}`);
  console.log(`right: ${rightIndex}`);
  if (
    leftIndex <= rightIndex &&
    leftIndex > -1 &&
    rightIndex > -1 &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex];
  } else {
    return [-1, -1];
  }
};

// 找到递增序列的第一个值为target的元素，可以重复
var binarySearch = (nums, target) => {
  if (!nums || !nums.length || target === null) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value == target) {
      right = mid - 1;
      ans = mid;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

// 找到递增序列的第一个值不是target的元素，可以重复
var binarySearchNot = (nums, target) => {
  if (!nums || !nums.length || target === null) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  let ans = right;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    console.log(left, right, mid);
    if (value == target) {
      left = mid + 1;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = mid;
    }
  }
  return ans;
};


