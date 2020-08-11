<template>
  <section
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
        <v-col class="px-0 mx-0 my-0 py-0"  style="cursor: pointer" v-for="(image, i) in images"
               :key="i" cols="12" xl="3" lg="3" sm="6" xs="12" md="4">
          <transition name="fade">
          <v-card flat tile :ref="'img'+i" >
            <v-img @mouseover="zoomPic" @mouseleave="zoomOutPic"
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
          </transition>
        </v-col>
      </v-row>
    </v-container>
    <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>

    <v-dialog
      v-model="dialog"
      max-width="80%"
    >
      <img v-if="imageToShow" :src="imageToShow">
    </v-dialog>


  </section>
</template>

<script>
export default {
name: "appProjects",
  data(){
    return {
      dialog: false,
      images: [
        {src: '/examples/1.jpg'},
        {src: '/examples/2.jpg'},
        {src: '/examples/3.jpg'},
        {src: '/examples/4.jpg'},
        {src: '/examples/5.jpg'},
        {src: '/examples/6.jpg'},
        {src: '/examples/7.jpg'},
        {src: '/examples/8.jpg'},
      ],
      imageToShow: '',
    }
  },
  methods: {
    showImage(pic) {
      this.dialog = true;
      this.imageToShow = pic;
      //console.log(pic);
    },
    zoomPic(evnt){
      evnt.target.previousElementSibling.classList.remove("img-hover-zoomOut");
      evnt.target.previousElementSibling.classList.add("img-hover-zoom");

    },
    zoomOutPic(evnt){
      evnt.target.firstChild.nextElementSibling.classList.add("img-hover-zoomOut");
      evnt.target.firstChild.nextElementSibling.classList.remove("img-hover-zoom");
    }
  },


}

</script>

<style scoped>


</style>
