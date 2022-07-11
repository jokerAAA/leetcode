# 二分

## 使用场景

1. 有序数组
2. 静态
3. 数据太小 OR 太大都不是最优解

## 模板

```javascript
// 找到排序数组中是否存在target
function binarySearch(nums, target) {
  // 纯数字注意特殊判断
  if (!nums || !nums.length || target === null) {
    return -1;
  }
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2); // 避免 (left + right) / 2 溢出
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

// 找到排序数组(可重复)元素出现的第一个位置
const bSearch = (nums, target) => {
  if (!nums.length || target === null) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const num = nums[mid];
    if (num > target) {
      right = mid - 1;
    } else if (num < target) {
      left = mid + 1;
    } else {
      // num === target要区分2种情况:
      if (mid === 0 || num != nums[mid - 1]) {
        return mid;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// 找到排序数组(可重复)元素出现的最后一个位置
const binarySearchLast = (nums, target) => {
  if (!nums || !nums.length || target === null) {
    return -1;
  }
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value > target) {
      right = mid - 1;
    } else if (value < target) {
      left = mid + 1;
    } else {
      if (mid === length - 1 || value !== nums[mid + 1]) {
        return mid;
      } else {
        left = mid + 1;
      }
    }
  }
};

// 查找第一个大于等于给定值的元素, 例子: 3，4，6，7，10。寻找第一个大于5的元素 => 6
const findFirstBigNumer = (nums, target) => {
  if (!nums.length || target === null) {
    return -1;
  }
  const length = nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value < target) {
      left = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

// 查找最后一个小于等于给定值的元素, 3，5，6，8，9，10,寻找最后一个小于等于7的元素 => 6
const findLastNumber = (nums, target) => {
  if (!nums.length || target === null) {
    return -1;
  }
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const value = nums[mid];
    if (value > target) {
      right = mid - 1;
    } else {
      if (mid === length - 1 || nums[mid + 1] > target) {
        return mid;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};
```

## 常见题型

二分的流程是固定的，题型会在容器、条件上变化

1. 正常二分题型
2. 重复数组二分
3. 旋转数组二分
4. 二维矩阵二分

## 旋转数组二分

旋转数组二分时候,如果出现相等元素,边界移动移动移位后继续判断,和标准排序模板中是一样的,重复元素只能移动一位然后继续判断。问题在于找到判断条件

1. 旋转数组最小值: 变种二分
2. 旋转数组最小值(重复): 变种二分 + 暴力
3. 旋转数组搜索 target
4. 旋转数组(重复)搜 target

## 寻找最左区间和最右区间

1. 寻找最左插入位置: 寻找最左区间，右边界不停收缩，碰到 ifelse 判断的时候,先判定是否符合右区间收缩的条件
2. 寻找最右插入位置: 左区间不停收缩,碰到 ifelse 判断,先检查是否符合左区间收缩的条件

## 总结

1. 二分题型的简单 tag 就是套模板,一切转模板
2. 二分法细节很重要，很多题目都是 == 判断、舍弃提交变化(value < target 变成更复杂的范围)
3. 模板二分写法有很多变种,每个变化都会导致细节不太一样,按自己熟悉的来
4. 二分细节的思考特殊情况只要考虑首尾、3 个元素、2 个元素、循环结束的场景,二分是每次折半的,最后一定会来到 3 个元素、2 个元素的场景
5. left 和 right 的变化是放弃区间，缩小查询范围:
   - right = mid - 1: 舍弃右侧区间,下次循环 mid 左移
   - left = mid + 1,: 舍弃左侧区间,下次循环 mid 右移
6. left <= right 的模板适合循环中找到目标值的题目,循环还未结束已经找到确定的目标值了：比如数组中寻找 target
   left < right 求唯一结果,二分是为了不断靠近最终结果,循环结束就是结果,最终目标是让循环走完！
