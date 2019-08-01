# 移动端rem的js控制

* 在开发移动端时需要对像素进行控制，使用js来监控设备大小并相应改变文字大小

PX特点

1. IE无法调整那些使用px作为单位的字体大小；
2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；
3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。

px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。(引自CSS2.0手册)

em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。(引自CSS2.0手册)

任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。

EM特点(不建议使用)

1. em的值并不是固定的；
2. em会继承父级元素的字体大小。

所以我们在写CSS的时候，需要注意两点：

1. body选择器中声明Font-size=62.5%；
2. 将你的原来的px数值除以10，然后换上em作为单位；
3. 重新计算那些被放大的字体的em数值。避免字体大小的重复声明。

rem特点 （建议使用）

`rem`是CSS3新增的一个相对单位（`root em`，根`em`），这个单位引起了广泛关注。这个单位与`em`有什么区别呢？区别在于使用`rem`为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。

    p {font-size:14px; font-size:.875rem;}

下面的js代码可以监控页面的宽度经行变化

```js
//界面尺寸修正
var oBody = document.documentElement || document.body,//进行兼容
  resize = "onorientationchange" in window ? "orientationchange" : "resize"; //进行兼容
rem();
addEventListener(resize, rem, false);
function rem() {
  /*doc.body.clientWidth是获取当前的body的宽度，750是我们的移动端的最大宽度，相除就会得出一个比例，在乘以100px，就会得出我们当前的1rem等于多少px*/
  oBody.style.fontSize = 100 * (document.body.clientWidth / 750) + "px";  //一般移动端为750px，此处一750为准
  console.log(oBody.style.fontSize);
}
```

* 此代码需要放在一开始的地方，如果页面宽度为750px，则1rem = 100px， 默认body字体大小为100px，其余大小按照比例缩小即可。

<comments />