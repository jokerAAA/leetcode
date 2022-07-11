/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums || !nums.length || target === null) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let left = 0;
  const length = nums.length;
  let right = length - 1;
  while (left <= right) {
    // TODO: 这个题的重点应该是划分,按mid切分,可能存在以下情况:
    // 1. mid在旋转点左侧,通过nums[0]小于midValue即可判断,如果target在左侧区间,直接舍弃右边
    // 2. mid在旋转点右侧,此时右侧有序数组,如果target在区间内,舍弃左边即可
    // 本质还是二分区间划分,基本模板是left = mid + 1,right = mid - 1,这里的情况更多了
    const mid = Math.floor((right - left) / 2) + left;
    const num = nums[mid];
    if (target === num) {
      return mid;
    }
    // NOTE: 这里需要添加=判断,如果在只有2个数的场景下,nums[0]和nums[mid]是相等的,一定会走else逻辑,没有==判断就错过了一次比较机会
    if (nums[0] <= num) {
      // 左侧有序
      if (nums[0] <= target && target < num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (num < target && target <= nums[length - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

var searchTarget = (nums, target) => {
  if (!nums.length || target === null) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value === target) {
      return mid;
    }
    if (value >= nums[0]) {
      // 左侧
      if (nums[0] <= target && target < value) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 右侧
      if (value < target && target <= nums[length - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
