<template>
  <div class="podbor" :class="ftype">
    <div class="pobor-head-line">
      <div
        class="heading25 tt heading3-dh"
        v-if="ftype == 'podbor'"
      >{{$t('pd["Подбор по параметрам"]')}}</div>
      <div
        class="heading25 tt heading3-dh"
        v-if="ftype == 'commerce'"
      >{{l('Подбор коммерции по параметрам', 'Підбір комерції за параметрами')}}</div>
      <div
        class="heading25 tt heading3-dh"
        v-if="ftype == 'parking'"
      >{{l('Подбор паркомест по параметрам', 'Підбір паркомісць за параметрами')}}</div>
      <div class="links">
        <a href="#" :class="{'active': ftype == 'podbor'}" @click.prevent="setLInk('podbor')">
          <svg>
            <use xlink:href="#ico-kv"></use>
          </svg>
          <div class="t">{{l('Квартиры','Квартири')}}</div>
        </a>
        <a href="#" :class="{'active': ftype == 'commerce'}" @click.prevent="setLInk('commerce')">
          <svg>
            <use xlink:href="#ico-dom"></use>
          </svg>
          <div class="t">{{l('Коммерция', 'Комерція')}}</div>
        </a>
        <a href="#" :class="{'active': ftype == 'parking'}" @click.prevent="setLInk('parking')">
          <svg>
            <use xlink:href="#ico-p"></use>
          </svg>
          <div class="t">Парковка</div>
        </a>
      </div>
    </div>

    <div class="filtr" :class="{'active': showFiltr}">
      <div class="close-fitr hideMin675" @click="showFiltr = false"></div>
      <div class="row-filtr row-filtr-slider">
        <div class="item item-rooms"  v-if="ftype != 'parking'">
          <div class="title">{{$t('pd["Комнат"]')}}</div>
          <div class="fl-rooms">
            <div
              class="fl-room"
              :class="{'active':config.rooms.includes(1)}"
              @click.prevent="setConf('rooms',1)"
            >1</div>
            <div
              class="fl-room"
              :class="{'active':config.rooms.includes(2)}"
              @click.prevent="setConf('rooms',2)"
            >2</div>
            <div
              class="fl-room"
              :class="{'active':config.rooms.includes(3)}"
              @click.prevent="setConf('rooms',3, 4, 5)"
            >3+</div>
          </div>
        </div>

        <div class="item item-select" v-if="ftype == 'parking'">
          <div class="title">{{$t('pd["Дом"]')}}</div>
          <chSelect
            ref="building"
            :list=" {
            1: $t('pd.Дом')+' 1',
           // 2: $t('pd.Дом')+' 2',
         //   3: 'Дом 3',
       //     4: 'Дом 4',
          }"
            @data="setConf('building', $event)"
          ></chSelect>
        </div>

        <!-- <div class="item item-rooms" v-if="ftype == 'commerce'">
          <div class="title">{{$t('pd["Этаж"]')}}</div>
          <div class="fl-rooms">
            <div
              class="fl-room"
              :class="{'active':config.lfloor.includes(0)}"
              @click.prevent="setConf('lfloor',0)"
            >0</div>
            <div
              class="fl-room"
              :class="{'active':config.lfloor.includes(1)}"
              @click.prevent="setConf('lfloor',1)"
            >1</div>
          </div>
        </div>-->

        <div class="item item-slider">
          <div class="title">
            {{$t('pd["Площадь"]')}}, м
            <sup>2</sup>
          </div>
          <div class="sl">
            <vue-slider
              v-if="isSetConf"
              ref="sq"
              :tooltip="'none'"
              :max="sq.max"
              :min="sq.min"
              :height="16"
              :dotSize="16"
              v-model="config.sq"
              @change="setQ"
            ></vue-slider>
            <div class="vals">
              <div class="it from">
                {{$t('pd["от"]')}}
                <span class="v">{{config.sq[0].toFixed()}}</span>
              </div>
              <div class="it to">
                до
                <span class="v">{{Math.ceil(config.sq[1])}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="item item-slider" v-if="ftype == 'podbor'">
          <div class="title">{{$t('pd["Этаж"]')}}</div>
          <div class="sl">
            <vue-slider
              ref="floors"
              v-if="isSetConf"
              :tooltip="'none'"
              :max="floors.max"
              :min="floors.min"
              :height="16"
              :dotSize="16"
              v-model="config.floors"
              @change="setQ"
            ></vue-slider>
            <div class="vals">
              <div class="it from">
                {{$t('pd["от"]')}}
                <span class="v">{{config.floors[0]}}</span>
              </div>
              <div class="it to">
                до
                <span class="v">{{config.floors[1]}}</span>
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
            <vue-slider
              ref="prices"
              v-if="isSetConf"
              :tooltip="'none'"
              :max="prices.max"
              :min="prices.min"
              :height="16"
              :dotSize="16"
              v-model="config.prices"
              @change="setQ"
            ></vue-slider>
            <div class="vals">
              <div class="it from">
                {{$t('pd["от"]')}}
                <span class="v">{{config.prices[0] | Price}}</span>
              </div>
              <div class="it to">
                до
                <span class="v">{{config.prices[1] | Price}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="item f-action"  v-if="ftype == 'parking'">
          <label class="cus-check big">
            <input
              type="checkbox"
              @change="setConf('action', '1' )"
              :checked="config.action.length"
            >
            <span class="ch"></span>
            <span class="ch-title">{{l('Акционные паркоместа','Акційні паркомісця')}}</span>
          </label>
        </div>
      </div>

      <div class="row-filtr row-filtr-select" v-if="ftype != 'parking'" style="display: none">
        <div class="item item-select">
          <div class="title">{{$t('pd["Дом"]')}}</div>
          <chSelect
            ref="building"
            :list=" {
            1: $t('pd.Дом')+' 1',
           // 2: $t('pd.Дом')+' 2',
         //   3: 'Дом 3',
       //     4: 'Дом 4',
          }"
            @data="setConf('building', $event)"
          ></chSelect>
        </div>

        <div class="item item-select">
          <div class="title">{{$t('pd["Секция"]')}}</div>
          <chSelect
            :list="{
            1: $t('pd.Секция')+' 1',
            2: $t('pd.Секция')+' 2',
            3: $t('pd.Секция')+' 3',
            4: $t('pd.Секция')+' 4',
          }"
            ref="section"
            @data="setConf('section', $event)"
          ></chSelect>
        </div>
        <div class="item item-select" v-if="ftype == 'podbor'">
          <div class="title">{{$t('pd["Тип квартиры"]')}}</div>
          <chSelect
            :list="{
            'levels': $t('pd.Двухуровневая'),
            'dressing_room': $t('pd.Гардеробная'),
            'panoramic_windows': $t('pd.Панорамные_окна'),
            'have_terrace': $t('pd.C_террасой'),
            'balconies': $t('pd.C_лоджией'),
            'square_kitchen': $t('pd.C_большой_кухней'),
            'bathrooms_count': $t('pd.C_несколькими_су'),
            'laundry_room': $t('pd.C_постирочной'),
          //  'panoramic_windows': $t('pd.C_панорамным_остеклением'),
            'zenith_window': $t('pd.C_зенитным_окном'),
          }"
            ref="type"
            @data="setConf('type', $event)"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Вид из окон"]')}}</div>
          <chSelect
            :list=" {
            'на улицу': $t('pd.на_улицу'),
            'на две стороны': $t('pd.на_две_стороны'),
            'во двор': $t('pd.во_двор'),
          }"
            ref="view_windows"
            @data="setConf('view_windows', $event)"
          ></chSelect>
        </div>
        <div class="item item-select">
          <div class="title">{{$t('pd["Сторона света"]')}}</div>
          <chSelect
            :list="{
            'северо-восток': $t('pd.северо-восток'),
            'юго-запад': $t('pd.юго-запад'),
            'север': $t('pd.север'),
            'юг': $t('pd.юг'),
            'запад': $t('pd.запад'),
          }"
            ref="side_light"
            @data="setConf('side_light', $event)"
          ></chSelect>
        </div>

        <!-- <div class="item item-select">
          <div class="title">{{$t('pd["Срок сдачи"]')}}</div>
          <chSelect
            :list="{
            'III квартал 2020': 'III квартал 2020',
          }"
            ref="deadline"
            @data="setConf('deadline', $event)"
          ></chSelect>
        </div>-->
        <div class="item f-action">
          <label class="cus-check big">
            <input
              type="checkbox"
              @change="setConf('action', '1' )"
              :checked="config.action.length"
            >
            <span class="ch"></span>
            <span class="ch-title" v-html="$t('pd.Акционные_квартиры')" v-if="ftype == 'podbor'"></span>
            <span
              class="ch-title"
              v-if="ftype == 'commerce'"
            >{{l('Акционные помещения','Акційні приміщення')}}</span>
          </label>
        </div>
      </div>
      <div class="more-filtr text-center" v-if="ftype != 'parking'">
        <a href="#" class="active" @click.prevent="toggleFiltr">{{$t('pd["Расширенный фильтр"]')}}</a>
      </div>
    </div>
    <button class="btn btn-def fix-btn hideMin675" v-if="showFiltr" @click="showFiltr = false">
      <span>{{$t('pd["Показать"]')}} {{flats.length}} квартир</span>
    </button>

    <div v-if="showContent">
      <div class="fl-info-line">
        <div class="l">
          <div class="cont-flats">
            {{$t('pd["Найдено"]')}}
            <span v-if="config.typeList == 'list'">
              <span class="count">{{flats.length}}</span>
              {{sk(flats.length)}}
            </span>
            <span v-else>
              <span class="count">{{plans.length}}</span>
              {{sk(plans.length, 'plan')}}
            </span>
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
              :class="{'desc':config.sort,'active':config.orderField == 'price_m2'}"
            >
              {{$t('pd["По цене"]')}}
              <div class="arr"></div>
            </a>
            <a
              href="#"
              @click.prevent="sortD('square_total')"
              :class="{'desc':config.sort,'active':config.orderField == 'square_total'}"
            >
              {{$t('pd["По площади"]')}}
              <div class="arr"></div>
            </a>
          </div>
          <div class="sort-type-list" v-if="ftype == 'podbor'">
            <div
              class="it"
              :class="{'active':config.typeList == 'list'}"
              @click="setConf('typeList','list')"
            >
              <svg class="view_list">
                <use xlink:href="#ic-view_list"></use>
              </svg>
            </div>
            <div
              class="it"
              :class="{'active':config.typeList == 'square'}"
              @click="setConf('typeList','square')"
            >
              <svg>
                <use xlink:href="#ic-flat"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div v-if="flats.length">
        <div class="list-flats" v-if="config.typeList == 'square'">
          <div class="row">
            <div
              class="col-lg-4 col-xl-3 col-md-6"
              v-for="item in plans.slice(0, countFlasts)"
              :key="item.id"
            >
              <nuxt-link :to="$i18n.path('')+'plan/'+item.plan_id" exact class="item">
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
                  <img :src="item.img+'?v1'" alt>
                </div>
                <div class="price">
                  {{$t('pd["от"]')}} {{item.price_m2 | Price}} грн./м
                  <sup>2</sup>
                </div>
              </nuxt-link>
              <nuxt-link :to="$i18n.path('')+'plan/'+item.plan_id" exact class="similar">
                <span>Доступно {{cFlats(item)}} {{sk(cFlats(item))}}</span>
                <svg>
                  <use xlink:href="#ic-arrow"></use>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="table-flats" v-else>
          <div class="row t-head">
            <div class="col">
              <span v-if="ftype == 'podbor'">Кв. №</span>
              <span v-if="ftype == 'commerce'">{{l('Пом.','Пр.')}} №</span>
              <span v-if="ftype == 'parking'"> №</span>
            </div>
            <div class="col hideMax575">{{$t('pd["Дом"]')}}</div>
            <div class="col hideMax575" v-if="ftype != 'parking'">{{$t('pd["Секция"]')}}</div>
            <div class="col" v-if="ftype != 'parking'">
              <span>{{$t('pd["Этаж"]')}}</span>
            </div>
            <div class="col"  v-if="ftype != 'parking'">
              <span>{{$t('pd["Комнат"]')}}</span>
            </div>
            <div class="col">
              <span>
                {{$t('pd["Площадь"]')}}, м
                <sup>2</sup>
              </span>
            </div>
            <div class="col">
              <span>
                грн./м
                <sup>2</sup>
              </span>
            </div>
            <div class="col-1"></div>
          </div>
          <div class="item" v-for="item in flats.slice(0, countFlasts)" :key="item.id">
            <nuxt-link
              :to="$i18n.path('')+item.building+'/'+item.floor+'/flat/'+item.id"
              exact
              class="row t-item"
            >
              <div class="col">{{item.number}}</div>
              <div class="col hideMax575">{{item.building}}</div>
              <div class="col hideMax575" v-if="ftype != 'parking'">{{item.section}}</div>
              <div class="col" v-if="ftype != 'parking'">{{item.floor}}</div>
              <div class="col" v-if="ftype != 'parking'">{{item.rooms}}</div>
              <div class="col">{{item.square_total}}</div>
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

        <div
          class="text-center"
          v-if="config.typeList == 'square' && plans.length > countFlasts ||  config.typeList == 'list' &&  flats.length > countFlasts"
        >
          <button class="btn btn-def btn-black" @click="countFlasts = countFlasts + 12">
            <span>{{$t('pd["Показать еще"]')}} {{lastCont}} {{curTypeName}}</span>
          </button>
        </div>
      </div>
      <div v-else class="n-info text-center">
        <span v-if="!loaded" class="loading">Загрузка...</span>
        <span v-else>{{$t('pd["К сожалению"]')}}</span>
      </div>
      <button class="btn btn-def fix-btn hideMin675" v-if="!showFiltr" @click="showFiltr = true">
        <span>{{$t('pd["Изменить параметры подбора"]')}}</span>
      </button>
    </div>
    <div v-else class="text-center">
      <button class="btn btn-def" @click="showContent = true">
        <span>{{$t('pd["Показать"]')}} {{flats.length}} квартир</span>
      </button>
    </div>
  </div>
</template>

<script>
import chSelect from "~/components/elem/chSelect";
import orderBy from "lodash.orderby";
import maxBy from "lodash.maxby";
import minBy from "lodash.minby";
import uniqBy from "lodash.uniqby";

export default {
  props: ["mode", "ptype"],
  components: {
    chSelect
  },
  data() {
    return {
      ftype: "podbor",
      config: {
        rooms: [],
        building: [],
        section: [],
        view_windows: [],
        side_light: [],
        deadline: [],
        type: [],
        action: [],
        sq: [40, 120],
        floors: [1, 30],
        prices: [8500, 30400],
        orderField: "price_m2",
        sort: false,
        typeList: "list",
        lfloor: []
      },
      // Площадь, м2
      sq: {
        min: 15,
        max: 190,
        options: {
          width: "100%",
          height: 16,
          dotSize: 16,
          tooltip: false
        }
      },
      floors: {
        min: 1,
        max: 30,
        options: {
          width: "100%",
          height: 16,
          dotSize: 16,
          tooltip: false
        }
      },
      prices: {
        min: 8500,
        max: 30400,
        options: {
          width: "100%",
          height: 16,
          dotSize: 16,
          tooltip: false
        }
      },
      countFlasts: 12,
      loaded: false,
      isSetConf: false,
      showFiltr: false,
      showContent: true
    };
  },
  watch: {
    config() {
      this.setQ();
    }
  },
  created() {
    if (this.ptype) {
      this.ftype = this.ptype;
    }

    if (this.mode == "main") {
      this.showContent = false;
    }

    if (!this.$store.state.flats) {
      this.$store.dispatch("getFlats");
    }

    if (!this.$store.state.commerce) {
      this.$store.dispatch("getCommerce");
    }

    if (!this.$store.state.parking) {
      this.$store.dispatch("getParking");
    }

    if (
      this.$store.state.fillQ &&
      this.mode != "main" &&
      this.ptype == "podbor"
    ) {
      this.$router.push({ query: this.$store.state.fillQ });
    }
  },
  mounted() {
    $(document).on("click", function(e) {
      if ($(e.target).closest(".ch-select").length == 0) {
        //   console.log(234);
        $(".ch-select").removeClass("active");
      }
    });

    //  console.log(this.ftype);

    let data = this.$store.state.flats;
    if (this.ftype == "commerce") {
      data = this.$store.state.commerce;
    }
    if (this.ftype == "parking") {
      data = this.$store.state.parking;
    }

    if (data) {
      setTimeout(() => {
        this.setConfig(data);
        setTimeout(() => {
          this.loaded = true;
        }, 10);
      }, 100);
    } else {
      setTimeout(() => {
        data = this.$store.state.flats;
        if (this.ftype == "commerce") {
          data = this.$store.state.commerce;
        }
        if (this.ftype == "parking") {
          data = this.$store.state.parking;
        }
        this.setConfig(data);
        setTimeout(() => {
          this.loaded = true;
        }, 10);
      }, 1000);
    }
  },
  computed: {
    lastCont() {
      let items = this.flats;
      if (this.config.typeList == "square") {
        items = this.plans;
      }
      //  console.log(items);
      if (!items) return 12;
      let last = items.length - this.countFlasts;
      // console.log(last);
      if (last < 12) {
        return last;
      } else {
        return 12;
      }
    },
    curTypeName() {
      let type = this.config.typeList == "square" ? "plan" : "";
      return this.sk(this.lastCont, type);
    },
    plans() {
      if (!this.flats.length) return [];
      let pl = {};
      [1, 2, 3, 4].forEach(t => {
        let temp = this.flats.filter(o => {
          return o.section == t;
        });
        pl[t] = uniqBy(temp, o => {
          return o.type;
        });
      });

      let res = [...pl[1], ...pl[2], ...pl[3], ...pl[4]];

      return res;

      console.log(pl);
      let plans = uniqBy(this.flats, o => {
        return o.type;
      });

      return plans;
    },
    flats() {
      let flats = [];
      if (this.ftype == "podbor") {
        flats = this.$store.state.flats;
      }
      if (this.ftype == "commerce") {
        flats = this.$store.state.commerce;
      }
      if (this.ftype == "parking") {
        flats = this.$store.state.parking;
      }

      if (!flats) return [];
      flats = flats.filter(o => {
        return (
          +o.square_total >= this.config.sq[0] &&
          +o.square_total <= this.config.sq[1] &&
          +o.floor >= this.config.floors[0] &&
          +o.floor <= this.config.floors[1] &&
          +o.price_m2 >= this.config.prices[0] &&
          +o.price_m2 <= this.config.prices[1] &&
          +o.status_id == 2
        );
      });

      [
        "rooms",
        "building",
        "action",
        "section",
        "view_windows",
        "side_light",
        "deadline"
      ].forEach(p => {
        if (this.config[p].length) {
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

      if (this.config["type"].includes("levels")) {
        flats = flats.filter(o => {
          return o.levels == 2;
        });
      }

      if (this.config["type"].includes("dressing_room")) {
        flats = flats.filter(o => {
          return o.dressing_room == "1";
        });
      }

      if (this.config["type"].includes("panoramic_windows")) {
        flats = flats.filter(o => {
          return o.panoramic_windows == "1";
        });
      }

      if (this.config["type"].includes("have_terrace")) {
        flats = flats.filter(o => {
          return o.have_terrace == "1";
        });
      }

      if (this.config["type"].includes("balconies")) {
        flats = flats.filter(o => {
          return o.balconies == "1" || o.loggias == "1";
        });
      }

      if (this.config["type"].includes("square_kitchen")) {
        flats = flats.filter(o => {
          return +o.square_kitchen > 11;
        });
      }

      if (this.config["type"].includes("bathrooms_count")) {
        flats = flats.filter(o => {
          return +o.bathrooms_count > 1;
        });
      }

      if (this.config["type"].includes("laundry_room")) {
        flats = flats.filter(o => {
          return o.laundry_room == "1";
        });
      }

      if (this.config["type"].includes("zenith_window")) {
        flats = flats.filter(o => {
          return o.zenith_window == "1";
        });
      }

      let dir = "asc";
      if (this.config.sort) {
        dir = "desc";
      }

      flats = orderBy(flats, [this.config.orderField], [dir]);
      return flats;
    }
  },
  methods: {
    setLInk(type) {
      this.ftype = type;
      this.$router.push({
        path: this.$i18n.path("") + type
      });
    },
    cFlats(data) {
      if (!this.flats) return "";
      let flats = this.flats.filter(o => {
        return (
          data.building == o.building &&
          data.type == o.type &&
          data.section == o.section
        );
      });

      return flats.length;
    },
    sk(num, type) {
      let names = ["квартира", this.l("квартиры", "квартири"), "квартир"];
      if (type == "plan") {
        names = [
          this.l("планировка", "планування"),
          this.l("планировки", "планування"),
          this.l("планировок", "планувань")
        ];
      }

      if (this.ftype == "commerce") {
        names = [
          this.l("помещение", "приміщення"),
          this.l("помещения", "приміщення"),
          this.l("помещений", "приміщень")
        ];
      }

      if (this.ftype == "parking") {
        names = [
          this.l("паркоместо", "паркомісце"),
          this.l("паркоместа", "паркомісця"),
          this.l("паркомест", "паркомісць")
        ];
      }

      return this.Declension(num, names);
    },
    setQ() {
      if (this.ftype != "podbor") return;
      let tConf = { ...this.config };
      for (let i in tConf) {
        if (Array.isArray(tConf[i])) {
          tConf[i] = tConf[i].join();
        }
        if (!tConf[i] && typeof tConf[i] != "boolean") {
          delete tConf[i];
          if (this.$route.query[i]) {
            delete this.$route.query[i];
          }
        }
      }

      let temp = { ...this.$route.query, ...tConf };
      // console.log(temp);
      this.$store.commit("setfillQ", temp);
      if (this.mode != "main") {
        this.$router.push({ query: temp });
      }
    },
    setConfig(flats) {
      //  console.log(flats);
      //  if (!flats) return;

      let conf = { ...this.config };
      let sqMin = minBy(flats, function(o) {
        return o.square_total;
      });
      conf.sq[0] = sqMin.square_total;
      this.sq.min = +conf.sq[0].toFixed();
      conf.sq[1] =
        maxBy(flats, function(o) {
          return o.square_total;
        }).square_total + 1;
      this.sq.max = Math.ceil(conf.sq[1]);

      conf.prices[0] = minBy(flats, function(o) {
        return o.price_m2;
      }).price_m2;
      this.prices.min = +conf.prices[0].toFixed();
      conf.prices[1] =
        maxBy(flats, function(o) {
          return o.price_m2;
        }).price_m2 + 1;
      this.prices.max = Math.ceil(conf.prices[1]);

      conf.floors[0] = minBy(flats, function(o) {
        return o.floor;
      }).floor;
      this.floors.min = conf.floors[0];
      conf.floors[1] = maxBy(flats, function(o) {
        return o.floor;
      }).floor;
      this.floors.max = conf.floors[1];

      this.config = conf;

      let q = this.$route.query;
      //  console.log(Object.keys(q).length, 1);
      if (
        !Object.keys(q).length &&
        this.$store.state.fillQ &&
        this.ftype == "podbor"
      ) {
        //   console.log(234);
        q = this.$store.state.fillQ;
      }

      for (let i in q) {
        if (
          ![
            "orderField",
            "sort",
            "typeList",
            "side_light",
            "type",
            "view_windows"
          ].includes(i)
        ) {
          this.config[i] = q[i].split(",").map(n => {
            return +n;
          });
        } else if (["side_light", "type", "view_windows"].includes(i)) {
          this.config[i] = q[i].split(",");
        } else {
          if (i == "sort") {
            this.config.sort = q.sort == "true" ? true : false;
          } else {
            this.config[i] = q[i];
          }
        }
        if (
          [
            "building",
            "section",
            "type",
            "view_windows",
            "side_light"
            //  "deadline"
          ].includes(i)
        ) {
          if (this.$refs[i]) {
            this.$refs[i].setP(this.config[i]);
          }
        }
      }

      this.$nextTick(() => {
        this.isSetConf = true;
        //   console.log(this.config);
      });
    },
    clearfitr() {
      this.countFlasts = 12;
      for (let i in this.config) {
        // console.log(i);
        if (Array.isArray(this.config[i])) {
          this.config[i] = [];
        }
      }
      ["prices", "sq", "floors"].forEach(o => {
        //  console.log(o);
        let t = { ...this[o] };
        this.config[o][0] = t.min;
        this.config[o][1] = t.max;
        this[o] = t;
      });

      this.$store.commit("setfillQ", {});
      this.$router.push({ query: {} });

      [
        "building",
        "section",
        "type",
        "view_windows",
        "side_light"
        //   "deadline"
      ].forEach(o => {
        if (this.$refs[o]) this.$refs[o].setP([]);
      });
    },
    sortD(field) {
      this.setConf("orderField", field);
      this.setConf("sort", !this.config.sort);
    },
    toggleFiltr() {
      $(".row-filtr-select").slideToggle();
      $(".more-filtr a").toggleClass("active");
    },
    setConf(f, i, i2, i3) {
      // console.log(f, i);
      let temp = { ...this.config };
      if (Array.isArray(temp[f]) && !Array.isArray(i)) {
        if (temp[f].indexOf(i) == -1) {
          temp[f].push(i);
        } else {
          temp[f].splice(temp[f].indexOf(i), 1);
        }
      } else {
        temp[f] = i;
      }

      if (i2) {
        if (temp[f].indexOf(i2) == -1) {
          temp[f].push(i2);
        } else {
          temp[f].splice(temp[f].indexOf(i2), 1);
        }
      }

      if (i3) {
        if (temp[f].indexOf(i3) == -1) {
          temp[f].push(i3);
        } else {
          temp[f].splice(temp[f].indexOf(i3), 1);
        }
      }

      this.config = temp;
    }
  }
};
</script>

<style>
</style>
