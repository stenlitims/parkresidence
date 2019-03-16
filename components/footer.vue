<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-line1">
        <div class="f-contact">
          <div>
            <p>{{$t('links["Узнайте больше по телефону"]')}}</p>
            <div class="f-phone">
              <a :href="'tel:'+$store.state.mPhone">{{$store.state.mPhone}}</a>
            </div>
          </div>
          <div class="cont">
            <p>{{$t('links["Офис продаж"]')}}</p>
            <p v-html="$store.state.op['adress_'+$store.state.locale]"></p>
          </div>
        </div>

        <div class="f-nav">
          <div class="f-nav-item">
            <ul>
              <li>
                <nuxt-link :to="$i18n.path('')+'about'" exact>{{$t('links["О комплексе"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'concept'" exact>{{$t('links["Концепция"]')}}</nuxt-link>
              </li>

              <!-- <li>
                <a href="#">{{$t('links["Стиль жизни"]')}}</a>
              </li>-->
              <li>
                <nuxt-link :to="$i18n.path('')+'location'" exact>{{$t('links["Расположение"]')}}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="f-nav-item">
            <ul>
              <li>
                <nuxt-link :to="$i18n.path('')+'howbuy'" exact>{{$t('links["Как купить"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="$i18n.path('')+'progress'"
                  exact
                >{{$t('links["Ход строительства"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'news'" exact>{{$t('links["Новости"]')}}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="f-nav-item">
            <ul>
              <!-- <li>
                <a href="#">{{$t('links["Визуальный выбор"]')}}</a>
              </li>-->
              <li>
                <nuxt-link :to="$i18n.path('')+'podbor'" exact>{{$t('links["Выбрать квартиру"]')}}</nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link :to="$i18n.path('')+'docs'" exact>{{$t('links["Документы"]')}}</nuxt-link>
              </li>-->
              <li>
                <nuxt-link :to="$i18n.path('')+'contacts'" exact>{{$t('links["Контакты"]')}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="f-soc-list">
          <a :href="$store.state.soc.instagram" target="_blank" class="insta">
            <svg>
              <use xlink:href="#ic_insta"></use>
            </svg>
          </a>
          <a :href="$store.state.soc.facebook" target="_blank" class="facebook">
            <svg>
              <use xlink:href="#ic_facebook"></use>
            </svg>
          </a>
          <a :href="$store.state.soc.telegram" target="_blank">
            <svg>
              <use xlink:href="#ic_telegram"></use>
            </svg>
          </a>

          <!-- <a href="#">
            <svg>
              <use xlink:href="#ic_viber"></use>
            </svg>
          </a>-->
        </div>
      </div>

      <div class="fb-links">
        <div class="copy">© 2019 Park Residence</div>
        <div class="dev">
          <a
            href="https://www.facebook.com/lukyanenko.vladimir"
            target="_blabk"
          >{{l('Создание сайта','Створення сайту')}}</a>
          <a
            href="https://studiom3.com.ua/"
            target="_blabk"
          >{{l('Проектные решения','Проектні рішення')}}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
</style>
