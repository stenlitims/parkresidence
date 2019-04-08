<template>
  <div class="inner-page">
    <h1 class="def-h1" v-if="d.menutitle">{{d.menutitle}}</h1>
    <div class="container section">
      <podbor mode="podbor" ptype="commerce"></podbor>
    </div>
    <podborText></podborText>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
import podbor from "~/components/podbor";
import podborText from "~/components/elem/podborText";
export default {
  components: {
    podbor,
    podborText
  },
  mixins: [mix],
  data() {
    return {
      mainClass: ["def-page", "black-header", "lg-bg"]
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "16").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
