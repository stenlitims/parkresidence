<template>
  <div class="inner-page">
    <h1 class="def-h1" v-if="d.menutitle">{{d.menutitle}}</h1>
    <div class="container">
      <div class="container2">
        <div class="heading25 tt heading3-dh">{{title}}</div>
        <div class="section">
          <div class="howbuy-list" v-if="data.tv.howbuy">
            <div class="item" v-for="(item, i) in list" :key="i">
              <div class="row">
                <div class="col-lg-4 col-md-5">
                  <div class="title">{{item.title}}</div>
                  <div class="introtext">{{item.introtext}}</div>
                </div>
                <div class="col-lg-8 col-md-7">
                  <div class="wrap-t">
                    <div class="text" v-html="item.text"></div>
                    <div class="more hideMin675">
                      <a
                        href="#"
                        :data-texth="$t('main[\'Скрыть\']')"
                        :data-textsh="$t('main[\'Подробнее\']')"
                        class="js-more"
                      >{{$t('main["Подробнее"]')}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
export default {
  mixins: [mix],
  data() {
    return {
      mainClass: ["def-page", "black-header"]
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "11").then(res => {
      return {
        data: res.data
      };
    });
  },
  mounted() {},
  computed: {
    list() {
      let arr = [];
      let lang = this.$store.state.locale;
      for (let item of this.data.tv.howbuy) {
        let ob = {
          title: item["title_" + lang],
          introtext: item["introtext_" + lang],
          text: item["text_" + lang]
        };

        arr.push(ob);
      }

      return arr;
    }
  }
};
</script>
