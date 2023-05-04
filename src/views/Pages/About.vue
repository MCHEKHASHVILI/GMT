<script setup>
import mainLayout from '../../layouts/mainLayout.vue'

const card = [{
  id: 1,
  name: 'NAME SURNAME',
  title: ' F&B Product Development and Operations',
  image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
{
  id: 2,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "

},
{
  id: 3,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
{
  id: 4,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
{
  id: 5,
  name: "NAME SURNAME",
  title: ' F&B Product Development and Operations',
  image: "https://futureofcare.co.uk/wp-content/uploads/2019/10/Jeremy-Hughes-400px.jpg",
  description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus sequi deserunt perferendis  voluptatem qui molestias et soluta dolor numquam tenetur id illum quidem officiis, sed, quas iure! Labore, beatae!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non ratione rem harum nostrum. Voluptatem doloribus corrupti magnam quas hic, praesentium possimus aut reiciendis nobis temporibus, veniam error, facere illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quidem aliquam quibusdam suscipit praesentium, quae voluptatem modi. Nisi sunt nostrum, debitis harum optio facere adipisci, et quia totam dolore quibusdam "
},
]
const information = {
  title: 'WHO WILL BE BY YOUR SIDE',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vero quia ipsa iusto at temporibus saepe culpa fugiat optio mollitia quas inventore maxime est hic, suscipit quisquam debitis dolore nobis!'
}

</script>
<template>
  <main-layout>
    <div class="m-5 md:mx-56  ">
      <div class="w-full  text-center sm:w-1/2 mx-auto text-left md:mt-16">
        <h1 class="mb-3 text-2xl font-medium sm:text-center ">{{ information?.title }} </h1>
        <p class=" break-all sm:text-center ">{{ information?.description }}</p>
      </div>
    </div>

    <div class=" sm:flex mx-5 my-10 md:mx-28 md:my-16 " v-for="item in card" :key="item.id">
      <div class="sm:flex-shrink-0">
        <img class=" sm:h-full sm:w-48 sm:w-60" :src="item?.image">
      </div>
      <div class="mt-4 sm:mt-6 sm:ml-6">
        <h2 class="mb-2 text-xl font-medium">{{ item?.name }}</h2>
        <h3 class="relative"> {{ item?.title }}
          <div class="absolute bg-amber-500 h-0.5 w-12"></div>
        </h3>
        <p class="mt-6 ">{{ item?.description }} </p>
      </div>
    </div>
  </main-layout>
</template>