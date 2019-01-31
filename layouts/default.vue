<template>
  <div :class="$store.state.mainClass" class="main-wrap">
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
if (typeof window == "object") {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

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

    $(document).on("click", ".modal-nav a", function() {
      $.fancybox.close();
    });
  }
};
</script>

<style lang="scss">
</style>
