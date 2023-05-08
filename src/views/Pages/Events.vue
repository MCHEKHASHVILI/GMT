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
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII=",
    title: " Jazz up your night: Join us for live music and delicious dinning at our restaurant!"
  },
  {
    id: 2,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII=",
    title: " Jazz up your night: Join us for live music and delicious dinning at our restaurant!"
  },
  {
    id: 3,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII=",
    title: " Jazz up your night: Join us for live music and delicious dinning at our restaurant!"
  },
  {
    id: 4,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII=",
    title: " Jazz up your night: Join us for live music and delicious dinning at our restaurant!"
  },
  {
    id: 5,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII=",
    title: " Jazz up your night: Join us for live music and delicious dinning at our restaurant!"
  },
  {
    id: 6,
    type: "Jazz",
    price: "150 Gel",
    date: new Date("2023-03-21"),
    formattedDate: "March 21,2023 | 10:25",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII=",
    title: " Jazz up your night: Join us for live music and delicious dinning at our restaurant!"
  },
];

const filteredEvents = ref(events);

const filterEvents = () => {

  filteredEvents.value = events.filter(e => {
    return e.type === type.value && e.date.toISOString().slice(0, 10) === date.value;
  })
};
</script>
<template>
  <main-layout>
    <h1 class="flex justify-center md:text-2xl font-bold mt-14">EVENTS</h1>

    <div class="flex flex-row -mt-5">
      <div>
        <div class="translate-x-[109px] translate-y-[100px] text-2xl font-bold">
          <h2>DON'T MISS OUT ON OUR EVENTS-STAY</h2>
        </div>
        <div class="translate-x-[109px] translate-y-[100px] text-2xl font-bold">
          <h2>CONNECTED!</h2>
        </div>
        <!-- form -->
        <div class="absolute">
          <div class="flex justify-center items-center bg-gray-100 translate-x-[109px] translate-y-[140px] w-[960px]">
            <form class="w-full max-w-md- flex justify-between h-[100px]">
              <div class="px-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="location">
                </label>
                <div class="relative">
                  <select v-model="location"
                    class="h-[55px] w-[200px] mt-[11%] block appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="location">
                    <option disabled selected>Location</option>
                    <option value="Tbilisi">Tbilisi</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6h12z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date">
                </label>
                <input v-model="date"
                  class="h-[55px] w-[200px] mt-[11%] appearance-none block bg-transparent border border-gray-400 text-gray-700 py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date" type="date" placeholder="Date" />
              </div>
              <div class="px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
                </label>
                <div class="relative">
                  <select v-model="type"
                    class="h-[55px] w-[200px] mt-[11%] block appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                    id="type">
                    <option disabled selected>Type</option>
                    <option value="Jazz">Jazz</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M10 12l-6-6h12z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="relaitve">
                <button @click="filterEvents"
                  class="mt-[10%] mr-[20px] w-[200px] h-[55px] bg-black hover:bg-black-700 font-light text-yellow-600 py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="button">
                  DISCOVER EVENTS
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="pr-[90px]">
      <img class="ml-auto w-[645px] h-[320px]"
        src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/black-and-white-cello-kathy-franklin.jpg" />
    </div>
    <br />
    <div class="flex items-center justify-center min-h-screen container mx-auto mb-28">
      <!-- grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-3 pl-[110px] pr-20">
        <!-- card -->

        <div v-for="event in filteredEvents" class=" flex flex-col">
          <div>
            <img :src="event.image" class="h-[202px]" alt="jazzpic" />
          </div>
          <h5 class="text-2xl md:text-xl font-medium mt-2">
            {{ event.title }}
          </h5>
          <div class="pt-3 pb-2">
            <span class="inline-block bg-gray-200 px-8 py-1 font-normal font-medium text-sm uppercase text-black mr-2 mb-1">{{ event.type
            }}</span>
            <span class="inline-block px-3 py-1 text-sm font-normal text-black mr-[58px] mb-1">
              <span class="text-gray-700">Price:</span> {{ event.price
            }}</span>
            <span class="inline-block px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-1">{{
              event.formattedDate
            }}</span>
          </div>
          <div href="#"
            class="text-center bg-gray-200 text-black-700 py-4 w-[434px] font-semibold hover:bg-gray-300 focus:scale-95">
            VIEW DETAILS
          </div>
        </div>

      </div>
    </div>

  </main-layout>
</template>
