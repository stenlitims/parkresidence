<template>
  <div class="sections">
    <visual type="floors" :activeSlide="1"></visual>
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

    if (window.innerWidth < 1200) {
      // console.log();
      this.$store.commit("setMainClass", [
        "def-page",
        "black-header",
        "page-visual"
      ]);
    }
  },
  destroyed() {
    $(".footer").show();
  },
  computed: {
    type() {
      let type = "genplan";
      if (this.$route.params.id) {
        type = "building";
      }
      return type;
    }
  }
};
</script>
