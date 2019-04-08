<template>
  <div class="soc-list-big soc-list">
    <a :href="$store.state.soc.telegram" target="_blank"  @click="glGa('mes')" class="it">
      <div class="ico">
        <svg class="telegram">
          <use xlink:href="#ic_telegram"></use>
        </svg>
      </div>
      <div class="t">Telegram</div>
    </a>
    <!-- <a href="#" class="it">
      <div class="ico">
        <svg class="viber">
          <use xlink:href="#ic_viber"></use>
        </svg>
      </div>
      <div class="t">Viber</div>
    </a>-->
    <a :href="$store.state.soc.facebook_mes" target="_blank" @click="glGa('mes')" class="it">
      <div class="ico">
        <svg class="messenger">
          <use xlink:href="#ic_messenger"></use>
        </svg>
      </div>
      <div class="t">Messenger</div>
    </a>
  </div>
</template>
