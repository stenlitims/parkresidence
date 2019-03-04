<template>
  <div class="inner-page">
    <div class="container section">
      <div class="flat-grid">
        <div class="f-back">
          <nuxt-link :to="$i18n.path('')+'podbor'" exact>{{$t('flat["Назад к выбору квартир"]')}}</nuxt-link>
        </div>
        <div class="f-btns">
          <div class="flat-btns">
            <a href="#" @click.prevent="image = data.img" :class="{'active': image == data.img}">2D</a>
            <a
              href="#"
              @click.prevent="image = data.img_3d"
              :class="{'active': image == data.img_3d}"
            >3D</a>
            <a href="#">{{$t('flat["На этаже"]')}}</a>
            <a href="#">Генплан</a>
          </div>
        </div>
        <div class="f-cl1"></div>
        <div class="f-info">
          <div class="sale">-3%</div>
          <h3 class="heading3">{{title}}</h3>
          <table class="inf-table">
            <tbody>
              <tr>
                <td class="t">
                  <span>{{$t('flat["Общая площадь"]')}}</span>
                </td>
                <td>
                  {{data.square_total}} м
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td class="t">
                  <span>{{$t('flat["Жилая площадь"]')}}</span>
                </td>
                <td>
                  {{data.square_live}} м
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td class="t">
                  <span>{{$t('pd["Комнат"]')}}</span>
                </td>
                <td>{{data.rooms}}</td>
              </tr>
              <tr>
                <td class="t">
                  <span>{{$t('flat["Этажы"]')}}</span>
                </td>
                <td>{{floors}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="f-img">
          <div class="img">
            <a :href="image" data-fancybox="gallery">
              <img :src="image" class="img-mw" :alt="title">
              <span class="zoom">
                <svg>
                  <use xlink:href="#ic-zoom"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div class="f-price-btns">
          <div class="w-price">
            <div class="t">{{$t('flat["цена"]')}}</div>
            <div class="price">
              {{$t('pd["от"]')}} {{data.price_m2 | Price}} грн./м
              <sup>2</sup>
            </div>
          </div>
          <a href="#" class="btn btn-def">
            <span>{{$t('flat["Оставить заявку"]')}}</span>
          </a>
          <div class="link">
            <a href="#">{{$t('flat["Сообщить о снижении цены"]')}}</a>
          </div>
        </div>

        <div class="f-links">
          <a href="#" class="l-print">
            <svg>
              <use xlink:href="#ic-print"></use>
            </svg>
            {{$t('flat["Печать"]')}}
          </a>
          <a href="#" class="l-dw">
            <svg>
              <use xlink:href="#ic_dw"></use>
            </svg>
            {{$t('flat["Скачать"]')}} PDF
          </a>
          <a href="#" class="l-print">
            <svg>
              <use xlink:href="#ic-mail"></use>
            </svg>
            {{$t('form["writeUsBtn"]')}} на e-mail
          </a>
          <a
            href="#"
            class="l-fav"
            :class="{'active': $store.state.fav.includes(data.id)}"
            @click.prevent="$store.commit('setFav', data.id)"
          >
            <svg>
              <use xlink:href="#ic_heart"></use>
            </svg>
            <span v-if="$store.state.fav.includes(data.id)">{{$t('flat["Убрать"]')}}</span>
            <span v-else>{{$t('flat["В избранное"]')}}</span>
          </a>
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
  computed: {
    title() {
      return (
        this.$t("flat[" + this.data.rooms + "]") +
        "  квартира, " +
        this.data.type
      );
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
      image: null
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
  },
  mounted() {}
};
</script>
