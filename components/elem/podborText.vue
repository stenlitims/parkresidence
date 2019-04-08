<template>
  <div>
    <div class="main-text-bottom">
      <div class="container text-center">
        <div
          class="heading3"
          v-html="l('Нет времени на поиски квартиры? <br>Мы вам поможем.', 'Немає часу на пошуки квартири? <br> Ми вам допоможемо.')"
        ></div>
        <div
          class="text"
          v-html="l('Наш менеджер подберет для вас только самые подходящие квартиры, а также <br>ответит на все вопросы. Все что вам нужно это указать желаемые параметры.','Наш менеджер підбере для вас тільки самі відповідні квартири, а також <br> відповість на всі питання. Все що вам потрібно це вказати бажані параметри.')"
        ></div>
        <a
          class="btn btn-def js-modal"
          data-fancybox="zvPidbir"
          data-src="#zvPidbir"
          href="javascript:;"
        >
          <span>{{l('Заявка на подбор','Заявка на підбір')}}</span>
        </a>
      </div>
    </div>

    <div class="def-modal zv-modal text-center" id="zvPidbir">
      <div
        class="heading4 text-center"
        style="max-width: 250px;"
      >{{l('Заявка на подбор','Заявка на підбір')}}</div>
      <cForm
        :btnName="$t('form.writeUsBtn')"
        action="zvPidbir"
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
import cForm from "~/components/elem/cForm.vue";
import socList from "~/components/elem/socList.vue";
export default {
  components: {
    cForm,
    socList
  }
};
</script>

<style>
</style>
