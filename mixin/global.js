export default {
  head() {
    let data = this.data[this.$store.state.locale];
    let title = data.pagetitle + " | Park Residence";
    if (data.longtitle) {
      title = data.longtitle;
    }

    return {
      title: title,
      meta: [{
        hid: "description",
        name: "description",
        content: data.description
      }]
    };
  },

  data() {
    return {
      mainClass: []
    };
  },

  created() {
    this.$store.commit("setMainClass", this.mainClass);
  },

  computed: {
    d() {
      if (this.data) {
        return this.data[this.$store.state.locale];
      }
    },
    title() {
      if (this.d.introtext) {
        return this.d.introtext;
      }
      return this.d.pagetitle;
    },
    $url() {
      return this.$store.state.mainUrl
    }

  },
  methods: {
    l(ru, ua) {
      return ru;
      if (this.$store.state.locale == 'ru') {
        return ru;
      }
      return ua;
    },
    loadMapScript() {
      $("head").append(
        $('<link rel="stylesheet" type="text/css" />').attr(
          "href",
          "https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.css"
        )
      );
      $.getScript(
        "https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.js",
        () => {
          $.getScript(
            "https://mapbox.github.io/mapbox-gl-language/index.js",
            () => {
              mapboxgl.accessToken =
                "pk.eyJ1Ijoic3RlbmxpdGltcyIsImEiOiJjam1uaG9uZ24wcmg0M3FvZXplaTNnZmdsIn0.qFtcVdoa2pzGrH_ykQLdXQ";
              this.buildMap();
              window.mapLoaded = true;
            }
          );
        }
      );
    }
  }
}
