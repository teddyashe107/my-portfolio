<script setup>
const skill = {
  skills: [
    { name: "JavaScript" },
    { name: "Java" },
    { name: "Docker"},
    { name: "Nest Js"},
    { name: "Vue Js" },
    { name: "Node.js" },
    { name: "Tailwind Css" },
    { name: "Bootstrap" },
    { name: "Php" },
    { name: "Laravel" },
    { name: "GraphQL API" },
    { name: "MySql" },
    { name: "Postgres" },
    { name: "Git/Github"}
  ],
};
</script>

<template>
  <!-- about me -->
  <div id="About">
    <div class="bg-gray-900 min-h-screen">
      <section class="pt-12 text-gray-100">
        <div class="max-w-3xl px-1 mx-3 xl:max-w-6xl xl:mx-auto">
          <div class="">
            <h1 class="text-3xl font-semibold text-lime-600 text-center">
              About me
            </h1>
            <p class="mt-4 sm:text-left text-lg">
              I am Tewodros, a full-stack software developer based in Addis
              Abeba, Ethiopia with a background in Electrical Engineering. I use
              code to create websites, visuals, and more.
            </p>
            <div class="p-2">
              <p class="mt-7 text-lg border-b-3">
                As a curious learner, I'm always trying new things and finding
                ways to improve my skills. I am working confidently in
                JavaScript, primarily in Vue3, GraphQL, Firebase, but I have
                experience working in a wide range of technologies including
                Node & Express, Mysql, PostgreSQL, REST API design, 3rd party
                APIs ( Auth0, and Twitter).
              </p>
            </div>

            <p
              class="
                mt-3
                text-xl
                font-semibold font-Poppins
                text-lime-600 text-center
              "
            >
              Few technologies I’ve been working with recently:
            </p>
            <div class="flex flex-shrink-0 mx-auto mt-5 justify-center">
              <div class="grid grid-cols-12 gap-6 sm:gap-x-14 sm:gap-y-4">
                <div
                  class="col-span-12 sm:col-span-4"
                  v-for="data in skill.skills"
                  :key="data"
                >
                  <div class="text-6xl text-gray-800">
                    <div class="flex items-center flex-shrink-0 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="
                          flex-shrink-0
                          w-5
                          h-5
                          fill-current
                          text-yellow-400
                        "
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
                        />
                      </svg>
                      <span
                        class="
                          text-lg
                          leading-9
                          tracking-wide
                          text-gray-200
                          font-Poppins
                          sm:text-xl
                          md:3xl
                        "
                        >{{ data.name }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <p class="mt-5 text-lg"></p>
              <p
                class="
                  text-2xl
                  font-semibold font-Poppins
                  text-lime-600 text-center
                "
              >
                Other things I'm into
              </p>
              <br />
              I'm learning and improving my Digital Marketing skill.recently I
              received my fundamentals of digital marketing certificate from
              Google. I love reading self-improvement books and listening to
              podcasts.

              <div class="shadow-lg shadow-gray-600 mt-4 border-2">
                <img src="/images/certificate.png" alt="" />
              </div>

              <a
                class="mt-4 px-4 py-2 rounded-lg bg-purple-700"
                href="https://drive.google.com/file/d/1PEBzDKRNs1T88jZpW4EMVri6F7cYT5zg/view?usp=sharing"
                target="_blank"
                >CV/RESUME</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- end about me -->
      <!--- get in touch -->

      <div id="Contact">
        <section class="px-3 pt-12 text-gray-100" id="contact">
          <div class="max-w-3xl px-1 mx-3 xl:max-w-6xl xl:mx-auto">
            <div class="flex flex-col">
              <h1
                class="
                  text-3xl
                  font-semibold font-Poppins
                  text-center text-lime-600
                "
              >
                Get In Touch
              </h1>
              <p class="sm:text-left text-lg">
                I’m currently looking for opportunities if you want to hire me,
                my inbox is always open. Whether you have a question or just
                want to say hi, I’ll try my best to get back to you!
              </p>

              <base-btn class="rounded-lg px-1 text-center">
                Send Email
              </base-btn>
            </div>
          </div>
        </section>
      </div>
      <!-- end get in touch -->

      <!-- f ooter -->

      <footer class="bg-gray-900">
        <div class="max-w-3xl px-1 mx-3 xl:max-w-6xl xl:mx-auto">
          <div class="flex flex-col items-center">
            <social-media />
            <div class="pt-4">
              <h1 class="text-center text-gray-200">
                Designed & Built by Tewodros Ashenafi
              </h1>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="fixed inline-flex bottom-4 right-4 flex-shrink-0">
            <base-btn class="rounded-lg px-2"> Contact Me </base-btn>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
</style>
