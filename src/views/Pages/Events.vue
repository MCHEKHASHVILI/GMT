<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import { ref, computed } from "vue";
import iconArrow from "../../components/icons/iconArrow.vue";
import { useStore } from "vuex";

const store = useStore();

const location = ref("Location");

const type = ref("Type");

const events = computed(() => store.getters["events/events"]);

const filteredEvents = ref(events.value);

const filterEvents = () => {
  filteredEvents.value = events.value.filter((e) => {
    return (
      e.type === type.value && e.date.toISOString().slice(0, 10) === date.value
    );
  });
};
</script>

<template>
  <main-layout>
    <h1 class="flex justify-center text-2xl font-bold mt-20 text-4xl">EVENTS</h1>

    <div class="flex flex-wrap flex-nowrap ">
      <div class="w-full max-sm:mt-14 w-auto ">
        <div class=" translate-x-36 translate-y-32 font-bold font-bold text-4xl">
          <h2 class="max-sm:text-center max-sm:px-16 max-sm:mb-9 ">DON'T MISS OUT ON OUR EVENTS-STAY
            <span class="sm:hidden ">CONNECTED!</span>
          </h2>
          <h2 class="max-sm:hidden mt-2 text-4xl">CONNECTED!</h2>
        </div>
        <div class="absolute hidden sm:block">
          <div class="flex bg-gray-100 translate-x-36 translate-y-44 w-full">
            <form class="w-full flex h-36">
              <div class="px-8">
                <label class="block uppercase text-gray-700 text-xs font-bold " for="location">
                </label>
                <div class="relative">
                  <select v-model="location"
                    class="h-20 w-64 mt-[13%] block text-lg appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="location">
                    <option disabled selected>Location</option>
                    <option value="Tbilisi">Tbilisi</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <iconArrow />
                  </div>
                </div>
              </div>

              <div>
                <label class="block uppercase text-gray-700 text-xs font-bold " for="date">
                </label>
                <input v-model="date"
                  class="h-20 w-64 mt-[13%] text-lg appearance-none block bg-transparent border border-gray-400 text-gray-700 py-3 px-6 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date" type="date" placeholder="Date" />
              </div>
              <div class="px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
                </label>
                <div class="relative px-4">
                  <select v-model="type"
                    class="h-20 w-64 mt-[13%] text-lg block appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-6 focus:outline-none focus:bg-white focus:border-gray-500"
                    id="type">
                    <option disabled selected>Type</option>
                    <option value="Jazz">Jazz</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-7 text-gray-700">
                    <iconArrow />
                  </div>
                </div>
              </div>
              <div class="relative">
                <button @click="filterEvents"
                  class="mt-[11%] mr-7 w-72 h-20 bg-black text-xl hover:bg-black-700 font-light text-yellow-600 py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="button">
                  DISCOVER EVENTS
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="sm:hidden ">
          <button
            class="absolute bg-gray-300 py-4 px-44 uppercase font-medium translate-x-10 translate-y-60 text-lg ">filter</button>
        </div>
      </div>
    </div>

    <div class="sm:mr-44 -mt-7">
      <img class="ml-auto mb-7"
        src="https://www.messiah.edu/images/Cello.jpg" />
    </div>
    <div class="mx-auto mb-28 max-sm:mt-6">
      <!-- grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-y-9 gap-x-4 sm:pl-36 sm:pr-44">
        <!-- card -->
        <div v-for="event in filteredEvents" class="flex flex-col">
          <div>
            <img :src="event.image" class="max-sm:w-full" alt="jazzpic" />
          </div>
          <h5 class="text-2xl max-sm:w-96  sm:text-2xl max-sm:font-bold font-medium mt-2 w-full">
            {{ event.title }}
          </h5>
          <div class="pt-3 pb-2">
            <span
              class="inline-block bg-gray-200 sm:px-9 sm:py-1 px-14 py-2 font-normal font-medium text-sm uppercase text-black max-sm:mr-16  mr-5 mb-1">
              {{ event.type }}
            </span>
            <span class="inline-block px-3 py-1 text-lg font-normal text-black mb-1 max-sm:text-lg mr-16">
              <span class="text-gray-700">Price:  </span> {{ event.price
              }}</span>
            <span
              class="inline-block sm:px-3 py-1 sm:text-lg text-xl font-normal sm:text-black  mb-1 max-sm:uppercase">{{
                event.formattedDate
              }}</span>
          </div>
          <div href="#" class="text-center bg-gray-200 py-5 w-auto font-semibold hover:bg-gray-300 focus:scale-95 ">
            VIEW DETAILS
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>
