<template>
  <div class="inner-page">
    <div class="container">
      <div class="container2">
        <div class="row contacts">
          <div class="col-lg-6 cube-contacts">
            <div class="title">Заходите в гости</div>
            <div class="list">
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_location"></use>
                </svg>
                г. Киев, ул. Саксаганского, 35А, офис №17
              </div>
              <div class="c-item c-phone">
                <svg>
                  <use xlink:href="#ic_phone2"></use>
                </svg>
                <a href="#">+38 050 123-45-67</a>
              </div>
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_clock"></use>
                </svg>
                Пн-Пт с 9:00 до 19:30, Сб с 10:00 до 17:00
              </div>
              <div class="c-item">
                <svg>
                  <use xlink:href="#ic_mail"></use>
                </svg>
                <a href="#">clients@parkresidence.com.ua</a>
              </div>
            </div>
            <div class="title">ЖК Park Residence</div>
            <div class="c-item">
              <svg>
                <use xlink:href="#ic_location"></use>
              </svg>
              г. Киев, ул. Саксаганского, 35А
            </div>
          </div>
          <div class="col-lg-6 r-text-contacts">
            <div>
              <div class="heading4">Хотите узнать больше
                <br>о ЖК или задать вопрос?
              </div>
              <a href="#" class="btn btn-line">Написать нам</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="map" class="contact-map"></div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
export default {
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
  },
  methods: {
    buildMap() {
      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/basic-v9", // stylesheet location
        center: [30.231698536778982, 50.51732365110613], // starting position [lng, lat]
        zoom: 13
      });

      // mapboxgl.setRTLTextPlugin(
      //   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js"
      // );
      map.addControl(
        new MapboxLanguage({
          defaultLanguage: "ru"
        })
      );
      map.scrollZoom.disable();
      map.addControl(new mapboxgl.NavigationControl());
    }
  }
};
</script>
