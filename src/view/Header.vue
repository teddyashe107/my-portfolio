
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const nav = ["Projects", "About", "Contact"];

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}

const home = () => {
  router.push({
    path: "/",
  });
};
</script>

<template>
  <header class="bg-black text-white">
    <div
      style="
        background-image: url('/images/clint-patterson-dYEuFB8KQJk-unsplash.jpg');
      "
      class="min-h-screen relative top-0 px-3"
    >
      <!-- logo-section -->
      <div
        class="
          fixed
          mx-auto
          top-0
          left-0
          right-0
          z-50
          p-2
          bg-black bg-opacity-90
          rounded-b-md
          shadow-2xl
        "
      >
        <div
          class="
            mx-3
            sm:max-w-3xl sm:mx-auto sm:flex sm:justify-between sm:items-center
            xl:max-w-6xl
          "
        >
          <div class="flex items-center justify-between mx-1">
            <div class="relative">
              <img
                @click="home"
                class="
                  object-cover
                  w-16
                  h-16
                  ring-2 ring-lime-600
                  image-border-radius
                "
                src="/images/portfolio.jpg"
                alt="logo"
              />

              <div
                @click="home"
                class="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-slate-900
                  to-slate-700
                  opacity-10
                "
              ></div>
            </div>

            <div
              @click="toggle"
              class="block text-2xl sm:hidden text-lime-200 hover:text-white"
            >
              <ion-icon v-if="!isOpen" name="menu-sharp"></ion-icon>
              <ion-icon v-if="isOpen" name="close-sharp"></ion-icon>
            </div>
          </div>

          <nav
            class="
              flex flex-col
              justify-between
              max-w-3xl
              mx-1
              text-xl text-gray-100
              border-b border-lime-200
              sm:flex sm:flex-row sm:space-x-10 sm:border-none
            "
            :class="{ hidden: !isOpen }"
          >
            <a
              v-for="(item, index) in nav"
              :key="index"
              :href="`#${item}`"
              class="
                my-2
                p-1
                hover:bg-gradient-to-r
                hover:from-lime-900
                hover:to-lime-500
                hover:rounded-lg
                sm:text-gray-300
                sm:hover:text-white
                sm:hover:bg-none
                sm:hover:cursor-pointer
                sm:p-0
              "
            >
              {{ item }}
            </a>
          </nav>
        </div>

        <!-- nav-section -->
      </div>

      <div class="mx-1 pt-56 md:pt-32">
        <div class="max-w-3xl mx-3 mt-4 sm:mx-auto xl:max-w-6xl">
          <h1 class="text-lg font-Poppins text-gray-50 sm:text-2xl">
            hi, my name is
          </h1>
        </div>
      </div>

      <div class="relative flex items-center mx-1 mt-2">
        <div class="max-w-3xl mx-3 mt-4 sm:mx-auto xl:max-w-6xl">
          <div class="flex flex-col sm:grid sm:grid-cols-12">
            <div class="sm:col-span-9">
              <span
                class="
                  inline-flex
                  text-3xl
                  font-semibold
                  whitespace-wrap
                  sm:text-4xl sm:whitespace-nowrap
                  md:text-5xl
                  lg:text-6xl
                  font-Poppins
                "
              >
                Tewodros Ashenafi.
              </span>

              <h1
                class="
                  font-semibold
                  text-gray-300
                  font-Poppins
                  first-letter:text-lime-400
                  sm:whitespace-wrap sm:text-4xl sm:font-semibold sm:mt-4
                  md:text-5xl
                  lg:text-5xl lg:whitespace-nowrap
                "
              >
                I build things for the web.
              </h1>

              <p class="mt-4 overflow-auto text-white font-Poppins sm:text-xl">
                I’m a full-stack software developer with a passion for coding
                and Digital Marketing.
                <span class="text-lime-400">
                  To put simply, I consider myself as a maker of things, who
                  solves user-problems using design and/or technology.
                </span>
              </p>
              <div class="mt-7">
                <a
                  href="mailto:teddyashe107@gmail.com"
                  class="
                    p-4
                    rounded-lg
                    bg-gradient-to-tr
                    from-lime-700
                    to-lime-900
                    hover:bg-gradient-to-tr
                    hover:from-lime-900
                    hover:to-lime-500
                  "
                >
                  contact me
                </a>
              </div>
            </div>
            <social-media isVertical />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.image-border-radius {
  border-radius: 27% 73% 70% 30% / 30% 30% 70% 70% !important;
}
</style>
