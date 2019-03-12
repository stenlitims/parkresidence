<template>
  <div class="main-page">
    <div class="main-text-list owl-carousel">
      <div v-for="(item, i) in main_slider" :key="i" class="main-img" :class="'slide'+i">
        <img :src="$url+item.image" class="bg-img" :class="{'scaleIn': i == 0}" alt>
        <div class="main-text" v-if="i == 0">
          <div
            class="heading1 wow fadeInUp2"
            data-wow-duration=".6s"
            data-wow-delay="0"
            v-html="item.title"
          ></div>
          <div
            class="text wow fadeInUp2"
            data-wow-duration=".6s"
            data-wow-delay=".1s"
            v-html="item.text"
          ></div>
          <div
            class="btns wow fadeInUp2"
            data-wow-duration=".6s"
            data-wow-delay=".2s"
            v-html="item.btn"
          ></div>
        </div>
        <div class="main-text" v-else>
          <div class="heading1" v-html="item.title"></div>
          <div class="text" v-html="item.text"></div>
          <div class="btns" v-html="item.btn"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section1 section text-center">
        <div
          class="heading2 line-b wow fadeInUp2"
          data-wow-duration=".6s"
          data-wow-delay=".2s"
          v-html="d.introtext"
        ></div>
        <div
          class="text1 wow fadeInUp2"
          data-wow-duration=".6s"
          data-wow-delay=".4s"
          v-html="d.content"
        ></div>
      </div>

      <div class="section2 section">
        <div class="list-text-img">
          <div class="list-wrap">
            <div class="list">
              <div class="items">
                <div class="item wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".2s">
                  <div class="num">01</div>
                  <div class="title">{{ids.s1['title_'+lang]}}</div>
                  <div class="text" v-html="ids.s1['text_'+lang]"></div>
                </div>
                <div class="item wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".3s">
                  <div class="num">02</div>
                  <div class="title">{{ids.s2['title_'+lang]}}</div>
                  <div class="text" v-html="ids.s2['text_'+lang]"></div>
                </div>
              </div>
              <div class="btns wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".4s">
                <nuxt-link class="btn btn-def btn-l" :to="$i18n.path('')+'location'" exact>
                  <span>{{$t('links["Расположение"]')}}</span>
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="img wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".8s">
            <img :src="$url+'assets/img/main/1.webp'" alt>
          </div>
        </div>
      </div>

      <div class="section3 section">
        <div class="list-text-img">
          <div class="img wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".5s">
            <img :src="$url+'assets/img/main/2.webp'" alt>
          </div>
          <div class="list-wrap">
            <div class="list">
              <div class="items">
                <div class="item wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".2s">
                  <div class="num">03</div>
                  <div class="title">{{ids.s3['title_'+lang]}}</div>
                  <div class="text" v-html="ids.s3['text_'+lang]"></div>
                </div>
                <div class="item wow fadeInUp2" data-wow-duration=".6s" data-wow-delay=".3s">
                  <div class="num">04</div>
                  <div class="title">{{ids.s4['title_'+lang]}}</div>
                  <div class="text" v-html="ids.s4['text_'+lang]"></div>
                </div>
              </div>
              <div class="btns">
                <nuxt-link class="btn btn-def btn-l" :to="$i18n.path('')+'concept'" exact>
                  <span>{{$t('links["Концепция"]')}}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="black-box section">
        <div class="row">
          <div class="col-lg-8">
            <div class="row list">
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">850</div>
                  <div
                    class="text"
                    v-html="l('Уютных, комфортных <br>и теплых квартир','Затишних, комфортних <br> і теплих квартир')"
                  ></div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">8</div>
                  <div
                    class="text"
                    v-html="l('Этажей в 6 современных <br>домах жилого комплекса','Поверхів в 6 сучасних <br> будинках житлового комплексу')"
                  ></div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">34-184 м²</div>
                  <div
                    class="text"
                    v-html="l('Площадь квартир <br>с продуманной планировкой','Площа квартир <br> з продуманим плануванням')"
                  ></div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">2020 {{l('год', 'рік')}}</div>
                  <div
                    class="text"
                    v-html="l('Ввод в эксплуатацию <br>и выдача ключей в доме №1', 'Введення в експлуатацію <br> і видача ключів в будинку №1')"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 text-bl">
            <div class="title2">
              <p
                v-html="l('Выберите комфортную планировку квартиры <br>прямо сейчас','Виберіть комфортну <br> планування квартири <br> прямо зараз')"
              ></p>
            </div>
            <div class>
              <nuxt-link :to="$i18n.path('')+'podbor'" exact class="btn btn-def">
                <span>{{$t('links["Выбрать квартиру"]')}}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section-podbor">
      <div class="container">
        <podbor mode="main"></podbor>
      </div>
    </section>

    <div class="w-text-slide">
      <div class="text-slide owl-carousel">
        <div
          v-for="(item, i) in b_main_slider"
          :key="i"
          class="main-bg"
          :data-id="i"
          :style="{'background-image': 'url('+$url+item.image+')'}"
        ></div>
      </div>
      <div class="wrap-container">
        <div class="container">
          <div class="wrap-text-slide">
            <div class="wr">
              <div class="s-nav">
                <div class="s-prev"></div>
                <div class="s-next"></div>
              </div>
              <div class="title">{{b_main_slider[blide].title}}</div>
              <div class="text">
                <p>{{b_main_slider[blide].text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-text-bottom">
      <div class="container text-center">
        <div class="heading3">{{ids.s5['title_'+lang]}}</div>
        <div class="text" v-html="ids.s5['text_'+lang]"></div>
        <a class="btn btn-def js-modal" data-fancybox="zapis" data-src="#zapis" href="javascript:;">
          <span>{{$t('main["Записаться на просмотр"]')}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
import podbor from "~/components/podbor";

export default {
  mixins: [mix],
  components: {
    podbor
  },
  data() {
    return {
      blide: 0
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "1").then(res => {
      return {
        data: res.data
      };
    });
  },
  created() {},
  computed: {
    main_slider() {
      return this.data.tv.main_slider[this.$store.state.locale];
    },
    b_main_slider() {
      return this.data.tv.b_main_slider[this.$store.state.locale];
    },
    ids() {
      return this.data.tv.list_text;
    }
  },
  mounted() {
    let bSlider = $(".text-slide");
    bSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      autoplaySpeed: 3000,
      navSpeed: 3000
    });

    function setDisable() {
      let $active = $(".text-slide .owl-item.active");
      $(".s-prev, .s-next").removeClass("ds");
      // console.log($active.next());
      if ($active.next().length == 0) {
        $(".s-next").addClass("ds");
      }
      if ($active.prev().length == 0) {
        $(".s-prev").addClass("ds");
      }
    }

    setTimeout(() => {
      setDisable();
    }, 300);

    $(document).on("click", ".s-next", function() {
      bSlider.trigger("next.owl.carousel");
      setDisable();
    });

    $(document).on("click", ".s-prev", function() {
      bSlider.trigger("prev.owl.carousel");
      setDisable();
    });

    bSlider.on("changed.owl.carousel", event => {
      setTimeout(() => {
        let id = $(".text-slide .active .main-bg").data("id");
        //   console.log(id);
        this.blide = id;
      }, 100);
    });

    let mainSlider = $(".main-text-list");

    mainSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      items: 1,
      navText: ["", ""],
      autoplaySpeed: 1000,
      navSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      animateOut: "scaleFadeIn",
      animateIn: "scaleFadeOut"
    });

    mainSlider.on("changed.owl.carousel", function(event) {
      setTimeout(() => {
        $(".main-img img").removeClass("scaleIn");
      }, 1000);
    });

    /*

  

    function removeClAnim() {
      setTimeout(() => {
        $(".main-img img").removeClass("scaleFadeIn scaleFadeOut");
      }, 1000);
    }

    mainSlider.on("change.owl.carousel", function(event) {
      let $currentItem = $(".owl-item", mainSlider).eq(event.item.index);
      // console.log(1, $currentItem);
      $currentItem.find("img").addClass("scaleFadeOut");
      $currentItem.find("img").removeClass("scaleFadeIn");
      removeClAnim();
    });

    mainSlider.on("changed.owl.carousel", function(event) {
      // console.log(2);
      let $currentItem = $(".owl-item", mainSlider).eq(event.item.index);
      $currentItem.find("img").addClass("scaleFadeIn");
      $currentItem.find("img").removeClass("scaleFadeOut");
      removeClAnim();
    });
    */
  }
};
</script>
