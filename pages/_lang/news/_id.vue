<template>
  <div class="inner-page">
    <div class="container">
      <div class="container2">
        <h1 class="heading25 tt heading3-dh">{{title}}</h1>
        <div class="list-news">
          <div class="item">
            <div class="info">
              <div class="date">
                <svg>
                  <use xlink:href="#ic_calendar"></use>
                </svg>
                14.10.2018
              </div>
              <div class="title">
                <a href="#">80% новостроек не предусматривают ни одного умного решения — ни в домах, ни в квартирах</a>
              </div>
              <div class="introtext">
                <p>Большинство строительных компаний не спешат оснащать свои объекты по последнему слову техники. Всего 6% новостроек комфорт-класса не оборудованы совершенно...</p>
              </div>

              <div class="more">
                <a href="#">Подробнее</a>
              </div>

            </div>
            <div class="img">
              <img src="images/news/1.jpg" alt>
            </div>
          </div>
        </div>
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
      mainClass: ["def-page", "black-header"]
    };
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "10").then(res => {
      return {
        data: res.data
      };
    });
  }
};
</script>
