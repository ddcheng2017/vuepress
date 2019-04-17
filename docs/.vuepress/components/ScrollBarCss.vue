<template>
  <div class="custom-scrollbar">
    <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.</br>
      Iure id exercitationem nulla qui repellat laborum vitae, </br>
      molestias tempora velit natus. Quas, assumenda nisi. </br>
      Quisquam enim qui iure, consequatur velit sit?
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
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
</style>

