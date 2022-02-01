
<script setup>
import { reactive } from "vue";

const movieTicketAppData = reactive({
  link: "https://github.com/teddyashe107/MovieTicket-git",
  data: [
    {
      title: "Features",

      description:
        "schedule movie as cinima, retrive user reservations as cinima, user can review, user can book tickets....",
      image: "images/movie_ticket_app_one.jpg",
    },
    {
      title: "Tecnology Used",
      sub_title: "Vue3",
      description:
        " Vue3, Vuex, Vue-router, Apollo, Postgres, GraphQL, web-socket, firebase, node js , express js, node-fetch  ",
      image: "images/movie_ticket_app_two.jpg",
    },

    {
      title: "Additional Pictures",
      sub_title: "picture",
      description:
        "ability to review and  book tickets only authenticated users can",
      image: "images/movie_ticket_app_three.jpg",
    },
  ],
});

const dbuPush = reactive({
  link: "https://github.com/teddyashe107/DbuPushProject",
  data: [
    {
      title: "Features",
      sub_title: "",
      description:
        "this project has three roles student, guest can only see info, student can see there course plan and info, admin create info... ",
      image: "images/student_info_system_one.jpg",
    },
    {
      title: "Tecnology Used",
      sub_title: "Laravel",
      description:
        "php, laravel, passport for api authentication, bootstrap for and blade templating engine",
      image: "images/student_info_system_two.jpg",
    },

    {
      title: "Additional Pictures",
      sub_title: "picture",
      description: "ability to see latest university updates ",
      image: "images/student_info_system_three.jpg",
    },
  ],
});
</script>

<template>
  <div id="Projects">
    <section class="pt-8 bg-slate-200">
      <div class="max-w-3xl px-1 mx-3 xl:max-w-6xl xl:mx-auto">
        <h1
          class="text-3xl font-semibold text-gray-700 font-Poppins sm:text-4xl"
        >
          Movie Ticket App
          <span
            class="
              px-3
              overflow-hidden
              text-2xl text-gray-100
              rounded-lg
              bg-gradient-to-tr
              from-gray-400
              to-zinc-600
              whitespace-nowrap
            "
          >
            Project
          </span>
        </h1>
      </div>

      <div
        class="
          mx-3
          sm:flex sm:overflow-x-auto sm:gap-6 sm:pb-8
          xl:grid xl:grid-cols-12 xl:gap-8 xl:max-w-6xl xl:mx-auto
        "
      >
        <project-card
          class="
            mt-8
            sm:max-w-sm sm:w-full sm:flex-shrink-0 sm:px-2
            lg:col-span-6
            xl:col-span-4
          "
          v-for="(item, index) in movieTicketAppData.data"
          :key="index"
          :image="item.image"
          :title="item.title"
          :sub_title="item.sub_title"
          :description="item.description"
          :link="movieTicketAppData.link"
        />
      </div>
    </section>
    <!-- end of first project -->

    <!-- secound project -->

    <section class="pt-8 bg-gray-200" id="project">
      <div class="max-w-3xl px-1 mx-3 xl:max-w-6xl xl:mx-auto">
        <h1
          class="text-3xl font-semibold text-gray-700 font-Poppins sm:text-4xl"
        >
          Student Info System
          <span
            class="
              px-3
              overflow-hidden
              text-2xl text-gray-100
              rounded-lg
              bg-gradient-to-tr
              from-gray-400
              to-zinc-600
              whitespace-nowrap
            "
          >
            Project
          </span>
        </h1>
      </div>

      <div
        class="
          mx-3
          sm:flex sm:overflow-x-auto sm:gap-6 sm:pb-8
          xl:grid xl:grid-cols-12 xl:gap-8 xl:max-w-6xl xl:mx-auto
        "
      >
        <project-card
          class="
            mt-8
            sm:max-w-sm sm:w-full sm:flex-shrink-0 sm:px-2
            lg:col-span-6
            xl:col-span-4
          "
          v-for="(item, index) in dbuPush.data"
          :key="index"
          :image="item.image"
          :title="item.title"
          :sub_title="item.sub_title"
          :description="item.description"
          :link="dbuPush.link"
        />
      </div>
    </section>
  </div>
</template>

<style>
</style>
