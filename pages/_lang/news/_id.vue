<template>
  <div class="inner-page">
    <h1 class="def-h1" v-if="d.menutitle">{{d.menutitle}}</h1>
    <div class="container">
      <div class="news-one" v-if="$route.params.id">
        <div class="container2 section">
          <div class="container3">
            <div class="news-h">
              <div class="n-date">
                <svg>
                  <use xlink:href="#ic_calendar"></use>
                </svg>
                {{one.date}}
              </div>
            </div>
            <div class="heading25">{{one.pagetitle}}</div>
          </div>

          <div class="new-img">
            <img :src="$url+one.image" alt>
          </div>

          <div class="container3">
            <div class="def-text" v-html="one.content"></div>
          </div>
        </div>
      </div>
      <div v-else class="container2 section">
        <h1 class="heading25 tt heading3-dh">{{title}}</h1>
        <div class="list-news">
          <div class="item" v-for="(item, i) in news" :key="i">
            <div class="info">
              <div class="n-date">
                <svg>
                  <use xlink:href="#ic_calendar"></use>
                </svg>
                {{item.date}}
              </div>
              <div class="title">
                <nuxt-link :to="$i18n.path('')+'news/'+item.alias" exact>{{item.pagetitle}}</nuxt-link>
              </div>
              <div class="introtext">
                <p>{{introtext(item)}}</p>
              </div>

              <div class="more">
                <nuxt-link :to="$i18n.path('')+'news/'+item.alias" exact>{{$t('main["Подробнее"]')}}</nuxt-link>
              </div>
            </div>
            <div class="img">
              <nuxt-link :to="$i18n.path('')+'news/'+item.alias" exact><img :src="$url+item.image_mini" alt></nuxt-link>
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
      mainClass: ["def-page", "black-header"],
      newsId: null
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "10").then(res => {
      return {
        data: res.data
      };
    });
  },

  head() {
    let data = this.data[this.$store.state.locale];
    if (this.$route.params.id) {
      data = this.one;
    }
    let title = data.pagetitle + this.$store.state.siteName;
    if (data.longtitle) {
      title = data.longtitle;
    }

    return {
      title: title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: data.description
        }
      ]
    };
  },

  mounted() {
    //  console.log(this.$route.params);
  },
  computed: {
    news() {
      let data = this.data.news[this.$store.state.locale];
      return data;
    },
    one() {
      if (this.$route.params.id) {
        return this.news[this.$route.params.id];
      }
      return null;
    }
  },
  methods: {
   
  }
};
</script>
