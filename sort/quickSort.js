/**
 * 介绍常见排序算法
 */

// 1 快排
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(arr, left, right) {
  if (left >= right) {
    return arr;
  }
  var pos = partition(arr, left, right);
  quickSort(arr, left, pos - 1);
  quickSort(arr, pos + 1, right)
}

function partition(arr, left, right) {
  const pivot = arr[right];
  // last表示小于pivot的值的边界;
  let last = left;
  let temp;
  while (left < right) {
    // 当前值比pivot小,交换当前值和last,更新last边界范围
    if (arr[left] < pivot) {
      if (left != last) {
        temp = arr[left];
        arr[left] = arr[last];
        arr[last] = temp;
      }1
      last++;
    }
    left++;
  }
  // pivot也要放在区间内
  temp = arr[right];
  arr[right] = arr[last];
  arr[last] = temp;
  return last;
}
