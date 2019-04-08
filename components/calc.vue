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
            :max="24"
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
            :adata="formData"
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
      period: 24,
      vznos: 70,
      periodData: ["1", "8", "16", "24"],
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
    formData() {
      return {
        summ: this.summ,
        pvz: this.pvz,
        pMonth: this.pMonth,
        price1Sq: this.price1Sq,
        period: this.period,
        vznos: this.vznos,
        data: this.data
      };
    },
    // цена за квадрат
    price1Sq() {
      let p = 0;

      if (this.period >= 4 && this.period <= 6) {
        p = 500;
      }
      if (this.period >= 7 && this.period <= 7) {
        p = 750;
      }
      if (this.period >= 10 && this.period <= 12) {
        p = 750;
      }
      if (this.period >= 13 && this.period <= 15) {
        p = 1250;
      }
      if (this.period >= 16 && this.period <= 18) {
        p = 1500;
      }
      if (this.period >= 19 && this.period <= 21) {
        p = 1750;
      }
      if (this.period >= 22 && this.period <= 24) {
        p = 2000;
      }

      let summ = this.data.price_m2 + p;

      // if (this.period > 12) {
      //   summ = summ + (summ * 0.1);
      // }

      if (this.vznos == 100) {
        return this.data.price_m2;
      }

      //  console.log(p);
      return summ;
    },
    // Общая стоимость
    summ() {
      return this.data.price_m2 * this.data.square_total;
    },
    // Первый взнос
    pvz() {
      let data = (this.summ / 100) * this.vznos;
      return data;
    },
    // Ежемесячный платеж
    pMonth() {
      let summ = this.price1Sq * this.data.square_total;
      return (summ - this.pvz) / this.period;
    }
  }
};
</script>
