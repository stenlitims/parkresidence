export default {
  head() {
    let data = this.data[this.$store.state.locale];
    let title = data.pagetitle + this.$store.state.siteName;
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
    lang() {
      return this.$store.state.locale;
    },
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
                "pk.eyJ1IjoiaWdvcnRrYWNodWsiLCJhIjoiY2pydGdxcTRoMG9kZDN5bWkyYm1tMXY4biJ9.un44KRzrFYmnmUix_jKe2g";
              this.buildMap();
              window.mapLoaded = true;
            }
          );
        }
      );
    },
    introtext(item) {
      if (item["introtext"] == "") {
        let text = item["content"].replace(/<[^>]+>/g, "");
        return text.substring(0, 200) + "...";
      } else {
        return item["introtext"];
      }
    }
  }
}
