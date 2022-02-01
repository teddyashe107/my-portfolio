<script setup>
</script>


<template>
  <router-view />
</template>

<style >
#app {
  -webkit-font-smoothing: antialiased;
}

span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #449220;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}

html {
  scroll-behavior: smooth;
  overflow-y: scroll;
}
</style>
