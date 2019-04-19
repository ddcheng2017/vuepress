# 数组扁平化概念

* 数组扁平化是指将一个多维数组变为一维数组

```js
[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
```

**实现**

## 1、reduce

* 遍历数组每一项，若值为数组则递归遍历，否则concat。

```js
function flatten(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
```

* reduce是数组的一种方法，它接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
* reduce包含两个参数：回调函数，传给total的初始值

```js
// 求数组的各项值相加的和： 
arr.reduce((total, item)=> {  // total为之前的计算结果，item为数组的各项值
    return total + item;
}, 0);
```

## 2、toString & split

* 调用数组的toString方法，将数组变为字符串然后再用split分割还原为数组

```js
function flatten(arr) {
    return arr.toString().split(',').map(function(item) {
        return Number(item);
    })
};
```

* 因为split分割后形成的数组的每一项值为字符串，所以需要用一个map方法遍历数组将其每一项转换为数值型

## 3、join & split

* 和上面的toString一样，join也可以将数组转换为字符串

```js
function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {
        return parseInt(item);
    })
}
```

## 4、递归

* 递归的遍历每一项，若为数组则继续遍历，否则concat

```js
function flatten(arr) {
    var res = [];
    arr.map(item => {
        if(Array.isArray(item)) {
            res = res.concat(flatten(item));
        } else {
            res.push(item);
        }
    });
    return res;
}
```

## 5、扩展运算符

* es6的扩展运算符能将二维数组变为一维

```js
[].concat(...[1, 2, 3, [4, 5]]);  // [1, 2, 3, 4, 5]
```

* 根据这个结果我们可以做一个遍历，若arr中含有数组则使用一次扩展运算符，直至没有为止。

```js
function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
```

## 6、es6 新增flat方法

* (最简单就一行)

* 数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```js
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
```

## 总结

* 虽然方法很多，核心也只有一个：
* 遍历数组arr，若arr[i]为数组则递归遍历，直至arr[i]不为数组然后与之前的结果concat。 （第六种除外）