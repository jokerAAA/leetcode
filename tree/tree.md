# 二叉树

## 知识点划分

1. 树的遍历
2. 树的构建
3. 树的修改

## 树的遍历

### 深度优先

深度优先可以分为前序、中序、后序
也可以分成递归写法和栈写法

### 广度优先

广度优先搜索的一个例子是层序遍历,从根节点开始依次向下搜索。一般是用队列实现的
tips: 广度优先是按层遍历的,每一层做单独存储,方便使用: [[level1], [level2]]

流程如下：

1. 初始化队列,此时只有一个根节点
2. 队列中取出根节点,判断后将子节点加入队列
3. 记录队列长度,取出当前长度的元素(同一层)，判断后继续将子节点加入队列
4. 循环