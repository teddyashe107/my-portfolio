<script setup>
const props = defineProps({
  isVertical: {
    type: Boolean,
    default: false,
  },
});
const icon = [
  {
    name: "mail",
    link: "mailto:teddyashe107@gmail.com",
  },
  {
    name: "logo-linkedin",
    link: "https://linkedin.com/in/teddy-ashenafi",
  },
  {
    name: "logo-github",
    link: "https://github.com/teddyashe107",
  },
  {
    name: "logo-twitter",
    link: "https://twitter.com/_tedhub",
  },
  {
    name: "logo-youtube",
    link: "https://www.youtube.com/channel/UCq6RSZYrwust1iGPFAkR1eg",
  },
];
</script>

<template>
  <div class="flex justify-center mt-8 sm:justify-end sm:col-span-3">
    <div class="text-2xl sm:text-3xl">
      <div
        class="flex flex-row items-center space-x-2"
        :class="
          props.isVertical ? 'sm:flex sm:flex-col sm:space-y-2 sm:-mt-8' : ''
        "
      >
        <div
          class="h-1 bg-white w-14"
          :class="props.isVertical ? 'sm:w-1 sm:h-20' : ''"
        ></div>

        <a
          v-for="(item, index) in icon"
          :key="index"
          :href="item.link"
          target="_blank"
          class="hover:text-pink-700"
        >
          <ion-icon :name="item.name"></ion-icon>
        </a>

        <div
          class="h-1 bg-white w-14"
          :class="props.isVertical ? 'sm:w-1 sm:h-20' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ion-icon {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;

  outline: none;
  border: none;
}

ion-icon:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
