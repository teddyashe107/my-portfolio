
<script setup>
const props = defineProps({
  image: String,
  title: String,
  sub_title: String,
  description: String,
  link: String,
});
</script>

<template>
  <div
    class="
      mt-8
      pb-8
      sm:max-w-sm sm:w-full sm:flex-shrink-0 sm:px-2
      lg:col-span-6
      xl:col-span-4
    "
  >
    <div class="max-w-3xl mx-auto">
      <div class="relative aspect-square text-white hover:text-lime-800">
        <img
          :src="props.image"
          class="
            absolute
            inset-0
            h-full
            content-left
            object-cover
            rounded-lg
            shadow-md
          "
          alt=""
        />
        <div
          class="
            absolute
            inset-0
            bg-gradient-to-br
            from-slate-600
            to-slate-900
            opacity-40
            rounded-xl
            hover:opacity-0 hover:z-0
          "
        ></div>
        <div
          class="
            inline-flex
            flex-shrink-0
            absolute
            top-5
            right-0
            px-3
            py-1
            rounded-full
          "
        >
          <a
            class="
              px-2
              text-4xl text-white
              hover:cursor-pointer hover:text-white
            "
            :href="props.link"
            target="_blank"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>

    <div class="relative -mt-14 px-4">
      <div
        class="
          p-4
          bg-white
          rounded-lg
          shadow-sm shadow-gray-400
          bg-opacity-80
          sm:h-40
        "
      >
        <div class="flex flex-wrap items-center space-x-2 space-y-1">
          <div
            class="
              inline-flex
              flex-shrink-0
              px-2
              rounded-full
              bg-gradient-to-tr
              from-lime-400
              to-lime-800
            "
          >
            <h1 class="font-semibold text-white whitespace-nowrap">
              {{ props.title }}
            </h1>
          </div>
          <div class="inline-flex flex-shrink-0 bg-gray-200 rounded-lg">
            <p class="px-2 text-sm font-semibold text-gray-800">
              {{ props.sub_title }}
            </p>
          </div>
          <div
            class="
              absolute
              right-10
              top-2
              text-rose-600
              hover:text-rose-500 hover:cursor-pointer
              rounded-full
            "
          >
            <a
              class="text-3xl hover:cursor-pointer"
              :href="props.link"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
        <p class="font-semibold text-gray-500 pt-6">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
ion-icon {
  z-index: 1;

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
