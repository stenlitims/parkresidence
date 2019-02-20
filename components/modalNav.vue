<template>
  <div id="modal-nav" style=" display: none;">
    <div class="modal-nav">
      <div class="modal-bg" style=" background-image: url('images/modal-img.jpg');"></div>
      <div class="modal-content">
        <!-- v-if="$i18n.locale === 'ru'" -->
        <div class="row nav-row">
          <div class="col-sm-6 fadeInRight2">
            <ul>
              <li>
                <nuxt-link :to="$i18n.path('')" exact>{{$t('links["Главная"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'about'" exact>{{$t('links["О комплексе"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'concept'" exact>{{$t('links["Концепция"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'location'" exact>{{$t('links["Расположение"]')}}</nuxt-link>
              </li>
              <li>
                <a href="#">{{$t('links["Стиль жизни"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Выбрать квартиру"]')}}</a>
                <ul>
                  <li>
                    <a href="#">{{$t('links["Визуальный выбор"]')}}</a>
                  </li>
                  <li>
                    <a href="#">{{$t('links["По параметрам"]')}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-sm-6">
            <ul class="fadeInRight2" style="animation-delay: .2s;">
              <li>
                <nuxt-link
                  :to="$i18n.path('')+'hodrabot'"
                  exact
                >{{$t('links["Ход строительства"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'news'" exact>{{$t('links["Новости"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'howbuy'" exact>{{$t('links["Как купить"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'docs'" exact>{{$t('links["Документы"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('')+'contacts'" exact>{{$t('links["Контакты"]')}}</nuxt-link>
              </li>
            </ul>

            <div class="langs fadeInRight2" style="animation-delay: .3s;">
              <nuxt-link
                :class="{'active': $i18n.locale == 'ru'}"
                :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
                exact
              >Рус</nuxt-link>
              <nuxt-link :to="`/ua` + $route.fullPath" v-if="$i18n.locale === 'ru'" exact>Укр</nuxt-link>
              <a href="#" class="active" v-else @click.prevent>Укр</a>
            </div>
          </div>
        </div>

        <div class="row row-contacts">
          <div class="col-sm-6 fadeInRight2" style="animation-delay: .4s;">
            <p class="t">{{$t('links["Узнайте больше по телефону"]')}}</p>
            <div class="f-phone">
              <a :href="'tel:'+$store.state.mPhone">{{$store.state.mPhone}}</a>
            </div>
          </div>
          <div class="col-sm-6 fadeInRight2" style="animation-delay: .5s;">
            <div class="cont">
              <p class="t">{{$t('links["Офис продаж"]')}}</p>
              <p class="adr">г. Киев, ул. Шевченка, 74, офис 17
                <br>Пн - Сб с 10:00 до 21:00
              </p>
            </div>
          </div>

          <div class="col-sm-6 fadeInRight2" style="animation-delay: .4s;">
            <div class="f-soc-list">
              <a href="#" class="insta">
                <svg>
                  <use xlink:href="#ic_insta"></use>
                </svg>
              </a>
              <a href="#" class="facebook">
                <svg>
                  <use xlink:href="#ic_facebook"></use>
                </svg>
              </a>
              <a href="#">
                <svg>
                  <use xlink:href="#ic_telegram"></use>
                </svg>
              </a>
              <a href="#">
                <svg>
                  <use xlink:href="#ic_viber"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
</style>
