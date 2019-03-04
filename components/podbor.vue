<template>
  <div class="podbor">
    <h1 class="heading25 tt heading3-dh">{{$t('pd["Подбор по параметрам"]')}}</h1>
    <div class="filtr">
      <div class="row-filtr row-filtr-slider">
        <div class="item item-rooms">
          <div class="title">{{$t('pd["Комнат"]')}}</div>
          <div class="fl-rooms">
            <div
              class="fl-room"
              :class="{'active':config.rooms.includes(1)}"
              @click.prevent="setConfArr(1)"
            >1</div>
            <div
              class="fl-room"
              :class="{'active':config.rooms.includes(2)}"
              @click.prevent="setConfArr(2)"
            >2</div>
            <div
              class="fl-room"
              :class="{'active':config.rooms.includes(3)}"
              @click.prevent="setConfArr(3)"
            >3+</div>
          </div>
        </div>

        <div class="item item-slider">
          <div class="title">
            {{$t('pd["Площадь"]')}}, м
            <sup>2</sup>
          </div>
          <div class="sl">
            <vue-slider ref="sq" v-model="sq.value" v-bind="sq.options"></vue-slider>
            <div class="vals">
              <div class="it from">
                {{$t('pd["от"]')}}
                <span class="v">{{sq.value[0]}}</span>
              </div>
              <div class="it to">
                до
                <span class="v">{{sq.value[1]}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item item-slider">
          <div class="title">{{$t('pd["Этаж"]')}}</div>
          <div class="sl">
            <vue-slider ref="floors" v-model="floors.value" v-bind="floors.options"></vue-slider>
            <div class="vals">
              <div class="it from">
                {{$t('pd["от"]')}}
                <span class="v">{{floors.value[0]}}</span>
              </div>
              <div class="it to">
                до
                <span class="v">{{floors.value[1]}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item item-slider">
          <div class="title">
            {{$t('pd["Стоимость"]')}}, грн./м
            <sup>2</sup>
          </div>
          <div class="sl">
            <vue-slider ref="prices" v-model="prices.value" v-bind="prices.options"></vue-slider>
            <div class="vals">
              <div class="it from">
                {{$t('pd["от"]')}}
                <span class="v">{{prices.value[0] | Price}}</span>
              </div>
              <div class="it to">
                до
                <span class="v">{{prices.value[1] | Price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-filtr row-filtr-select">
        <div class="item item-select">
          <div class="title">{{$t('pd["Дом"]')}}</div>
          <chSelect
            :conf="config.building"
            :list=" {
            1: 'Дом 1',
            2: 'Дом 2',
            3: 'Дом 3',
            4: 'Дом 4',
          }"
            @data="config.building = $event"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Секция"]')}}</div>
          <chSelect
            :conf="config.section"
            :list="{
            1: 'Секция 1',
            2: 'Секция 2',
            3: 'Секция 3',
            4: 'Секция 4',
          }"
            @data="config.section = $event"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Тип квартиры"]')}}</div>
          <chSelect
            :conf="config.type"
            :list="{
            1: 'Двухуровневая',
            2: 'Гардеробная',
            3: 'Панорамные окна',
            4: 'Еще пункт',
          }"
            @data="config.type = $event"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Вид из окон"]')}}</div>
          <chSelect
            :conf="config.vid"
            :list=" {
            1: 'Вид во двор',
            2: 'Лес',
            3: 'Река'
          }"
            @data="config.vid = $event"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Сторона света"]')}}</div>
          <chSelect
            :conf="config.svet"
            :list="{
            1: '1',
            2: '2',
            3: '3'
          }"
            @data="config.svet = $event"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Срок сдачи"]')}}</div>
          <chSelect
            ref="test"
            :conf="config.srok"
            :list="{
            1: '1',
            2: '2',
            3: '3'
          }"
            @data="config.srok = $event"
          ></chSelect>
        </div>

        <div class="item f-action">
          <label class="cus-check big">
            <input
              type="checkbox"
              @change="setConfArr(1, 'action')"
              :checked="config.action.length"
            >
            <span class="ch"></span>
            <span class="ch-title" v-html="$t('pd.Акционные_квартиры')"></span>
          </label>
        </div>
      </div>
      <div class="more-filtr text-center">
        <a href="#" @click.prevent="toggleFiltr">{{$t('pd["Расширенный фильтр"]')}}</a>
      </div>
    </div>

    <div class="fl-info-line">
      <div class="l">
        <div class="cont-flats">
          {{$t('pd["Найдено"]')}}
          <span>{{flats.length}}</span> квартир
        </div>
        <div class="clear-filtr">
          <a href="#" @click.prevent="clearfitr">{{$t('pd["Сбросить фильтр"]')}}</a>
        </div>
      </div>
      <div class="r">
        <div class="fl-sort">
          <div class="t">{{$t('pd["Сортировать"]')}}:</div>
          <a
            href="#"
            @click.prevent="sortD('price_m2')"
            :class="{'desc':sort,'active':orderField == 'price_m2'}"
          >
            {{$t('pd["По цене"]')}}
            <div class="arr"></div>
          </a>
          <a
            href="#"
            @click.prevent="sortD('square_total')"
            :class="{'desc':sort,'active':orderField == 'square_total'}"
          >
            {{$t('pd["По площади"]')}}
            <div class="arr"></div>
          </a>
        </div>
        <div class="sort-type-list">
          <div class="it" :class="{'active':typeList == 'list'}" @click="typeList = 'list'">
            <svg class="view_list">
              <use xlink:href="#ic-view_list"></use>
            </svg>
          </div>
          <div class="it" :class="{'active':typeList == 'square'}" @click="typeList = 'square'">
            <svg>
              <use xlink:href="#ic-flat"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div v-if="flats.length">
      <div class="list-flats" v-if="typeList == 'square'">
        <div class="row">
          <div
            class="col-lg-4 col-xl-3 col-md-6"
            v-for="item in flats.slice(0, countFlasts)"
            :key="item.id"
          >
            <nuxt-link
              :to="$i18n.path('')+item.section+'/'+item.floor+'/'+item.id"
              exact
              class="item"
            >
              <div class="info">
                <div class="it">
                  <div class="k">Тип</div>
                  <div class="v">{{item.type}}</div>
                </div>
                <div class="it">
                  <div class="k">{{$t('pd["Комнат"]')}}</div>
                  <div class="v">{{item.rooms}}</div>
                </div>
                <div class="it">
                  <div class="k">{{$t('pd["Площадь"]')}}</div>
                  <div class="v">
                    {{item.square_total}} м
                    <sup>2</sup>
                  </div>
                </div>
              </div>
              <div class="img">
                <img :src="item.img" alt>
              </div>
              <div class="price">
                от {{item.price_m2 | Price}} грн./м
                <sup>2</sup>
              </div>
            </nuxt-link>
            <div class="similar">
              <span>Доступно 6 квартир</span>
              <svg>
                <use xlink:href="#ic-arrow"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="table-flats" v-else>
        <div class="row t-head">
          <div class="col">Кв. №</div>
          <div class="col">Дом</div>
          <div class="col">Секция</div>
          <div class="col">Этаж</div>
          <div class="col">Комнат</div>
          <div class="col">Площадь, м2</div>
          <div class="col">Стоимость, грн./м2</div>
          <div class="col-1"></div>
        </div>
        <div class="row t-item" v-for="item in flats.slice(0, countFlasts)" :key="item.id">
          <div class="col">{{item.number}}</div>
          <div class="col">{{item.building}}</div>
          <div class="col">{{item.section}}</div>
          <div class="col">{{item.floor}}</div>
          <div class="col">{{item.rooms}}</div>
          <div class="col">{{item.square_total}}</div>
          <div class="col">{{item.price_m2 | Price}}</div>
          <div class="col-1">
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

      <div class="text-center" v-if="flats.length > countFlasts">
        <button class="btn btn-def btn-black" @click="countFlasts = countFlasts + 12">
          <span>{{$t('pd["Показать еще"]')}} 12 квартир</span>
        </button>
      </div>
    </div>
    <div v-else class="n-info text-center">
      <span v-if="!loaded" class="loading">Загрузка...</span>
      <span v-else>{{$t('pd["К сожалению"]')}}</span>
    </div>
  </div>
</template>

<script>
import chSelect from "~/components/elem/chSelect";
import orderBy from "lodash.orderby";
import maxBy from "lodash.maxby";
import minBy from "lodash.minby";

export default {
  components: {
    chSelect
  },
  created() {
    if (!this.$store.state.flats) {
      this.$store.dispatch("getFlats").then(() => {
        // console.log(234);
      });
      setTimeout(() => {
        if (this.flats.length) {
          this.setConfig(this.$store.state.flats);
          setTimeout(() => {
            this.loaded = true;
          }, 10);
        }
      }, 2000);
    } else {
      this.setConfig(this.$store.state.flats);
      setTimeout(() => {
        this.loaded = true;
      }, 10);
    }
    //  console.log(this.$route.query, 234);
  },
  mounted() {},
  data() {
    return {
      config: {
        rooms: [],
        building: [],
        section: [],
        vid: [],
        svet: [],
        srok: [],
        type: [],
        action: []
      },
      // Площадь, м2
      sq: {
        value: [15, 100],
        options: {
          min: 15,
          max: 100,
          width: "100%",
          height: 16,
          dotSize: 16,
          tooltip: false
        }
      },
      floors: {
        value: [1, 30],
        options: {
          min: 1,
          max: 30,
          width: "100%",
          height: 16,
          dotSize: 16,
          tooltip: false
        }
      },
      prices: {
        value: [8500, 22400],
        options: {
          min: 8500,
          max: 22400,
          width: "100%",
          height: 16,
          dotSize: 16,
          tooltip: false
        }
      },
      orderField: "price_m2",
      sort: false,
      countFlasts: 12,
      loaded: false,
      typeList: "square"
      //    delayAnim: 1
    };
  },
  mounted() {
    $(document).on("click", function(e) {
      if ($(e.target).closest(".ch-select").length == 0) {
        $(".ch-select").removeClass("active");
      }
    });
  },
  computed: {
    flats() {
      let flats = this.$store.state.flats;
      if (!flats) return [];
      flats = flats.filter(o => {
        return (
          +o.square_total >= this.sq.value[0] &&
          +o.square_total <= this.sq.value[1] &&
          +o.floor >= this.floors.value[0] &&
          +o.floor <= this.floors.value[1] &&
          +o.price_m2 >= this.prices.value[0] &&
          +o.price_m2 <= this.prices.value[1] &&
          +o.status_id == 2
        );
      });

      // if (this.config.rooms.length) {
      //   flats = flats.filter(o => {
      //     return (
      //       this.config.rooms[0] == o.rooms ||
      //       this.config.rooms[1] == o.rooms ||
      //       this.config.rooms[2] == o.rooms
      //     );
      //   });
      // }

      [
        "rooms",
        //  "project_id",
        "building",
        //   "res_id",
        "action",
        "section"
      ].forEach(p => {
        if (this.config[p].length) {
          //  console.log(this.config[p]);
          flats = flats.filter(o => {
            return (
              this.config[p][0] == o[p] ||
              this.config[p][1] == o[p] ||
              this.config[p][2] == o[p] ||
              this.config[p][3] == o[p]
            );
          });
        }
      });

      let dir = "asc";
      if (this.sort) {
        dir = "desc";
      }

      flats = orderBy(flats, [this.orderField], [dir]);

      // let i = 0;
      // flats.forEach(o => {
      //   i++;
      //   if (i == 5) i = 1;
      //   o.idx = i / 10 + "s";
      // });

      return flats;
    }
  },
  methods: {
    // setDelayAnim(){
    //   this.delayAnim++;
    //   if(this.delayAnim == 4) this.delayAnim == 1;
    //   console.log(this.delayAnim);
    //   return (this.delayAnim / 10) + 's';
    // },
    setConfig(flats) {
      this.sq.options.min = minBy(flats, function(o) {
        return o.square_total;
      }).square_total;
      this.sq.value[0] = this.sq.options.min;
      this.sq.options.max = maxBy(flats, function(o) {
        return o.square_total;
      }).square_total;
      this.sq.value[1] = this.sq.options.max;

      // console.log(this.sq);

      this.prices.options.min = minBy(flats, function(o) {
        return o.price_m2;
      }).price_m2;
      this.prices.value[0] = this.prices.options.min;
      this.prices.options.max = maxBy(flats, function(o) {
        return o.price_m2;
      }).price_m2;
      this.prices.value[1] = this.prices.options.max;

      this.floors.options.min = minBy(flats, function(o) {
        return o.floor;
      }).floor;
      this.floors.value[0] = this.floors.options.min;
      this.floors.options.max = maxBy(flats, function(o) {
        return o.floor;
      }).floor;
      this.floors.value[1] = this.floors.options.max;
    },
    clearfitr() {
      for (let i in this.config) {
        // console.log(i);
        this.config[i] = [];
      }
      ["prices", "sq", "floors"].forEach(o => {
        //  console.log(o);
        let t = { ...this[o] };
        t.value[0] = t.options.min;
        t.value[1] = t.options.max;
        //   console.log(this.$refs[o].val);
        this.$refs[o].val[1] = t.options.max;
        this.$refs[o].val[0] = t.options.min;
        // this.$refs[o].value[0] = t.options.max;
        // this.$refs[o].value[1] = t.options.min;
        this[o] = t;
      });

      this.$refs.sq.syncValue();
      this.$refs.prices.syncValue();
      this.$refs.floors.syncValue();

      //console.log(this.$refs.test);
    },
    sortD(field) {
      this.orderField = field;
      this.sort = !this.sort;
    },
    toggleFiltr() {
      $(".row-filtr-select").slideToggle();
      $(".more-filtr a").toggleClass("active");
    },
    setConfArr(i, f = "rooms") {
      if (this.config[f].indexOf(i) == -1) {
        this.config[f].push(i);
      } else {
        this.config[f].splice(this.config[f].indexOf(i), 1);
      }
    }
  }
};
</script>

<style>
</style>
