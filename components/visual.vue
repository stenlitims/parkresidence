<template>
  <div class="visual" @mousemove="setTooltipCord" :class="{'a360': v360}">
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
      <div class="v-plan genplan" v-if="type == 'genplan'">
        <!-- Ракурс 1 -->
        <div class="rk" :class="{'active': !v360}">
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
          <svg viewBox="0 0 1901.86 1182.46" style="top: 6%;left: 16%;height: 82%;">
            <polygon
              @click="lSection(1)"
              @mouseover="setTooltip(true, 'genplan', 1)"
              @mouseout="setTooltip(false, 'genplan', 1)"
              points="232.51 919.18 204.51 865.18 176.51 705.85 183.84 693.85 440.51 611.85 503.17 592.52 514.51 605.85 588.51 617.85 609.17 682.52 624.51 672.52 651.84 715.18 653.17 744.52 727.84 820.52 751.17 902.52 755.17 1055.18 343.17 1181.85 305.17 1082.52 284.51 950.52 290.51 948.52 507.17 880.52 515.17 853.18 511.84 844.52 232.51 919.18"
            ></polygon>
            <polygon
              points="1397.17 638.52 1412.51 683.18 1389.84 835.18 1041.17 946.52 840.51 670.52 839.17 523.18 861.84 511.85 1199.84 415.18 1223.17 480.52 1212.51 625.85 1109.84 655.85 1125.17 677.85 1231.17 656.52 1235.17 627.85 1313.84 606.52 1329.17 619.85 1377.84 603.18 1397.17 638.52"
            ></polygon>
            <polygon
              points="52.51 490.52 30.51 444.52 0.51 303.85 3.17 283.18 284.51 219.85 294.51 223.85 344.51 216.52 359.84 260.52 384.51 308.52 397.17 305.18 415.84 339.18 419.17 362.52 448.51 379.85 464.51 437.18 479.17 583.85 130.51 681.85 99.17 599.85 75.17 479.85 52.51 490.52"
            ></polygon>
            <polygon
              points="907.17 149.85 887.17 85.18 586.51 161.85 574.51 181.85 581.17 281.85 719.17 520.52 1034.51 441.18 1039.84 291.85 1022.51 225.85 904.51 236.52 907.17 149.85"
            ></polygon>
            <polygon
              points="1365.34 578.02 1311.34 546.52 1330.84 388.52 1364.84 371.52 1660.34 291.02 1700.34 329.02 1724.84 356.52 1763.84 389.52 1808.34 416.02 1881.34 467.52 1901.34 534.52 1863.34 673.52 1561.34 774.02 1494.84 711.52 1519.84 573.02 1554.34 547.02 1576.84 541.52 1581.84 523.52 1587.84 519.02 1365.34 578.02"
            ></polygon>
            <polygon
              points="1004.84 205.52 1009.34 73.02 1020.84 62.02 1021.34 42.52 1050.84 46.02 1161.34 24.52 1169.34 12.52 1237.84 5.02 1295.34 0.52 1326.34 30.02 1347.34 59.02 1376.84 74.02 1406.34 91.52 1458.34 128.02 1473.84 176.02 1451.34 323.52 1180.84 407.52 1136.84 343.02 1147.34 204.52 1138.84 217.02 1044.84 242.02 1004.84 205.52"
            ></polygon>
          </svg>
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
          <div class="t" style="max-width: 100px">{{$t('links["Подбор по параметрам"]')}}</div>
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

    <div class="wrap-tooltip" :style="tooltipCord">
      <div class="tooltip tooltip-dom" :class="{'active': activeTooltip}">
        <div class="it">
          <div class="t">Дом</div>
          <div class="n">1</div>
        </div>
        <div class="it">
          <div class="t">Этажей</div>
          <div class="n">8</div>
        </div>
        <div class="it">
          <div class="t">Квартир в продаже</div>
          <div class="n">53</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTooltip: false,
      tooltipCord: {},
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
    lSection(item) {
      console.log(item);
    },
    setTooltipCord(e) {
    //  var tlW = $(".wrap-tooltip").outerWidth();
       var tlH = $('.wrap-tooltip').outerHeight();
      this.tooltipCord = {
        left: e.clientX  + 30 + "px",
        top: e.clientY - tlH / 2 + "px"
      };
      // console.log(e);
    },
    setTooltip(active, type, obj) {
      this.activeTooltip = active;
    },
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