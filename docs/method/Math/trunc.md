# Math.trunc()方法简述

Math.trunc方法用于去除一个数的小数部分，返回整数部分。(es6新增)

```js
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
```

* 对于非数值，Math.trunc内部使用Number方法将其先转为数值。

```js
Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0
```

* 对于空值和无法截取整数的值，返回NaN。

```js
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
```

* 对于没有部署这个方法的环境，可以用下面的代码模拟。

```js
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
```

<comments />