<template>
  <div class="inner-page">
    <div class="container">
      <div class="container2">
       
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
    return {
      mainClass: ["def-page", "black-header"]
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "15").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {},
  mounted() {

  },
  methods: {

  }
};
</script>
