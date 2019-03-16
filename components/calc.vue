<template>
  <div class="calc">
    <div class="row">
      <div class="col-md-8 info">
        <div class="heading3">Калькулятор {{l('рассрочки','розстрочки')}}</div>
        <div class="slider-item">
          <div class="slider-head">
            <div class="t">{{l('Период рассрочки','Період розстрочки')}}</div>
            <div class="val">{{period}} {{l('мес','міс')}}.</div>
          </div>
          <vue-slider
            ref="period"
            :tooltip="'none'"
            :max="30"
            :min="1"
            :height="8"
            :dotSize="32"
            v-model="period"
            :marks="periodData"
          ></vue-slider>
        </div>
        <div class="slider-item">
          <div class="slider-head">
            <div class="t">{{l('Первоначальный взнос','Початковий внесок')}}</div>
            <div class="val">{{pvz | Price}} грн.</div>
          </div>
          <vue-slider
            ref="vznos"
            :tooltip="'none'"
            :max="100"
            :min="50"
            :height="8"
            :dotSize="32"
            v-model="vznos"
            :marks="vznosData"
          ></vue-slider>
        </div>
        <div
          class="text"
        >{{l('Данный расчет приведен для общей информации и не является публичной офертой','Даний розрахунок наведено для загальної інформації і не є публічною офертою')}}</div>
      </div>
      <div class="col-md-4 res-form">
        <div class="res">
          <div class="res-title">{{l('Ежемесячный платеж','Щомісячний платіж')}}:</div>
          <div class="res-price">{{pMonth | Price}} грн.</div>
        </div>
        <div class="form">
          <div class="t-form">{{l('Заказать рассрочку','Замовити розстрочку')}}</div>
          <cForm
            :btnName="$t('form.writeUsBtn')"
            action="calc"
            :adata="{
              summ,
              pvz,
              pMonth,
              price1Sq
            }"
            classBtn="btn-black"
            :fields="{
                name:$t('form.name'),
                phone:$t('form.phone')
              }"
          ></cForm>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import cForm from "~/components/elem/cForm.vue";
export default {
  props: ["data"],
  components: {
    cForm
  },
  data() {
    return {
      period: 9,
      vznos: 50,
      periodData: ["1", "10", "20", "30"],
      //vznosData: ['20%', '40%', '60%', '80%', '100%'],
      vznosData: {
        "50": "50%",
        "60": "60%",
        "70": "70%",
        "80": "80%",
        "90": "90%",
        "100": "100%"
      }
    };
  },
  computed: {
    // цена за квадрат
    price1Sq() {
      let p = 0;

      if (this.period <= 12) {
        p = 1000;
      }

      if (this.period > 12) {
        p = 2850;
      }

      //  console.log(p);
      return this.data.price_m2 + p;
    },
    // Общая стоимость
    summ() {
      return this.price1Sq * this.data.square_total;
    },
    // Первый взнос
    pvz() {
      let data = (this.summ / 100) * this.vznos;
      return data;
    },
    // Ежемесячный платеж
    pMonth() {
      return (this.summ - this.pvz) / this.vznos;
    }
  }
};
</script>
