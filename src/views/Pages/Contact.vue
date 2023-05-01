<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import Phone from '../../components/icons/iconPhone.vue'
import Address from '../../components/icons/iconAddress.vue'
import Email from '../../components/icons/iconEmail.vue'
import Facebook from '../..//components/icons/iconFacebook.vue'
import Linkedin from '../../components/icons/iconLinkedin.vue'

const links = [
  {
    name: "ADDRESS",
    content: "4 FREEDOM SQUARE,TBILISI 0105,GEORGIA",
    icon: Address
  },
  {
    name: "PHONE",
    content: "+995 (32) 2988 988",
    icon: Phone
  },
  {
    name: "E-MAIL",
    content: "GMTH0spitality@GMT.GE",
    icon: Email
  },
  {
    name: "FACEBOOK",
    content: "GMTHospitality",
    icon: Facebook
  },
  {
    name: "LINKEDIN",
    content: "GMTHospitality",
    icon: Linkedin
  },
]
</script>
<template>
  <main-layout>
    <div class="flex flex-col w-[100%] p-[3%]">
      <h1 class="text-center m-[20px] text-[27px] font-semibold">CONTACT</h1>
      <div class="flex md:flex-row flex-col px-[6%] py-[1%] items-center">
        <div class="flex flex-col w-[100%] gap-[20px]">

          <div v-for="link in links" class="flex">
            <div class="bg-[#e6e6e6] w-[60px] h-[60px] rounded-full flex justify-center items-center p-[17px]">
              <component :is="link.icon"></component>
            </div>
            <div class="flex flex-col justify-center pl-[20px]">
              <p class="text-[17px] font-semibold text-[#797878]">{{ link.name }}</p>
              <p class="text-[14px] font-semibold">{{ link.content }}</p>
            </div>
          </div>

        </div>
        <div class="w-[100%] pt-[30px] md:pt-0">
          <iframe class="w-full h-[200px] md:h-[310px]" id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed"
          >
          </iframe>
        </div>
      </div>
    </div>
  </main-layout>
</template>
