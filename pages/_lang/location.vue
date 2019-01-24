<template>
  <div class="inner-page">
    <div class="inner-bg section" style="background-image: url(images/location/1.jpg)">
      <div class="inner-heading">
        <h1 class="h1">{{d.introtext}}</h1>
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="inner-text text-center inner-text-m">
          <p>Park Residence — это жилой комплекс новой эры, который создан, чтобы сделать жизнь комфортнее во всех ее проявлениях. Это настоящее воплощение скандинавской философии хюгге, в которой идеально сочетаются уют, безопасность и хорошее настроение.</p>
        </div>
      </div>

      <div class="section">
        <div class="row row-pb">
          <div class="col-md-6 col-img">
            <img src="images/concept/2.jpg" alt>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div
                class="text"
              >Жизнь в мегаполисе идет на высоких скоростях. И чтобы успеть все, нельзя терять ни минуты. Время стоит дорого. И мы это прекрасно знаем. Поэтому в Park Residence мы создали уникальную инфраструктуру жизни, где вы можете работать, отдыхать, воспитывать детей и наслаждаться каждым днем.</div>
              <a href class="btn btn-def">
                <span>{{$t('main["Узнать больше"]')}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="inner-text text-center inner-text-m">
          <p>Park Residence создан для людей, которые ценят свое время и хотят оградить себя от шумной суеты мегаполиса. Это пространство для тех, кто любит комфорт и стремится быть в тренде.</p>
        </div>
      </div>

      <div class="section w100-img">
        <img src="images/concept/3.jpg" alt>
      </div>

      <div class="section">
        <div class="row row-fix-mb">
          <div class="col-md-6">
            <div class="item-text">
              <div class="text">
                Чтобы жить на полную, жителям даже не обязательно покидать территорию комплекса, ведь на расстоянии
                7 минут спокойным шагом здесь есть практически все, что может понадобиться.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div
                class="text"
              >Park Residence — это жизнь на высоких оборотах, в которой всегда будет островок тишины и спокойствия. Ваш островок.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="heading25 tt">Park Residence
          <br>
        <span> Живи. Работай. Отдыхай.</span> 
        </div>
      </div>
    </div>

    <div class="main-text-bottom">
      <div class="container text-center">
        <div class="heading3">Выберите свою квартиру
          <br>в ЖК Park Residence
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
    return axios.get(api + "9").then(res => {
      return {
        data: res.data
      };
    });
  }
};
</script>
