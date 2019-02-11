<template>
  <div :class="$store.state.mainClass" class="main-wrap">
    <div class="loadding" :class="{'active': loading}">
      <div class="line">
        <div class="line-inner" :style="styleLine"></div>
      </div>
    </div>
    <siteHeader/>
    <nuxt/>
    <siteFooter/>

    <div class="m-buttons">
      <nuxt-link class="fav-btn m-btn" :to="$i18n.path('')+'favorites'" exact>
        <svg>
          <use xlink:href="#ic_heart"></use>
        </svg>
        <span class="num">2</span>
      </nuxt-link>
      <a
        class="phone-btn m-btn js-modal"
        data-fancybox="fbtncallback"
        data-src="#callback"
        href="javascript:;"
      >
        <svg>
          <use xlink:href="#ic_phone"></use>
        </svg>
      </a>
    </div>

    <div class="def-modal callback-modal text-center" id="callback">
      <div class="heading4" v-html="$t('modal.callbackHeading')">
      </div>
      <div class="text">{{$t('modal["callbackText"]')}}</div>
      <cForm 
      :btnName="$t('form.callbackBtn')"
      action="callback" 
      :fields="{
        phone:$t('form.phone')
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text">{{$t('modal["или напишите нам"]')}}</div>
        <div class="soc-list-big soc-list">
          <a href="#" class="it">
            <div class="ico">
              <svg class="telegram">
                <use xlink:href="#ic_telegram"></use>
              </svg>
            </div>
            <div class="t">Telegram</div>
          </a>
          <a href="#" class="it">
            <div class="ico">
              <svg class="viber">
                <use xlink:href="#ic_viber"></use>
              </svg>
            </div>
            <div class="t">Viber</div>
          </a>
          <a href="#" class="it">
            <div class="ico">
              <svg class="messenger">
                <use xlink:href="#ic_messenger"></use>
              </svg>
            </div>
            <div class="t">Messenger</div>
          </a>
        </div>
      </div>
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
import cForm from "~/components/elem/cForm.vue";
import all from "@/mixin/all";

export default {
  components: {
    siteFooter,
    siteHeader,
    modalNav,
    cForm
  },

  mixins: [all],

  data() {
    return {
      loading: true,
      styleLine: {
        width: 0,
        opacity: 1
      },
      formCallback: {
        phone: ""
      }
    };
  },

  computed: {},

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

    $(".js-modal").fancybox({
      animationDuration: 500,
      animationEffect: "material",
      arrows: false,
      touch: false
      // baseClass: "b-close"
    });

    $(document).on("click", ".modal-nav a", function() {
      $.fancybox.close();
    });

    this.stratLoading();
    setTimeout(() => {
      this.styleLine.opacity = 0;
    }, 800);
    setTimeout(() => {
      this.loading = false;
      $("body").addClass("loaded");
      this.initWow();
    }, 1100);
  },
  methods: {
    stratLoading() {
      this.styleLine.width = "100%";
    },
    finishLoading() {},
    initWow() {
      var wow = new WOW({
        //	boxClass: 'wow', // default
        //	animateClass: 'animated', // default
        //	offset: 0, // default
        mobile: false // default
        //live: false // default
        //	callback: function (box) {
        //	}
      });
      wow.init();
    }
  }
};
</script>

<style lang="scss">
</style>
