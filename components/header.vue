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
            <li>
              <a href="#">{{$t('links["Выбрать квартиру"]')}}</a>
            </li>
            <li>
              <a href="#">{{$t('links["Как купить"]')}}</a>
            </li>
            <li>
              <a href="#">
                {{$t('links["Акции"]')}}
                <span class="count">2</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="mob-btns">
          <a href="#" class="fav-btn">
            <svg>
              <use xlink:href="#ic_heart"></use>
            </svg>
            <span class="num">2</span>
          </a>
          <a href="#" class="phone-btn2">
            <svg>
              <use xlink:href="#ic_phone"></use>
            </svg>
          </a>
        </div>

        <div class="soc-list">
          <a href="#">
            <svg>
              <use xlink:href="#ic_messenger"></use>
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

        <div class="top-phone">
          <a href="tel:044 123-45-67">044 123-45-67</a>
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
