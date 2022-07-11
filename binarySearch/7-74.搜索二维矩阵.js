/**
 * @desc 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：每行中的整数从左到右按升序排列。每行的第一个整数大于前一行的最后一个整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 思路: mn矩阵可以看做一个整体来二分,整体数量是m * n,每次计算出mid后,将mid映射到原矩阵中: 如3行5列的矩阵,第一次二分后是7,7对应的是3行1列,行通过 mid / m来计算,n通过mid % n来计算
  if (!matrix.length || target == null) {
    return false;
  }
  let left = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const row = Math.floor(mid / n);
    const column = mid % n;
    const value = matrix[row][column];
    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

// 思路2: 2次二分,第一次对列做二分,第二次对行做二分,实现: 略
const test = (matrix, target) => {
  if (!matrix.length || target === null) {
    return false;
  }
  const arr = matrix.map((v) => v[0]);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = arr[mid];
    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return (
    matrix[left]?.indexOf(target) > -1 || matrix[right]?.indexOf(target) > -1
  );
};
