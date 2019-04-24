# node中的输入与输出

## 1、单行输入用（空格隔开，回车结束）

```js
var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (data) {
  // 获取输入
  var inputs = data.trim().split(' ');

  // 处理
  // var result = deal(inputs);

  // 输出结果
  console.log(inputs);
});

// function deal(inputs) {
//   var result = '';
//
//   // dosomething
//
//   return result;
// }
```

* 输入输出样例(输出的结果可以在deal中进行处理此处用数组)

```js
test1 test2 test   //输入
[ 'test1', 'test2', 'test' ] //输出
a b c//输入
[ 'a', 'b', 'c' ] //输出  
```

## 2、多行输入（指定行数，一行以空格隔开，到指定行数回车结束）

```js
var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var K = 2; // 输入K行（这里说一组有几行就是几）
var inputs = [];
rl.on('line', function(data) {
  // console.log(data);
  // 获取输入
  // inputs.push(data);
  inputs.push(data.trim());
  if (K === inputs.length) {
    // 处理
    //var result = deal(inputs);

    // 输出结果
    console.log(inputs);
    // 清0
    inputs.length = 0;
  }
});
```

* 输入输出样例(输出的结果可以在deal中进行处理此处用数组)

```js
a b c d
e f g   //输入 默认两行
[ 'a b c d', 'e f g' ]
```

## 3、多行输入，手动输入行数（指定行数，一行以空格隔开，到指定行数回车结束）

```js
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputs = [];
var num = 0;
rl.on('line', function(data) {
  if(num === 0){
    num = Number(data.trim());
  } else {
    inputs.push(data.trim());
    if (num === inputs.length) {
      // 处理
      // var result = deal(inputs);

      // 输出结果
      console.log(inputs);

      // 清0
      inputs.length = 0;  //不可改动
      num = 0;    //不可改动
    }
  }
});
```

* 输入输出样例(输出的结果可以在deal中进行处理此处用数组)

```js
3
a b c
d e
f g h   //先输入行数，在输入每一行的数组用逗号隔开
[ 'a b c', 'd e', 'f g h' ]
```