<template>
  <div class="inner-page">
    <div class="container">
      <div class="container2">
        <h1 class="heading25 tt heading3-dh">{{title}}</h1>
        <div class="section">
          <div class="howbuy-list" v-if="data.tv.howbuy">
            <div class="item" v-for="(item, i) in list" :key="i">
              <div class="row">
                <div class="col-lg-4">
                  <div class="title">{{item.title}}</div>
                  <div class="introtext">{{item.introtext}}</div>
                </div>
                <div class="col-lg-8">
                  <div class="text" v-html="item.text"></div>
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
  mounted() {

  },
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
