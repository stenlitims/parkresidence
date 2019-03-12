<template>
  <div class="inner-page">
    <div
      class="inner-bg section"
      :style="'background-image: url('+$url+'assets/img/concept/1.webp)'"
    >
      <div class="inner-heading">
        <h1 class="h1">{{title}}</h1>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="inner-text text-center inner-text-m">
          <p>
            {{l('Park Residence — это жилой комплекс новой эры, который создан, чтобы сделать жизнь комфортнее во всех ее проявлениях. Это настоящее воплощение скандинавской философии хюгге, в которой идеально сочетаются уют, безопасность и хорошее настроение.', 'Park Residence - це житловий комплекс нової ери, який створений, щоб зробити життя комфортнішим у всіх її проявах. Це справжнє втілення скандинавської філософії хюгге, в якій ідеально поєднуються затишок, безпеку і гарний настрій.')}}
          </p>
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
                class="text"
              >
              {{l('Жизнь в мегаполисе идет на высоких скоростях. И чтобы успеть все, нельзя терять ни минуты. Время стоит дорого. И мы это прекрасно знаем. Поэтому в Park Residence мы создали уникальную инфраструктуру жизни, где вы можете работать, отдыхать, воспитывать детей и наслаждаться каждым днем.', 'Життя в мегаполісі йде на високих швидкостях. І щоб встигнути все, не можна втрачати ні хвилини. Час коштує дорого. І ми це прекрасно знаємо. Тому в Park Residence ми створили унікальну інфраструктуру життя, де ви можете працювати, відпочивати, виховувати дітей і насолоджуватися кожним днем.')}}
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
        <div class="inner-text text-center inner-text-m">
          <p>
            {{l('Park Residence создан для людей, которые ценят свое время и хотят оградить себя от шумной суеты мегаполиса. Это пространство для тех, кто любит комфорт и стремится быть в тренде.', 'Park Residence створений для людей, які цінують свій час і хочуть захистити себе від галасливої метушні мегаполісу. Це простір для тих, хто любить комфорт і прагне бути в тренді.')}}
            </p>
        </div>
      </div>

      <div class="section w100-img">
        <img :src="$url+'assets/img/concept/3.webp'" alt>
      </div>

      <div class="section">
        <div class="row row-fix-mb">
          <div class="col-md-6">
            <div class="item-text">
              <div class="text">
                {{l('Чтобы жить на полную, жителям даже не обязательно покидать территорию комплекса, ведь на расстоянии 7 минут спокойным шагом здесь есть практически все, что может понадобиться.', 'Щоб жити на повну, жителям навіть не обов\'язково залишати територію комплексу, адже на відстані 7 хвилин спокійним кроком тут є практично все, що може знадобитися.')}}
                
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div
                class="text"
              >
              {{l('Park Residence — это жизнь на высоких оборотах, в которой всегда будет островок тишины и спокойствия. Ваш островок.', 'Park Residence - це життя на високих оборотах, в якій завжди буде острівець тиші і спокою. Ваш острівець.')}}
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
