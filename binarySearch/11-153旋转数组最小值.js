/**
 * @desc 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (!nums.length) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  /**
   * 这个题的思路可以这样来理解:
   * 1. 数组经过旋转后,转换成折线图,会出现左右两段递增的折线图,例子: 左侧4567 右侧012
   * 2. 左侧特点: 全部大于nums[0],非递增
   * 3. 右侧特点: 全部小于nums[length - 1],递增
   * 4. 二分点落在左侧时,不停让左区间右移;落在右侧是右区间左移,直到左右指针相遇
   * 5. 考虑特殊场景: 旋转后和原数组保持一致时,此时是递增数组,会出现mid一直左移OR右移知道边界的场景,边界就是旋转点,和题目是符合的
   * 6. 这里需要特殊考虑的是最终求的是最小值,左区间变化时是mid + 1,右区间变化是mid,mid不可以丢弃
   */
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
