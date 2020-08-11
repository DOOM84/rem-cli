<template>
  <div>
    <app-header />
    <app-features />
    <app-projects />
    <app-about />
    <app-works />
   <!-- <section data-aos="fade-zoom-in"
             data-aos-offset="0"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-back"
             data-aos-mirror="true"
             data-aos-once="true"
             data-aos-anchor-placement="top-center" id="hero">
      <v-row no-gutters>
        <v-carousel :show-arrows="$vuetify.breakpoint.lgAndUp" :hide-delimiters="$vuetify.breakpoint.lgAndUp" :height="'auto'" cycle>
          <v-carousel-item

            v-for="(item,i) in items"
            :key="i"

          >
            <client-only>
              <parallax  :speed-factor="0.4" breakpoint="(min-width: 80px)" :style="'z-index: 1; min-height: calc(100vh - '  + $vuetify.application.top + 'px)'">
                <div
                  style="
                width: 100%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate( -50%, -50% );
    text-align: center;
    color: white;
    font-weight: bold;
"
                >
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-medium"
                >
                     {{item.text}}
                    </span>
                  <hr class="my-5" style="width: 30%; margin: auto;">
                  <v-btn
                    class="align-self-end "
                    fab
                    large
                    outlined
                    @click="$vuetify.goTo('#features', {offset: -30})"
                  >
                    <v-icon large>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </div>
                <img :src="item.src" >

              </parallax>
            </client-only>
            &lt;!&ndash;<v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              :src="item.src"
            >&ndash;&gt;
            &lt;!&ndash;<v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white&#45;&#45;text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white&#45;&#45;text text-center"
                    cols="12"
                    tag="h1"
                  >
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-medium"
                  >
                   {{item.text}}
                  </span>
                    <hr class="mt-5 w-50">
                    <br>

                    &lt;!&ndash;<span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                    VUETIFY
                  </span>&ndash;&gt;

                  </v-col>

                  <v-btn
                    class="align-self-end "
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me', /*{duration: 5000}*/)"
                  >
                    <v-icon large>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>&ndash;&gt;
            &lt;!&ndash;</v-img>&ndash;&gt;
          </v-carousel-item>
        </v-carousel>
        &lt;!&ndash;<v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white&#45;&#45;text mx-auto"
                justify="center"
              >
                <v-col
                  class="white&#45;&#45;text text-center"
                  cols="12"
                  tag="h1"
                >
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      WELCOME TO
                    </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                      VUETIFY
                    </span>

                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#about-me')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>&ndash;&gt;
      </v-row>
    </section>-->

    <!--<section
      id="features"
      class="grey lighten-3"
    >
      <div class="py-12"></div>
      <v-container  class="text-center">
        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              :data-aos="$vuetify.breakpoint.lgAndUp ? 'zoom-out-down' : 'fade-up'"
              data-aos-offset="-80"
              data-aos-delay="10"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              class="py-12 px-4"
              color="grey lighten-5"
              flat
              height="320"
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="88"
                  >
                    <v-icon
                      large
                      v-text="icon"
                    ></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <p  class="justify-center font-weight-black text-uppercase py-5"
              >{{title}}</p>


              <v-card-text
                class="subtitle-1"
                v-text="text"
              >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>-->

  <!--  <section
      id="projects"
      :data-aos="$vuetify.breakpoint.lgAndUp ? 'zoom-in' : 'fade-up'"
      data-aos-offset="0"
      data-aos-delay="10"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>
      <v-container class="text-center">
        <h2 :class="[$vuetify.breakpoint.smAndDown ? 'display' : 'display-2']" class=" mb-3 text-uppercase text-center">
          ПРИМЕРЫ РАБОТ
        </h2>
        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row class="px-0">
          <v-col class="px-0 mx-0 my-0 py-0" style="cursor: pointer" v-for="(image, i) in images"
                 :key="i" cols="12" xl="3" lg="3" sm="6" xs="12" md="4">
            <v-card flat tile >
              <v-img
                @click="showImage(image.src)"
                :src="image.src"
                :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>


    </section>-->

    <!--<v-dialog
      v-model="dialog"
      max-width="80%"
    >
      <img v-if="imageToShow" :src="imageToShow">
    </v-dialog>-->

    <!--<section id="about" >
      <v-parallax
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="10"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        :height="$vuetify.breakpoint.smAndDown ? 950 : 500"
        src="/back.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[icon, value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4 "
                >
                  <v-icon class="display-3" style="color: white !important;" x-large>{{ icon }}</v-icon>
                </div>

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                ></div>

                <div
                  class="display-2 font-weight-black mb-4"
                  v-text="value"
                ></div>


              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>-->

    <!--<section
      id="works"
      class="grey lighten-3"
    >
      <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>
      <v-container  class="text-center">
        <h2 :class="[$vuetify.breakpoint.smAndDown ? 'display' : 'display-2']" class=" mb-3 text-uppercase text-center">
          Мы осуществляем
        </h2>
        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <v-col


            v-for="(action, i) in actions"
            :key="i"
            cols="12"
            md="4"
          >
            <v-row
              no-gutters
              style="height: 150px;"
            >
              <v-col
                cols="4"
              >
                <v-theme-provider dark>
                  <div>

                    <v-icon
                      color="black"
                      size="88"
                      v-text="action.icon"
                    ></v-icon>

                  </div>
                </v-theme-provider>
              </v-col>
              <v-col
                cols="8"
                class="text-left"
              >
                <span>{{action.text}}</span>


              </v-col>
            </v-row>
            &lt;!&ndash;<v-card
              :data-aos="$vuetify.breakpoint.lgAndUp ? 'zoom-out-down' : 'fade-up'"
              data-aos-offset="-80"
              data-aos-delay="10"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="88"
                  >
                    <v-icon
                      large
                      v-text="icon"
                    ></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <p  class="justify-center font-weight-black text-uppercase py-5"
              >{{title}}</p>


              <v-card-text
                class="subtitle-1"
                v-text="text"
              >
              </v-card-text>
            </v-card>&ndash;&gt;
          </v-col>
        </v-row>
      </v-container>

      <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>
    </section>-->







    <!--<v-sheet
      :data-aos="$vuetify.breakpoint.lgAndUp ? 'zoom-in' : 'fade-up'"
      data-aos-offset="0"
      data-aos-delay="10"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      id="contact"
      color="blue-grey darken-2"
      dark
      tag="section"
      tile
    >
      <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>

      <v-container>
        <h2 :class="[$vuetify.breakpoint.smAndDown ? 'display' : 'display-2']" class=" mb-3 text-uppercase text-center">
          Контакты
        </h2>
        <v-row>
          <v-col cols="12">
            <h2 :class="[$vuetify.breakpoint.smAndDown ? 'display' : 'display-2']" class=" mb-3 text-uppercase text-center">
              <v-icon :large="$vuetify.breakpoint.mdAndDown" :x-large="$vuetify.breakpoint.lgAndUp">mdi-phone</v-icon>
              <a class="text-decoration-none" style="color: white" href="tel:+380954304600">(095) 430 46 00 </a>
            </h2>

          </v-col>
        </v-row>

        <v-responsive
          class="mx-auto mb-5"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-theme-provider light>
          <v-row>
            <v-col cols="12" lg="6" xl="6" md="12" sm="12" xs="12">
              <v-col cols="12">
                <v-text-field
                  flat
                  label="Ваше имя*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Ваш Email*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  flat
                  label="Ваше сообщение*"
                  solo
                ></v-textarea>
              </v-col>

              <v-col
                class="mx-auto text-center"
                cols="12"
              >
                <v-btn
                  style="width: 100% !important;"
                  color="success"
                  x-large
                >
                  Отправить
                </v-btn>
              </v-col>
            </v-col>
            <v-col class="pt-6" cols="12" lg="6" xl="6" md="12" sm="12" xs="12">
              <div class="text-center" >
                <iframe
                  id="gmap_canvas"
                  width="100%"
                  height="455px"
                  src="https://maps.google.com/maps?q=Kyiv&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                />
              </div>
            </v-col>



          </v-row>
        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </v-sheet>-->
  </div>
</template>

<script>
import appHeader from "@/components/appHeader";
import appFeatures from "@/components/appFeatures";
import appProjects from "@/components/appProjects";
import appAbout from "@/components/appAbout";
import appWorks from "@/components/appWorks";
/*import Vue from 'vue';
import AOS from "aos";*/
//import "aos/dist/aos.css";
//import Parallax from "vue-parallaxy";

export default {
  components: {
    //Parallax,
    appHeader,
    appFeatures,
    appProjects,
    appAbout,
    appWorks,
  },
  /*mounted() {
    Vue.use(AOS.init());
    Vue.use(Parallax);
  },*/
  data() {
    return {
      dialog: false,
      imageToShow: '',
      img: ["Animals", "Arch", "Nature", "People", "Tech"],
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Mobile first & Responsive',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Think outside the box',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Small changes, big difference',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],
      features: [
        {
          icon: 'mdi-certificate',
          title: 'ГОД ГАРАНТИИ НА ВСЕ ВИДЫ РАБОТ',
          // text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
        {
          icon: 'mdi-city',
          title: 'РЕАЛИЗУЕМ РЕМОНТ ЛЮБОЙ СЛОЖНОСТИ В СЖАТЫЕ СРОКИ',
          //text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'mdi-cached',
          title: 'ВОЗЬМЕМ НА СЕБЯ ВСЕ РЕМОНТНЫЕ ХЛОПОТЫ',
          //text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
      actions: [
        {icon: 'mdi-screwdriver', text: 'Внутреннюю отделку любой сложности'},
        {icon: 'mdi-format-paint', text: 'Малярные и штукатурные работы'},
        {icon: 'mdi-box-cutter', text: 'Кладку линолеума, плинтусов и ламината'},
        {icon: 'mdi-rounded-corner', text: 'Монтаж гипсокартона'},
        {icon: 'mdi-wall', text: 'Перепланировку помещений'},
        {icon: 'mdi-image', text: 'Поклейку обоев'},
      ],
      stats: [
        ['mdi-calendar', '20', 'лет опыта на рынке ремонта'],
        ['mdi-key-variant', '400+', 'готовых объктов'],
        ['mdi-account-group', '50', 'опытных мастеров'],
        ['mdi-certificate', '12', 'месяцев гарантии'],
      ],
      items: [
        {src: '/bg_1.jpg', text: 'Комплексный ремонт помещений "под ключ"'},
        {
          src: '/bg_2.jpg', text: 'Высокое качество по доступной цене!'
        },
        {
          src: '/bg_3.jpg', text: 'Индивидуальный подход к каждому клиенту'
        },
      ],

      images: [
        {src: '/examples/1.jpg'},
        {src: '/examples/2.jpg'},
        {src: '/examples/3.jpg'},
        {src: '/examples/4.jpg'},
        {src: '/examples/5.jpg'},
        {src: '/examples/6.jpg'},
        {src: '/examples/7.jpg'},
        {src: '/examples/8.jpg'},
      ]
    }
  },
  methods: {
    getImg(name) {
      return "https://placeimg.com/400/225/" + name.toLowerCase();
    },

    showImage(pic) {
      this.dialog = true;
      this.imageToShow = pic;
      //console.log(pic);
    },
  }
}
</script>

<style lang="scss">
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}
</style>
