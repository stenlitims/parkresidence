<template>
  <div class="ch-select">
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
  props: ["list", "label", "conf"],
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
  watch: {
    conf() {
      if (this.conf.length == 0) {
        this.data = [];
        let t = { ...this.ls };
        for (let i in t) {
      //    console.log(t[i].t);
          t[i].active = false;
        }
        this.ls = t;
      }
    }
  },
  created() {
    this.ls = this.chList(this.conf, this.list);
    for (let i in this.ls) {
      if (this.ls[i].active) {
        this.data.push(i);
      }
    }
  },
  computed: {
    title() {
      if (!this.data.length) return false;
      let out = [];
      for (let i of this.data) {
        let index = +i;
        //  console.log(index, this.list[index]);
        out.push(this.ls[index].t);
      }
      //
      return out.join(", ");
    }
  },
  methods: {
    chList(conf, list) {
      let data = {};

      for (let i in list) {
        //  console.log(i);
        data[i] = {};
        data[i]["t"] = list[i];
        //    console.log(conf.indexOf(+i), typeof i);
        if (conf.indexOf(+i) != -1) {
          data[i]["active"] = true;
        } else {
          data[i]["active"] = false;
        }
      }
      return data;
      // console.log(data);
    },
    addActive(e) {
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
      this.$emit("data", this.data);
    }
  }
};
</script>

<style>
</style>
