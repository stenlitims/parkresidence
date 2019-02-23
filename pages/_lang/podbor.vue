<template>
  <div class="inner-page">
    <div class="container section">
      <podbor
     
      ></podbor>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
import podbor from "~/components/podbor";
export default {
  components: {
    podbor
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
