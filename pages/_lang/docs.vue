<template>
  <div class="inner-page">
    <h1 class="def-h1" v-if="d.menutitle">{{d.menutitle}}</h1>
    <div class="container section">
      <div class="container3">
        <div class="doc-wrap" v-for="(item, i) in data.docs" :key="i">
          <div class="heading3">{{item['title_' + lang]}}</div>
          <div class="doc-list">
            <div class="item" v-for="(item2, i2) in item.list" :key="i2">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">{{item2['title_' + lang]}}</div>
              </div>
              <a :href="$url+item2.image" target="_blank" class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <div class="t-dw">{{$t('links["Скачать"]')}}</div>
              </a>
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
    return axios.get(api + "15").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
