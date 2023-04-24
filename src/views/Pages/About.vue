<script setup>
import mainLayout from '../../layouts/mainLayout.vue'

const card =[{
  id:1,
  name: 'NAME SURNAME',
  title: ' F&B Product Development and Operations',
  image:"https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
{
  id:2,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image:"https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "

},
{
  id:3,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image:"https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
{
  id:4,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image:"https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
{
  id:5,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image:"https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
]
const information={
  title:'WHO WILL BE BY YOUR SIDE',
  description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vero quia ipsa iusto at temporibus saepe culpa fugiat optio mollitia quas inventore maxime est hic, suscipit quisquam debitis dolore nobis!'
}

</script>
<template>
  <main-layout>
    <div class="w-full text-center  " >
      <h1 class="text-xl font-medium"> {{ information?.title }}</h1>
      <p class="ml-96 w-[44%] break-all ">{{ information?.description }}</p>
    </div>
    <ul class="ml-20 mr-12 mt-16 " v-for="item in card" :key="item.id">
      <li
  class="flex mt-16">
  <img
    class=" w-full  md:w-64   "
    :src=" item?.image " />
  <div class="flex flex-col justify-start p-6">
    <h2
      class="mb-2 text-xl font-medium ">
     {{ item?.name }}
    </h2>
    <h3 class="relative">
       {{ item?.title }}
       <div class="absolute bg-amber-500 h-[1.5px] w-12"></div>
    </h3>
    <p class=" text-sm mt-6">
    {{ item?.description }} 
    </p>
   
  </div>
</li>
    </ul>
  </main-layout>
</template>