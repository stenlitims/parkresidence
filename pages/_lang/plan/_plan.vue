<template>
  <div class="inner-page1">
    <flat :data="data" type="plan" :title="title" :floorsName="floorsName"></flat>

    <div v-if="gal">
      <div class="list-hod owl-carousel">
        <div class="item" v-for="item in gal" :key="item.id">
          <img :src="$url+item.imgm" alt>
        </div>
      </div>
    </div>

    <div class="section-fl-pad">
      <div class="heading3 text-center">{{$t('flat["Данная планировка доступна на этажах"]')}}</div>
      <div class="list-floors">
        <div class="table-flats">
          <div class="row t-head">
            <div class="col">{{$t('pd["Дом"]')}}</div>
            <div class="col">{{$t('pd["Секция"]')}}</div>
            <div class="col">{{$t('pd["Этаж"]')}}</div>
            <div class="col">
              грн./м
              <sup>2</sup>
            </div>
            <div class="col-1"></div>
          </div>
          <div class="item" v-for="item in floors" :key="item.id">
            <nuxt-link
              :to="$i18n.path('')+item.building+'/'+item.floor+'/flat/'+item.id"
              exact
              class="row t-item"
            >
              <div class="col">{{item.building}}</div>
              <div class="col">{{item.section}}</div>
              <div class="col">{{item.floor}}</div>
              <div class="col">{{item.price_m2 | Price}}</div>
              <div class="col-1"></div>
            </nuxt-link>
            <div
              class="fav"
              @click="$store.commit('setFav', item.id)"
              :class="{'active': $store.state.fav.includes(item.id)}"
            >
              <svg>
                <use xlink:href="#ic_heart"></use>
              </svg>
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
import flat from "~/components/flat.vue";

export default {
  components: {
    flat
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
      //    console.log(this.gal);
      setTimeout(() => {
        this.loadFullGal();
      }, 50);
    }
  },
  computed: {
    title() {
      let t = this.$t("flat[ " + this.data.rooms + "]");
      if(this.data.levels == '2'){
        t = this.$t("pd['Двухуровневая']");
      }
      let title = t + "  квартира, " + this.data.type;
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
    floors() {
      if (!this.$store.state.flats) return "";
      let flats = this.$store.state.flats.filter(o => {
        return (
          this.data.building == o.building &&
          this.data.type == o.type &&
          this.data.section == o.section
        );
      });

      return flats;
    },
    floorsName() {
      if (!this.floors) return;
      if(this.floors.length == 1) return this.floors[0].floor;
      let flats = this.floors;

      let arr = [];
      let i = [];
      let n = 0;

      flats.forEach(o => {
        let t = o.floor;

        if (n == 0) {
          i.push([o.floor]);
        }

        if (n == o.floor - 1) {
        } else if (n != 0) {
          i[i.length - 1][1] = o.floor;
        }
        n = o.floor;
      });

      i[i.length - 1][1] = flats[flats.length - 1].floor;

      //  console.log(i);

      i.forEach(o => {
        arr.push(o.join("-"));
      });

      return arr.join(", ");
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
      .get(api + params.plan + "&action=getPlan")
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
  }
};
</script>
