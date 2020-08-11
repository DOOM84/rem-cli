<template>
  <section
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
        </v-col>
      </v-row>
    </v-container>

    <div :class="[$vuetify.breakpoint.smAndDown ? 'py-6' : 'py-12']"></div>
  </section>
</template>

<script>
export default {
name: "appWorks",
  data(){
    return {
      actions: [
        {icon: 'mdi-screwdriver', text: 'Внутреннюю отделку любой сложности'},
        {icon: 'mdi-format-paint', text: 'Малярные и штукатурные работы'},
        {icon: 'mdi-box-cutter', text: 'Кладку линолеума, плинтусов и ламината'},
        {icon: 'mdi-rounded-corner', text: 'Монтаж гипсокартона'},
        {icon: 'mdi-wall', text: 'Перепланировку помещений'},
        {icon: 'mdi-image', text: 'Поклейку обоев'},
      ],
    }
  }
}

</script>

<style scoped>

</style>
