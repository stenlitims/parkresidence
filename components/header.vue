<template>
  <header class="header">
    <div class="container">
      <div>
        <div class="logo">
          <nuxt-link :to="$i18n.path('')" exact>
            <svg>
              <use xlink:href="#ic_logo"></use>
            </svg>
          </nuxt-link>
        </div>

        <div class="main-nav">
          <ul>
            <li>
              <nuxt-link :to="$i18n.path('')+'about'" exact>{{$t('links["О комплексе"]')}}</nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link :to="$i18n.path('')+'genplan'" exact>{{$t('links["Выбрать квартиру"]')}}</nuxt-link>
            </li> -->
              <li>
                <nuxt-link :to="$i18n.path('')+'podbor'" exact>{{$t('links["Выбрать квартиру"]')}}</nuxt-link>
              </li>
            <li>
              <nuxt-link :to="$i18n.path('')+'howbuy'" exact>{{$t('links["Как купить"]')}}</nuxt-link>
            </li>
            <li v-if="$store.state.actions.length">
              <a class="js-actions" href="javascript:;">
                {{$t('links["Акции"]')}}
                <span class="count">{{$store.state.actions.length}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="mob-btns">
          <nuxt-link
            v-if="$store.state.fav.length"
            class="fav-btn"
            :to="$i18n.path('')+'favorites'"
            exact
          >
            <svg>
              <use xlink:href="#ic_heart"></use>
            </svg>
            <span class="num">{{$store.state.fav.length}}</span>
          </nuxt-link>
          <a
            class="phone-btn2 js-modal"
            data-fancybox="fbtncallback2"
            data-src="#callback"
            href="javascript:;"
          >
            <svg>
              <use xlink:href="#ic_phone"></use>
            </svg>
          </a>
        </div>

        <div class="soc-list">
          <a :href="$store.state.soc.facebook_mes" target="_blank">
            <svg>
              <use xlink:href="#ic_messenger"></use>
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

        <div class="top-phone">
          <a :href="'tel:'+$store.state.mPhone">{{$store.state.mPhone}}</a>
        </div>

        <div class="burger" data-fancybox data-src="#modal-nav" href="javascript:;">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>
