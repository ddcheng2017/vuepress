<template>
  <div class="bg">
    <div class="main">
      <div class="logo">
        <img :src="imgUrl" alt />
      </div>
			<h4>梦想还是要有的，万一实现了呢~</h4>
      <div class="btn">
        <a href="home">点击进入</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .bg{
	width: 100%;
	height: 100%;
	background-color: red;
} */
.main {
  height: 400px;
  width: 400px;
  margin: 30px auto;
}
h4{
	text-align: center;
}
.theme-default-content:not(.custom) {
  max-width: 100% !important;
  margin: 0 auto;
  padding: 0 !important;
}
.logo {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 30px auto;
  border-radius: 50%;
  border: 2px solid rgba(36, 64, 139, 0.699);
  padding: 1rem;
}
.logo::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, 0.1); */
  border: 1px solid rgba(36, 64, 139, 0.699);
  border-radius: 50%;

  /* animation-name: myfirst;
  animation-duration: 5s;
  animation-iteration-count: infinite; */
  animation: myfirst 4s 2s infinite linear;
  -moz-animation: myfirst 4s 2s infinite linear; /* Firefox */
  -webkit-animation: myfirst 4s 2s infinite linear; /* Safari 和 Chrome */
  -o-animation: myfirst 4s 2s infinite linear; /* Opera */
}
.logo::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, 0.1); */
  border: 1px solid rgba(36, 64, 139, 0.699);
  border-radius: 50%;

  /* animation-name: myfirst;
  animation-duration: 5s;
  animation-iteration-count: infinite; */
  animation: myfirst 4s infinite linear;
  -moz-animation: myfirst 4s infinite linear; /* Firefox */
  -webkit-animation: myfirst 4s infinite linear; /* Safari 和 Chrome */
  -o-animation: myfirst 4s infinite linear; /* Opera */
}
/* 动画 */
@keyframes myfirst {
  from {
    width: 100%;
    height: 100%;
  }
  to {
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    opacity: 0;
    filter: alpha(opacity=0);
    -khtml-opacity: 0;
    opacity: 0;
  }
}
@-moz-keyframes myfirst /* Firefox */ {
  from {
    width: 100%;
    height: 100%;
  }
  to {
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    -moz-opacity: 0;
  }
}
@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  from {
    width: 100%;
    height: 100%;
  }
  to {
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    filter: alpha(opacity=0);
    -khtml-opacity: 0;
    opacity: 0;
  }
}
@-o-keyframes myfirst /* Opera */ {
  from {
    width: 100%;
    height: 100%;
  }
  to {
    width: 150%;
    height: 150%;
    left: -25%;
    top: -25%;
    filter: alpha(opacity=0);
    -khtml-opacity: 0;
    opacity: 0;
  }
}

.btn {
  width: 240px;
  height: 60px;
  margin: 50px auto;
  border-radius: 10px;
  border: 1px solid rgba(36, 64, 139, 0.699);
  text-align: center;
}
.btn:hover {
  background-color: rgba(36, 64, 139, 0.699);
}
.btn:hover a {
  color: #fff;
}
a {
  display: inline-block;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  text-align: center;
  line-height: 60px;
  text-decoration: none !important;
  color: black;
	font-size: 20px;
	font-family:'Courier New', Courier, monospace;
}
</style>
<script>
export default {
  data: function() {
    return {
      imgUrl: "img/logo.png"
    };
  }
};
</script>