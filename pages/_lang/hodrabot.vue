<template>
  <div class="inner-page">
    <div class="container section">
      <div class="container3">
        <div class="heading25 tt heading3-dh">{{title}}</div>

        <div class="header-hodrabot">
          <div class="l">
            <a href="#">
              <svg>
                <use xlink:href="#ic_video"></use>
              </svg>
              <span>{{$t('links["Видеокамера"]')}}</span>
            </a>
            
            <a href="#" class="grafic-hod">
              <svg>
                <use xlink:href="#ic_grafic"></use>
              </svg>
              <span>{{$t('links["График строительства"]')}}</span>
            </a>
          </div>

          <div class="r">
            <div class="sd">
              {{$t('links["Сдача в"]')}}
              <span>2021</span>
            </div>
          </div>
        </div>

        <div class="hod-list">
          <div class="item">
            <div class="info">
              <div class="heading4">Ноябрь, 2018</div>
              <div class="count">
                <div class="it">
                  <div class="ico">
                    <svg>
                      <use xlink:href="#ic_photo"></use>
                    </svg>
                  </div>
                  <div class="t">15</div>
                </div>
                <div class="it">
                  <div class="ico">
                    <svg>
                      <use xlink:href="#ic_video"></use>
                    </svg>
                  </div>
                  <div class="t">1</div>
                </div>
              </div>

              <div class="text">
                <p>Продолжается разработка грунта котлована на этапе 1. Выполняется устройство распорной системы шпунтового ограждения котлована...</p>
              </div>
            </div>
            <div class="img">
              <img src="images/hodrabot/1.jpg" alt>
              <div class="plus"></div>
            </div>
          </div>

          <div class="item">
            <div class="info">
              <div class="heading4">Ноябрь, 2018</div>
              <div class="count">
                <div class="it">
                  <div class="ico">
                    <svg>
                      <use xlink:href="#ic_photo"></use>
                    </svg>
                  </div>
                  <div class="t">15</div>
                </div>
                <div class="it">
                  <div class="ico">
                    <svg>
                      <use xlink:href="#ic_video"></use>
                    </svg>
                  </div>
                  <div class="t">1</div>
                </div>
              </div>

              <div class="text">
                <p>Продолжается разработка грунта котлована на этапе 1. Выполняется устройство распорной системы шпунтового ограждения котлована...</p>
              </div>
            </div>
            <div class="img">
              <img src="images/hodrabot/1.jpg" alt>
              <div class="plus"></div>
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
    return axios.get(api + "14").then(res => {
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
