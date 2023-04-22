<script setup>
import mainLayout from "../../layouts/mainLayout.vue";

const vacancy = {
  company: {
    name: "FUNICULAR",
    logo: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/36342042_994746297362019_5087005955971874816_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K9cjnCANAxgAX8KUgeS&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfB-jhcm2EwT3MLGYNy4C5GBrpG_iSw5AjR5zmHHdhgOrA&oe=645F3224",
  },
  job: {
    position: "Chef",
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          veritatis architecto optio possimus id praesentium unde quasi
          consequatur obcaecati sed eligendi vitae perspiciatis corporis amet
          officiis culpa explicabo, sit ratione dolore odio doloribus! Quisquam
          autem qui ab voluptate est dolorum explicabo blanditiis eveniet
          commodi, iste eligendi cum distinctio. Nam, corrupti.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          minima rerum odit optio error mollitia? Recusandae numquam
          consequuntur at maiores optio dolor voluptatem harum aut inventore rem
          eaque fugit fugiat tempore repellat sint, molestias sapiente ut nihil
          delectus! Cumque sint nemo debitis. Dicta vero dolor commodi omnis aut
          deleniti cumque ullam perspiciatis. Ipsum, qui atque!`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laborum, suscipit nihil voluptatibus veritatis corrupti
          autem sapiente. Voluptates, cumque nostrum delectus quos earum a
          suscipit distinctio? Laboriosam praesentium fugit enim earum suscipit
          quos dolore cum dolorem optio tempora temporibus neque porro possimus
          doloribus animi beatae nemo sit ipsa eligendi quas ratione, rerum
          fugiat odio? Quod possimus maiores consectetur iste amet voluptate
          nostrum iure aliquid inventore fuga quisquam dolor ipsa velit totam
          blanditiis sed eaque, fugiat odit dignissimos ratione recusandae
          veniam dolorum doloribus? Magnam labore nobis sint nam illo minima
          iste qui repudiandae numquam illum, aut vel quidem modi saepe
          voluptatem reiciendis voluptatum ut. Officiis totam laboriosam
          repellendus perferendis quasi ipsa suscipit, dolore velit assumenda
          minima nisi, reprehenderit eius cumque ipsam magnam in nam vitae
          debitis molestias ratione atque! Doloremque, perferendis reiciendis
          repellat necessitatibus sequi numquam ad corrupti fugit asperiores
          dolorem, nisi velit odio autem facere. Voluptatibus quibusdam
          reprehenderit delectus quasi quas id magni sunt odio dolor, nemo qui
          impedit labore. Ab officia facere, in id deleniti aspernatur dolore
          laborum, atque enim tempora eius? Magnam eius reprehenderit, assumenda
          error repellat ea?`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, vel
          blanditiis alias itaque asperiores similique perspiciatis nulla sunt
          laborum optio porro cum consectetur temporibus ipsam!`,
    ],
    details: {
      salary: "4000",
      hours: "00:09-00:17:00",
      email: "GMTHospitality@GMT.GE",
    },
  },
  publishedAt: "march 25, 2023 · 10:25",
};
</script>

<template>
  <main-layout>
    <div class="flex flex-col space-y-[2.5%] w-auto mx-[12.5%] my-[5%]">
      <div class="flex space-x-[2.5%]">
        <div class="w-[10%]">
          <img :src="vacancy.company.logo" alt="Employer logo" />
        </div>
        <div class="m-auto font-bold">
          <h1>{{ vacancy.company.name }}</h1>
          <h3>{{ vacancy.job.position }}</h3>
        </div>
      </div>
      <div class="flex flex-col space-y-[2%]">
        <p v-for="paragraph in vacancy.job.description">{{ paragraph }}</p>
      </div>
      <div>
        <div>
          <table
            class="text-gray-500 border-separate border-spacing-y-3 border-spacing-x-5 relative left-[-20px]"
          >
            <tbody>
              <tr>
                <td>Salary</td>
                <td class="font-bold text-black">
                  {{ vacancy.job.details.salary }} ₾ per month
                </td>
              </tr>
              <tr>
                <td>Full time</td>
                <td class="font-bold text-black">
                  {{ vacancy.job.details.hours }}
                </td>
              </tr>
              <tr>
                <td>Contact</td>
                <td class="font-bold text-black">
                  {{ vacancy.job.details.email }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <p class="text-gray-500">{{ vacancy.publishedAt }}</p>
        </div>
      </div>
    </div>
  </main-layout>
</template>
