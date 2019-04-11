---
title: "数组扁平化"
---
## 数组扁平化概念
数组扁平化是指将一个多维数组变为一维数组
```js
[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
```
### 实现

#### 1. reduce
遍历数组每一项，若值为数组则递归遍历，否则concat。
```js
function flatten(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
```
reduce是数组的一种方法，它接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
reduce包含两个参数：回调函数，传给total的初始值
```js
// 求数组的各项值相加的和： 
arr.reduce((total, item)=> {  // total为之前的计算结果，item为数组的各项值
    return total + item;
}, 0);
```