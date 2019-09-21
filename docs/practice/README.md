# 一句话总结

## 1、未定义的变量会报错，但对象下的未定义属性不会报错

## 2、var 声明的变量不赋值为undefined，const声明必须赋值否则会报错

## 3、对象中`.`作为取值时可以用`[]`代替

## 4、JavaScript是一门面向对象的语言

## 5、可以使用JSON.stringify(object,null,2)对字符串转换成json进行格式化，最后一个参数表示缩进。否则会显示一行

## 6、一般想到数字的字符串排序方法 我们会用到 `var newArr = arr. sort(function(a,b){return a - b})`来进行排序，但除此之外我们会需要进行一些字符串的排序 此时我们可以用到 `var newArr = arr.sort(function(a,b){return a.localeCompare(b)})`来进行排序，但中文排序时发现不是我们想要的  可以通过加参数的方法  a.localeCompare(b,'zh-CN')这样就ojbk了
