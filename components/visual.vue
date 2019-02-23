<template>
  <div class="visual">
    <div
      class="visual-wrap"
      @mousedown="mousedown"
      @touchstart="mousedown"
      @mouseup="mouseup"
      @touchend="mouseup"
      @mousemove="mousemove"
      @touchmove="mousemove"
      @mousewheel="mousemove"
    >
      <div class="list360" :class="{'active': v360}">
        <div
          class="item"
          v-for="item in 24"
          :key="item"
          :class="{'active': item == activeSlide}"
          :data-index="item"
        >
          <img :src="$store.state.mainUrl+'assets/images/'+dir+'/'+item+'.webp'" alt class>
        </div>
      </div>
      <div class="v-plan genplan" v-if="type == 'genplan'" :class="{'active': !v360}">
        <div class="lb active" style="left: 30.5%;top: 58.5%;">
          <div class="t">{{$t('main["Дом"]')}} 1</div>
          <span>IV кв 2020</span>
        </div>
        <div class="lb" style="left: 21.5%;top: 29.5%;">
          <div class="t">{{$t('main["Дом"]')}} 2</div>
          <span>Скоро</span>
        </div>
        <div class="lb" style="left: 58.5%;top: 45.5%;">
          <div class="t">{{$t('main["Дом"]')}} 3</div>
          <span>Скоро</span>
        </div>
        <div class="lb" style="left: 45.5%;top: 18.5%;">
          <div class="t">{{$t('main["Дом"]')}} 4</div>
          <span>Скоро</span>
        </div>
        <div class="lb" style="left: 75.5%;top: 36.5%;">
          <div class="t">{{$t('main["Дом"]')}} 5</div>
          <span>Скоро</span>
        </div>
        <div class="lb" style="left: 61.5%;top: 12.5%;">
          <div class="t">{{$t('main["Дом"]')}} 6</div>
          <span>Скоро</span>
        </div>
        <div class="img-plan">
          <img :src="$store.state.mainUrl+'assets/images/genplan/genplan.webp'" alt>
        </div>
      </div>
    </div>

    <div class="visual-footer">
      <div class="container line1">
        <div class="heading2">
         {{l('Выберите', 'Виберіть')}} 
          <br>
          <span v-if="type == 'genplan'">{{$t('main["Дом"]')}}</span>
          <span v-else>Секцию</span>
        </div>

        <a href="#" class="link-ico">
          <div class="ico">
            <svg>
              <use xlink:href="#ico-settings"></use>
            </svg>
          </div>
          <div class="t" style="max-width: 100px">{{$t('links["Подбор по параметрам"]')}}
          </div>
        </a>

        <div class="ico-360">
          <svg>
            <use xlink:href="#ico-360"></use>
          </svg>
        </div>

        <div class="type-list">
          <a href="#" class="active">{{$t('main["Квартиры"]')}}</a>
          <a href="#">{{$t('main["Коммерция"]')}}</a>
          <a href="#">{{$t('main["Паркинг"]')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v360: false,
      par: false,
      last: 1,
      last2: false,
      pic_X: false,
      pic_W: false,
      center_X: false,
      movestop: false,
      timeFrame: 60,
      draggable: false,
      wheeling: undefined,
      touchTimeout: null
    };
  },

  props: ["dir", "type", "activeSlide"],

  mounted() {
    this.par = $(".list360");
    this.pic_X = this.par.offset().left;
    this.pic_W = this.par.width() / 2;
    this.center_X = this.pic_X + this.pic_W;
    this.movestop = this.pic_W / 25;
  },

  methods: {
    mousedown() {
      this.touchTimeout = setTimeout(() => {
        this.draggable = true;
      }, 300);
    },
    mouseup() {
      clearTimeout(this.touchTimeout);
      this.draggable = false;
      setTimeout(() => {
        this.setPosition();
      }, 400);
    },
    mousemove(event) {
      if (event.type == "mousewheel") {
        this.v360 = true;

        if (event.wheelDelta > 0 || event.detail < 0) {
          this.moveImg("left");
        } else {
          this.moveImg(false);
        }

        // if (!this.wheeling) {
        //   //   console.log('start wheeling!');
        // }

        clearTimeout(this.wheeling);
        this.wheeling = setTimeout(() => {
          this.wheeling = undefined;
          this.setPosition();
        }, 450);

        return;
      } else {
        if (!this.draggable) return;
      }

      this.v360 = true;

      var index = Math.ceil(
        Math.abs(event.pageX - this.center_X) / this.movestop
      );
      if (index == this.last) {
        return;
      }
      this.last = index;

      if (!this.last2) {
        this.last2 = event.pageX;
      }
      setTimeout(() => {
        this.last2 = event.pageX;
      }, 20);

      if (event.pageX > this.last2) {
        this.moveImg("left");
      } else {
        this.moveImg(false);
      }
    },
    moveImg(dir) {
      //    console.log(dir);
      let $item = $(".list360 .item.active");
      if (!dir) {
        let $next = $item.next();
        if ($next.length == 0) {
          $next = $(".list360 .item:first-child");
        }
        $next
          .addClass("active")
          .siblings()
          .removeClass("active");
      } else {
        let $prev = $item.prev();
        if ($prev.length == 0) {
          $prev = $(".list360 .item:last-child");
        }
        $prev
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
    },
    animMoveImg(steps, dir) {
      let counter = 0;
      let looper = setInterval(() => {
        counter++;
        this.moveImg(dir);
        if (counter >= steps) {
          clearInterval(looper);
        }
      }, this.timeFrame);
    },
    setPosition() {
      let index = $(".list360 .item.active").index() + 1;

      function d(a) {
        return -a;
      }
      //   console.log(index);
      let steps = 0;
      let dir = false;
      if (index > this.activeSlide) {
        steps = index - this.activeSlide;
        dir = "left";
      } else {
        steps = this.activeSlide - index;
      }

      this.animMoveImg(steps, dir);

      // if (index > 5 && index < 10) {
      //   index = 10 - index;
      //   this.animMoveImg(index, false);
      //   //  return;
      // }
      // if (index > 10 && index < 15) {
      //   index = d(10 - index);
      //   console.log(index);
      //   this.animMoveImg(index, "left");
      //   // return;
      // }

      // if (index > 10 && index < 15) {
      //   index = 15 - index;
      //   this.animMoveImg(index, false);
      //   // return;
      // }
      // if (index > 15 && index < 20) {
      //   index = d(15 - index);
      //   // console.log(index);
      //   this.animMoveImg(index, "left");
      //   //  return;
      // }

      // if (index >= 15 && index < 24) {
      //   index = 24 - index;
      //   this.animMoveImg(index, false);
      //   //return;
      // }

      //   console.log((this.timeFrame * steps) - 100);

      setTimeout(() => {
        this.v360 = false;
      }, this.timeFrame * steps);
    }
  }
};
</script>