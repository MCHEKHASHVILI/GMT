<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import { ref, computed } from "vue";
import iconArrow from "../../components/icons/iconArrow.vue";
import { useStore } from "vuex";
import eventsModule from "../../store/modules/events";
const store = useStore();
store.registerModule("events", eventsModule);

const location = ref("Location");

const type = ref("Type");

const events = computed(() => store.getters["events/formattedEvents"]);

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
    <h1 class="flex justify-center text-2xl font-bold mt-16">EVENTS</h1>

    <div class="flex flex-wrap sm:flex-nowrap sm:-mt-4 ">
      <div class="w-full max-sm:mt-14 sm:w-auto ">
        <div class=" sm:translate-x-28 sm:translate-y-24 text-2xl font-bold">
          <h2 class="max-sm:text-center max-sm:px-16 max-sm:mb-9">DON'T MISS OUT ON OUR EVENTS-STAY
            <span class="sm:hidden">CONNECTED!</span>
          </h2>
          <h2 class="max-sm:hidden">CONNECTED!</h2>
        </div>
        <div class="absolute hidden sm:block">
          <div class="flex bg-gray-100 translate-x-28 translate-y-40 w-full">
            <form class="w-full flex h-24">
              <div class="px-6">
                <label class="block uppercase text-gray-700 text-xs font-bold " for="location">
                </label>
                <div class="relative">
                  <select v-model="location"
                    class="h-14 w-52 mt-[10%] block appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="location">
                    <option disabled selected>Location</option>
                    <option value="Tbilisi">Tbilisi</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <iconArrow />
                  </div>
                </div>
              </div>

              <div>
                <label class="block uppercase text-gray-700 text-xs font-bold " for="date">
                </label>
                <input v-model="date"
                  class="h-14 w-52 mt-[10%] appearance-none block bg-transparent border border-gray-400 text-gray-700 py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date" type="date" placeholder="Date" />
              </div>
              <div class="px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
                </label>
                <div class="relative px-3">
                  <select v-model="type"
                    class="h-14 w-52 mt-[10%] block appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                    id="type">
                    <option disabled selected>Type</option>
                    <option value="Jazz">Jazz</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                    <iconArrow />
                  </div>
                </div>
              </div>
              <div class="relative">
                <button @click="filterEvents"
                  class="mt-[9%] mr-5 w-52 h-14 bg-black hover:bg-black-700 font-light text-yellow-600 py-2 px-4 focus:outline-none focus:shadow-outline"
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

    <div class="sm:pr-24">
      <img class="ml-auto h-80 mb-6"
        src="https://thearborsassistedliving.com/wp-content/uploads/2013/04/Violin-shutterstock_118142254-914252_640x320.jpg" />
    </div>
    <div class="mx-auto mb-28 max-sm:mt-6">
      <!-- grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-y-9 gap-x-3 sm:pl-28 sm:pr-20 px-[8%]">
        <!-- card -->
        <div v-for="event in filteredEvents" class="flex flex-col">
          <div>
            <img :src="event.image" class="sm:h-52 max-sm:w-full" alt="jazzpic" />
          </div>
          <h5 class="text-2xl max-sm:w-96  sm:text-xl max-sm:font-bold font-medium mt-2">
            {{ event.title }}
          </h5>
          <div class="pt-3 pb-2">
            <span
              class="inline-block bg-gray-200 sm:px-9 sm:py-1 px-14 py-2 font-normal font-medium text-sm uppercase text-black max-sm:mr-16  mr-2 mb-1">
              {{ event.type }}
            </span>
            <span class="inline-block px-3 py-1 text-sm font-normal text-black mb-1 max-sm:text-lg">
              <span class="text-gray-700">Price:</span> {{ event.price
              }}</span>
            <span
              class="inline-block sm:px-3 py-1 sm:text-sm text-xl font-normal sm:text-gray-700 mr-2 mb-1 max-sm:uppercase">{{
                event.formattedDate
              }}</span>
          </div>
          <div href="#" class="text-center bg-gray-200 py-4 w-auto font-semibold hover:bg-gray-300 focus:scale-95">
            VIEW DETAILS
          </div>
        </div>

      </div>
    </div>

  </main-layout>
</template>
