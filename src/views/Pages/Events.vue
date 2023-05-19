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

const events = computed(() => store.getters["events/events"]);

const filteredEvents = ref(events.value);

const filterEvents = () => {
  filteredEvents.value = events.value.filter((e) => {
    return (
      e.type === type.value && e.date.toISOString().slice(0, 10) === date.value
    );
  });
};
const Toggle = () => {
  var x = document.getElementById("drawer-bottom-example");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

<template>
  <main-layout>
    <h1 class="flex mt-12 justify-center text-2xl font-bold sn:mt-20 text-4xl">EVENTS</h1>

    <div class="flex flex-wrap flex-nowrap ">
      <div class="w-full max-sm:mt-14 w-auto ">
        <div class=" sm:translate-x-36 sm:translate-y-32 font-bold font-bold sm:text-4xl text-3xl">
          <h2 class="max-sm:text-center max-sm:px-12 max-sm:mb-9 ">DON'T MISS OUT ON OUR EVENTS-STAY
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
          <button @click="Toggle()"
            class="absolute bg-gray-100 py-4 px-44 uppercase font-medium translate-x-10 translate-y-44 text-lg ">filter</button>
        </div>
      </div>
    </div>

    <div class="sm:mr-44 sm:-mt-7">
      <img class="ml-auto mb-7" src="https://www.messiah.edu/images/Cello.jpg" />
    </div>
    <div class="mx-auto mb-28 max-sm:mt-12">
      <!-- grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-y-9 gap-x-4 px-11 sm:pl-36 sm:pr-44">
        <!-- card -->
        <div v-for="event in filteredEvents" class="flex flex-col">
          <div>
            <img :src="event.image" class="sm:w-full" alt="jazzpic" />
          </div>
          <h5 class=" max-sm:w-80 text-2xl max-sm:font-bold font-medium mt-2 w-full">
            {{ event.title }}
          </h5>
          <div class="pt-3 pb-2">
            <span
              class="inline-block bg-gray-200 sm:px-9 sm:py-1 px-14 py-2 font-normal text-base uppercase text-black max-sm:mr-9  mr-5 mb-1">
              {{ event.type }}
            </span>
            <span class="inline-block px-3 py-1 text-lg font-normal text-black mb-1 max-sm:text-xl mr-16">
              <span class="text-gray-700">Price: </span> {{ event.price
              }}</span>
            <span class="inline-block sm:px-3 py-1 sm:text-lg text-xl font-normal sm:text-black  mb-1 max-sm:uppercase">{{
              event.formattedDate
            }} </span>
          </div>
          <div href="#" class="text-center bg-gray-200 py-5 w-auto font-semibold hover:bg-gray-300 focus:scale-95 ">
            VIEW DETAILS
          </div>
        </div>
      </div>
    </div>



<!--toggle-->

    <div id="drawer-bottom-example"
      class="fixed bottom-0 left-0 right-0 z-40 w-full sm:hidden px-9 py-4 overflow-y-auto transition-transform bg-white transform-none"
      tabindex="-1" aria-labelledby="drawer-bottom-label">
      <h5 class="inline-flex items-center capitalize text-xl font-normal text-gray-black">
        filter</h5>
      <button @click="Toggle()" type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div>
        <div class="flex flex-col mb-44">
          <form>
            <div class="">
              <label class="block uppercase text-gray-700 text-xs font-bold " for="location">
              </label>
              <div class="relative">
                <select v-model="location"
                  class="h-14 w-96 mt-[8%] block text-lg appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="location">
                  <option disabled selected>Location</option>
                  <option value="Tbilisi">Tbilisi</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-8 flex items-center px-4 text-gray-700">
                  <iconArrow />
                </div>
              </div>
            </div>

            <div>
              <label class="block uppercase text-gray-700 text-xs font-bold " for="date">
              </label>
              <input v-model="date"
                class="h-14 w-96 mt-[8%] text-lg appearance-none block bg-transparent border border-gray-400 text-gray-700 py-3 px-6 focus:outline-none focus:bg-white focus:border-gray-500"
                id="date" type="date" placeholder="Date" />
            </div>
            <div>
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold " for="type">
              </label>
              <div class="relative ">
                <select v-model="type"
                  class="h-14 w-96 mt-[8%] text-lg block appearance-none bg-transparent border border-gray-400 text-gray-700 py-3 px-6 focus:outline-none focus:bg-white focus:border-gray-500"
                  id="type">
                  <option disabled selected>Type</option>
                  <option value="Jazz">Jazz</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-6 -top-24 flex items-center px-7 text-gray-700">
                  <iconArrow />
                </div>
                <div class="relative">
                  <button @click="filterEvents()"
                    class="mt-[9%] w-96 h-14 bg-black text-xl hover:bg-black-700 font-light text-yellow-600 py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="button">
                    DISCOVER EVENTS
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!---->

    
</main-layout>
</template>
