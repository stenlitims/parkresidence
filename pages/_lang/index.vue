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
          >{{item.title}}</div>
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
          <div class="heading1">{{item.title}}</div>
          <div class="text" v-html="item.text"></div>
          <div class="btns" v-html="item.btn"></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section1 section text-center">
        <div class="heading2 line-b">ЖК Park Residence
          <br>создан для уютной жизни
        </div>
        <div class="text1">
          <p>Каждая мелочь в жилом комплексе продумана, чтобы сделать каждый день для вас и ваших близких полноценным и комфортным.</p>
        </div>
      </div>

      <div class="section2 section">
        <div class="list-text-img">
          <div class="list-wrap">
            <div class="list">
              <div class="items">
                <div class="item">
                  <div class="num">01</div>
                  <div class="title">
                    Жить недалеко от Киева
                    и оставаться в тишине
                  </div>
                  <div
                    class="text"
                  >Park Residence расположен всего в 3 километрах от столицы, вдали от оживленных дорог. Уровень шума во дворе комплекса в 3 раза меньше, чем в черте города. Вы сможете жить и отдыхать, не отвлекаясь на движение большого города.</div>
                </div>
                <div class="item">
                  <div class="num">02</div>
                  <div class="title">
                    Жить недалеко от Киева
                    и оставаться в тишине
                  </div>
                  <div
                    class="text"
                  >Park Residence расположен всего в 3 километрах от столицы, вдали от оживленных дорог. Уровень шума во дворе комплекса в 3 раза меньше, чем в черте города. Вы сможете жить и отдыхать, не отвлекаясь на движение большого города.</div>
                </div>
              </div>
              <div class="btns">
                <a href="#" class="btn btn-def btn-l">
                  <span>{{$t('links["Расположение"]')}}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="img">
            <img src="main/2.jpg" alt>
          </div>
        </div>
      </div>

      <div class="section3 section">
        <div class="list-text-img">
          <div class="img">
            <img src="main/3.jpg" alt>
          </div>
          <div class="list-wrap">
            <div class="list">
              <div class="items">
                <div class="item">
                  <div class="num">03</div>
                  <div class="title">
                    Безопасность
                    на первом месте
                  </div>
                  <div
                    class="text"
                  >Закрытый двор с пропускной системой, круглосуточная охрана комплекса с двумя стационарными постами и продуманная система видеонаблюдения — вот залог безопасности для жителей и гостей комплекса.</div>
                </div>
                <div class="item">
                  <div class="num">04</div>
                  <div class="title">
                    Стильная архитектура
                    и уютный двор
                  </div>
                  <div
                    class="text"
                  >ЖК Park Residence выгодно отличается от серых многоэтажек, ведь каждая деталь комплекса отражает философию хюгге, которая объединяет красоту, функциональность и комфорт.</div>
                </div>
              </div>
              <div class="btns">
                <a href="#" class="btn btn-def btn-l">
                  <span>{{$t('links["Концепция"]')}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section black-box">
        <div class="row">
          <div class="col-lg-8">
            <div class="row list">
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">850</div>
                  <div class="text">Уютных, комфортных
                    <br>и теплых квартир
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">8</div>
                  <div class="text">Этажей в 6 современных
                    <br>домах жилого комплекса
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">34-82 м²</div>
                  <div class="text">Площадь квартир
                    <br>с продуманной планировкой
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="item">
                  <div class="num">2019 год</div>
                  <div class="text">Ввод в эксплуатацию
                    <br>и выдача ключей в доме №1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 text-bl">
            <div class="title2">
              <p>
                Выберите комфортную планировку
                квартиры
                <br>прямо сейчас
              </p>
            </div>
            <div class>
              <a href class="btn btn-def">
                <span>{{$t('links["Выбрать квартиру"]')}}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

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
        <div class="heading3">Создайте свое впечатление о Park Residence</div>
        <div class="text">
          <p>Запишитесь на просмотр и своими глазами посмотрите, как идет процесс
            <br>строительства и обустройства территории комплекса.
          </p>
        </div>
        <a href class="btn btn-def">
          <span>{{$t('main["Записаться на просмотр"]')}}</span>
        </a>
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
    }
  },
  mounted() {
    let bSlider = $(".text-slide");
    bSlider.owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      autoplaySpeed: 1000,
      navSpeed: 1000
    });

    $(document).on("click", ".s-next", function() {
      bSlider.trigger("next.owl.carousel");
    });

    $(document).on("click", ".s-prev", function() {
      bSlider.trigger("prev.owl.carousel");
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
