<script setup>
import Contact from "./Contact.vue";
import mainLayout from "../../layouts/mainLayout.vue";
import Phone from "../../components/icons/iconPhone.vue";
import Address from "../../components/icons/iconAddress.vue";
import Email from "../../components/icons/iconEmail.vue";
import Facebook from "../..//components/icons/iconFacebook.vue";
import Linkedin from "../../components/icons/iconLinkedin.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const brands = computed(() => store.getters["brands/brands"]);
const links = [
  {
    name: "ADDRESS",
    content: "Mtatsminda plateau, 0114 Tbilisi, Georgia",
    icon: Address,
  },
  {
    name: "PHONE",
    content: "+995 577 74 44 00",
    icon: Phone,
  },
  {
    name: "E-MAIL",
    content: "info@funicular.ge",
    icon: Email,
  },
  {
    name: "FACEBOOK",
    content: "Funicular \u{2022} ფუნიკულიორი",
    icon: Facebook,
  },
  {
    name: "LINKEDIN",
    content: "Restaurant Funicular",
    icon: Linkedin,
  },
];
</script>

<template>
  <mainLayout>
    <div class="w-screen flex flex-col items-center mb-32">
      <div class="h-5/6 flex mb-36 gap-40">
        <img class="w-5/6" :src="brands[0].mainImg" alt="" />

        <div class="flex-col flex justify-end">
          <img class="w-48 mb-12" :src="brands[0].icon" alt="" />
          <h1 class="font-bold mb-8 text-3xl font-[arial]">
            {{ brands[0].name.toUpperCase() }}
          </h1>

          <div class="text-xl mb-4 w-10/12">
            <p class="font-[arial]">
              {{ brands[0].conceptDescription.firstPart }}
            </p>
            <br />
            <p class="font-[arial]">
              {{ brands[0].conceptDescription.secondPart }}
            </p>
            <br />
            <p class="font-[arial]">
              {{ brands[0].conceptDescription.lastPart }}
            </p>
            <br />
          </div>

          <div class="w-8/12 text-lg flex gap-4">
            <button
              class="bg-[#f5f5f5] transition duration-300 hover:bg-[#0b0b0b] hover:text-[#d0a958] py-6 font-[arial] w-1/2"
            >
              MENU
            </button>
            <button
              class="bg-[#0b0b0b] transition duration-300 hover:opacity-80 text-[#d0a958] font-[arial] py-6 w-1/2"
            >
              GO TO WEBSITE
            </button>
          </div>
        </div>
      </div>

      <!-- სურათების ნაწილი -->

      <div class="items-center mb-16 w-full justify-center flex flex-col">
        <h1 class="font-bold  text-3xl font-[arial]">GALERRY</h1>

        <div class="flex w-[85%] justify-center my-16 h-screen flex-col">

            <div class="h-4/5 w-full flex items-center relative mb-4 " >
                <img  class="w-full h-full" :src="brands[0].galerry[0]" alt="" />


                <div class="flex absolute p-4 rounded-full right-5 items-center justify-center bg-[rgba(0,0,0,0.5)]">
                    <svg class=" w-10" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M160 115.4 180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="#ffffff" class="fill-000000"></path></svg>          

                </div>

                <div class="flex p-3 rounded-full bg-[rgba(0,0,0,0.5)] absolute left-5 items-center justify-center">
                    <svg class=" w-10" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="M352 115.4 331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z" fill="#ffffff" class="fill-000000"></path></svg>

                </div>
            </div>
          
          
          
          <div class="flex justify-between h-1/5  gap-4">
            <img
              class="flex-1 max-w-1/4 h-full"
              v-for="img in brands[0].galerry.slice(-4)"
              :src="img"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- კონტაკტის ნაწილი -->

      <div class="flex flex-col items-center h- w-[85%]">
        <h1 class="text-3xl font-[arial] font-bold">CONTACT</h1>

        <div class="flex md:flex-row flex-col h-full   w-full py-5 items-center">

          <div class="flex flex-col w-1/2 gap-7">
            <div v-for="link in links" class="flex">
              <div
                class="bg-[#e6e6e6] w-14 h-14 rounded-full flex justify-center items-center p-4"
              >
                <component :is="link.icon"></component>
              </div>
              <div class="flex flex-col justify-center pl-5">
                <p class="font-semibold text-lg text-[#797878]">
                  {{ link.name }}
                </p>
                <p class="text-lg font-semibold">{{ link.content }}</p>
              </div>
            </div>
          </div>

          <div class="w-2/3 h-full">
            <iframe
              class="w-full h-[400px] "
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </mainLayout>
</template>
