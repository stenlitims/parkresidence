<template>
  <div class="inner-page">
    <div class="container section">
      <h1 class="heading25 tt heading3-dh">{{$t('flat["Избранное"]')}}</h1>
      <div class="fav-list" v-if="list.length">
        <div class="row">
          <div class="col-xl-4 col-md-6" v-for="item in list" :key="item.id">
            <div class="item">
              <div class="l">
                <div class="img">
                  <nuxt-link :to="$i18n.path('')+item.section+'/'+item.floor+'/'+item.id" exact>
                    <img :src="item.img" alt>
                  </nuxt-link>
                </div>
                <div class="del text-center">
                  <a href @click.prevent="$store.commit('setFav', item.id)">{{$t('flat["Убрать"]')}}</a>
                </div>
              </div>
              <div class="info">
                <table>
                  <tbody>
                    <tr>
                      <td>Квартира №</td>
                      <td>{{item.number}}</td>
                    </tr>
                    <tr>
                      <td>{{$t('pd["Дом"]')}}</td>
                      <td>{{item.building}}</td>
                    </tr>
                    <tr>
                      <td>{{$t('pd["Секция"]')}}</td>
                      <td>{{item.section}}</td>
                    </tr>
                    <tr>
                      <td>{{$t('pd["Этаж"]')}}</td>
                      <td>{{item.floor}}</td>
                    </tr>
                    <tr>
                      <td>{{$t('pd["Комнат"]')}}</td>
                      <td>{{item.rooms}}</td>
                    </tr>
                    <tr>
                      <td>
                        {{$t('pd["Площадь"]')}}, м
                        <sup>2</sup>
                      </td>
                      <td>{{item.square_total}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="n-info text-center">
        <span>{{$t('pd["К сожалению"]')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
//import axios from "axios";
export default {
  head() {
    return {
      title: this.$t('flat["Избранное"]'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('flat["Избранное"]')
        }
      ]
    };
  },
  mixins: [mix],
  data() {
    return {
      mainClass: ["def-page", "black-header", "bg-grey"]
    };
  },
  // asyncData({ params }) {
  //   let api = process.env.api;
  //   if (!api) {
  //     let api = context.env.api;
  //   }
  //   return axios.get(api + "14").then(res => {
  //     return {
  //       data: res.data
  //     };
  //   });
  // },
  computed: {
    list() {
      if (!this.$store.state.flats) return "";
      let flats = this.$store.state.flats.filter(o => {
        return this.$store.state.fav.includes(o.id);
      });
      return flats;
    }
  },
  mounted() {
    if (!this.$store.state.flats) {
      this.$store.dispatch("getFlats");
    }
  },
  methods: {}
};
</script>
