# js中的时间问题

## 1、js中时间的基本用法完整方法可以[参考W3School](http://www.w3school.com.cn/jsref/jsref_obj_date.asp)  （记录当时：时间为2019年4月26日下午9点45）

```js
var myDate = new Date();//获取系统当前时间   形如Fri Apr 26 2019 21:47:15 GMT+0800 (中国标准时间)

myDate.getYear(); //获取当前年份(2-3位)  119距离1970年119年
myDate.getFullYear(); //获取完整的年份(4位,1970-????)   2019
myDate.getMonth(); //获取当前月份(0-11,0代表1月)  3 月份小一个月
myDate.getDate(); //获取当前日(1-31)
myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)  1556286616820毫秒数
myDate.getHours(); //获取当前小时数(0-23)
myDate.getMinutes(); //获取当前分钟数(0-59)
myDate.getSeconds(); //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString(); //获取当前日期    形如2019/4/26
var mytime=myDate.toLocaleTimeString(); //获取当前时间    形如下午9:45:31
myDate.toLocaleString( ); //获取日期与时间    形如2019/4/26 下午9:46:03
```

## 2、JS获取当前时间戳的方法

```js
var timestamp = (new Date()).valueOf();
//或者 获得的时距离1970年1月1日的毫秒数
var timestamp = new Date().getTime();
```

* 如果要比较时间的先后可以比较毫秒数`myDate.getTime()`或者`(new Date()).valueOf()`的大小进行判断先后也可以直接比较;

## 3、js中设置一段时间

```js
function GetDateStr(AddDayCount) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
  var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0
  return y + "-" + m + "-" + d;  //此处可以改变输出格式
}
```

* 注：setDate() 方法用于设置一个月的某一天。用法：dateObject.setDate(day)day必需。表示一个月中的一天的一个数值（1 ~ 31）。返回值：调整过的日期的毫秒表示

使用方法指定需要改变的日期即可输出格式形如 2019-07-25

```js
GetDateStr(1) //一天后
GetDateStr(-1) //一天前
GetDateStr(100) //一百天后
GetDateStr(-100) //一百天前
GetDateStr(365)  //一年后
GetDateStr(-365)  //一年前
```

## 4、js设置指定时间

* new Date('yyyy-MM-dd HH:mm:ss') 不是所有的浏览器都支持。实际上，new Date（）支持的浏览器兼容格式大致有以下几种：

```js
new Date('2011-01-07 12:34:34')
new Date(2011, 01, 07); // yyyy, mm-1, dd  
new Date(2011, 01, 07, 11, 05, 00); // yyyy, mm-1, dd, hh, mm, ss  
new Date("02/07/2011"); // "mm/dd/yyyy"  
new Date("02/07/2011 11:05:00"); // "mm/dd/yyyy hh:mm:ss"  
new Date(1297076700000); // milliseconds  
new Date("Mon Feb 07 2011 11:05:00 GMT"); // ""Day Mon dd yyyy hh:mm:ss GMT/UTC
```

* 以上几种方式都是可以进行设置的

<comments />