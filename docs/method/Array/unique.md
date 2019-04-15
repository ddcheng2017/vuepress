# 数组去除重复

## 数组去除重复时要关注数组中的元素是否有对象，如果有一些方法需要格外小心，相同的对象在内存中的位置不同，看作不同的元素，（看需求是否需要将相同对象去重）

### 1、最基础的方法（兼容性好）(对象地址不一样,因此为不同的元素)

```js
function unique(arr) {
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    var obj = arr[i];
    for (var j = 0, jlen = res.length; j < jlen; j++) {
      if (res[j] === obj) break;
    }
    if (jlen === j) res.push(obj);
  }
  return res;
}
let arr1 = [1, 1, '2', '1', 3, 4,{ name: 'hanzichi' },{ name: 'hanzichi' }];
console.log(unique(arr1)); //arr=[1,'2','1',3,4,{ name: 'hanzichi' },{ name: 'hanzichi' }]
```

### 2、如果不考虑兼容性，会用ES5里面数组的indexOf()方法。(对象地址不一样,因此为不同的元素)

```js
function unique(arr) {
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    var obj = arr[i];
    if (res.indexOf(obj) === -1) res.push(obj);
  }
  return res;
}
var arr = [1, 1, '2', '1', 3, 4,{ name: 'hanzichi' },{ name: 'hanzichi' }]
arr = unique(arr);
console.log(arr);// arr=[1,'2','1',3,4,{ name: 'hanzichi' },{ name: 'hanzichi' }]
```

### 3、利用ES5数组里的filter过滤：(对象地址不一样,因此为不同的元素)

```js
function unique(arr) {
  var res = arr.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}
var arr = [1, 1, '1', '2', 1,{ name: 'hanzichi' },{ name: 'hanzichi' }];
console.log(unique(arr)); //[ 1, '1', '2' ,{ name: 'hanzichi' },{ name: 'hanzichi' }]
```

### 4、ES6 部署了 Set 以及 Array.from 方法，太强大了！如果浏览器支持，完全可以这样：(对象地址不一样,因此为不同的元素)

```js
// 去除数组的重复成员
[...new Set(array)]
```

* 上面的方法也可以用于，去除字符串里面的重复字符。

```js
[...new Set('ababbc')].join('')
// "abc"
```

* 也可以使用下面的方式

```js
function unique(a) {
  return Array.from(new Set(a));
}
var arr = [{ name: "hanzichi" }, { age: 30 }, new String(1), new Number(1), { name: "hanzichi" }, 1, 2, 1];
console.log(unique(arr));  // =>[{ name: 'hanzichi' }, { age: 30 }, [String: '1'], [Number: 1], { name: 'hanzichi' }, 1, 2]
```

### 5、当然还有一些针对部分类型数组的去重（对象键值法去重，数组中有对象时会将相同的去重，看需求使用。优点是速度快）

```js
/*
* 速度最快， 占空间最多（空间换时间）
*
* 该方法执行的速度比其他任何方法都快， 就是占用的内存大一些。
* 现思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，
* 不是的话给对象新增该键并放入新数组。
* 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”，
* 不同的键可能会被误认为一样，例如n[val]-- n[1]、n["1"]；
* 解决上述问题还是得调用“indexOf”。*/
function uniq(array) {
  var temp = {}, r = [], len = array.length, val, type;
  for (var i = 0; i < len; i++) {
    val = array[i];
    type = typeof val;
    if (!temp[val]) {
      temp[val] = [type];
      r.push(val);
    } else if (temp[val].indexOf(type) < 0) {
      temp[val].push(type);
      r.push(val);
    }
  }
  return r;
}
var aa = [1, 2, "2", 4, 9, "a", "a", 2, 3, 5, 6, 5,{ name: 'hanzichi' },{ name: 'hanzichi' }];
console.log(uniq(aa));//=>[ 1, 2, '2', 4, 9, 'a', 3, 5, 6, { name: 'hanzichi' } ]
```
