# js判断浏览器的信息

浏览器的类型保存在字段navigator.userAgent中，对他进行判断即可[参考连接](https://www.cnblogs.com/hailexuexi/p/6908141.html)

## 1、对IE以及版本进行判断。

```js
function ieVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6;//IE版本<=7
    }
  } else if (isEdge) {
    return 'edge';//edge
  } else if (isIE11) {
    return 11; //IE11  
  } else {
    return -1;//不是ie浏览器
  }
}
```

* 使用后的返回值

值|类型|说明
| ------ | ------ | ------ |
-1|Number|不是ie浏览器
6|Number|ie版本<=6
7|Number|ie7
8|Number|ie8
9|Number|ie9
10|Number|ie10
11|Number|ie11
'edge'|String|ie的edge浏览器

## 2、对于浏览器的判断（不含具体版本号）

```js
function browserInfo() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  if (userAgent.indexOf("Opera") > -1) {
    return "Opera"
  }; //判断是否Opera浏览器
  if (userAgent.indexOf("Maxthon") > -1) {
    return "Opera"
  }; //判断是否遨游浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } //判断是否Firefox浏览器
  if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1) {
    return "Chrome";
  }
  if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1) {
    return "Safari";
  } //判断是否Safari浏览器
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
    return "IE";
  }; //判断是否IE浏览器
  if (userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE) {
    return "Edge ";
  }; //判断是否IE的Edge浏览器
}
```

## 3、还有一个比较全面的判断（条件有限未测试其中部分）

```js
var browser = {
  ua: function () {
    var u = navigator.userAgent;
    var u2 = navigator.userAgent.toLowerCase();

    var isChrome = u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/);
    var isAndroid = u.match(/(Android);?[\s\/]+([\d.]+)?/);
    var iosVersion = function () {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      }
    }();
    var chromeVersion = function () {
      var chrome = (navigator.userAgent).match(/Chrome\/(\d+)\./);
      if (chrome) {
        return parseInt(chrome[1], 10);
      }
    }();

    return { //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u2.match(/MicroMessenger/i) == "micromessenger",//是否微信
      UC: u.indexOf('UCBrowser'),
      chrome: u.indexOf('Chrome') > -1,
      windowsPhone: u.indexOf('Windows Phone') > -1,
      samsung: u.indexOf('Samsung') > -1,
      QQ: u.match(/\sQQ/i) != null ? u.match(/\sQQ/i).toLowerCase() == "qq" : false,
      isChrome: isChrome,
      isAndroid: isAndroid,
      iosVersion: iosVersion,
      chromeVersion: chromeVersion
    };
  }()
}
```

* browser.ua返回值为当前浏览器信息。可进行后一步的判断