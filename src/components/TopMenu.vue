
<script setup>

const navbarComponents = [
  { routerLink: "/brands", name: "BRANDS" },
  { routerLink: "/reservation", name: "RESERVATION" },
  { routerLink: "/events", name: "EVENTS" },
  { routerLink: "/news", name: "NEWS" },
  { routerLink: "/about", name: "ABOUT US" },
  { routerLink: "/geo", name: "GEO" },
]

</script>

<template>
  <ul class="flex mr-[7%]">
    <li v-for="component in navbarComponents" class="text-white mx-5 cursor-pointer">
      <router-link :to="component.routerLink">{{ component.name }}</router-link>
    </li>
  </ul>
</template>