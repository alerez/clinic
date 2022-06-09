<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="wrapper">
     <Header/>

    <router-view/>

     <Footer/>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_null.scss';
@import '@/assets/scss/_global.scss';
@import '@/assets/scss/_fonts.scss';
@import '@/assets/scss/main.scss';
@import '@/assets/scss/fullscreen.scss';
@import '@/assets/scss/carousel.scss';
@import '@/assets/scss/article.scss';
@import url('https://fonts.googleapis.com/css2?family=Chonburi&display=swap');

body {
  font-family: 'Avenir Next Cyr';
  font-weight: 400;
  color: #303030;
}

.wrapper {
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  min-height: 100vh;
  overflow: hidden;
}

[class*="__container"] {
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;

  @media(max-width: 424.98px) { max-width: none; }
}
</style>
