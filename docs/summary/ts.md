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

```js
//es5 的写法 （正确写法） ts 中（错误写法）
var flag = true;

flag = 456;
```

- typescript 中为了使编写的代码更规范，更有利于维护，增加了类型校验写 ts 代码必须指定类型

```js
var flag: boolean = true;
flag = 123; //错误
flag = false; //正确
```

### 2.2、数字类型（number）

```js
var num: number = 123;
num = 456;
console.log(num);
/正确/;
num = "str"; //错误
```

### 2.3、字符串类型(string)

```js
var str: string = "this is ts";
str = "haha"; //正确
str = true; //错误
```

### 2.4、数组类型（array）

ts 中定义数组有两种方式

```js
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

```js
//元祖类型
let arr: [number, string] = [123, "this is ts"]; //可以设置多种数据类型
console.log(arr);
```

### 2.6、枚举类型（enum）

随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称为枚举方法，用这种方法定义的类型称枚举类型。

格式（枚举名一般首字母大写）

```js
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

```js
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

```js
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

```js
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

```js
function run(): void {
  console.log("run");
}
run();
```

### 3.2、方法可选参数

es5 里面方法的实参和行参可以不一样，但是 ts 中必须一样，如果不一样就需要配置可选参数

使用`?`来指定是否需要

```js
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

```js
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

```js
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

```js
//参数必须为string和number类型 其余会报错
function getInfo(name:string):string;
function getInfo(age:number):string;
function getInfo(str:any):any{
    if(typeof str==='string'){
        return '我叫：'+str;
    }else{

        return '我的年龄是'+str;
    }

}

alert(getInfo('张三'));   //正确

alert(getInfo(20));   //正确

alert(getInfo(true));    //错误写法

//下面同理
function getInfo(name:string):string;
function getInfo(name:string,age:number):string;
function getInfo(name:any,age?:any):any{
    if(age){

        return '我叫：'+name+'我的年龄是'+age;
    }else{

        return '我叫：'+name;
    }
}

alert(getInfo('zhangsan'));  /*正确*/

alert(getInfo(123));  错误

alert(getInfo('zhangsan',20));
```

### 3.6、箭头函数 es6

this 指向的问题 箭头函数里面的 this 指向上下文 详细可[参照此篇](https://www.cnblogs.com/dongcanliang/p/7054176.html)

## 四、类 class（主要正对 ES5）

### 4.1、函数中最简单的类

```js
function Person() {
  this.name = "张三";
  this.age = 20;
}
var p = new Person();
alert(p.name); //张三
```

### 4.2、构造函数和原型链里面增加方法

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
 class Per{
    public name:string;
    public age:number=20;
    //静态属性

    static sex="男";
    constructor(name:string) {
            this.name=name;
    }
    run(){  /*实例方法*/

        alert(`${this.name}在运动`)
    }
    work(){

        alert(`${this.name}在工作`)
    }
    static print(){  /*静态方法  里面没法直接调用类里面的属性*/

        alert('print方法'+Per.sex);
    }
}

// var p=new Per('张三');

// p.run();

Per.print();

alert(Per.sex); //出错
```

### 5.7、多态

多态:父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现 （感觉没什么用）

```js
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

```js
//标准:

abstract class Animal{

    public name:string;
    constructor(name:string){

        this.name=name;

    }
    abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。

    run(){

        console.log('其他方法可以不实现')
    }
}


// var a=new Animal() /*错误的写法*/


class Dog extends Animal{

    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    eat(){

        console.log(this.name+'吃粮食')
    }
}

var d=new Dog('小花花');
d.eat();

class Cat extends Animal{

    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    run(){


    }
    eat(){

        console.log(this.name+'吃老鼠')
    }

}

var c=new Cat('小花猫');
c.eat();
```

## 六、接口

接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip 中的接口类似于 java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

定义标准。

### 6.1、属性接口 对 json 的约束

- 对批量方法传入参数进行约束
- 接口：行为和动作的规范，对批量方法进行约束

```js
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

```js
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