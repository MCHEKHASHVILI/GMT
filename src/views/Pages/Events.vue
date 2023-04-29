<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import { ref } from "vue";
const location = ref("Location");
const date = ref(new Date());
const type = ref("Type");

const events = [
  {
    id: 1,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image:
      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
    title:
      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
  },
  {
    id: 2,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image:
      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
    title:
      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
  },
  {
    id: 3,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image:
      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
    title:
      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
  },
  {
    id: 4,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image:
      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
    title:
      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
  },
  {
    id: 5,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image:
      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
    title:
      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
  },
  {
    id: 6,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image:
      "https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=",
    title:
      " Jazz up your night: Join us for live music and delicious dinning at our restaurant!",
  },
];

const filteredEvents = ref(events);

const filterEvents = () => {
  filteredEvents.value = events.filter((e) => {
    return (
      e.type === type.value && e.date.toISOString().slice(0, 10) === date.value
    );
  });
};
</script>
<template>
  <main-layout>
    <h1 class="flex justify-center text-2xl font-bold mt-3">EVENTS</h1>

    <div class="flex flex-wrap sm:flex-nowrap">
      <div class="w-full md:w-auto">
        <div
          class="px-8 sm:translate-x-[80px] sm:translate-y-[100px] text-2xl font-bold"
        >
          <h2 class="text-center leading-none sm:inline mb-1 sm:sm-0">
            DON'T MISS OUT ON OUR
          </h2>
          <h2 class="hidden sm:inline">EVENTS-STAY</h2>
          <br class="hidden sm:inline" />
          <h2 class="hidden sm:inline">CONNECTED!</h2>
        </div>
        <div
          class="text-center px-8 sm:translate-x-[80px] sm:translate-y-[100px] text-2xl font-bold"
        >
          <h2 class="leading-none sm:hidden">EVENTS-STAY CONNECTED !</h2>
        </div>

        <div class="absolute hidden sm:block">
          <div
            class="flex justify-center items-center bg-gray-200 translate-x-[80px] translate-y-[150px] w-[980px]"
          >
            <form class="w-full max-w-md- flex justify-between h-[90px]">
              <div class="px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="location"
                >
                </label>
                <div class="relative">
                  <select
                    v-model="location"
                    class="h-[62px] w-[190px] mt-[13px] block appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="location"
                  >
                    <option disabled selected>Location</option>
                    <option value="Tbilisi">Tbilisi</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6h12z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="date"
                >
                </label>
                <input
                  v-model="date"
                  class="h-[62px] w-[190px] mt-[13px] appearance-none block bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="date"
                  placeholder="Date"
                />
              </div>
              <div class="px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="type"
                >
                </label>
                <div class="relative">
                  <select
                    v-model="type"
                    class="h-[62px] w-[190px] mt-[13px] block appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 focus:outline-none focus:bg-white focus:border-gray-500"
                    id="type"
                  >
                    <option disabled selected>Type</option>
                    <option value="Jazz">Jazz</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6h12z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="relaitve">
                <button
                  @click="filterEvents"
                  class="mt-[13px] mr-[15px] w-[190px] h-[62px] bg-black hover:bg-black-700 font-light text-yellow-600 py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  DISCOVER EVENTS
                </button>
              </div>
            </form>
          </div>
        </div>
        <button class="filter-button block md:hidden lg:hidden xl:hidden bg-black hover:bg-black-700 font-light text-yellow-600 py-2 px-4 focus:outline-none focus:shadow-outline">
  FILTER
</button>
      </div>
    </div>

    <div class="w-full sm:w-auto mt-6 sm:mt-0 sm:pr-[80px]">
      <img
        class="ml-auto w-full h-auto sm:w-[675px] sm:h-[300px]"
        src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/black-and-white-cello-kathy-franklin.jpg"
      />
    </div>
    <br />
    <div
      class="flex items-center justify-center min-h-screen container mx-auto mb-5"
    >
      <!-- grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-20 pr-20"
      >
        <!-- card -->

        <div v-for="event in filteredEvents" class="max-w flex flex-col">
          <div>
            <img :src="event.image" alt="jazzpic" />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-3">
            {{ event.title }}
          </h5>
          <div class="pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 px-8 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ event.type }}</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ event.price }}</span
            >
            <span
              class="inline-block bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ event.formattedDate }}</span
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
