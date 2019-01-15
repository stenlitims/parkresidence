<template>
  <div id="modal-nav" style=" display: none;">
    <div class="modal-nav">
      <div class="modal-bg" style=" background-image: url('images/modal-img.jpg');"></div>
      <div class="modal-content">
        <!-- v-if="$i18n.locale === 'ru'" -->
        <div class="row nav-row">
          <div class="col-sm-6">
            <ul>
              <li>
                <a href="#">{{$t('links["Главная"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["О комплексе"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Концепция"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Расположение"]')}}</a>
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
            <ul>
              <li>
                <a href="#">{{$t('links["Ход строительства"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Новости"]')}}</a>
              </li>

              <li>
                <a href="#">{{$t('links["Как купить"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Документы"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Контакты"]')}}</a>
              </li>
            </ul>

            <div class="langs">
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
          <div class="col-sm-6">
            <p class="t">{{$t('links["Узнайте больше по телефону"]')}}</p>
            <div class="f-phone">
              <a href="#">044 123-45-67</a>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cont">
              <p class="t">{{$t('links["Офис продаж"]')}}</p>
              <p class="adr">г. Киев, ул. Шевченка, 74, офис 17
                <br>Пн - Сб с 10:00 до 21:00
              </p>
            </div>
          </div>

          <div class="col-sm-6">
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
