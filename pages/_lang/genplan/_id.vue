<template>
  <div class="sections">
    <visual :dir="params.dir" :type="params.type" :activeSlide="params.slide" :rk="params.rk"></visual>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import visual from "~/components/visual.vue";
import axios from "axios";
export default {
  mixins: [mix],
  components: {
    visual
  },
  data() {
    return {};
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "23").then(res => {
      return {
        data: res.data
      };
    });
  },
  mounted() {
    $(".footer").hide();
    if (!this.$store.state.flats) {
      this.$store.dispatch("getFlats");
    }

    //console.log(this.$route);

    if (window.innerWidth < 1200) {
      // console.log();
      this.$store.commit("setMainClass", [
        "def-page",
        "black-header",
        "page-visual"
      ]);
    }
  },
  beforeDestroy() {
    $(".footer").show();
  },
  computed: {
    ids() {
      return this.data.tv.list_text;
    },
    params() {
      let dir = "g360";
      let type = "genplan";
      let slide = 15;
      let rk = [23, 3, 7, 11, 15, 19];
      if (this.$route.params.id) {
        dir = "dom360";
        type = "building";
        slide = 22;
        rk = [1, 5, 9, 13, 17, 22];
      }
      return {
        dir,
        type,
        slide,
        rk
      };
    }
  }
};
</script>
