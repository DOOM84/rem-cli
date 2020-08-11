<template>
  <section id="about" >
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
  </section>
</template>

<script>
export default {
name: "appAbout",
  data(){
    return {
      stats: [
        ['mdi-calendar', '20', 'лет опыта на рынке ремонта'],
        ['mdi-key-variant', '400+', 'готовых объктов'],
        ['mdi-account-group', '50', 'опытных мастеров'],
        ['mdi-certificate', '12', 'месяцев гарантии'],
      ],
    }
  }
}

</script>

<style scoped>

</style>
