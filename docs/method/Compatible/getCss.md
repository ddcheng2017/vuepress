# 获取元素的样式

```js
function getCssJson(obj) {
    return obj.currentStyle || getComputedStyle(obj);
}
```

<comments />