/**
 * @desc 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (!nums.length || target === null) {
    return false;
  }
  if (nums.length === 1) {
    return nums[0] === target;
  }
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value === target) {
      return true;
    }
    // 需要在33题基础上添加相等判断,重复元素会出现左中右元素相等的场景
    // 只有左=中=右的场景是无法判断递增性的,只出现left == mid, mid == right时,还是可以判断另外一边的
    if (nums[left] === value && nums[right] === value) {
      left++;
      right--;
    } else if (value >= nums[left]) {
      if (nums[left] <= target && target < value) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (value < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = right - 1;
      }
    }
  }
  return false;
};
