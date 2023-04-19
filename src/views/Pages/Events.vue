<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
</script>
<template>
  <main-layout>
    <h1 class="flex justify-center mb-20 md:text-3xl font-medium mt-3">
      EVENTS
    </h1>
    <br />

    <!-- form -->
    <!-- <div>
      <h2 class="flex pl-20 mb:text-xl font-medium mt-3">
        DON'T MISS OUT ON OUR EVENTS-STAY CONNECTED!
      </h2>
      <div
        class="mx-60 relative mb-[-245px] ml-[87px] pr-20 pl-20 bg-gray-50 p-2 border shadow-md"
      >
        <form class="flex flex-wrap justify-between z-0">
          <div>
            <input class="placeholder-gray-500 border" placeholder="Location" />

            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            ></div>
          </div>

          <div class="mb-4 mr-2">
            <input class="placeholder-gray-500 border" placeholder="Date" />
          </div>

          <div>
            <input
              class="placeholder-gray-500 border"
              placeholder="Type"
              data-dropdown-toggle="dropdown"
            />
          </div>

          <div class="justify-end mt-6">
            <button
              class="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              DISCOVER EVENTS
            </button>
          </div>
        </form>
      </div>
      <div grid-cols-2>
        <img
          class="h-auto pr-20 max-w-lg ml-auto"
          src="https://takelessons.com/blog/wp-content/uploads/2017/11/is-cello-hard-to-learn.jpeg "
          alt="Chello"
        />
      </div>
    </div> -->
    <br />
    <div
      class="flex items-center justify-center min-h-screen container mx-auto"
    >
      <!-- grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-20 pr-20"
      >
        <!-- card -->

        <div class="max-w flex flex-col">
          <div>
            <img
              src="https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng="
              alt="jazzpic"
            />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            Jazz up your night: Join us for live music and delicious dinning at
            our restaurant!
          </h5>
          <div class="text-center px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Jazz</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Price: 150 Gel</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >March 25,2023 | 10:25</span
            >
          </div>
          <div
            href="#"
            class="text-center bg-gray-200 text-black-700 py-6 font-semibold mt hover:bg-grey-300 focus:scale-95"
          >
            VIEW DETAILS
          </div>
          
        </div>
        <div class="max-w flex flex-col">
          <div>
            <img
              src="https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng="
              alt="jazzpic"
            />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            Jazz up your night: Join us for live music and delicious dinning at
            our restaurant!
          </h5>
          <div class="text-center px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Jazz</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Price: 150 Gel</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >March 25,2023 | 10:25</span
            >
          </div>
          <div
            href="#"
            class="text-center bg-gray-200 text-black-700 py-6 font-semibold mt hover:bg-grey-300 focus:scale-95"
          >
            VIEW DETAILS
          </div>
          
        </div>
        <div class="max-w flex flex-col">
          <div>
            <img
              src="https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng="
              alt="jazzpic"
            />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            Jazz up your night: Join us for live music and delicious dinning at
            our restaurant!
          </h5>
          <div class="text-center px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Jazz</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Price: 150 Gel</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >March 25,2023 | 10:25</span
            >
          </div>
          <div
            href="#"
            class="text-center bg-gray-200 text-black-700 py-6 font-semibold mt hover:bg-grey-300 focus:scale-95"
          >
            VIEW DETAILS
          </div>
          
        </div>
        <div class="max-w flex flex-col">
          <div>
            <img
              src="https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng="
              alt="jazzpic"
            />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            Jazz up your night: Join us for live music and delicious dinning at
            our restaurant!
          </h5>
          <div class="text-center px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Jazz</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Price: 150 Gel</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >March 25,2023 | 10:25</span
            >
          </div>
          <div
            href="#"
            class="text-center bg-gray-200 text-black-700 py-6 font-semibold mt hover:bg-grey-300 focus:scale-95"
          >
            VIEW DETAILS
          </div>
          
        </div>
        <div class="max-w flex flex-col">
          <div>
            <img
              src="https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng="
              alt="jazzpic"
            />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            Jazz up your night: Join us for live music and delicious dinning at
            our restaurant!
          </h5>
          <div class="text-center px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Jazz</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Price: 150 Gel</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >March 25,2023 | 10:25</span
            >
          </div>
          <div
            href="#"
            class="text-center bg-gray-200 text-black-700 py-6 font-semibold mt hover:bg-grey-300 focus:scale-95"
          >
            VIEW DETAILS
          </div>
          
        </div>
        <div class="max-w flex flex-col">
          <div>
            <img
              src="https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng="
              alt="jazzpic"
            />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            Jazz up your night: Join us for live music and delicious dinning at
            our restaurant!
          </h5>
          <div class="text-center px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Jazz</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >Price: 150 Gel</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >March 25,2023 | 10:25</span
            >
          </div>
          <div
            href="#"
            class="text-center bg-gray-200 text-black-700 py-6 font-semibold mt hover:bg-grey-300 focus:scale-95"
          >
            VIEW DETAILS
          </div>
          
        </div>
      </div>
    </div>
  </main-layout>
</template>
