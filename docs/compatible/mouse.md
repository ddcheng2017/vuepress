# 鼠标滚轮在各浏览器上的兼容问题

每次在写鼠标滚轮事件的时候都要写很多的兼容。或者使用[mousewhell.js](https://www.bootcdn.cn/jquery-mousewheel/)插件，还是比较方便的，可是有时候并不想用那么多方法，只想简单的使用滚轮，总结了一写使用js将滚轮事件的一些兼容问题解决。使用方法和代码如下。

```js
//滚轮事件的兼容
function mousewheel(obj, Fn) {
  function eFn(e) {
    e = e || window.event;
    //对火狐和其他进行兼容（向下滚：火狐为3，其他为-120；向上滚相反；）
    if (Fn.call(this, e, e.wheelDelta / 120 || -e.detail / 3) === false) {
      //组织默认事件，对于自定义滚动条的时候需要组织浏览器默认滚动事件。
      e.preventDefault && e.preventDefault();
      e.returnValue = false;
    }
  }
  //判断浏览器是否兼容滚轮事件（支持时为Null不支持时为undefined,此处判断是否为undefined）
  if (document.onmousewheel !== undefined) {
    //对事件监听进行兼容(此处针对滚轮事件)
    obj.addEventListener ? obj.addEventListener("mousewheel", eFn, false) : obj.attachEvent("onmousewheel", eFn);
  } else {
    //针对火狐（监听事件的兼容）
    obj.addEventListener('DOMMouseScroll', eFn, false);
  }
}
```

到这里基本就完成了，此时的d为-1时为鼠标向下滚动，d为+1时鼠标为向上滚动。
下面是使用时的方法：

```js
mousewheel( obj , function (e,d) {
  var flag = d < 0?"下":"上";
  console.log(flag)
  return false;//正对自定义滚动条的阻止默认事件，如果不需要可以不写（自定义滚动条时会用到。）
});
```
