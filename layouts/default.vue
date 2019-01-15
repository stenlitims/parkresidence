<template>
  <div>
    <siteHeader/>
    <nuxt/>
    <siteFooter/>

    <div class="m-buttons">
      <a href="#" class="fav-btn m-btn">
        <svg>
          <use xlink:href="#ic_heart"></use>
        </svg>
        <span class="num">2</span>
      </a>
      <a href="#" class="phone-btn m-btn">
        <svg>
          <use xlink:href="#ic_phone"></use>
        </svg>
      </a>
    </div>

    <modalNav/>
  </div>
</template>

<script>
import siteFooter from "~/components/footer.vue";
import siteHeader from "~/components/header.vue";
import modalNav from "~/components/modalNav.vue";

export default {
  components: {
    siteFooter,
    siteHeader,
    modalNav
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$i18n);

    $(".burger").fancybox({
      animationDuration: 500,
      animationEffect: "material",
      arrows: false,
      touch: false,
      baseClass: "b-close"
    });
  }
};
</script>

<style lang="scss">
</style>
