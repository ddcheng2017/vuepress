# 选中 div 中的所有文字

- 使用方法获取 id，执行函数即可

```js
<div id="aa">
  xxxxxxxxxxxxxx<br />
  xxxxxxxxxxxxxx<br />
  xxxxxxxxxxxxxx<br />
  xxxxxxxxxxxxxx<br />
</div>
aaaaaaaaaaaaaaaaa
<script type="text/javascript">
function selectText(element) {
  var text = document.getElementById(element);
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    /*if(selection.setBaseAndExtent){
        selection.setBaseAndExtent(text, 0, text, 1);
    }*/
  } else {
    alert("none");
  }
}
selectText("aa");
</script>
```
