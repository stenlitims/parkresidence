<template>
  <div class="error-page" style="background-image: url(https://web.park-residence.com.ua/assets/images/404.jpg)">
    <div class="error-logo">
      <svg>
        <use xlink:href="#ic_logo"></use>
      </svg>
    </div>

    <div class="error-info">
      <div v-if="error.statusCode === 404">
        <div class="num">404</div>
        <div class="text" v-html="l(' Ошибка 404. Такой страницы не существует. <br>Возможно вы неправильно ввели адрес или страница удалена.','Помилка 404. Такої сторінки не існує.<br> Можливо ви неправильно ввели адресу або сторінка видалена.')">
        </div>
      </div>
      <div v-else>
        <div class="num">{{l('Ошибка', 'Помилка')}} {{error.statusCode}}</div>
      </div>

      <div class="link">
        <nuxt-link  :to="url">{{l('Перейти на главную', 'Перейти на головну')}}</nuxt-link>
      </div>
    </div>

    <div class="error-b">
      <div class="t1">{{l('Есть вопросы?', 'Є питання?')}}</div>
      <div class="er-ph">
        <a :href="'tel:'+$store.state.mPhone" @click="glGa">{{$store.state.mPhone}}</a>
      </div>
      <div class="soc-list">
         <a :href="$store.state.soc.facebook_mes"  @click="glGa('mes')" target="_blank">
            <svg>
              <use xlink:href="#ic_messenger"></use>
            </svg>
          </a>
          <a :href="$store.state.soc.telegram"  @click="glGa('mes')" target="_blank">
            <svg>
              <use xlink:href="#ic_telegram"></use>
            </svg>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blank",
   data() {
    return {
      url: '/'
    };
  },
  mounted() {
    var lang = location.pathname.split("/");
    if (lang[1] == "ua") {
      this.$store.commit("SET_LANG", "ua");
      this.url = '/ua/'
    }
  },
  methods: {
    l(ru, ua) {
      if (this.$store.state.locale == "ru") {
        return ru;
      }
      return ua;
    }
  }
};
</script>

<style lang="scss">
</style>
