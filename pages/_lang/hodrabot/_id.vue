<template>
  <div class="inner-page">
    <div class="container section">
      <div class="news-one">
        <div class="container2 section">
          <div class="container3">
            <div class="news-h">
              <div class="n-date">
                <svg>
                  <use xlink:href="#ic_calendar"></use>
                </svg>
                {{d.date}}
              </div>
            </div>
            <h1 class="heading25">{{title}}</h1>
          </div>

          <div class="new-img">
            <div class="list-hod owl-carousel">
              <div class="item" v-for="(item, i) in data.gal" :key="i">
                <a
                  :href="item.description ? item.description : $url+item.url"
                  class="img"
                  data-fancybox="gallery"
                  :class="{'video': item.description}"
                >
                  <img :src="$url+item.imgm" alt>
                  <div class="full">
                    <svg>
                      <use xlink:href="#ico-full"></use>
                    </svg>
                  </div>
                  <div class="ico" v-if="item.description">
                    <svg>
                      <use xlink:href="#ico-play"></use>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="container3">
            <div class="def-text" v-html="d.content"></div>
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
  asyncData({ params, error }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios
      .get(api + params.id)
      .then(res => {
        //   if (!res.data.type) {
        return {
          data: res.data
        };
        //   }
      })
      .catch(e => {
        error({ statusCode: 404, message: "Страница не найдена" });
      });
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      $(".list-hod").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        navText: ["", ""],
        autoplaySpeed: 1000,
        navSpeed: 1000,
        autoHeight: true
      });
    }, 100);
  },
  methods: {}
};
</script>
