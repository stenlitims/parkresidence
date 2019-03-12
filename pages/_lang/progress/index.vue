<template>
  <div class="inner-page">
    <div class="container section">
      <div class="container3">
        
        <div class="header-hodrabot">
          <div class="l">

            <div class="heading25 tt heading3-dh">{{title}} </div>

            <!-- <a href="#">
              <svg>
                <use xlink:href="#ic_video"></use>
              </svg>
              <span>{{$t('links["Видеокамера"]')}}</span>
            </a>
            
            <a href="#" class="grafic-hod">
              <svg>
                <use xlink:href="#ic_grafic"></use>
              </svg>
              <span>{{$t('links["График строительства"]')}}</span>
            </a> -->
            
          </div>

          <div class="r">
            <div class="sd">
              {{$t('links["Сдача в"]')}}
              <span>2020</span>
            </div>
          </div>
        </div>

        <div class="hod-list">
          <div class="item" v-for="(item, i) in list" :key="i">
            <div class="info">
              <div class="heading4">
                <nuxt-link :to="$i18n.path('')+'progress/'+item.alias" exact>{{item.pagetitle}}</nuxt-link>
              </div>
              <div class="count">
                <div class="it">
                  <div class="ico">
                    <svg>
                      <use xlink:href="#ic_photo"></use>
                    </svg>
                  </div>
                  <div class="t">{{item.count_photo}}</div>
                </div>
                <div class="it">
                  <div class="ico">
                    <svg>
                      <use xlink:href="#ic_video"></use>
                    </svg>
                  </div>
                  <div class="t">{{item.count_videos}}</div>
                </div>
              </div>

              <div class="text">
                <p>{{introtext(item)}}</p>
              </div>
            </div>
            <div class="img">
              <nuxt-link :to="$i18n.path('')+'progress/'+item.alias" exact>
                <img :src="$url+item.image_mini" alt>
                <div class="plus"></div>
              </nuxt-link>
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
import orderBy from "lodash.orderby";
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
    return axios.get(api + "14").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {
    list() {
      let data = this.data.data[this.$store.state.locale];
      data = orderBy(data, ['menuindex'], ['asc']);
      return data;
    }
  },
  mounted() {},
  methods: {}
};
</script>
