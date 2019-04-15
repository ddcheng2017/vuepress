# 自定义滚动条

## 在页面中自定义滚动条（使用js）以下三个代码分别为是html、css、和js代码

```html
<div id="main">
  <div id="con">
    内容部分
  </div>
  <!-- 自定义的滚动条 -->
  <div id="scroll">
    <!-- 滚动条中的滑块 -->
    <div class="scrollbar"></div>
  </div>
</div>
```

```css
/* 设置自定义的样式 */
#main{
  position: relative;
  width: 800px;
  height: 600px;
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #dddddd;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#con{
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.1);
  width: 90%;
  color: #000000;
  border: 1px solid #dddddd;
  padding: 5%;
}
#con p{
  font-size: 16px;
  line-height: 40px;
}
#scroll{
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 100%;
  border-radius: 10px;
}
#scroll .scrollbar{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0,0,0,.3);
}
```

```js
//bar长度设置，
(function () {
  var h_ = 40;//滚动一次的距离，像素值
  var oMain = id("main"),//大盒子
    oCon = id("con"),//内容部分
    oScroll = id("scroll"),//滚动条部分
    oBar = oScroll.getElementsByTagName("div")[0];//滚动条的bar
  var sumHeight = oMain.clientHeight;//可视区域的总高度
  var scrollHeight = oCon.scrollHeight;//内容部分可以滚动的总高度
  var scrollTop = oMain.offsetTop;//大盒子距离文档最上方的距离
  if (sumHeight < scrollHeight) {
    var barHeight = sumHeight * sumHeight / scrollHeight;
    oBar.style.height = barHeight + "px";
  } else return;

  var maxHeight = sumHeight - barHeight;
  //添加鼠标点击的事件
  oBar.onmousedown = function (e) {
    e.stopPropagation();
    e.cancelBubble = true;
    e = e || window.event;
    var sT = this.offsetTop;
    var y = e.clientY;
    document.onmousemove = function (e) {
      e = e || window.event;
      //设置bra的高度；
      var barTop = sT + e.clientY - y;
      setTop(barTop)
    };
    document.onmouseup = function () {
      this.onmousemove = null;
    };
  };

  //使用onmousedown而不使用click，bar的阻止冒泡，防止拖拽事件结束后滚动条改百年位置的bug;
  oScroll.onmousedown = function (e) {
    e = e || window.event;
    var offsetTop = e.clientY - scrollTop;
    setTop(offsetTop - barHeight / 2);
  };

  //设置高度变化的函数
  function setTop(barTop) {
    barTop = Math.min(barTop, maxHeight);
    barTop = Math.max(barTop, 0);
    oBar.style.top = barTop + "px";

    //设置从con内容的高度
    var conHeight = barTop * scrollHeight / sumHeight;
    oCon.style.top = -conHeight + "px";
  }

  //使用方法d<0则滚轮向下滚动
  mousewheel(oMain, function (e, d) {
    var t_ = -d * h_;
    var sT = oBar.offsetTop;
    setTop(sT + t_);
    return false
  });
})();


function id(id) {
  return document.getElementById(id);
}

//滚轮事件的兼容
function mousewheel(obj, Fn) {
  function eFn(e) {
    e = e || window.event;
    //对火狐和其他进行兼容
    if (Fn.call(this, e, e.wheelDelta / 120 || -e.detail / 3) === false) {
      e.preventDefault && e.preventDefault();
      e.returnValue = false;
    }
  }
  //判断浏览器是否兼容滚轮事件
  if (document.onmousewheel !== undefined) {
    //对事件监听进行兼容
    obj.addEventListener ? obj.addEventListener("mousewheel", eFn, false) : obj.attachEvent("onmousewheel", eFn);
  } else {
    obj.addEventListener('DOMMouseScroll', eFn, false);
  }
}
```

## 还有一种方法修改浏览器的默认样式（比较简单，兼容性也比较好）（来自[30秒的css](https://30-seconds.github.io/30-seconds-of-css/)）

```html
<div class="custom-scrollbar">
  <p>
  <!-- 内容区域 -->
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
    Iure id exercitationem nulla qui repellat laborum vitae, <br />
    molestias tempora velit natus. Quas, assumenda nisi. <br />
    Quisquam enim qui iure, consequatur velit sit?
  </p>
</div>
```

```css
.custom-scrollbar {
  height: 70px;
  overflow-y: scroll;
}
/* To style the document scrollbar, remove `.custom-scrollbar` */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
```
* 更多滚动条样式访问[WebKit博客](https://webkit.org/blog/363/styling-scrollbars/)

demo:

### Explanation

1. ::-webkit-scrollbar 以整个滚动条元素为目标。（整个滚动条）
2. ::-webkit-scrollbar-track 仅定位滚动条轨道。（轨道）
3. ::-webkit-scrollbar-thumb 以滚动条拇指为目标。(滑块)
