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
      <div class="heading4" v-html="$t('links[\'Написать нам\']')"></div>
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

    // $(".js-actions").fancybox({
    //   animationDuration: 500,
    //   animationEffect: "material",
    //   arrows: false,
    //   touch: false,
    //   baseClass: "modal-actions",
    //   beforeShow: function(e) {
    //   }
    // });

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
    }, 1100);

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
