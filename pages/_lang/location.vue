<template>
  <div class="inner-page">
    <div class="inner-bg section" style="background-image: url(images/location/1.jpg)">
      <div class="inner-heading">
        <h1 class="h1">{{d.introtext}}</h1>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="def-text def-text-grey text-center inner-text-m" v-html="d.content"></div>
      </div>

      <div class="section">
        <div class="bg-img-text" style="background-image: url(images/location/2.jpg)">
          <div class="inner-text">
            <p>
              {{l('ЖК Park Residence — это тихий уголок, где можно расслабиться и отдохнуть. Но всего мгновение — и вы уже в течении большого города и круговороте ярких событий.', 'ЖК Park Residence - це тихий куточок, де можна розслабитися і відпочити. Але лише мить - і ви вже на протязі великого міста і кругообігу яскравих подій.')}}
              </p>
          </div>
        </div>
      </div>
    </div>

    <div class="location-block">
      <div class="container location-header">
        <div class="heading3 text-center">{{$t('main["Инфраструктура"]')}}</div>
        <div class="list-locations-wrap">
          <div class="list-locations">
            <div class="item" data-type="shop">
              <div class="ico">
                <svg class="icon">
                  <use xlink:href="#loc-mag"></use>
                </svg>
              </div>
              <div class="title">{{l('Магазины', 'Магазини')}}</div>
            </div>
            <div class="item" data-type="theater">
              <div class="ico">
                <svg class="icon">
                  <use xlink:href="#loc-teater"></use>
                </svg>
              </div>
              <div class="title">{{l('Развлечения', 'Розваги')}}</div>
            </div>
            <div class="item" data-type="kids">
              <div class="ico">
                <svg class="icon">
                  <use xlink:href="#loc-children"></use>
                </svg>
              </div>
              <div class="title">{{l('Детям', 'Дітям')}}</div>
            </div>
            <div class="item" data-type="cafe">
              <div class="ico">
                <svg class="icon">
                  <use xlink:href="#loc-eat"></use>
                </svg>
              </div>
              <div class="title">{{l('Рестораны', 'Ресторани')}}</div>
            </div>
            <div class="item" data-type="medical">
              <div class="ico">
                <svg class="icon">
                  <use xlink:href="#loc-medical"></use>
                </svg>
              </div>
              <div class="title">Медицина</div>
            </div>
            <div class="item" data-type="sport">
              <div class="ico">
                <svg class="icon">
                  <use xlink:href="#loc-boll"></use>
                </svg>
              </div>
              <div class="title">Спорт</div>
            </div>
          </div>
        </div>
      </div>

      <div id="map" class="location-map"></div>
    </div>

    <div class="main-text-bottom">
      <div class="container text-center">
        <div class="heading3" v-html="l('Хотите осмотреть территорию вокруг <br>ЖК Park Residence?', 'Хочете оглянути територію навколо <br> ЖК Park Residence?')">
        </div>

        <a href class="btn btn-def">
          <span>{{$t('main["Записаться на просмотр"]')}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
export default {
  mixins: [mix],
  data() {
    return {};
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "9").then(res => {
      return {
        data: res.data
      };
    });
  },
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
        center: [30.241477870847287, 50.52163636529689], // starting position [lng, lat]
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

      let lang = this.$store.state.locale;
      let markers = [];
      let infrastructure = this.data.tv.infrastructure;
      let actinBtns = [];

      function setMarker(types = []) {
        if (!types.includes("main")) {
          types.push("main");
        }
        //  markers = [];
        for (let data of infrastructure) {
          for (let type in types) {
            //if (type && type !== data.type && data.type !== "main") continue;

            if (markers[data.MIGX_id]) markers[data.MIGX_id].remove();

            if (!types.includes(data.type)) {
              continue;
            }

            var el = document.createElement("div");
            el.className = "marker_" + data.type;
            var offset = 30;
            if (data.type == "main") {
              el.style.width = "40px";
              el.style.height = "50px";
              el.className = "main-marker";
            } else {
              el.style.width = "24px";
              el.style.height = "24px";
              offset = 17;
            }

            //  el.style.backgroundImage =  "url(" + this.$url + "assets/images/krug.png)";
            var popup = new mapboxgl.Popup({
              offset: offset
            }).setHTML(
              '<div class="wr-loc">' + data["title_" + lang] + "</div>"
            );

            if (!Array.isArray(data.cord)) {
              data.cord = data.cord.split(",");
              data.cord = [data.cord[1], data.cord[0]];
            }

            // add marker to map
            markers[data.MIGX_id] = new mapboxgl.Marker(el)
              .setLngLat(data.cord)
              .setPopup(popup)
              .addTo(map);
          }
        }
      }

      setMarker();

      $(document).on("click", ".mapboxgl-marker", function() {
        $(".mapboxgl-marker").removeClass("active");
        $(this).addClass("active");
      });

      $(document).on("click", ".list-locations .item", function() {
        var item = $(this).data("type");

        if (!actinBtns.includes(item)) {
          actinBtns.push(item);
          $(this).addClass("active");
        } else {
          actinBtns.splice(actinBtns.indexOf(item), 1);
          $(this).removeClass("active");
        }

        //   console.log(actinBtns);

        setMarker(actinBtns);
      });
    }
  }
};
</script>
