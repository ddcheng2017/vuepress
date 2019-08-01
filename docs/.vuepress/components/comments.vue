<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: "Valine",
  mounted: function() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "FW5CcvacbvrSTlasMwTtcv3q-gzGzoHsz", // your appId
      appKey: "wxV4JK6juAEI3xFXDdp5qcuS", // your appKey
      notify: false,
      verify: false,
      avatar: "mm",
      placeholder: "just go go",
      visitor: true, // 阅读量统计
      path: window.location.pathname, //(默认值，推荐) 当前文章页路径，用于区分不同的文章页，以保证正确读取该文章页下的评论列表。
    });
  }
};
</script>