<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-line1">
        <div class="f-contact">
          <div>
            <p>{{$t('links["Узнайте больше по телефону"]')}}</p>
            <div class="f-phone">
              <a href="#">044 123-45-67</a>
            </div>
          </div>
          <div class="cont">
            <p>{{$t('links["Офис продаж"]')}}</p>
            <p>г. Киев, ул. Шевченка, 74, офис 17
              <br>Пн - Сб с 10:00 до 21:00
            </p>
          </div>
        </div>

        <div class="f-nav">
          <div class="f-nav-item">
            <ul>
              <li>
                <nuxt-link to="about" exact>{{$t('links["О комплексе"]')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="concept" exact>{{$t('links["Концепция"]')}}</nuxt-link>
              </li>
              <li>
                <a href="#">{{$t('links["Описание"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Стиль жизни"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Расположение"]')}}</a>
              </li>
            </ul>
          </div>
          <div class="f-nav-item">
            <ul>
              <li>
                <a href="#">{{$t('links["Как купить"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Ход строительства"]')}}</a>
              </li>
              <li>
                 <a href="#">{{$t('links["Новости"]')}}</a>
              </li>
              <li>
                 <a href="#">{{$t('links["Контакты"]')}}</a>
              </li>
            </ul>
          </div>
          <div class="f-nav-item">
            <ul>
              <li>
                <a href="#">{{$t('links["Квартиры на генплане"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Подбор по параметрам"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Документы"]')}}</a>
              </li>
              <li>
                <a href="#">{{$t('links["Застройщик"]')}}</a>
              </li>
            </ul>
          </div>
        </div>

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

      <div class="copy">© 2018 Park Residence</div>
    </div>
  </footer>
</template>

<style>
</style>
