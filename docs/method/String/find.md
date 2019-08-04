# JS 获取一个字符串中指定字符串第 n 次出现的位置

了解类似的获取字符位置的方法：

## 1.1 charAt() 获取字符串指定位置的字符

用法：strObj 是字符串对象，index 是指定的位置，（位置从 0 开始数）

```js
strObj.charAt(index); //返回字符
```

##　 1.2 indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置

用法：stringObject 是字符串对象，searchvalue 是指定的字符串值，fromindex(可有可无)指定开始匹配字符串值的位置，若无，表示从 0 位置开始。

```js
stringObject.indexOf(searchvalue,fromindex) //返回位置

例：

var str='helloworld';
var num=str.indexOf('o');//返回 4
```

2.正题

获取一个字符串值在指定字符串第 n 次出现的位置

就像上面的例子，helloword，我想获取第二个 o 出现的位置

js 代码：参数（字符串，要查找的字符串值，要查找第几个该字符串值

```js
function find(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num - 1; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}
//引用该方法：

var str = "Hello World!";
find(str, "o", 2); //返回 7
```

基本的用法就是这样了，对于一个字符串中相同字符多的字符串，只需要把相应的 2 换成你想要查找的 n 值就可以了

例如：获取当前页面 url 中的第 n 个‘/’出现的位置

直接调用上面的方法

```js
ar str=document.URL;//获取当前页面的完整路径信息
document.write(find(str,'/',n));
```
