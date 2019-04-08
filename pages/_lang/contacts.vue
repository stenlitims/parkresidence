<template>
  <div class="inner-page1">
    <h1 class="def-h1" v-if="d.menutitle">{{d.menutitle}}</h1>
    <div class="container">
      <div class="container2">
        <div class="row contacts">
          <div class="col-md-6 cube-contacts">
            <div class="title">{{l('Заходите в гости', 'Заходьте в гості')}}</div>
            <div class="list">
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_location"></use>
                </svg>
                {{$t('adr["main"]')}}
              </div>
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_location"></use>
                </svg>
                {{l('с. Софиевская Борщаговка, ул. Соборная, 126/16','с. Софіївська Борщагівка, вул. Соборна, 126/16')}}
              </div>

              <div class="c-item c-phone">
                <svg>
                  <use xlink:href="#ic_phone2"></use>
                </svg>
                <a :href="'tel:'+$store.state.mPhone">{{$store.state.mPhone}}</a>,
                <a :href="'tel:(063) 513 00 01'" @click="glGa">(063) 513-00-01</a>
              </div>
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_clock"></use>
                </svg>
                {{l('Пн – Пт: 09:00-20:00 Сб – Вс: 09:00–18:00', 'Пн – Пт: 09:00-20:00 Сб – Нд: 09:00–18:00')}}
              </div>
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_mail"></use>
                </svg>
                <a :href="'mailto:'+$store.state.mEmail" @click="glGa">{{$store.state.mEmail}}</a>
              </div>
            </div>
            <div class="title">ЖК Park Residence</div>
            <div class="c-item">
              <svg>
                <use xlink:href="#ic_location"></use>
              </svg>
              {{$t('adr["main"]')}}
            </div>
          </div>
          <div class="col-md-6 r-text-contacts">
            <div>
              <div
                class="heading4"
                v-html="l('Хотите узнать больше <br>о ЖК или задать вопрос?', 'Хочете дізнатися більше <br> про ЖК або задати питання?')"
              ></div>
              <a
                class="btn btn-line js-modal"
                data-fancybox="writeUsBtn"
                data-src="#writeUs"
                href="javascript:;"
                @click="glGa"
              >{{$t('links["Написать нам"]')}}</a>

              <div class="adr-links">
                <a
                  class="js-modal"
                  data-fancybox="adressphone1"
                  data-src="#adressphone"
                  href="javascript:;"
                >
                  <svg>
                    <use xlink:href="#ico-phone"></use>
                  </svg>
                  {{l('Отправить адрес на телефон','Надіслати адресу на телефон')}}
                </a>
                <br>
                <a :href="$store.state.mapUrl" target="_blank">
                  <svg>
                    <use xlink:href="#adr-loc"></use>
                  </svg>
                  {{l('Проложить маршрут на карте','Прокласти маршрут на мапі')}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="map" class="contact-map"></div>
    <div class="main-text-bottom hideMin675">
      <div class="container text-center">
        <div
          class="heading3"
          v-html="l('Хотите узнать больше <br>о ЖК или задать вопрос?', 'Хочете дізнатися більше <br> про ЖК або задати питання?')"
        ></div>

        <a
          class="btn btn-line js-modal"
          data-fancybox="writeUsBtn2"
          data-src="#writeUs"
          href="javascript:;"
        >
          <span>{{$t('links["Написать нам"]')}}</span>
        </a>

        <div class="adr-links">
          <a
            class="js-modal"
            data-fancybox="adressphone2"
            data-src="#adressphone"
            href="javascript:;"
          >
            <svg>
              <use xlink:href="#ico-phone"></use>
            </svg>
            {{l('Отправить адрес на телефон','Надіслати адресу на телефон')}}
          </a>
          <br>
          <a :href="$store.state.mapUrl" target="_blank">
            <svg>
              <use xlink:href="#adr-loc"></use>
            </svg>
            {{l('Проложить маршрут на карте','Прокласти маршрут на мапі')}}
          </a>
        </div>
      </div>
    </div>

    <div class="def-modal zv-modal text-center" id="adressphone">
      <div
        class="heading4 text-center"
        style="max-width: 250px;"
      >{{l('Отправить адрес на телефон','Надіслати адресу на телефон')}}</div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="adressphone"
        :textSuccess="l('Спасибо! Адрес был отправлен Вам в SMS-сообщении.', 'Дякуємо! Адреса був відправлений Вам у SMS-повідомленні.')"
        :fields="{
        name:$t('form.name'),
        phone:$t('form.phone')
      }"
      ></cForm>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
import cForm from "~/components/elem/cForm.vue";
import socList from "~/components/elem/socList.vue";
export default {
  components: {
    cForm,
    socList
  },
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
    return axios.get(api + "13").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {},
  mounted() {
    if (!window.mapLoaded) {
      this.loadMapScript();
    } else {
      this.buildMap();
    }

    $(".js-modal").fancybox({
      animationDuration: 500,
      animationEffect: "material",
      arrows: false,
      touch: false
      // baseClass: "b-close"
    });
  },
  methods: {
    buildMap() {
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/basic-v9", // stylesheet location
        center: [30.324553, 50.404428], // starting position [lng, lat]
        zoom: 14
      });

      map.addControl(
        new MapboxLanguage({
          defaultLanguage: "ru"
        })
      );
      map.scrollZoom.disable();
      map.addControl(new mapboxgl.NavigationControl());

      let listCord = [
        {
          title_ru: "ЖК Park Residence",
          title_ua: "ЖК Park Residence",
          cord: [50.404428, 30.324553],
          type: "main"
        },
        {
          title_ru: "Отдел продаж №1",
          title_ua: "Відділ продажу №1",
          cord: [50.404353, 30.323356]
        },
        {
          title_ru: "Отдел продаж №2",
          title_ua: "Відділ продажу №2",
          cord: [50.400372, 30.327067]
        }
      ];

      for (let data of listCord) {
        var el = document.createElement("div");
        el.className = "marker";
        var offset = 30;

        el.style.width = "24px";
        el.style.height = "32px";

        el.style.backgroundImage =
          "url(" + this.$url + "assets/images/ic_location.png)";
        var popup = new mapboxgl.Popup({
          offset: offset
        }).setHTML(
          '<div class="wr-loc">' + data["title_" + this.lang] + "</div>"
        );

        data.cord = [data.cord[1], data.cord[0]];

        // add marker to map
        let marker = new mapboxgl.Marker(el)
          .setLngLat(data.cord)
          .setPopup(popup)
          .addTo(map);

        if (data.type == "main") {
          marker.togglePopup();
        }
      }
    }
  }
};
</script>
