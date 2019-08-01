# 使用js动态为锚点添加动画(这里使用jq为了方便)

* html中a标签进行锚点绑定

```html
<a href="#home" class="page-scroll">Home</a>
```

* js中通过点击事件添加动画

```js
$("a.page-scroll").click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 40 //这里控制滚动高度差距离页面顶端
      }, 900);
      return false;
    }
  }
});
```

<comments />