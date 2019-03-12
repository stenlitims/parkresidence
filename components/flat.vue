<template>
  <div class="container section-fl">
    <div class="flat-grid">
      <div class="f-back">
        <nuxt-link :to="$i18n.path('')+'podbor'" exact>{{$t('flat["Назад к выбору квартир"]')}}</nuxt-link>
      </div>
      <div class="f-btns">
        <div class="flat-btns">
          <a href="#" @click.prevent="typec = 'img'" :class="{'active': typec == 'img'}">2D</a>
          <a
            href="#"
            v-if="data.img_3d"
            @click.prevent="typec = 'img_3d'"
            :class="{'active': typec == 'img_3d'}"
          >3D</a>
          <a
            href="#"
            @click.prevent="typec = 'floor'"
            :class="{'active': typec == 'floor'}"
          >{{$t('flat["На этаже"]')}}</a>
          <!-- <a href="#">Генплан</a> -->
        </div>
      </div>
      <div class="f-cl1"></div>
      <div class="f-info">
        <div class="sale" v-if="data.discount != '0'">-{{data.discount}}%</div>
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
            <tr v-if="type == 'plan'">
              <td class="t">
                <span>{{$t('flat["Этажы"]')}}</span>
              </td>
              <td>{{floorsName}}</td>
            </tr>
            <tr v-else>
              <td class="t">
                <span>{{$t('pd["Этаж"]')}}</span>
              </td>
              <td>{{data.floor}}</td>
            </tr>
            <tr v-if="type == 'flat'">
              <td class="t">
                <span>{{$t('pd["Дом"]')}}</span>
              </td>
              <td>{{data.building}}</td>
            </tr>
            <tr v-if="type == 'flat'">
              <td class="t">
                <span>{{$t('pd["Секция"]')}}</span>
              </td>
              <td>{{data.section}}</td>
            </tr>
            <tr v-if="type == 'flat'">
              <td class="t">
                <span>{{$t('pd["Тип планировки"]')}}</span>
              </td>
              <td>{{data.type}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="f-img">
        <div class="img" v-if="typec == 'img' || typec == 'img_3d'">
          <a :href="data[typec]" data-fancybox="gallery">
            <img :src="data[typec]+'?v1'" class="img-mw" :alt="title">
            <span class="zoom">
              <svg>
                <use xlink:href="#ic-zoom"></use>
              </svg>
            </span>
          </a>
        </div>
        <div class="floor" v-if="typec == 'floor'">
          <div class="img">
            <img :src="plan_img" ref="plan_img" alt>
            <div class="svg">
              <svg :viewBox="viewBox">
                <polygon :points="svg.svg_coords"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="f-price-btns">
        <div class="m-flex">
          <div class="w-price">
            <div class="t">{{$t('flat["цена"]')}}</div>
            <div class="price">
              {{$t('pd["от"]')}} {{data.price_m2 | Price}} грн./м
              <sup>2</sup>
            </div>
          </div>
          <a
            class="btn btn-def js-modal"
            data-fancybox="zvFlat"
            data-src="#zvFlat"
            href="javascript:;"
          >
            <span>{{$t('flat["Оставить заявку"]')}}</span>
          </a>
        </div>

        <div class="link">
          <a
            class="js-modal"
            data-fancybox="zvPrice"
            data-src="#zvPrice"
            href="javascript:;"
          >{{$t('flat["Сообщить о снижении цены"]')}}</a>
        </div>
      </div>

      <div class="f-links">


        <!-- <div>
          <a href="#" class="l-print">
            <svg>
              <use xlink:href="#ic-print"></use>
            </svg>
            {{$t('flat["Печать"]')}}
          </a>
        </div>
        <div>
          <a href="#" class="l-dw">
            <svg>
              <use xlink:href="#ic_dw"></use>
            </svg>
            {{$t('flat["Скачать"]')}} PDF
          </a>
        </div>
        <div>
          <a href="#" class="l-print">
            <svg>
              <use xlink:href="#ic-mail"></use>
            </svg>
            {{$t('form["writeUsBtn"]')}}
            <span class="mob-nome">на e-mail</span>
          </a>
        </div> -->


        <div>
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

    <div class="def-modal zv-modal text-center" id="zvFlat">
      <div class="heading4">{{$t('flat["Оставить заявку"]')}}</div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="zvFlat"
        :adata="data"
        :fields="{
        name:$t('form.name'),
        phone:$t('form.phone')
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text">{{$t('modal["или напишите нам"]')}}</div>
        <socList/>
      </div>
    </div>

    <div class="def-modal zv-modal text-center" id="zvPrice">
      <div
        class="heading4 text-center"
        style="max-width: 250px;"
      >{{$t('flat["Сообщить о снижении цены"]')}}</div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="zvPrice"
        :adata="data"
        :fields="{
        name:$t('form.name'),
        phone:$t('form.phone')
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text">{{$t('modal["или напишите нам"]')}}</div>
        <socList/>
      </div>
    </div>
  </div>
</template>


<script>
import cForm from "~/components/elem/cForm.vue";
import socList from "~/components/elem/socList.vue";
export default {
  components: {
    cForm,
    socList
  },
  props: ["data", "type", "title", "floorsName"],
  data() {
    return {
      image: null,
      typec: "img",
      viewBox: "0, 0, 673, 1080"
    };
  },
  created() {
    this.image = this.data.img;
  },
  watch: {
    typec() {
      if (this.typec != "floor") return;
      this.$nextTick(() => {
        let img = this.$refs.plan_img;

        img.onload = () => {
          this.viewBox = "0, 0, " + img.naturalWidth + ", " + img.naturalHeight;
        };
      });
    }
  },
  computed: {
    plan_img() {
      if (!this.$store.state.floorplans) return;
      let plan = this.$store.state.floorplans.filter(o => {
        return o.id == this.svg.floorplan_id;
      });

      return plan[0].img;
    },
    svg() {
      if (!this.$store.state.plans_floorplans) return {};
      let plans_floorplans = this.$store.state.plans_floorplans.filter(o => {
        return o.plan_id == this.data.plan_id;
      });
      return plans_floorplans[0];
    }
  },
  mounted() {
    this.loadFancy();

    if (!this.$store.state.floorplans) {
      this.$store.dispatch("getFloorplans");
    }
  }
};
</script>
