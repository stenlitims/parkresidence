<template>
  <div class="ch-select" :class="{'active': active}">
    <div class="label" @click="addActive">
      <span v-if="title" :title="title">{{title}}</span>
      <span v-else>{{$t('main["Выбрать"]')}}</span>
    </div>
    <div class="list">
      <div class="l-item" v-for="(item, i) in ls" :key="i">
        <label class="cus-check">
          <input type="checkbox" @change="add(i)" v-model="item.active">
          <span class="ch"></span>
          <span class="ch-title">{{item.t}}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "f", "conf"],
  data() {
    return {
      active: false,
      data: [],
      ls: {
        1: {
          t: "",
          active: false
        }
      }
    };
  },
  watch: {},
  created() {
    this.setP([]);
  },
  computed: {
    title() {
      if (!this.data.length) return false;
      let out = [];
      for (let i of this.data) {
        //  let index = +i;
        //  console.log(index, this.list[index]);
        out.push(this.ls[i].t);
      }
      //
      return out.join(", ");
    }
  },
  methods: {
    chList(list, conf = []) {
      let data = {};

      for (let i in list) {
        //  console.log(i);
        data[i] = {};
        data[i]["t"] = list[i];
        //     console.log(conf.indexOf(+i), typeof i, conf);
        if (Number.isInteger(+i)) i = +i;
        if (conf.indexOf(i) != -1) {
          data[i]["active"] = true;
        } else {
          data[i]["active"] = false;
        }
      }

      //     console.log(data);
      return data;
    },
    setP(data) {
      //  console.log(data);
      this.ls = this.chList(this.list, data);
      let d = [];
      for (let i in this.ls) {
        if (this.ls[i].active) {
          d.push(i);
        }
      }
      this.data = d;
    },
    addActive(e) {
      $(".ch-select")
        .not($(e.target).closest(".ch-select"))
        .removeClass("active");

      if (
        $(e.target)
          .closest(".ch-select")
          .hasClass("active")
      ) {
        this.active = false;
      } else {
        this.active = true;
      }

      $(e.target)
        .closest(".ch-select")
        .toggleClass("active");
    },
    add(item) {
      if (!this.data.includes(item)) {
        this.data.push(item);
      } else {
        this.data.splice(this.data.indexOf(item), 1);
      }
      //  console.log(this.data);
      this.$emit("data", this.data);
    }
  }
};
</script>

<style>
</style>
