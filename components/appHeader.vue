<template>
  <section data-aos="fade-zoom-in"
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
          <!--<v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            :src="item.src"
          >-->
          <!--<v-theme-provider dark>
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
          </v-theme-provider>-->
          <!--</v-img>-->
        </v-carousel-item>
      </v-carousel>
      <!--<v-img
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
      </v-img>-->
    </v-row>
  </section>
</template>

<script>
import Vue from 'vue';
import Parallax from "vue-parallaxy";

export default {
  components: {
    Parallax,
  },
  mounted() {
    Vue.use(Parallax);
  },
name: "appHeader",

  data(){
    return {
      items: [
        {src: '/bg_1.jpg', text: 'Комплексный ремонт помещений "под ключ"'},
        {
          src: '/bg_2.jpg', text: 'Высокое качество по доступной цене!'
        },
        {
          src: '/bg_3.jpg', text: 'Индивидуальный подход к каждому клиенту'
        },
      ],
    }
  }
}


</script>

<style scoped>

</style>
