# Math.sign()方法简述

Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

* 它会返回五种值。

1. 参数为正数，返回+1；
2. 参数为负数，返回-1；
3. 参数为 0，返回0；
4. 参数为-0，返回-0;
5. 其他值，返回NaN。

```js
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
```

* 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。

```js
Math.sign('')  // 0
Math.sign(true)  // +1
Math.sign(false)  // 0
Math.sign(null)  // 0
Math.sign('9')  // +1
Math.sign('foo')  // NaN
Math.sign()  // NaN
Math.sign(undefined)  // NaN
```

* 对于没有部署这个方法的环境，可以用下面的代码模拟。

```js
Math.sign = Math.sign || function(x) {
  x = +x; // convert to a number
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};
```

<comments />