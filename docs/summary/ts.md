---
sidebar: "auto"
sidebarDepth: 2
---

# ts 学习总结

ts 的入门知识。便于查阅和回顾。

## 一、ts 介绍、安装和配置

- 使用构建工具可省略此步骤

### 1、介绍

1、 TypeScript 是由微软开发的一款开源的编程语言。
2、TypeScript 是 Javascript 的超级，遵循最新的 ES6、Es5 规范。TypeScript 扩展了 JavaScript
的语法。
3、 TypeScript 更像后端 java、C#这样的面向对象语言可以让 js 开发大型企业项目。
4、 谷歌也在大力支持 Typescript 的推广，谷歌的 angular2.x+就是基于 Typescript 语法。
5、 最新的 Vue 、React 也可以集成 TypeScript。

### 2、安装编译

1.2.1、安装

    npm install -g typescript

1.2.2、编译
tsc filename.ts

### 3、Typescript 开发工具 Vscode 自动编译.ts 文件

1.3.1、 创建 `tsconfig.json` 文件 在当前目录运行命令 `tsc --init` 生成配置文件 并 选择编译出口“outDir”

1.3.2、点击菜单任务-运行任务点击 tsc:监视-tsconfig.json 然后就可以自动生成代码了

## 二、ts 中的数据类型

typescript 中为了使编写的代码更规范，更有利于维护，增加了类型校验，在 typescript 中主要给我们提供了以下数据类型

1. 布尔类型（boolean）
2. 数字类型（number）
3. 字符串类型(string)
4. 数组类型（array）
5. 元组类型（tuple）
6. 枚举类型（enum）
7. 任意类型（any）
8. null 和 undefined
9. void 类型
10. never 类型

### 2.1、布尔类型（boolean）

```ts
//es5 的写法 （正确写法） ts 中（错误写法）
var flag = true;

flag = 456;
```

- typescript 中为了使编写的代码更规范，更有利于维护，增加了类型校验写 ts 代码必须指定类型

```ts
var flag: boolean = true;
flag = 123; //错误
flag = false; //正确
```

### 2.2、数字类型（number）

```ts
var num: number = 123;
num = 456;
console.log(num);
/正确/;
num = "str"; //错误
```

### 2.3、字符串类型(string)

```ts
var str: string = "this is ts";
str = "haha"; //正确
str = true; //错误
```

### 2.4、数组类型（array）

ts 中定义数组有两种方式

```ts
var arr = ["1", "2"]; //es5定义数组
// 1.第一种定义数组的方式
var arr: number[] = [11, 22, 33];
console.log(arr);

//2.第二种定义数组的方式
var arr: Array<number> = [11, 22, 33];
console.log(arr);
```

- 数组中只能包含规定的同一种数据类型，不可以有不同的出现，编译会出错

### 2.5、元组类型（tuple）

属于数组的一种（可以用了规定数据中包含多种格式数据）

```ts
//元祖类型
let arr: [number, string] = [123, "this is ts"]; //可以设置多种数据类型
console.log(arr);
```

### 2.6、枚举类型（enum）

随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称为枚举方法，用这种方法定义的类型称枚举类型。

格式（枚举名一般首字母大写）

```ts
enum 枚举名{
    标识符[=整型常数],
    标识符[=整型常数],
    ...
    标识符[=整型常数],
} ;

enum Flag {success=1,error=2};
let s:Flag=Flag.success;
console.log(s); //值为1


enum Color {blue,red,'orange'};
var c:Color=Color.red;
console.log(c);   //1   如果标识符没有赋值 它的值就是下标

//也可以指定下标后面的数据依次累加
enum Color {blue,red=3,'orange'};
var c:Color=Color.red;
console.log(c);   //3
var c:Color=Color.orange;
console.log(c);   //4
```

### 2.7、任意类型（any）

### 2.8、null 和 undefined

定义没有赋值就是 undefined

### 2.9、void 类型

typescript 中的 void 表示没有任何类型，一般用于定义方法的时候方法没有返回值。

```ts
//正确写法
function run(): void {
  console.log("run");
}
run();

//错误写法
function run(): undefined {
  console.log("run");
}
run();
```

### 2.10、never

是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明 never 的变量只能被 never 类型所赋值。

## 三、函数（大部分语法同 ES6）

### 3.1、函数的定义

声明函数：

```ts
//es5定义函数的方法
//函数声明法
function run() {
  return "run";
}
//匿名函数
var run2 = function() {
  return "run2";
};

//ts中定义函数的方法

//函数声明法
function run(): string {
  return "run";
}

//错误写法
function run(): string {
  return 123;
}
```

定义传参

```ts
//函数声明
function getInfo(name: string, age: number): string {
  return `${name} --- ${age}`;
}
alert(getInfo("zhangsan", 20));

//函数表达式
var getInfo = function(name: string, age: number): string {
  return `${name} --- ${age}`;
};
alert(getInfo("zhangsan", 40));
```

没有返回值

```ts
function run(): void {
  console.log("run");
}
run();
```

### 3.2、方法可选参数

es5 里面方法的实参和行参可以不一样，但是 ts 中必须一样，如果不一样就需要配置可选参数

使用`?`来指定是否需要

```ts
function getInfo(name: string, age?: number): string {
  if (age) {
    return `${name} --- ${age}`;
  } else {
    return `${name} ---年龄保密`;
  }
}

alert(getInfo("zhangsan"));

alert(getInfo("zhangsan", 123));
```

- 注意:可选参数必须配置到参数的最后面

### 3.3、默认参数 可选参数

es5 里面没法设置默认参数，es6 和 ts 中都可以设置默认参数 默认参数配置后不可以指定可选参数！！！

```ts
function getInfo(name: string, age: number = 20): string {
  if (age) {
    return `${name} --- ${age}`;
  } else {
    return `${name} ---年龄保密`;
  }
}

// alert( getInfo('张三'));
alert(getInfo("张三", 30));
```

### 3.4、剩余参数

三点运算符 接受新参传过来的值

```ts
function sum(...result: number[]): number {
  var sum = 0;

  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }

  return sum;
}

alert(sum(1, 2, 3, 4, 5, 6));

//也可以指定其中几个在传递剩余参数
function sum(a: number, b: number, ...result: number[]): number {
  var sum = a + b;

  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }

  return sum;
}

alert(sum(1, 2, 3, 4, 5, 6));
```

### 3.5、ts 函数重载(不常用)

typescript 中的重载：通过为同一个函数提供多个函数类型定义来实现多种功能的目的。

- es5 中出现同名方法，下面的会替换上面的方法,ts 中的重载可以理解为限制参数的一个方法

```ts
//参数必须为string和number类型 其余会报错
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str: any): any {
  if (typeof str === "string") {
    return "我叫：" + str;
  } else {
    return "我的年龄是" + str;
  }
}

alert(getInfo("张三")); //正确

alert(getInfo(20)); //正确

alert(getInfo(true)); //错误写法

//下面同理
function getInfo(name: string): string;
function getInfo(name: string, age: number): string;
function getInfo(name: any, age?: any): any {
  if (age) {
    return "我叫：" + name + "我的年龄是" + age;
  } else {
    return "我叫：" + name;
  }
}

alert(getInfo("zhangsan")); /*正确*/

alert(getInfo(123));
错误;

alert(getInfo("zhangsan", 20));
```

### 3.6、箭头函数 es6

this 指向的问题 箭头函数里面的 this 指向上下文 详细可[参照此篇](https://www.cnblogs.com/dongcanliang/p/7054176.html)

## 四、类 class（主要正对 ES5）

### 4.1、函数中最简单的类

```ts
function Person() {
  this.name = "张三";
  this.age = 20;
}
var p = new Person();
alert(p.name); //张三
```

### 4.2、构造函数和原型链里面增加方法

```ts
function Person() {
  this.name = "张三"; /*属性*/
  this.age = 20;
  this.run = function() {
    alert(this.name + "在运动");
  };
}
//原型链上面的属性会被多个实例共享   构造函数Person()不会
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
var p = new Person();
alert(Person.sex); //不存在
p.run(); //可以
p.work(); //可以
```

### 4.3、类里面的静态方法

```ts
function Person() {
  this.name = "张三"; /*属性*/
  this.age = 20;
  this.run = function() {
    /*实例方法*/

    alert(this.name + "在运动");
  };
}

Person.getInfo = function() {
  alert("我是静态方法");
};
//原型链上面的属性会被多个实例共享   构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
var p = new Person();
p.work();

//调用静态方法
Person.getInfo();
```

### 4.4、es5 里面的继承 （使用组合方式）

- 1、对象冒充实现继承 (可以继承构造函数里面的属性和方法 但是没法继承原型链上面的属性和方法)

```ts
function Person() {
  this.name = "张三"; /*属性*/
  this.age = 20;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};

//Web类 继承Person类

function Web() {
  Person.call(this); /*对象冒充实现继承*/
}

var w = new Web();
// w.run();  //对象冒充可以继承构造函数里面的属性和方法

w.work(); //对象冒充可以继承构造函数里面的属性和方法   但是没法继承原型链上面的属性和方法
```

- 2、原型链实现继承 （可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法）但是实例化子类的时候没法给父类传参

继承方式

```ts
function Person() {
  this.name = "张三"; /*属性*/
  this.age = 20;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};

//Web类 继承Person类   原型链+对象冒充的组合继承模式

function Web() {}

Web.prototype = new Person(); //原型链实现继承
var w = new Web();
//原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
//w.run();

w.work();
```

无法传参！！！

```ts
function Person(name, age) {
  //需要传递参数
  this.name = name; /*属性*/
  this.age = age;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};

var p = new Person("李四", 20);
p.run();

function Web(name, age) {}

Web.prototype = new Person(); //无法传参

var w = new Web("赵四", 20); //实例化子类的时候没法给父类传参

w.run();

// var w1=new Web('王五',22);
```

- 3、原型链+对象冒充的组合继承模式(对象冒充继承 实例化子类可以给父类传参)

```ts
function Person(name, age) {
  this.name = name; /*属性*/
  this.age = age;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};

function Web(name, age) {
  Person.call(this, name, age); //对象冒充继承   实例化子类可以给父类传参
}

Web.prototype = new Person();

// Web.prototype=Person.prototype; //或者使用此类方式继承

var w = new Web("赵四", 20); //实例化子类的时候没法给父类传参

// w.run();
w.work();

// var w1=new Web('王五',22);
```

## 五、ts 中类、继承修饰符、静态属性方法和多态

### 5.1、ts 中定义类

```ts
// ts中定义类：

class Person {
  name: string; //属性  前面省略了public关键词

  constructor(n: string) {
    //构造函数   实例化类的时候触发的方法 一般用来传参数
    this.name = n;
  }

  run(): void {
    alert(this.name);
  }
}
var p = new Person("张三");

p.run();
```

### 5.2、ts 中实现继承 extends、 super

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name}在运动`;
  }
}
// var p=new Person('王五');
// alert(p.run())
class Web extends Person {
  constructor(name: string) {
    super(name); /*初始化父类的构造函数*/
  }
}
var w = new Web("李四");
alert(w.run());
```

- ts 中继承的探讨 父类的方法和子类的方法一致时以子类方法为准

```ts
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  run() {
    return `${this.name}在运动`;
  }
}
// var p=new Person('王五');
// alert(p.run())
class Web extends Person {
  constructor(name) {
    super(name); /*初始化父类的构造函数*/
  }
  run() {
    return `${this.name}在运动-子类`;
  }
  work() {
    alert(`${this.name}在工作`);
  }
}
var w = new Web("李四");
alert(w.run()); //李四在运动-子类
```

### 5.3、修饰符

类里面的修饰符 typescript 里面定义属性的时候给我们提供了 三种修饰符

- public :公有 在当前类里面、 子类 、类外面都可以访问
- protected：保护类型 在当前类里面、子类里面可以访问 ，在类外部没法访问
- private ：私有 在当前类里面可以访问，子类、类外部都没法访问

属性如果不加修饰符 默认就是 公有 （public）

```ts
class Person{
  public name:string;  /*公有属性*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动`
    }
    }
    // var p=new Person('王五');
    // alert(p.run())
    class Web extends Person{
        constructor(name:string){
            super(name);  /*初始化父类的构造函数*/
        }
        run():string{
            return `${this.name}在运动-子类`
        }
        work(){
            alert(`${this.name}在工作`)
        }
    }
    var w=new Web('李四');
    w.work();
类外部访问公有属性
  class Person{
    public name:string;  /*公有属性*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动`
    }
}
var  p=new Person('哈哈哈');
alert(p.name);
protected：保护类型    在类里面、子类里面可以访问 ，在类外部没法访问
  class Person{
        protected name:string;  /*公有属性*/
        constructor(name:string){
            this.name=name;
        }
        run():string{
            return `${this.name}在运动`
        }
    }
var p=new Person('王五');
alert(p.run())
class Web extends Person{
    constructor(name:string){
        super(name);  /*初始化父类的构造函数*/
    }
    work(){
        alert(`${this.name}在工作`)
    }
}
var w=new Web('李四11');
w.work();
alert( w.run());
类外外部没法访问保护类型的属性
class Person{
    protected name:string;  /*保护类型*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动`
    }
}
var  p=new Person('哈哈哈');
alert(p.name);
private ：私有        在类里面可以访问，子类、类外部都没法访问
class Person{
    private name:string;  /*私有*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动`
    }
}
class Web extends Person{
    constructor(name:string){
        super(name)
    }
    work(){
        console.log(`${this.name}在工作`)
    }
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var p = new Person('哈哈哈');
alert(p.run());
```

### 5.4、静态属性 静态方法

```ts
function Person() {
  this.run1 = function() {};
}
Person.name = "哈哈哈";

Person.run2 = function() {
  静态方法;
};
var p = new Person();

Person.run2();
静态方法的调用;
```

### 5.5、JQ 的实现底层原理简析

```ts
function $(element) {
  return new Base(element);
}

$.get = function() {};

function Base(element) {
  this.element = 获取dom节点;

  this.css = function(arr, value) {
    this.element.style.arr = value;
  };
}

$("#box").css("color", "red");

$.get("url", function() {});
```

### 5.6、静态属性

```ts
class Per {
  public name: string;
  public age: number = 20;
  //静态属性

  static sex = "男";
  constructor(name: string) {
    this.name = name;
  }
  run() {
    /*实例方法*/

    alert(`${this.name}在运动`);
  }
  work() {
    alert(`${this.name}在工作`);
  }
  static print() {
    /*静态方法  里面没法直接调用类里面的属性*/

    alert("print方法" + Per.sex);
  }
}

// var p=new Per('张三');

// p.run();

Per.print();

alert(Per.sex); //出错
```

### 5.7、多态

多态:父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现 （感觉没什么用）

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
    console.log("吃的方法");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    return this.name + "吃粮食";
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  eat() {
    return this.name + "吃老鼠";
  }
}
```

### 5.8、抽象类

- typescript 中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
- 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
- abstract 抽象方法只能放在抽象类里面
- 抽象类和抽象方法用来定义标准 。 标准：Animal 这个类要求它的子类必须包含 eat 方法

```ts
//标准:

abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any; //抽象方法不包含具体实现并且必须在派生类中实现。

  run() {
    console.log("其他方法可以不实现");
  }
}

// var a=new Animal() /*错误的写法*/

class Dog extends Animal {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: any) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}

var d = new Dog("小花花");
d.eat();

class Cat extends Animal {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: any) {
    super(name);
  }
  run() {}
  eat() {
    console.log(this.name + "吃老鼠");
  }
}

var c = new Cat("小花猫");
c.eat();
```

## 六、接口

接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip 中的接口类似于 java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。

### 6.1、属性接口 对 json 的约束

- 对批量方法传入参数进行约束
- 接口：行为和动作的规范，对批量方法进行约束

```ts
//就是传入对象的约束    属性接口
interface FullName {
  firstName: string; //注意;结束
  secondName: string;
}

function printName(name: FullName) {
  // 必须传入对象  firstName  secondName
  console.log(name.firstName + "--" + name.secondName);
}
// printName('1213');  //错误

var obj = {
  /*传入的参数必须包含 firstName  secondName*/

  age: 20,
  firstName: "张",
  secondName: "三"
};
printName(obj);
```

- 以上写法与多写无关，若`printName({})`则必须按照标准来写（与顺序无关）

### 6.2、定义 ajax 接口

```ts
$.ajax({
  type: "GET",
  url: "test.json",
  data: { username: $("#username").val(), content: $("#content").val() },
  dataType: "json"
});

//配置方法
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}

//原生js封装的ajax
function ajax(config: Config) {
  var xhr = new XMLHttpRequest();

  xhr.open(config.type, config.url, true);

  xhr.send(config.data);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("chengong");

      if (config.dataType == "json") {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}

ajax({
  type: "get",
  data: "name=zhangsan",
  url: "http://a.itying.com/api/productlist", //api
  dataType: "json"
});
```

### 6.3、可索引接口，类型接口

可索引接口：数组、对象的约束 （不常用）

#### 6.3.1、可索引接口 对数组的约束

```ts
//可索引接口 对数组的约束
interface UserArr {
  [index: number]: string; //数组的下标必须为number
}

// var arr:UserArr=['aaa','bbb'];

// console.log(arr[0]);

var arr: UserArr = [123, "bbb"]; /*错误*/

console.log(arr[0]);
```

#### 6.3.2、可索引接口 对对象的约束

```ts
interface UserObj {
  [index: string]: string;
}

var arr: UserObj = { name: "张三" };
```

#### 6.3.3、类类型接口

类类型接口:对类的约束 和 抽象类抽象有点相似

- 使用方式 不是单纯的规定类型，使用 implements 进行约束

```ts
interface Animal {
  name: string;
  eat(str: string): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}

var d = new Dog("小黑");
d.eat();

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string) {
    console.log(this.name + "吃" + food);
  }
}

var c = new Cat("小花");
c.eat("老鼠");
```

### 6.4、接口扩展

- 接口扩展：接口可以继承接口

使用方式(继承之后必须两个属性和方法都需要有方法参数可传可不传)

```ts
interface Animal {
  eat(): void;
}

interface Person extends Animal {
  work(): void;
}

class Web implements Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name + "喜欢吃馒头");
  }
  work() {
    console.log(this.name + "写代码");
  }
}

var w = new Web("小李");

w.eat();
```

### 6.5、接口继承并约束

接口实现继承并对其进行扩展接口约束

```ts
interface Animal {
  eat(): void;
}

interface Person extends Animal {
  work(): void;
}

class Programmer {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  coding(code: string) {
    console.log(this.name + code);
  }
}

class Web extends Programmer implements Person {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(this.name + "喜欢吃馒头");
  }
  work() {
    console.log(this.name + "写代码");
  }
}
var w = new Web("小李");
// w.eat();
w.coding("写ts代码");
```

- 其中接口 Person 扩展了 Animal，类 Web 继承了 Programmer 并使用了扩展接口 Person 进行约束

## 七、泛型

### 7.1、泛型定义

泛型：软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像 C#和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

- 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)

举例来说同时返回 string 类型 和 number 类型 （代码冗余）

```ts
function getData1(value: string): string {
  return value;
}

function getData2(value: number): number {
  return value;
}
```

同时返回 string 类型 和 number 类型 , any 可以解决这个问题
然尔 any 放弃了类型检查,传入什么 返回什么。比如:传入 number 类型必须返回 number 类型 传入 string 类型必须返回 string 类型

- 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一直

T 表示泛型，具体什么类型是调用这个方法的时候决定的

使用方法

```ts
//函数getData的参数和返回必须为同一个数据类型
function getData<T>(value: T): T {
  return value;
}
getData<number>(123);

getData<string>("1214231"); //规定什么数据类型就需要返回什么数据类型

getData<number>("2112"); /*错误的写法*/
```

### 7.2、泛型类(含 demo)

泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a - z 两种类型。 通过类的泛型来实现

```ts
//类的泛型;

class MinClas<T> {
  public list: T[] = [];

  add(value: T): void {
    this.list.push(value);
  }

  min(): T {
    var minNum = this.list[0];
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

var m1 = new MinClas<number>(); /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11);
m1.add(3);
m1.add(2);
alert(m1.min());

var m2 = new MinClas<string>(); /*实例化类 并且制定了类的T代表的类型是string*/
m2.add("c");
m2.add("a");
m2.add("v");
alert(m2.min());
```

### 7.3、泛型接口

(感觉用的不多，函数中可以直接使用泛型)

使用方法

```ts
//方法一
interface ConfigFn {
  <T>(value: T): T;
}

var getData: ConfigFn = function<T>(value: T): T {
  return value;
};

getData<string>("张三");

getData<string>(1243); //错误

//方法二
interface ConfigFn<T> {
  (value: T): T;
}

function getData<T>(value: T): T {
  return value;
}

var myGetData: ConfigFn<string> = getData;

myGetData("20"); /*正确*/

// myGetData(20)  //错误
```

### 7.4、泛类（用的很多 含 demo）

泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类
1、定义个类
2、把类作为参数来约束数据传入的类型

使用 demo

```ts
/*
定义一个User的类这个类的作用就是映射数据库字段
然后定义一个 MysqlDb的类这个类用于操作数据库
然后把User类作为参数传入到MysqlDb中

var user=new User({
    username:'张三',
    password:'123456'
})

var Db=new MysqlDb();
Db.add(user);
*/

//使用。(此方法复用性不强) 要添加文章类时需要对MysqlDb重写
class User {
  username: string | undefined;
  password: string | undefined;
}
class MysqlDb<User> {
  add(user: User): blooean {
    return true;
  }
}
var user = new User({
  username: "张三",
  password: "123456"
});

var Db = new MysqlDb();
Db.add(user);

//解决方案 使用泛型类

//定义操作数据库的泛型类
class MysqlDb<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  updated(info: T, id: number): boolean {
    console.log(info);

    console.log(id);

    return true;
  }
}
//想给User表增加数据

//1、定义一个User类 和数据库进行映射

class User {
  username: string | undefined;
  pasword: string | undefined;
}
var u = new User();
u.username = "张三";
u.pasword = "123456";
var Db = new MysqlDb<User>();
Db.add(u);
//2、想给ArticleCate增加数据  定义一个ArticleCate类 和数据库进行映射
class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;

  //构造函数中传入值，多个值时需要使用对象来接收以备调用
  constructor(params: {
    title: string | undefined;
    desc: string | undefined;
    status?: number | undefined;
  }) {
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
}
//增加操作
var a = new ArticleCate({
  title: "分类",
  desc: "1111",
  status: 1
});

//类当做参数的泛型类
var Db = new MysqlDb<ArticleCate>();
Db.add(a);

//修改数据
var a = new ArticleCate({
  title: "分类111",
  desc: "2222"
});

a.status = 0;
var Db = new MysqlDb<ArticleCate>();
Db.updated(a, 12);
```

### 7.5 综合应用（数据库 demo）

结合类、类型、泛型、接口、实现对多种数据库的封装

功能：定义一个操作数据库的库 支持 Mysql Mssql MongoDb

要求 1：Mysql MsSql MongoDb 功能一样 都有 add update delete get 方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、

实现

```ts
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}
//定义一个操作mysql数据库的类       注意：要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log(info);

    return true;
  }

  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      },
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      }
    ];

    return list;
  }
}

//定义一个操作mssql数据库的类
class MsSqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      },
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      }
    ];

    return list;
  }
}
//操作用户表   定义一个User类和数据表做映射
/*

class User{
    username:string | undefined;
    password:string | undefined;
}


var u=new User();
u.username='张三111';
u.password='123456';


var oMysql=new MysqlDb<User>(); //类作为参数来约束数据传入的类型 
oMysql.add(u);

*/
class User {
  username: string | undefined;
  password: string | undefined;
}

var u = new User();
u.username = "张三2222";
u.password = "123456";

var oMssql = new MsSqlDb<User>();
oMssql.add(u);

//获取User表 ID=4的数据
var data = oMssql.get(4);
console.log(data);
```

## 八、模块

### 8.1 模块的的概念

模块的的概念（官方）:

关于术语的一点说明: 请务必注意一点，TypeScript 1.5 里术语名已经发生了变化。 “内部模块”现在称做“命名空间”。
“外部模块”现在则简称为“模块” 模块在其自身的作用域里执行，而不是在全局作用域里；
这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用 export 形式之一导出它们。
相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import 形式之一。

模块的概念（自己理解）：

我们可以把一些公共的功能单独抽离成一个文件作为一个模块。
模块里面的变量 函数 类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），
我们需要通过 export 暴露模块里面的数据（变量、函数、类...）。
暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。

### 8.2 模块导出的几种方法

使用 export 声明 也可以在末尾同一导出

```ts
export function getData(): any[] {
  console.log("获取数据库的数据111");
  return [
    {
      title: "121312"
    },
    {
      title: "121312"
    }
  ];
}
export function save() {
  console.log("保存数据成功");
}

//或者统一导出 不用加括号
export { getData, save };

//导入
import { getData, save } from "路径";
```

export default 默认导出

每个模块都可以有一个 default 导出。 默认导出使用 default 关键字标记；并且一个模块只能够有一个 default 导出。 需要使用一种特殊的导入形式来导入 default 导出。

```ts
function getData(): any[] {
  console.log("获取数据库的数据");

  return [
    {
      title: "121312"
    },
    {
      title: "121312"
    }
  ];
}
export default getData;
//在引入的时候只能直接引入
import getData from '路径;
```

### 8.3 模块化封装（demo）

模块化封装上一讲的 DB 库

功能：定义一个操作数据库的库 支持 Mysql Mssql MongoDb

要求 1：Mysql MsSql MongoDb 功能一样 都有 add update delete get 方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、

思路：数据库进行模块化，将用户和文章都进行模块化

index.ts

```ts
import { UserClass, UserModel } from "./model/user";

import { ArticleClass, ArticleModel } from "./model/article";

//增加数据
var u = new UserClass();
u.username = "张三";
u.password = "12345655654757";
UserModel.add(u);

//获取user表数据
var res = UserModel.get(123);
console.log(res);

//获取文章表的数据
var aRes = ArticleModel.get(1);
console.log(aRes);
```

modules/db.ts

```ts
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

//定义一个操作mysql数据库的类       注意：要实现泛型接口 这个类也应该是一个泛型类

export class MysqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log(info);

    return true;
  }

  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      },
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      }
    ];

    return list;
  }
}

//定义一个操作mssql数据库的类

export class MsSqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      },
      {
        title: "xxxx",
        desc: "xxxxxxxxxx"
      }
    ];

    return list;
  }
}
```

model/user.ts

```ts
import { MsSqlDb } from "../modules/db";

//定义数据库的映射
class UserClass {
  username: string | undefined;
  password: string | undefined;
}

var UserModel = new MsSqlDb<UserClass>();
export { UserClass, UserModel };
```

model/article.ts

```ts
import { MsSqlDb } from "../modules/db";

//定义数据库的映射
class ArticleClass {
  title: string | undefined;
  desc: string | undefined;
}

var ArticleModel = new MsSqlDb<ArticleClass>();
export { ArticleClass, ArticleModel };
```

## 九、命名空间

命名空间:

在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内

同 Java 的包、.Net 的命名空间一样，TypeScript 的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过 export 关键字对外暴露。

命名空间和模块的区别：

命名空间：内部模块，主要用于组织代码，避免命名冲突。

模 块：ts 的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

使用方法 :可以理解成类，进行点操作获取不同的命名空间的方法，如果要导出也需要导出（export）申明

```ts
//如果要在外部引用需要进行导出
//使用方法
/*
import {A,B} from './modules/animal';


var d=new A.Dog('小黑');
d.eat();
*/

export namespace A {
  interface Animal {
    name: string;
    eat(): void;
  }
  export class Dog implements Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }

    eat() {
      console.log(`${this.name} 在吃狗粮。`);
    }
  }

  export class Cat implements Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }

    eat() {
      console.log(`${this.name} 吃猫粮。`);
    }
  }
}

namespace B {
  interface Animal {
    name: string;
    eat(): void;
  }
  export class Dog implements Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }

    eat() {
      console.log(`${this.name} 在吃狗粮。`);
    }
  }

  export class Cat implements Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }

    eat() {
      console.log(`${this.name} 在吃猫粮。`);
    }
  }
}

var c = new B.Cat("小花");

c.eat();
```

## 十、装饰器

装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

装饰器是过去几年中 js 最大的成就之一，已是 Es7 的标准特性之一

### 10.1 类装饰器

类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 传入一个参数

无法传参（不怎么使用）

使用方法

```ts
function logClass(params: any) {
  console.log(params);
  // params 就是当前类
  params.prototype.apiUrl = "动态扩展的属性";
  params.prototype.run = function() {
    console.log("我是一个run方法");
  };
}

@logClass
class HttpClient {
  constructor() {}
  getData() {}
}
var http: any = new HttpClient();
console.log(http.apiUrl);
http.run();
```

含有参数的的类装饰器（经常使用）:装饰器工厂（可传参）

使用方法

```ts
function logClass(params: string) {
  //固定写法，参数为构造函数
  return function(target: any) {
    console.log(target); //构造函数
    console.log(params); //接收的参数
    target.prototype.apiUrl = params; //在原型链上扩展属性
  };
}

@logClass("http://www.xxx.com/")
class HttpClient {
  constructor() {}

  getData() {}
}

var http: any = new HttpClient();
console.log(http.apiUrl);
```

下面是一个重载构造函数的例子。
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。

如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

```ts
function logClass(target: any) {
  console.log(target);
  return class extends target {
    apiUrl: any = "我是修改后的数据";
    getData() {
      this.apiUrl = this.apiUrl + "----";
      console.log(this.apiUrl);
    }
  };
}

@logClass()
class HttpClient {
  public apiUrl: string | undefined;
  constructor() {
    this.apiUrl = "我是构造函数里面的apiUrl";
  }
  getData() {
    console.log(this.apiUrl);
  }
}

var http = new HttpClient();
http.getData(); //我是修改后的数据----;
```

### 10.2 属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列 2 个参数：
1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2、成员的名字。

使用方法

```ts
function logProperty(params: any) {
  return function(target: any, attr: any) {
    console.log(target);
    console.log(attr); //装饰的属性 url
    target[attr] = params;
  };
}
class HttpClient {
  @logProperty("http://itying.com")
  public url: any | undefined;
  constructor() {}
  getData() {
    console.log(this.url);
  }
}
var http = new HttpClient();
http.getData();
```

### 10.3、方法装饰器

它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

方法装饰会在运行时传入下列 3 个参数：
1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2、成员的名字。
3、成员的属性描述符。

使用方法

```ts
//方法装饰器一

function get(params: any) {
  return function(target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName); //方法名称
    console.log(desc); //方法描述
    target.apiUrl = "xxxx";
    target.run = function() {
      console.log("run");
    };
  };
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  @get("http://www.xxx.com")
  getData() {
    console.log(this.url);
  }
}

var http: any = new HttpClient();
console.log(http.apiUrl);
http.run();

//方法装饰器二
function get(params: any) {
  return function(target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName);
    console.log(desc.value); //方法的内容

    //修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型

    //1、保存当前的方法

    var oMethod = desc.value;
    desc.value = function(...args: any[]) {
      args = args.map(value => {
        return String(value);
      });
      oMethod.apply(this, args); //this指向方法本身
    };
  };
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  @get("http://www.xxx.com")
  getData(...args: any[]) {
    console.log(args);
    console.log("我是getData里面的方法");
  }
}

var http = new HttpClient();
http.getData(123, "xxx"); //修改数据为string类型
```

### 10.4、方法参数装饰器 （不常用）

参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据 ，传入下列 3 个参数：

1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2、方法的名字。
3、参数在函数参数列表中的索引。

```ts
function logParams(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    console.log(params);

    console.log(target);

    console.log(methodName);

    console.log(paramsIndex);

    target.apiUrl = params;
  };
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  getData(@logParams("xxxxx") uuid: any) {
    console.log(uuid);
  }
}

var http: any = new HttpClient();
http.getData(123456);
console.log(http.apiUrl);
```

### 10.5 执行顺序

属性 >>>方法>>>方法参数>>>类

如果有多个同样的装饰器，它会先执行后面的

示例

```ts
function logClass1(params: string) {
  return function(target: any) {
    console.log("类装饰器1");
  };
}

function logClass2(params: string) {
  return function(target: any) {
    console.log("类装饰器2");
  };
}

function logAttribute1(params?: string) {
  return function(target: any, attrName: any) {
    console.log("属性装饰器1");
  };
}

function logAttribute2(params?: string) {
  return function(target: any, attrName: any) {
    console.log("属性装饰器2");
  };
}

function logMethod1(params?: string) {
  return function(target: any, attrName: any, desc: any) {
    console.log("方法装饰器1");
  };
}
function logMethod2(params?: string) {
  return function(target: any, attrName: any, desc: any) {
    console.log("方法装饰器2");
  };
}

function logParams1(params?: string) {
  return function(target: any, attrName: any, desc: any) {
    console.log("方法参数装饰器1");
  };
}

function logParams2(params?: string) {
  return function(target: any, attrName: any, desc: any) {
    console.log("方法参数装饰器2");
  };
}

@logClass1("http://www.xxx.com/api")
@logClass2("xxxx")
class HttpClient {
  @logAttribute1()
  @logAttribute2()
  public apiUrl: string | undefined;
  constructor() {}

  @logMethod1()
  @logMethod2()
  getData() {
    return true;
  }

  setData(@logParams1() attr1: any, @logParams2() attr2: any) {}
}

var http: any = new HttpClient();

//打印顺序
属性装饰器2
属性装饰器1
方法装饰器2
方法装饰器1
方法参数装饰器2
方法参数装饰器1
类装饰器2
类装饰器1
```
