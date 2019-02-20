<template>
  <div class="visual">
    <div
      class="list360"
      @mousedown="mousedown"
      @touchstart="mousedown"
      @mouseup="mouseup"
      @touchend="mouseup"
      @mousemove="mousemove"
      @touchmove="mousemove"
    >
      <div
        class="item"
        v-for="item in 24"
        :key="item"
        :class="{'active': item == 1}"
        :data-index="item"
      >
        <img :src="$store.state.mainUrl+'assets/images/dom360/'+item+'.webp'" alt class>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicking: false,
      par: false,
      last: 1,
      last2: false,
      pic_X: false,
      pic_W: false,
      center_X: false,
      movestop: false
    };
  },

  mounted() {
    this.par = $(".list360");
    this.pic_X = this.par.offset().left;
    this.pic_W = this.par.width() / 2;
    this.center_X = this.pic_X + this.pic_W;
    this.movestop = this.pic_W / 25;
  },

  methods: {
    mousedown() {
      this.clicking = true;
    },
    mouseup() {
      this.clicking = false;
      setTimeout(() => {
        this.setPosition();
      }, 400);
    },
    mousemove(event) {
      if (this.clicking == false) return;

      // console.log(event);

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
      }, 10);

      if (event.pageX < this.last2) {
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
      }, 60);
    },
    setPosition() {
      let index = $(".list360 .item.active").index() + 1;

      function d(a) {
        return -a;
      }
      //   console.log(index);
      if (index > 1 && index < 5) {
        this.animMoveImg(index, "left");
        return;
      }
      if (index > 5 && index < 10) {
        index = 10 - index;
        this.animMoveImg(index, false);
        return;
      }
      if (index > 10 && index < 15) {
        let index2 = d(10 - index);
        console.log(index, index2);
        this.animMoveImg(index2, "left");
        return;
      }

      if (index > 10 && index < 15) {
        index = 15 - index;
        this.animMoveImg(index, false);
        return;
      }
      if (index > 15 && index < 20) {
        let index2 = d(15 - index);
        console.log(index, index2);
        this.animMoveImg(index2, "left");
        return;
      }

      if (index >= 15 && index < 24) {
        index = 24 - index;
        this.animMoveImg(index, false);
        return;
      }
    }
  }
};
</script>