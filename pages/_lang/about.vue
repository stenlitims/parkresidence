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
              <div class="title">Современный дизайн и стильная архитектура</div>
              <div class="text">
                ЖК Park Residence создан в соответствии со скандинавской философией хюгге, в которой максимум внимания уделено комфорту и безопасности жителей.
                А современный дизайн фасада выгодно выделяет комплекс среди других ЖК столицы.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">
                Квартиры
                и помещения на любой вкус
              </div>
              <div class="text">
                Архитекторы разработали 20 отдельных планировок квартир в
                ЖК Park Residence, площадью от 34 до 82 кв. м. А на 7-8 этажах расположены двухуровневые квартиры класса люкс, которые по достоинству оценят ценители свободного пространства.
              </div>
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
              <div class="title">Малоэтажное строительство</div>
              <div
                class="text"
              >Мы заботимся о комфорте жителей. Поэтому полностью отказались от концепции «муравейника». Все дома комплекса строятся высотой только 8 этажей, поэтому каждый получит достаточно пространства для жизни и отдыха.</div>
            </div>
          </div>
          <div class="col-md-6 col-bg">
            <div class="item-text">
              <div class="title">Гарантия безопасности</div>
              <div
                class="text"
              >Круглосуточная охрана и видеонаблюдение за внутренней территории гарантируют абсолютную безопасность каждого жителя. Вы можете быть спокойными за своих детей, когда они играют на территории комплекса.</div>
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
              <div class="title">Экологичные материалы</div>
              <div
                class="text"
              >Эксперты проводят независимую экспертизу всех материалов, которые используются в ходе строительства. Мы гарантируем, что строительство на 100% экологичное и доказываем это документально. Результаты всех экспертиз вы можете посмотреть в отделе продаж.</div>
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
              <div class="title">Спорт
                <br>и развлечения
              </div>
              <div
                class="text"
              >Территория ЖК полностью оборудована для комфортного досуга жителей. Для любителей спорта есть беговые дорожки и спортивные площадки, а для любителей отдохнуть на природе — оборудованные зоны барбекю, беседки, красивые фонтаны и прогулочные аллеи.</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="item-text">
              <div class="title">Бизнес на территории комплекса</div>
              <div
                class="text"
              >Цокольный и первый этаж комплекса полностью занимают помещения для бизнеса. Начинайте свое дело прямо на территории комплекса — мы предлагаем лучшие условия для жителей Park Residence.</div>
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
    return axios.get(api + "7").then(res => {
      return {
        data: res.data
      };
    });
  }
};
</script>
