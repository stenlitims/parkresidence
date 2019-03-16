<template>
  <div class="inner-page">
    <flat :data="data" type="flat" :title="title"></flat>

    <div class="section-fl container">
      <calc :data="data"></calc>
    </div>

    <div v-if="gal">
      <div class="list-hod owl-carousel">
        <div class="item" v-for="item in gal" :key="item.id">
          <img :src="$url+item.imgm" alt>
        </div>
      </div>
    </div>

    <div class="section-fl-pad" v-if="similar.length">
      <div class="heading3 text-center">{{$t('flat["Похожие квартиры"]')}}</div>
      <div class="container wrap-list-flats2">
        <div class="list-flats list-flats2 js-list owl-carousel">
          <div class="item" v-for="item in similar" :key="item.id">
            <div
              class="fav"
              @click="$store.commit('setFav', item.id)"
              :class="{'active': $store.state.fav.includes(item.id)}"
            >
              <svg>
                <use xlink:href="#ic_heart"></use>
              </svg>
            </div>
            <nuxt-link :to="$i18n.path('')+item.building+'/'+item.floor+'/flat/'+item.id" exact>
              <div class="t1">
                {{item.rooms}}-{{$t('flat["комнатная"]')}}, {{item.square_total}} м
                <sup>2</sup>
              </div>

              <div class="img">
                <img :src="item.img" alt>
              </div>
              <div class="info">
                <div class="it">
                  <div class="k">{{$t('pd["Дом"]')}}</div>
                  <div class="v">{{item.building}}</div>
                </div>
                <div class="it">
                  <div class="k">{{$t('pd["Секция"]')}}</div>
                  <div class="v">{{item.section}}</div>
                </div>
                <div class="it">
                  <div class="k">{{$t('pd["Этаж"]')}}</div>
                  <div class="v">{{item.floor}}</div>
                </div>
              </div>
              <div class="price">
                {{$t('pd["от"]')}} {{item.price_m2 | Price}} грн./м
                <sup>2</sup>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import mix from "@/mixin/global";
import axios from "axios";
import flat from "~/components/flat.vue";
import calc from "~/components/calc.vue";

export default {
  components: {
    flat,
    calc
  },
  mixins: [mix],
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title
        }
      ]
    };
  },

  watch: {
    gal() {
      setTimeout(() => {
        this.loadFullGal();
      }, 50);
    },
    similar() {
      setTimeout(() => {
        this.loadResGal();
      }, 50);
    }
  },
  computed: {
    title() {
      let t = this.$t("flat[ " + this.data.rooms + "]");
      if (this.data.levels == "2") {
        t = this.$t("pd['Двухуровневая']");
      }
      let title = t + "  квартира, №" + this.data.number;
      return title;
    },
    gal() {
      let temp = this.$store.state.galPlan;
      if (!temp) return [];
      let gal = temp[this.data.building + this.data.section + this.data.type];
      // console.log(gal);
      // if (!gal) return [];
      return gal;
    },
    similar() {
      if (!this.$store.state.flats) return "";
      let cf = {
        square_total: [this.data.square_total - 7, this.data.square_total + 7],
        floor: [this.data.floor - 1, this.data.floor + 1],
        type: this.data.type
      };

      let res = this.$store.state.flats.filter(o => {
        return (
          cf.type != o.type &&
          cf.square_total[0] <= o.square_total &&
          cf.square_total[1] >= o.square_total &&
          cf.floor[0] <= o.floor &&
          cf.floor[1] >= o.floor
        );
      });

      return res;
    }
  },
  data() {
    return {
      mainClass: ["def-page", "black-header"],
      load: false,
      image: null,
      galUp: false
    };
  },
  asyncData({ params, error }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios
      .get(api + params.flat + "&action=getFlat")
      .then(res => {
        //   if (!res.data.type) {
        return {
          data: res.data,
          image: res.data.img
        };
        //   }
      })
      .catch(e => {
        error({ statusCode: 404, message: "Страница не найдена" });
      });
  },
  created() {
    if (!this.$store.state.flats) {
      //  console.log(3);
      //  this.load = true;
      this.$store.dispatch("getFlats");
    }
    if (
      !this.$store.state.galPlan[
        this.data.building + this.data.section + this.data.type
      ]
    ) {
      this.$store.dispatch("getGalPlan", {
        building: this.data.building,
        section: this.data.section,
        type: this.data.type
      });
    }
  },
  mounted() {
    this.loadFullGal();
    this.loadResGal();
  }
};
</script>
