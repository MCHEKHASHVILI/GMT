<script setup>
import mainLayout from "../../layouts/mainLayout.vue";
import Phone from '../../components/icons/iconPhone.vue'
import Address from '../../components/icons/iconAddress.vue'
import Email from '../../components/icons/iconEmail.vue'
import Facebook from '../..//components/icons/iconFacebook.vue'
import Linkedin from '../../components/icons/iconLinkedin.vue'
</script>
<template>
  <main-layout>
    <div class="flex flex-col w-[100%] p-[3%]">
      <h1 class="text-center m-[20px] text-[27px] font-bold">CONTACT</h1>
      <div class="flex px-[6%] py-[1%] items-center">
        <div class="flex flex-col w-[100%] gap-[20px]">

          <div class="flex">
            <div class="bg-[#D3D3D3] w-[60px] h-[60px] rounded-full flex justify-center items-center p-[17px]">
              <Address/>
            </div>
            <div class="flex flex-col justify-center pl-[20px]">
              <p class="text-[17px] font-semibold text-[#616161]">ADDRESS</p>
              <p class="text-[14px] font-semibold">4 FREEDOM SQUARE,TBILISI 0105,GEORGIA</p>
            </div>
          </div>

          <div class="flex">
            <div class="bg-[#D3D3D3] w-[60px] h-[60px] rounded-full flex justify-center items-center p-[17px]">
              <Phone/>
            </div>
            <div class="flex flex-col justify-center pl-[20px]">
              <p class="text-[17px] font-semibold text-[#616161]">PHONE</p>
              <p class="text-[14px] font-semibold">+995 (32) 2988 988</p>
            </div>
          </div>

          <div class="flex">
            <div class="bg-[#D3D3D3] w-[60px] h-[60px] rounded-full flex justify-center items-center p-[17px]">
              <Email/>
            </div>
            <div class="flex flex-col justify-center pl-[20px]">
              <p class="text-[17px] font-semibold text-[#616161]">E-MAIL</p>
              <p class="text-[14px] font-semibold">GMTH0spitality@GMT.GE</p>
            </div>
          </div>

          <div class="flex">
            <div class="bg-[#D3D3D3] w-[60px] h-[60px] rounded-full flex justify-center items-center p-[17px]">
              <Facebook/>
            </div>
            <div class="flex flex-col justify-center pl-[20px]">
              <p class="text-[17px] font-semibold text-[#616161]">FACEBOOK</p>
              <p class="text-[14px] font-semibold">GMTHospitality</p>
            </div>
          </div>

          <div class="flex">
            <div class="bg-[#D3D3D3] w-[60px] h-[60px] rounded-full flex justify-center items-center p-[17px]">
              <Linkedin/>
            </div>
            <div class="flex flex-col justify-center pl-[20px]">
              <p class="text-[17px] font-semibold text-[#616161]">LINKEDIN</p>
              <p class="text-[14px] font-semibold">GMTHospitality</p>
            </div>
          </div>

        </div>
        <div class="w-[100%]">
          <iframe width="676" height="310" id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Freedom Square, Aleksandr Pushkin Street, Tbilisi 0105, Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed"
          >
          </iframe>
        </div>
      </div>
    </div>


  </main-layout>
</template>
