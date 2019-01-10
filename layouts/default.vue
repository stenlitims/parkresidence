<template>
  <div>
    <siteHeader/>
    <nuxt/>
    <siteFooter/>
  </div>
</template>

<script>
import siteFooter from "~/components/footer.vue";
import siteHeader from "~/components/header.vue";

export default {
  components: {
    siteFooter,
    siteHeader
  }
};
</script>

<style lang="scss">
</style>
