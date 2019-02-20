<template>
  <div class="inner-page">
    <div class="inner-bg section" style="background-image: url(images/about/1.jpg)">
      <div class="inner-heading">
        <h1 class="h1">{{d.introtext}}</h1>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">{{ids.s1['title_'+lang]}}</div>
              <div class="text" v-html="ids.s1['text_'+lang]"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">{{ids.s2['title_'+lang]}}</div>
              <div class="text" v-html="ids.s2['text_'+lang]"></div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href class="btn btn-def">
            <span>{{$t('main["Смотреть планировки"]')}}</span>
          </a>
        </div>
      </div>

      <div class="section w100-img">
        <img src="images/about/2.jpg" alt>
      </div>

      <div class="section">
        <div class="row row-pb">
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">{{ids.s3['title_'+lang]}}</div>
              <div class="text" v-html="ids.s3['text_'+lang]"></div>
            </div>
          </div>
          <div class="col-md-6 col-bg">
            <div class="item-text">
              <div class="title">{{ids.s4['title_'+lang]}}</div>
              <div
                class="text" v-html="ids.s4['text_'+lang]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="row row-pb">
          <div class="col-md-6 col-img">
            <img src="images/about/3.jpg" alt>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">{{ids.s5['title_'+lang]}}</div>
              <div
                class="text" v-html="ids.s5['text_'+lang]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section w100-img ab-bg-img">
      <img src="images/about/4.jpg" alt>
    </div>

    <div class="container">
      <div class="section">
        <div class="row row-fix-mb">
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">{{ids.s6['title_'+lang]}}
              </div>
              <div
                class="text" v-html="ids.s6['text_'+lang]"
              ></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">{{ids.s7['title_'+lang]}}</div>
              <div
                class="text" v-html="ids.s7['text_'+lang]"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="section w100-img">
        <img src="images/about/5.jpg" alt>
      </div>

      <div class="section">
        <div class="row">
          <div class="col-sm-6">
            <div class="item-text mb0">
              <div class="title">Парковки</div>
              <div
                class="text"
              >На территории комплекса есть 5 подземных отапливаемых парковок, каждая из которых вмещает 35 автомобилей. На парковку можно попасть прямо из лифта, что очень актуально холодной зимой. Также есть безопасный наружный паркинг на 240 машиномест.</div>
            </div>
          </div>
          <div class="col-sm-6 a-center">
            <div class="item-nums">
              <div class="item">
                <div class="num">175</div>
                <div class="text">
                  Парковочных мест
                  в 5 отапливаемый подземных паркингах
                </div>
              </div>
              <div class="item">
                <div class="num">240</div>
                <div class="text">
                  Машиномест
                  в безопасном наружном паркинге
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-text-bottom">
      <div class="container text-center">
        <div class="heading3" v-html="l('Выберите свою квартиру <br>в ЖК Park Residence', 'Виберіть свою квартиру <br> в ЖК Park Residence')">
        </div>

        <a href class="btn btn-def">
          <span>{{$t('links["Выбрать квартиру"]')}}</span>
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
    return {};
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "7").then(res => {
      return {
        data: res.data
      };
    });
  },
  computed: {
    ids() {
      return this.data.tv.list_text;
    }
  }
};
</script>
