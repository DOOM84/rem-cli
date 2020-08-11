<template>
  <v-app >
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
    <v-app-bar
      dark
      :inverted-scroll="$vuetify.breakpoint.lgAndUp"
      elevate-on-scroll

      app
      color="blue-grey darken-3"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <nuxt-link class="text-decoration-none" to="/" style="color: white !important;">
          <span class="title ml-3 mr-5">Ремонт&nbsp;<span class="font-weight-light">Услуги</span></span>
        </nuxt-link>



      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn @click="goTo('#features', -30)" text class="text-capitalize mr-2">
            Информация
        </v-btn>
        <v-btn @click="goTo('#projects', -30)" text class="text-capitalize mr-2">
            Примеры работ
          </v-btn>
        <v-btn @click="goTo('#about', 80)" text class="text-capitalize mr-2">
          О нас
        </v-btn>
        <v-btn @click="goTo('#works', -30)" text class="text-capitalize mr-2">
          Мы осуществляем
        </v-btn>
        <v-btn @click="goTo('#contact', 0)" text class="text-capitalize mr-2">
          Контакты
        </v-btn>

      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      dark
      app
      fixed
      v-model="drawer"
      temporary
    >
      <v-list dense>

        <v-list-item
          link
          @click="goTo('#features', -30)"
        >
          <v-list-item-content>
            <v-list-item-title>Информация</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="goTo('#projects', 0)"
        >
          <v-list-item-content>
            <v-list-item-title>Примеры работ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="goTo('#about', 0)"
        >
          <v-list-item-content>
            <v-list-item-title>О нас</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="goTo('#works', 0)"
        >
          <v-list-item-content>
            <v-list-item-title>Мы осуществляем</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="goTo('#contact', 0)"
        >
          <v-list-item-content>
            <v-list-item-title>Контакты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

        <v-main>
          <nuxt />
        </v-main>

    <app-contacts />


        <v-footer
          class="justify-center"
          color="#292929"
          height="100"
        >
          <div class="title font-weight-light grey--text text--lighten-1 text-center">
            &copy; {{ (new Date()).getFullYear() }} — Ремонт Услуги
          </div>
        </v-footer>

  </v-app>
</template>

<script>
import Vue from 'vue';
import AOS from "aos";
import "aos/dist/aos.css";
import appContacts from "@/components/appContacts";
export default {
  components: {appContacts},
  head () {
    return {
      bodyAttrs: {
        class: this.loaded ? 'loaded' : ''
      }
    }
  },
  mounted() {
    Vue.use(AOS.init());
    /*if ($nuxt.$route.hash) {
      this.scrollToHash()
    }*/

    this.loaded = true;
  },

  data() {
    return {
      drawer: false,
      loaded: false,
    }
  },
  methods: {
    goTo(id, offset){
      if(this.drawer){this.drawer = false}
      try {
        if(document.getElementById(id.substr(1))){
          this.$vuetify.goTo(id, {offset: offset})
        }else{
          this.$router.push({ path: '/', hash: id})
        }

      }catch (e) {
        console.log(e);
      }
    }

  },
}
</script>
