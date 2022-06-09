<script setup>
const props = defineProps(['data']);
</script>

<template>
  <section class="main__addition addition">
    <div class="addition__container">
      <div class="addition__body">
        <div class="addition__content">
          <div class="addition__title title">{{ data.title }}</div>
          <div class="addition__subtext">{{ data.subtext }}</div>
          <div class="addition__text">{{ data.text }}</div>
          <div class="addition__button button"  v-if="data.button.show">{{ data.button.text }}</div>
        </div>

        <div class="addition__image"><img :src="data.img" alt=""></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.addition {
  // display: block !important;

  &__container {
  }

  &__body {
    display: grid;
    align-items: center;
    grid-template: 1fr / repeat(auto-fit, minmax(min(430px, 100%), 1fr));
    padding: 50px 0;
  }

  &__content {
  }

  &__title {
    margin: 0 0 20px 0;
  }

  &__subtext {
    margin: 0 0 25px 0;
    line-height: 25px;
    font-weight: 450;
    font-size: 20px;
  }

  &__text {
    margin: 0 0 30px 0;
    font-size: 16px;
    line-height: 20px;
  }

  &__image {
    max-width: 100%;

    img { width: 100%; }
  }
}

</style>
