<template>
  <div class="inner-page">
    <div class="container section-fl wrap-floor-grid">
      <div class="floor-grid">
        <div class="floor-header">
          <div class="f-back">
            <nuxt-link
              :to="$i18n.path('')+'building/'+$route.params.bl+'/'+$route.params.fl"
              exact
            >{{l('Вернуться на генплан', 'Повернутися на генплан')}}</nuxt-link>
          </div>
          <nuxt-link :to="$i18n.path('')+'podbor'" exact class="link-ico">
            <div class="ico">
              <svg>
                <use xlink:href="#ico-settings"></use>
              </svg>
            </div>
            <span style="max-width: 100px" class="t">{{$t('links["Подбор по параметрам"]')}}</span>
          </nuxt-link>
        </div>

        <div class="floor-center">
          <div class="floor-genplan">
            <svg viewBox="0 0 1890.92 1577.14">
              <nuxt-link
                :class="{'active': $route.params.fl == 4}"
                :to="$i18n.path('')+'building/'+$route.params.bl+'/4'"
              >
                <path
                  d="M434.53.51V248.39H416.25V545.64h18.5V826.39h-413V709.89H.5V573.39H22V367.64H1V235.89H22V1.64S434.53.38,434.53.51Z"
                ></path>
              </nuxt-link>
              <nuxt-link
                :class="{'active': $route.params.fl == 3}"
                :to="$i18n.path('')+'building/'+$route.params.bl+'/3'"
              >
                <path
                  d="M487.75,860.89v264.75h166.5v-18h282.5v466.75h-261v-54h-318v53.25H21.5v-481H75.75V861.14Z"
                ></path>
              </nuxt-link>
              <nuxt-link
                :class="{'active': $route.params.fl == 2}"
                :to="$i18n.path('')+'building/'+$route.params.bl+'/2'"
              >
                <path
                  d="M1256.5,1109.39v17.75h167.25V862.64H1890v138.75h-25.25v93H1890v242.5h-27.5v238.75H1427.25v-53.75h-192v54.75h-260V1109.39S1256.25,1109.14,1256.5,1109.39Z"
                ></path>
              </nuxt-link>
              <nuxt-link
                :class="{'active': $route.params.fl == 1}"
                :to="$i18n.path('')+'building/'+$route.params.bl+'/1'"
              >
                <path
                  d="M1423.42,373.64V110.31h54.66V1.31h412.34V248h-18.34V545.31h18v281H1477.75V374S1423.42,374.31,1423.42,373.64Z"
                ></path>
              </nuxt-link>
            </svg>
          </div>

          <div class="floor-img">
            <div class="img">
              <img :src="plan.img" ref="plan_img" alt>
              <div class="svg">
                <svg :viewBox="viewBox">
                  <a
                    href="#"
                    v-for="item in plan.plans"
                    @click.prevent="linkFlat(item.flat)"
                    @mouseover="hover(item.flat)"
                    @mouseout="activeHover = false"
                    :class="{'bron': item.flat.status == 'Продано'}"
                    :data-key="'pl'+item.plan_id"
                    :key="item.id"
                  >
                    <polygon :points="item.svg_coords"></polygon>
                  </a>
                </svg>
                <div class="labels">
                  <div v-for="item in plan.plans" :key="item.id" :class="{'bron': item.flat.status == 'Продано'}">
                    <div class="label" :class="['pl'+item.plan_id, 'f'+$route.params.floor]">
                      <div v-if="item.flat.status != 'Продано'">
                        <div class="rooms">{{item.flat.rooms}}к</div>
                        <div class="sq">
                          {{ Math.round(item.flat.square_total)}} м
                          <sup>2</sup>
                        </div>
                      </div>
                      <div class="bron" v-else>Бронь</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="floor-nav">
            <div class="f-nav plus" @click="link('next')"></div>
            <div class="floor-nav-content">
              <div class="num">{{$route.params.floor}}</div>
              <div class="text">{{$t('pd["Этаж"]')}}</div>
            </div>
            <div class="f-nav minus" @click="link('prev')"></div>
          </div>
        </div>

        <div class="floor-footer">
          <div class="heading2">
            {{l('Выберите', 'Виберіть')}}
            <br>квартиру
          </div>

          <div class="floor-nums" :class="{'active': activeHover}">
            <div class="kv item">
              <div class="num">{{aFlat.number}}</div>
              <div class="t">№ {{l('квартиры','квартири')}}</div>
            </div>
            <div class="item">
              <div class="num">{{aFlat.rooms}}</div>
              <div class="t">{{l('Комнаты','Кімнати')}}</div>
            </div>
            <div class="item">
              <div class="num">{{aFlat.square_total}}</div>
              <div class="t">
                {{l('Площадь','Площа')}}, м
                <sup>2</sup>
              </div>
            </div>
          </div>

          <div class="f-empty"></div>
        </div>
      </div>
    </div>

    <div class="floor-mob-nav">
      <div class="col-floors col-ob">
        <div class="arr-l" @click="link('prev')"></div>
        <div class="arr-r" @click="link('next')"></div>
        <div class="val">{{$route.params.floor}}</div>
        <div class="t">{{$t('pd["Этаж"]')}}</div>
      </div>
      <nuxt-link :to="$i18n.path('')+'podbor'" exact class="link-ico">
        <div class="ico">
          <svg>
            <use xlink:href="#ico-settings"></use>
          </svg>
        </div>
        <span class="t">Параметри</span>
      </nuxt-link>
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
      title: this.floorTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.floorTitle
        }
      ]
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "7").then(res => {
      return {
        data: res.data
      };
    });
  },
  components: {},
  data() {
    return {
      mainClass: ["def-page", "black-header", "floor-page"],
      viewBox: "0, 0, 673, 1080",
      aFlat: {
        square_total: 0,
        rooms: 0,
        number: 0
      },
      activeHover: false
    };
  },
  //  transition: 'none',
  created() {},
  methods: {
    hover(data) {
      this.aFlat = data;
      this.activeHover = true;
    },
    linkFlat(item) {
      //  console.log(item);
      //   return ;
      this.$router.push({
        path:
          this.$i18n.path("") +
          item.building +
          "/" +
          item.section +
          "/flat/" +
          item.id
      });
    },
    link(w) {
      let floor = +this.$route.params.floor;
      if (w == "next") {
        floor = floor + 1;
      }
      if (w == "prev") {
        floor = floor - 1;
      }

      if (floor == 1) floor = 9;
      if (floor == 10) floor = 2;

      this.$router.push({
        path:
          this.$i18n.path("") +
          "building/" +
          this.$route.params.bl +
          "/" +
          this.$route.params.fl +
          "/floor/" +
          floor
      });
    }
  },
  computed: {
    floorTitle() {
      let title = this.l(
        "План " +
          this.$route.params.floor +
          " этажа, Cекция " +
          this.$route.params.fl +
          ", Дом " +
          this.$route.params.bl,
        "План " +
          this.$route.params.floor +
          " поверху, Cекція " +
          this.$route.params.fl +
          ", Будинок " +
          this.$route.params.bl
      );
      return title;
    },
    plan() {
      let out = {
        img: "",
        plans: [],
        section_id: 0
      };
      if (!this.$store.state.floorplans) return out;
      if (!this.$store.state.flats) return out;
      let building = this.$store.state.buildings.filter(o => {
        return o.name == this.$route.params.bl;
      });

      if (!building.length) return;
      let section = this.$store.state.sections.filter(o => {
        return (
          o.name == this.$route.params.fl && o.building_id == building[0].id
        );
      });

      if (!section.length) return;
      let floor = this.$store.state.floors.filter(o => {
        return (
          o.name == this.$route.params.floor && o.section_id == section[0].id
        );
      });

      if (!floor.length) return;
      let floorplan = this.$store.state.floorplans.filter(o => {
        return o.id == floor[0].floorplan_id;
      });

      if (!floorplan.length) return;
      let plans_floorplan = this.$store.state.plans_floorplans.filter(o => {
        return o.floorplan_id == floorplan[0].id;
      });

      let nfloor = this.$route.params.floor;
      if (nfloor == 9) nfloor = 8;
      plans_floorplan.forEach(el => {
        let temp = this.$store.state.flats.filter(o => {
          return +o.plan_id == +el.plan_id && o.floor == nfloor;
        });
        if (temp.length) {
          el.flat = temp[0];
        } else {
          let nfloor2 = nfloor - 1;
          temp = this.$store.state.flats.filter(o => {
            return +o.plan_id == +el.plan_id && o.floor == nfloor2;
          });
          //    console.log(temp);
          //  el.flat = {};
          if (temp.length) {
            el.flat = temp[0];
          } else {
            el.flat = {};
          }
        }
      });

      out = {
        img: floorplan[0].img,
        plans: plans_floorplan,
        section_id: section[0].id
      };

    //  console.log(out);

      return out;
    },

    floors() {
      let out = {
        max: 8,
        min: 2
      };
      if (!this.$store.state.floorplans) return out;
      let floors = this.$store.state.floors.filter(o => {
        return o.section_id == this.plan.section_id;
      });
      return floors;
    }
  },
  mounted() {
    this.loadFancy();

    if (!this.$store.state.floorplans) {
      this.$store.dispatch("getFloorplans");
    }
    if (!this.$store.state.flats) {
      this.$store.dispatch("getFlats");
    }

    let img = this.$refs.plan_img;

    img.onload = () => {
      this.viewBox = "0, 0, " + img.naturalWidth + ", " + img.naturalHeight;
    };
  }
};
</script>
