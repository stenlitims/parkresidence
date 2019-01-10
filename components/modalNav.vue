<template>
<div>

<nuxt-link
        v-if="$i18n.locale === 'ru'"
        :to="`/ua` + $route.fullPath"
        class="Header__Link"
        active-class="none"
        exact
      >{{ $t('links.french') }}</nuxt-link>
      <nuxt-link
        v-else
        :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
        class="Header__Link"
        active-class="none"
        exact
      >{{ $t('links.english') }}</nuxt-link>
      {{ $t('home.title') }}

</div>
</template>

<style>

</style>
