<template>
  <div class="inner-page">
    <div class="inner-bg section" :style="'background-image: url('+$url+'assets/img/about/1.webp)'">
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
           <nuxt-link :to="$i18n.path('')+'podbor'" exact class="btn btn-def">
            <span>{{$t('main["Смотреть планировки"]')}}</span>
          </nuxt-link>
        </div>
      </div>

      <div class="section w100-img">
        <img :src="$url+'assets/img/about/2.webp'" alt>
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
            <img  :src="$url+'assets/img/about/3-2.webp'" alt>
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
      <img  :src="$url+'assets/img/about/4.webp'" alt>
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
        <img :src="$url+'assets/img/about/5.webp'" alt>
      </div>

      <div class="section">
        <div class="row">
          <div class="col-sm-6">
            <div class="item-text mb0">
              <div class="title">{{ids.s8['title_'+lang]}}</div>
              <div
                class="text"  v-html="ids.s8['text_'+lang]"
              ></div>
            </div>
          </div>
          <div class="col-sm-6 a-center">
            <div class="item-nums">
              <div class="item">
                <div class="num">210</div>
                <div class="text">
                  {{l('Парковочных мест в 6 отапливаемый подземных паркингах', 'Паркувальних місць в 6 опалювальний підземних паркінгах')}}
                 
                </div>
              </div>
              <div class="item">
                <div class="num">240</div>
                <div class="text">
                  {{l('Машиномест в безопасном наружном паркинге', 'Машиномісць в безпечному зовнішньому паркінгу')}}
                  
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

         <nuxt-link :to="$i18n.path('')+'podbor'" class="btn btn-def">
          <span>{{$t('links["Выбрать квартиру"]')}}</span>
        </nuxt-link>
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
