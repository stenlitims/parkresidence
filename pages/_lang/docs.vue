<template>
  <div class="inner-page">
    <div class="container section">
      <div class="container3">
        <div class="doc-wrap">
          <div class="heading3">Документы застройщика</div>
          <div class="doc-list">
            <div class="item">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">Проектная декларация от 14.05.2018</div>
              </div>
              <div class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <a href="#" class="t-dw">Скачать</a>
              </div>
            </div>
            <div class="item">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">Проектная декларация от 14.05.2018</div>
              </div>
              <div class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <a href="#" class="t-dw">Скачать</a>
              </div>
            </div>
            <div class="item">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">Проектная декларация от 14.05.2018</div>
              </div>
              <div class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <a href="#" class="t-dw">Скачать</a>
              </div>
            </div>
          </div>
        </div>

        <div class="doc-wrap">
          <div class="heading3">Разрешительная документация</div>
          <div class="doc-list">
            <div class="item">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">Проектная декларация от 14.05.2018</div>
              </div>
              <div class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <a href="#" class="t-dw">Скачать</a>
              </div>
            </div>
            <div class="item">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">Проектная декларация от 14.05.2018</div>
              </div>
              <div class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <a href="#" class="t-dw">Скачать</a>
              </div>
            </div>
            <div class="item">
              <div class="l">
                <div class="ico-doc">
                  <svg>
                    <use xlink:href="#ic-doc"></use>
                  </svg>
                </div>
                <div class="title">Проектная декларация от 14.05.2018</div>
              </div>
              <div class="r">
                <div class="ico-dw">
                  <svg>
                    <use xlink:href="#ic_dw"></use>
                  </svg>
                </div>
                <a href="#" class="t-dw">Скачать</a>
              </div>
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
    return axios.get(api + "15").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
