<template>
  <div class="sections">
    <visual></visual>
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
  computed: {
    ids() {
      return this.data.tv.list_text;
    }
  }
};
</script>
