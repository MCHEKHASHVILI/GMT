const employmentModule = {
  namespaced: true,
  state() {
    return {
      vacancies: [
        {
          id: 1,
          company: {
            logo: "https://www.gmt.ge/uploads_script/news/596e27ljb1c75l4.jpg",
            name: "FUNICULAR",
            contact: "GMTHospitality@GMT.GE",
          },
          job: {
            position: "Chef",
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",
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
            salary: {
              amount: "4000",
              currency: "₾",
              type: "per month",
            },
            type: "Full time",
            hours: "00:09-00:17:00",
          },
          publishedAt: "march 25, 2023 · 10:25",
        },
        {
          id: 2,
          company: {
            logo: "https://www.gmt.ge/uploads_script/news/596e27ljb1c75l4.jpg",
            name: "FUNICULAR",
            contact: "GMTHospitality@GMT.GE",
          },
          job: {
            position: "Chef",
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",

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
            salary: {
              amount: "4000",
              currency: "₾",
              type: "per month",
            },
            type: "Full time",
            hours: "00:09-00:17:00",
          },
          publishedAt: "march 25, 2023 · 10:25",
        },
        {
          id: 3,
          company: {
            logo: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/183461071_101827522088439_4050325639092768269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGTGt73bVV_l8Bs9YITRHfYWR48Tc03CnxZHjxNzTcKfChcP4FfLTCMVrH_1JNdVuYkRe5QIU9W9xCFmkZfU2Z3&_nc_ohc=L5UBt4mwf9EAX_EDPH0&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfC8c9Qx-Qm6-ErbAxLW3gokBrv10RB-TjzfyH85r5DIKg&oe=645E91D1",
            name: "PURI GULIANI",
            contact: "",
          },
          job: {
            position: "Chef",
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",

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
            salary: {
              amount: "4000",
              currency: "₾",
              type: "per month",
            },
            type: "Full time",
            hours: "00:09-00:17:00",
          },
          publishedAt: "march 25, 2023 · 10:25",
        },
        {
          id: 4,
          company: {
            logo: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/183461071_101827522088439_4050325639092768269_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGTGt73bVV_l8Bs9YITRHfYWR48Tc03CnxZHjxNzTcKfChcP4FfLTCMVrH_1JNdVuYkRe5QIU9W9xCFmkZfU2Z3&_nc_ohc=L5UBt4mwf9EAX_EDPH0&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfC8c9Qx-Qm6-ErbAxLW3gokBrv10RB-TjzfyH85r5DIKg&oe=645E91D1",
            name: "PURI GULIANI",
            contact: "",
          },
          job: {
            position: "Chef",
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",

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
            salary: {
              amount: "4000",
              currency: "₾",
              type: "per month",
            },
            type: "Full time",
            hours: "00:09-00:17:00",
          },
          publishedAt: "march 25, 2023 · 10:25",
        },
        {
          id: 5,
          company: {
            logo: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/119485246_609465163063254_3941978344519784791_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7BLgwMIY7ScJ5lcI0NVZrfWO6Ghl5-p59Y7oaGXn6nuoHjoskUxA-ZTex2F9AZ9qmjNfia4sqGiNXUCuc8Gdh&_nc_ohc=YYSVYk6S3Y8AX-Wi4Z-&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDG8r9IZCfI7vVnmpgCogo-J2Xx-ShUnLjK_f5ButC9Bg&oe=645EA161",
            name: "RIGI GASTRODOUQAN",
            contact: "",
          },
          job: {
            position: "Chef",
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",

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
            salary: {
              amount: "4000",
              currency: "₾",
              type: "per month",
            },
            type: "Full time",
            hours: "00:09-00:17:00",
          },
          publishedAt: "march 25, 2023 · 10:25",
        },
        {
          id: 6,
          company: {
            logo: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/119485246_609465163063254_3941978344519784791_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7BLgwMIY7ScJ5lcI0NVZrfWO6Ghl5-p59Y7oaGXn6nuoHjoskUxA-ZTex2F9AZ9qmjNfia4sqGiNXUCuc8Gdh&_nc_ohc=YYSVYk6S3Y8AX-Wi4Z-&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfDG8r9IZCfI7vVnmpgCogo-J2Xx-ShUnLjK_f5ButC9Bg&oe=645EA161",
            name: "RIGI GASTRODOUQAN",
            contact: "",
          },
          job: {
            position: "Chef",
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae amet veniam, est nisi alias nobis eligendi quo odio asperiores corrupti quibusdam beataedolorem dolore. Unde fugit consectetur placeat ullam eaque?",

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
            salary: {
              amount: "4000",
              currency: "₾",
              type: "per month",
            },
            type: "Full time",
            hours: "00:09-00:17:00",
          },
          publishedAt: "march 25, 2023 · 10:25",
        },
      ],
    };
  },
  getters: {
    getVacancies: (state) => state.vacancies,
    getVacancyById: (state) => (id) => {
      return state.vacancies.find((e) => e.id === id);
    },
  },
};

export default employmentModule;
