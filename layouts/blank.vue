<template>
  <div class="blank">
    <nuxt/>

  </div>
</template>

<script>
if (typeof window == 'object') {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}


export default {

};
</script>

<style lang="scss">
</style>
