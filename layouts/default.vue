<template>
  <div :class="$store.state.mainClass" class="main-wrap">
    <div class="loadding" :class="{'active': loading}">
      <div class="line">
        <div class="line-inner" :style="styleLine"></div>
      </div>
    </div>
    <siteHeader/>
    <nuxt/>
    <siteFooter></siteFooter>

    <div class="m-buttons">
      <nuxt-link
        v-if="$store.state.fav.length"
        class="fav-btn m-btn"
        :to="$i18n.path('')+'favorites'"
        exact
      >
        <svg>
          <use xlink:href="#ic_heart"></use>
        </svg>
        <span class="num">{{$store.state.fav.length}}</span>
      </nuxt-link>
      <!-- <a
        class="phone-btn m-btn js-modal"
        data-fancybox="fbtncallback"
        data-src="#callback"
        href="javascript:;"
      >
        <svg>
          <use xlink:href="#ic_phone"></use>
        </svg>
      </a> -->
    </div>

    <div class="def-modal callback-modal text-center" id="callback">
      <div class="heading4" v-html="$t('modal.callbackHeading')"></div>
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
        <socList/>
      </div>
    </div>

    <div class="def-modal writeUs-modal text-center" id="writeUs">
      <div class="heading4 text-center" v-html="$t('links[\'Написать нам\']')"></div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="writeUs"
        :fields="{
        name:$t('form.name'),
        email:'E-mail',
        text:$t('form.text')
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text text-center">{{$t('modal["или напишите нам"]')}}</div>
        <socList/>
      </div>
    </div>

    <div class="def-modal zv-modal text-center" id="zapis">
      <div
        class="heading4 text-center"
        style="max-width: 250px;"
      >{{$t('main["Записаться на просмотр"]')}}</div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="zapis"
        :fields="{
        name:$t('form.name'),
        phone:$t('form.phone')
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text">{{$t('modal["или напишите нам"]')}}</div>
        <socList/>
      </div>
    </div>

    <div class="actions" id="actions">
      <div class="actions-list owl-carousel">
        <div class="item-action" :id="'ac'+i" v-for="(item, i) in $store.state.actions" :key="i">
          <div class="img">
            <img :src="$store.state.mainUrl+item.image" alt>
          </div>
          <div class="info">
            <div class="div">
              <div class="date">
                <div class="ico">
                  <svg>
                    <use xlink:href="#ic_calendar"></use>
                  </svg>
                </div>
                {{item['date_'+lang]}}
              </div>
              <div class="heading4">{{item['title_'+lang]}}</div>
              <div class="text" v-html="item['text_'+lang]"></div>
            </div>

            <div class="btns" v-html="item['btn_'+lang]"></div>
          </div>
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
import socList from "~/components/elem/socList.vue";
import all from "@/mixin/all";

export default {
  components: {
    siteFooter,
    siteHeader,
    modalNav,
    cForm,
    socList
  },

  mixins: [all],

  head() {
    const host = process.server
      ? this.$ssrContext.req.headers.host
      : window.location.host;
    return {
      link: [
        // We use $route.path since we don't use query parameters
        { rel: "canonical", href: `https://${host}${this.$route.path}` }
      ]
    };
  },

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

  created() {
    if (!this.$store.state.op.adress_ru) {
      this.$store.dispatch("getOptions");
    }
  },

  mounted() {
    // console.log(this.$route);
    // console.log(this.$i18n);

    this.$store.commit("getFav");

    this.isMobile();
    $(window).resize(() => {
      this.isMobile();
    });

    $(".burger").fancybox({
      animationDuration: 300,
      animationEffect: "material",
      arrows: false,
      touch: false,
      baseClass: "b-close"
    });

    this.loadFancy();

    let vue = this;

    $(document).on("click", "[data-link]", function(e) {
      e.preventDefault();
      vue.$router.push({ path: vue.$i18n.path("") + $(this).data("link") });
    });

    //$.fancybox.defaults.animationEffect = "material";

    // $(".js-actions").fancybox({
    //   animationDuration: 500,
    //   animationEffect: "material",
    //   arrows: false,
    //   touch: false,
    //   baseClass: "modal-actions",
    //   beforeShow: function(e) {
    //   }
    // });

    $(document).on("click", ".js-more", function(e) {
      e.preventDefault();
      let par = $(this).closest(".wrap-t");
      par.find(".text").slideToggle();
      $(this).toggleClass("active");
      let text = $(this).text();
      let data = $(this).data();
      if ($(this).text() == data.texth) {
        $(this).text(data.textsh);
      } else {
        $(this).text(data.texth);
      }
    });

    $(document).on("click", ".js-actions", () => {
      $.fancybox.open(this.actionsArr, {
        animationDuration: 500,
        animationEffect: "material",
        //    arrows: false,
        //   touch: false,
        baseClass: "modal-actions"
      });
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
    }, 1000);

    if (!this.$store.state.actions.length) {
      this.$store.dispatch("getActions");
    }
  },
  computed: {
    lang() {
      return this.$store.state.locale;
    },
    actionsArr() {
      let data = [];
      let i;
      for (i = 0; i < this.$store.state.actions.length; i++) {
        data.push({
          src: "#ac" + i,
          type: "inline",
          opts: {}
        });
      }
      return data;
    }
  },
  methods: {
    isMobile() {
      let isMobile = false;
      if ($(window).width() < 768) {
        isMobile = 768;
      }
      if ($(window).width() < 576) {
        isMobile = 576;
      }
      if ($(window).width() < 420) {
        isMobile = 420;
      }
      if ($(window).width() < 375) {
        isMobile = 375;
      }
      this.$store.commit("setIsMobile", isMobile);
      // console.log(this.$store.state.isMobile);
    },
    stratLoading() {
      this.styleLine.width = "100%";
    },
    finishLoading() {},
    initWow() {
      var wow = new WOW({
        //	boxClass: 'wow', // default
        //	animateClass: 'animated', // default
        //	offset: 0, // default
        mobile: false,
        //   live: true // default
        callback: function(box) {
          $(box).addClass("af");
        }
      });
      wow.init();
    }
  }
};
</script>

<style lang="scss">
</style>
