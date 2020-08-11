<template>
  <v-sheet
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
            <form
              ref="contactForm"
              @submit.prevent="onSubmit"
            >
            <v-col cols="12">
              <v-text-field
                v-model="form.name"
                flat
                label="Ваше имя*"
                solo
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                flat
                label="Ваш Email*"
                solo
              ></v-text-field>
            </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Ваш телефон (123-456-7890)*"
                  solo
                  type="tel"
                  v-model.trim="form.phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                ></v-text-field>
              </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="form.message"
                flat
                label="Ваше сообщение*"
                solo
              ></v-textarea>
            </v-col>

            <v-col
              class="mx-auto text-center"
              cols="12"
            >
              <v-alert :type="alertType" dismissible v-model="showAlert" transition="scale-transition" >
               {{text}}
              </v-alert>
            </v-col>
              <v-col
              class="mx-auto text-center"
              cols="12"
            >

              <v-btn
                type="submit"
                style="width: 100% !important;"
                color="success"
                x-large
                :loading="loading"
              >
                Отправить
              </v-btn>
            </v-col>
            </form>
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
  </v-sheet>
</template>

<script>
export default {
name: "appContacts",

  data(){
    return {
      loading: false,
      timeOutAlert: null,
      showAlert: false,
      alertType: 'error',
      text: '',
      form: {
        email: '',
        name:  '',
        message: '',
        phone: '',
      },
    }
  },

  methods: {
    onSubmit(){
      if(this.checkForm()){
        this.loading = true;
        this.contact()
      }
    },

    async contact(){
      try {
        const {success} = await this.$store.dispatch('auth/contact', this.form);
        this.runAlert(true, 'success', success);
        this.loading = false;
        this.$refs.contactForm.reset();
        this.form = {
            email: '',
            name:  '',
            message: '',
            phone: '',
        }
      }catch (e) {
        this.runAlert(true, 'error', 'Произошла ошибка. Попытайтесь позже.');
        this.loading = false;
        /*const message = e.response.data.errors;
        for (const key of Object.keys(message)) {
          this.showAlert = true;
          this.alertType = 'error';
          this.text = message[key][0];
          break;
        }*/
      }
    },

    checkForm(){
      if (!this.form.name)
      {
        this.runAlert(true, 'error', 'Заполните поле Имя');
        return  false;
      }else if(this.form.name.length < 3)
      {
        this.runAlert(true, 'error', 'Поле имя должно быть не менее 3 символов');
        return  false;
      }else if(this.form.name.length > 100)
      {
        this.runAlert(true, 'error', 'Поле имя должно быть не более 100 символов');
        return  false;
      }
      if(!this.form.phone)
      {
        this.runAlert(true, 'error', 'Укажите Ваш номер телефона');
        return  false;
      }else if(!this.validPhone(this.form.phone))
      {
        this.runAlert(true, 'error', 'Ваш номер телефона неверен');
        return false
      }
      if (!this.form.email)
      {
        this.runAlert(true, 'error', 'Укажите Ваш Email адрес');
        return false
      } else if (!this.validEmail(this.form.email))
      {
        this.runAlert(true, 'error', 'поле Email должно быть корректным адресом электронной почты');
        return false;
      }
      if (!this.form.message)
      {
        this.runAlert(true, 'error', 'Напишите ваше сообщение');
        return  false;
      } else if(this.form.message.length < 10)
      {
        this.runAlert(true, 'error', 'Поле Сообщение должно быть не менее 10 символов');
        return  false;
      } else if(this.form.message.length > 1000)
      {
        this.runAlert(true, 'error', 'Поле Сообщение должно быть не более 1000 символов');
        return  false;
      }
      return true;

    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    validPhone(phone){
      const re = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
      return re.test(phone);
    },

    runAlert(showAlert, alertType, text){
      this.showAlert = showAlert;
      this.alertType = alertType;
      this.text = text;
      if(this.timeOutAlert){clearTimeout(this.timeOutAlert); this.timeOutAlert = null;}
      this.timeOutAlert =
        setTimeout(()=>{
        this.showAlert=false
      },5000);

    }
  }
}

</script>

<style scoped>

</style>
