# 数字无重复添加元素

由于使用 JS 的 push 会导致元素重复，而 ES5 之前没有 set（集合）方法，重复元素还要做去重处理，比较麻烦些，所以直接写一个新 push 来处理
方法一:此方法对 Array 原型链进行扩展有时会莫名其妙的破坏数组方法

```js
Array.prototype.pushNoRepeat = function() {
  for (var i = 0; i < arguments.length; i++) {
    var ele = arguments[i];
    if (this.indexOf(ele) == -1) {
      this.push(ele);
    }
  }
};
```

方法二

```js
function pushNoRepeat() {
  for (var i = 0; i < arguments.length; i++) {
    var ele = arguments[i];
    if (this.indexOf(ele) == -1) {
      this.push(ele);
    }
  }
}

使用的时候需要this指向进行修改使用call;

//使用方法
let arr = ["1", "2"];
pushNoRepeatc.call([], "2"); //arr不变，有相同元素
```
