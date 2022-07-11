/**
 * desc 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length || !matrix[0].length || target === null) {
    return false;
  }
  /**
   * 二维数组从做到右从上到下递增,利用这个特点可以将开始位置放在右上角,此时存在3中情况
   * 1. 当前值==target 流程结束
   * 2. 当前值>target,因为从上到下递增,当前值比target大,那么可以直接舍弃当前列,column--
   * 3. 当前值<target,因为从做到右递增,当前值比target小,那么可以舍弃当前行,row++
   * 本质还是二分的思路,区别在每次条件判断结束后,舍弃的不是一半,而是比当前值大的列或比当前值小的行;同时二分结束后,指针只是递增/递减
   * 小技巧: 开始位置置于右上角
   */
  const rows = matrix.length;
  const columns = matrix[0].length;
  let curRow = 0;
  let curColumn = columns - 1;
  while (curRow < rows && curColumn >= 0) {
    const num = matrix[curRow][curColumn]; // ?
    if (num === target) {
      return true;
    } else if (num > target) {
      curColumn--;
    } else {
      curRow++;
    }
  }
  return false;
};
