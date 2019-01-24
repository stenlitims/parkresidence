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
    }
  },
  methods: {

  }
}
