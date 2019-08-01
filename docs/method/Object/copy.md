# 对象的拷贝（深拷贝和浅拷贝）

关于深浅拷贝的见解。浅拷贝是拷贝一层，深层次的对象级别的就拷贝引用；深拷贝是拷贝多层，每一级别的数据都会拷贝出来。总结来看，浅拷贝的时候如果数据是基本数据类型，那么就如同直接赋值那种，会拷贝其本身，如果除了基本数据类型之外还有一层对象，那么对于浅拷贝而言就只能拷贝其引用，对象的改变会反应到拷贝对象上；但是深拷贝就会拷贝多层，即使是嵌套了对象，也会都拷贝出来。

相关知识点

1.javascript变量包含两种不同数据类型的值：基本类型和引用类型。可参照此篇[数据类型](http://www.mamicode.com/info-detail-2347949.html)

* 基本类型值指的是简单的数据段，包括es6里面新增的一共是有7种，具体如下：number、string、boolean、null、undefined、symbol、object(object、array、function)。
* 引用类型值指那些可能由多个值构成的对象，有一种如下：object。在将一个值赋给变量时，解析器必须确定这个值是基本类型值还是引用类型值。

2.javascript的变量的存储方式：栈（stack）和堆（heap）。

* 栈：自动分配内存空间，系统自动释放，里面存放的是基本类型的值和引用类型的地址
* 堆：动态分配的内存，大小不定，也不会自动释放。里面存放引用类型的值。

## 1、方法一（浅拷贝的方法）

```js
function simpleClone(initObj) {
  var obj = {};
  for (var i in initObj) {
    obj[i] = initObj[i];
  }
  return obj;
}
var obj = {
  a: "hello",
  b: {
    a: "world",
    b: 21
  },
  c: ["Bob", "Tom", "Jenny"],
  d: function () {
    console.log("hello world");
  }
};
var cloneObj = simpleClone(obj);
console.log(cloneObj.a);//=>hello
console.log(cloneObj.b);//=>{ a: 'world', b: 21 }
console.log(cloneObj.c);//=>[ 'Bob', 'Tom', 'Jenny' ]
console.log(cloneObj.d);//=>[Function: d]
cloneObj.d()//=>hello world
//更改原对象中的a,b,c,d，看看拷贝过来的对象是否变化
cloneObj.a = "changed";
cloneObj.b.a = "changed";
cloneObj.b.b = 25;
cloneObj.c = [1, 2, 3];
cloneObj.d = function () { console.log("changed"); };
console.log(obj.a);    //=>hello
console.log(obj.b);    //=>{a:"changed",b:25},事实上就是只有对象是拷贝的引用类型
console.log(obj.c);    //=>['Bob','Tom','Jenny']
console.log(obj.d);    //=>[Function: d]
obj.d()                //=>hello world
```

## 2、ES6中的Object.assign方法

* ES6中的Object.assign方法（比浅拷贝深一层），Object.assign是ES6的新函数。Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 Object.assign() 进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。

```js
Object.assign(target, ...sources)
//target：目标对象。
//sources：任意多个源对象。
//返回值：目标对象会被返回。
```

* 使用

```js
var obj1 = {
  a: "hello",
  b: {
    a: "hello",
    b: 21
  }
};
var cloneObj1 = Object.assign({}, obj1);
cloneObj1.a = "changed";
cloneObj1.b.a = "changed";
console.log(obj1.a);  //hello
console.log(obj.b.a); // "changed"
```

* 这里需要注意Object.assign() 只是一级属性复制，比浅拷贝多深拷贝了一层而已。用的时候，还是要注意这个问题的。如果对象只有一层的话，可以使用这个函数作为深拷贝的方法

```js
var obj2 = { a: 10, b: 20, c: 30 };
var cloneObj2 = Object.assign({}, obj2);
cloneObj2.b = 100;
console.log(obj2);
// { a: 10, b: 20, c: 30 } <-- 沒被改到
console.log(cloneObj2);
// { a: 10, b: 100, c: 30 }
```

## 3、递归拷贝（深拷贝）

*(同样适用数组)

```js
function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue;
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : {};
      arguments.callee(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
var str = {};
var obj = { a: { a: "hello", b: 21 } };
deepClone(obj, str);
str.a.a = 'changed'; //=》改变之后
console.log(obj); //=》{ a: { a: 'hello', b: 21 } } 这里不会改变
/*
var str = [];
var obj = [ 'a', { a: "hello", b: 21 } ];
deepClone(obj, str);
str[1].a = 'changed'; //=》改变之后
str[0] = 'changed'; //=》改变之后
console.log(obj); //=》{ a: { a: 'hello', b: 21 } } 这里不会改变
console.log(str); //=》[ 'changed', { a: 'changed' } ] */
//换做数组亦可以适用
```

## 4、使用Object.create()方法

* 使用Object.create()方法（深拷贝）(同样适用数组)

* 直接使用var newObj = Object.create(oldObj)，可以达到深拷贝的效果。

```js
function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue;
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
var str = {};
var obj = { a: { a: "hello", b: 21 } };
deepClone(obj, str);
str.a.a = 'changed'; //=》改变之后
console.log(obj); //=》{ a: { a: 'hello', b: 21 } } 这里不会改变
```

## 5、扩展运算符（深拷贝）

* 扩展运算符（深拷贝）（同样适用数组）

```js
function deepClone(obj) {
  let result = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          result[key] = deepClone(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  return result;
}
var obj = { a: { a: "hello", b: 21 } };
var obj1 = deepClone(obj);
obj1.a.a = 'changed'; //=》改变之后
obj1.a.b = 'changed'; //=》改变之后
console.log(obj); //=》{ a: { a: 'hello', b: 21 } } 这里不会改变
console.log(obj1); //=》{ a: { a: 'changed', b: 'changed' } } 

var arr = [1, 2, [3, 6]];
var arr1 = deepClone(arr)
arr1[0] = 'changed';
arr1[2][0] = 'change';
console.log(arr);//=>[ 1, 2, [ 3, 6 ] ] 不会改变
console.log(arr1);//=>[ 'changed', 2, [ 'change', 6 ] ]
```

<comments />