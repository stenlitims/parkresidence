<template>
  <div class="inner-page">
    <div class="container section">
      <podbor mode="podbor"></podbor>
    </div>
    <div class="main-text-bottom">
      <div class="container text-center">
        <div class="heading3">Нет времени на поиски квартиры?
          <br>Мы вам поможем.
        </div>
        <div class="text">Наш менеджер подберет для вас только самые подходящие квартиры, а также
          <br>ответит на все вопросы. Все что вам нужно это указать желаемые параметры.
        </div>
        <a href class="btn btn-def">
          <span>Заявка на подбор</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
import podbor from "~/components/podbor";
export default {
  components: {
    podbor
  },
  mixins: [mix],
  data() {
    return {
      mainClass: ["def-page", "black-header", "lg-bg"]
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "16").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {},
  mounted() {},
  methods: {
    
  }
};
</script>
