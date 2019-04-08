<template>
  <div class="container section-fl">
    <div class="flat-grid">
      <div class="f-back">
        <nuxt-link :to="$i18n.path('')+'podbor'" v-if="data.property_type == 'flat'" exact>{{$t('flat["Назад к выбору квартир"]')}}</nuxt-link>
        <nuxt-link :to="$i18n.path('')+'commerce'" v-if="data.property_type == 'nonresidential'" exact>
          {{ l('Назад к выбору помещений', 'Назад до вибору приміщень') }}
        </nuxt-link>
         <nuxt-link :to="$i18n.path('')+'parking'" v-if="data.property_type == 'parking_place'" exact>
          {{ l('Назад к выбору паркомест', 'Назад до вибору паркомісць') }}
        </nuxt-link>
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
            v-if="data.property_type != 'parking_place'"
            @click.prevent="typec = 'floor'"
            :class="{'active': typec == 'floor'}"
          >{{$t('flat["На этаже"]')}}</a>
          <a href="#"
          @click.prevent="typec = 'genplan'"
            :class="{'active': typec == 'genplan'}"
          >Генплан</a>
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
            <tr  v-if="data.property_type == 'flat'">
              <td class="t">
                <span>{{$t('flat["Жилая площадь"]')}}</span>
              </td>
              <td>
                {{data.square_live}} м
                <sup>2</sup>
              </td>
            </tr>
            <tr v-if="data.property_type != 'parking_place'">
              <td class="t">
                <span>{{$t('pd["Комнат"]')}}</span>
              </td>
              <td>{{data.rooms}}</td>
            </tr>
            <tr v-if="type == 'plan'">
              <td class="t">
                <span>{{$t('flat["Этажи"]')}}</span>
              </td>
              <td>{{floorsName}}</td>
            </tr>
            <tr v-else>
              <td class="t">
                <span>{{$t('pd["Этаж"]')}}</span>
              </td>
              <td>{{data.floor}}</td>
            </tr>
            <tr>
              <td class="t">
                <span>{{$t('pd["Дом"]')}}</span>
              </td>
              <td>{{data.building}}</td>
            </tr>
            <tr v-if="data.property_type != 'parking_place'">
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
        <div class="mini-genplan" v-if="typec == 'genplan'">
          <svg viewBox="0 0 4722.05 6096.14">
            <g id="dom6">
              <path
                class="cls-1"
                d="M3296.78,4547.87v247.88H3278.5V5093H3297v280.75H2884v-116.5h-21.25v-136.5h21.5V4915h-21V4783.25h21V4549S3296.78,4547.73,3296.78,4547.87Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M3350,5381.25V5646h166.5v-18H3799v466.75H3538v-54H3220V6094H2883.75V5613H2938V5381.5Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M4086.75,5627.75v17.75H4254V5381h466.25v138.75H4695v93h25.25v242.5h-27.5V6094H4257.5v-53.75h-192V6095h-260V5627.75S4086.5,5627.5,4086.75,5627.75Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M4254.67,4921l-1-263.33h54.66v-109h412.34v246.66h-18.34v297.34h18v281H4308V4921.33S4254.67,4921.67,4254.67,4921Z"
                transform="translate(-0.25 0.64)"
              ></path>
            </g>
            <g id="dom5">
              <path
                class="cls-1"
                d="M436.78,4547.87v247.88H418.5V5093H437v280.75H24v-116.5H2.75v-136.5h21.5V4915h-21V4783.25h21V4549S436.78,4547.73,436.78,4547.87Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M490,5381.25V5646H656.5v-18H939v466.75H678v-54H360V6094H23.75V5613H78V5381.5Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M1226.75,5627.75v17.75H1394V5381h466.25v138.75H1835v93h25.25v242.5h-27.5V6094H1397.5v-53.75h-192V6095h-260V5627.75S1226.5,5627.5,1226.75,5627.75Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M1394.67,4921l-1-263.33h54.66v-109h412.34v246.66h-18.34v297.34h18v281H1448V4921.33S1394.67,4921.67,1394.67,4921Z"
                transform="translate(-0.25 0.64)"
              ></path>
            </g>
            <g id="dom4">
              <path
                class="cls-2"
                d="M4308.8,3238.68h413v280.43H4704v297.7h17.27V4064H4308.8V3954.78h-54.32v-264.6h54.32S4308.44,3238.68,4308.8,3238.68Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-2"
                d="M4087.5,2966.25H4255V3231h466.5V3092.5H4695v-93h26V2757h-27.25V2517.5h-435v54h-192.5v-53.75h-258.5v465.5H4087.5S4087.13,2965.88,4087.5,2966.25Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-2"
                d="M3350.5,3230.25V2966h168v18.25H3799v-467H3538.5v55H3220.25V2518.5h-335.5V3000h53.75v229.75S3350.5,3229.75,3350.5,3230.25Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-2"
                d="M3297,3239v279.5h-17V3816h17.5v247.5H2884.25V3828.75H2864V3696.5h20.5V3491h-20.75V3354.75h21.5V3238.5S3297.38,3239.38,3297,3239Z"
                transform="translate(-0.25 0.64)"
              ></path>
            </g>
            <g id="dom3">
              <path
                class="cls-2"
                d="M1446.8,3238.68h413v280.43H1842v297.7h17.27V4064H1446.8V3954.78h-54.32v-264.6h54.32S1446.44,3238.68,1446.8,3238.68Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-2"
                d="M1225.5,2966.25H1393V3231h466.5V3092.5H1833v-93h26V2757h-27.25V2517.5h-435v54h-192.5v-53.75H945.75v465.5H1225.5S1225.13,2965.88,1225.5,2966.25Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-2"
                d="M488.5,3230.25V2966h168v18.25H937v-467H676.5v55H358.25V2518.5H22.75V3000H76.5v229.75S488.5,3229.75,488.5,3230.25Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-2"
                d="M435,3239v279.5H418V3816h17.5v247.5H22.25V3828.75H2V3696.5H22.5V3491H1.75V3354.75h21.5V3238.5S435.38,3239.38,435,3239Z"
                transform="translate(-0.25 0.64)"
              ></path>
            </g>
            <g id="dom2">
              <path
                class="cls-1"
                d="M3296.78-.13V247.75H3278.5V545H3297V825.75H2884V709.25h-21.25V572.75h21.5V367h-21V235.25h21V1S3296.78-.27,3296.78-.13Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M3350,833.25V1098h166.5v-18H3799v466.75H3538v-54H3220V1546H2883.75V1065H2938V833.5Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M4086.75,1079.75v17.75H4254V833h466.25V971.75H4695v93h25.25v242.5h-27.5V1546H4257.5v-53.75h-192V1547h-260V1079.75S4086.5,1079.5,4086.75,1079.75Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                class="cls-1"
                d="M4254.67,373l-1-263.33h54.66V.67h412.34V247.33h-18.34V544.67h18v281H4308V373.33S4254.67,373.67,4254.67,373Z"
                transform="translate(-0.25 0.64)"
              ></path>
            </g>
            <g id="dom1" :class="{'active': data.building == 1 && !data.section}">
              <path
                :class="{'active': data.building == 1 && data.section == 4}"
                d="M434.78-.13V247.75H416.5V545H435V825.75H22V709.25H.75V572.75h21.5V367h-21V235.25h21V1S434.78-.27,434.78-.13Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                :class="{'active': data.building == 1 && data.section == 3}"
                d="M488,833.25V1098H654.5v-18H937v466.75H676v-54H358V1546H21.75V1065H76V833.5Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                :class="{'active': data.building == 1 && data.section == 2}"
                d="M1224.75,1079.75v17.75H1392V833h466.25V971.75H1833v93h25.25v242.5h-27.5V1546H1395.5v-53.75h-192V1547h-260V1079.75S1224.5,1079.5,1224.75,1079.75Z"
                transform="translate(-0.25 0.64)"
              ></path>
              <path
                :class="{'active': data.building == 1 && data.section == 1}"
                d="M1391.67,373V109.67h54.66V.67h412.34V247.33h-18.34V544.67h18v281H1446V373.33S1391.67,373.67,1391.67,373Z"
                transform="translate(-0.25 0.64)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="f-price-btns">
        <div class="m-flex">
          <div class="w-price">
            <div class="t">{{$t('flat["цена"]')}}</div>
            <div class="price">
              <span v-if="type == 'plan'">{{$t('pd["от"]')}}</span>
              {{data.price_m2 | Price}} грн./м
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
        <div>
          <a
            :href="'https://web.park-residence.com.ua/plan.pdf?id='+data.plan_id"
            target="_blank"
            class="l-print"
          >
            <svg>
              <use xlink:href="#ic-print"></use>
            </svg>
            {{$t('flat["Печать"]')}}
          </a>
        </div>
        <div>
          <a
            :href="'https://web.park-residence.com.ua/plan.pdf?id='+data.plan_id"
            download
            class="l-dw"
          >
            <svg>
              <use xlink:href="#ic_dw"></use>
            </svg>
            {{$t('flat["Скачать"]')}} PDF
          </a>
        </div>

        <div>
          <a
            class="l-print js-modal"
            data-fancybox="pdfEmail"
            data-src="#pdfEmail"
            href="javascript:;"
          >
            <svg>
              <use xlink:href="#ic-mail"></use>
            </svg>
            <span>
              {{$t('form["writeUsBtn"]')}}
              <span class="mob-nome">на e-mail</span>
            </span>
          </a>
        </div>

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

    <div class="def-modal zv-modal text-center" id="pdfEmail">
      <div class="heading4">
        {{$t('form["writeUsBtn"]')}}
        <br>PDF на e-mail
      </div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="pdfEmail"
        :textSuccess="$t('mes.textSuccessPl')"
        :adata="data"
        :fields="{
        name:$t('form.name'),
        email:'E-mail',
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text">{{$t('modal["или напишите нам"]')}}</div>
        <socList/>
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
