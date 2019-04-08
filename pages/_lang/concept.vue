<template>
  <div class="inner-page1">
    <div
      class="inner-bg section"
      :style="'background-image: url('+$url+'assets/img/concept/1.jpg)'"
    >
      <div class="inner-heading">
        <div class="h1">{{title}}</div>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="inner-text text-center inner-text-m" v-html="ids.text1['text_'+lang]"> 
        </div>
      </div>

      <div class="section">
        <div class="row row-pb">
          <div class="col-md-6 col-img">
            <img :src="$url+'assets/img/concept/2.webp'" alt>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div
                class="text"  v-html="ids.text2['text_'+lang]"
              >
              </div>
              <a
                class="btn btn-def js-modal"
                data-fancybox="moreModal"
                data-src="#moreModal"
                href="javascript:;"
              >
                <span>{{$t('main["Узнать больше"]')}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="inner-text text-center inner-text-m"  v-html="ids.text3['text_'+lang]">
        </div>
      </div>

      <div class="section w100-img">
        <img :src="$url+'assets/img/concept/3-2.webp'" alt>
      </div>

      <div class="section">
        <div class="row row-fix-mb">
          <div class="col-md-6">
            <div class="item-text">
              <div class="text"  v-html="ids.text4['text_'+lang]">                
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div
                class="text"  v-html="ids.text5['text_'+lang]"
              >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="heading25 tt">Park Residence
          <br>
          <span>{{l('Живи. Работай. Отдыхай.','Живи. Працюй. Відпочивай.')}}</span>
        </div>
      </div>
    </div>

    <div class="main-text-bottom">
      <div class="container text-center">
        <div class="heading3">
          {{l('Выберите свою квартиру', 'Виберіть свою квартиру')}}
          <br>в ЖК Park Residence
        </div>

        <nuxt-link :to="$i18n.path('')+'podbor'" exact class="btn btn-def">
          <span>{{$t('links["Выбрать квартиру"]')}}</span>
        </nuxt-link>
      </div>
    </div>

    <div class="def-modal zv-modal text-center" id="moreModal">
      <div class="heading4 text-center">{{$t('main["Узнать больше"]')}}</div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="moreModal"
        :fields="{
        name:$t('form.name'),
        phone:$t('form.phone')
      }"
      ></cForm>

      <div class="soc-wrap">
        <div class="text">{{$t('modal["или напишите нам"]')}}</div>
        <socList/>
      </div>
    </div>
  </div>
</template>

<script>
import mix from "@/mixin/global";
import axios from "axios";
import cForm from "~/components/elem/cForm.vue";
import socList from "~/components/elem/socList.vue";
export default {
  components: {
    cForm,
    socList
  },
  mixins: [mix],
  data() {
    return {};
  },
  computed:{
    ids() {
      return this.data.tv.list_text;
    }
  },
  mounted(){
    this.loadFancy();
  },
  asyncData({ params }) {
    let api = process.env.api;
    if (!api) {
      let api = context.env.api;
    }
    return axios.get(api + "8").then(res => {
      return {
        data: res.data
      };
    });
  }
};
</script>
