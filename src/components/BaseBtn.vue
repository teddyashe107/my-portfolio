<script setup>
</script>
<template>
  <a
    class="mt-4 font-semibold sm:p-6 sm:text-center sm:self-center"
    href="mailto:teddyashe107@gmail.com"
  >
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;

  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

a::before {
  content: "";
  z-index: -1;
  position: absolute;
  bottom: 100%;
  right: 100%;
  width: 2em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

a:hover {
  cursor: pointer;
  color: #161616;
}

a:hover::before {
  transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
}
</style>