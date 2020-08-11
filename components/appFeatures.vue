<template>
  <section
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
            data-aos-offset="-100"
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
  </section>
</template>

<script>
export default {
name: "appFeatures",
  data(){
    return {
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
    }
  }
}

</script>

<style scoped>

</style>
