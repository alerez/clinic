<template>
  <section class="main__results results">
    <div class="results__container">
      <div class="results__body">
        <div class="results__title title">Результаты до и после</div>
        <div class="results__subtitle subtitle">Наши результаты</div>

<!--        <div class="results__carousel carousel">-->
<!--          <div class="carousel__body">-->
<!--            <div class="carousel__row">-->
<!--              <div class="carousel__item item" v-for="i in 3">-->
<!--                <div class="item__body">-->
<!--                  <img src="../../src/assets/images/results.jpg" alt="">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="carousel__indicator">-->
<!--              <span v-for="i in 4"-->
<!--                :class="i === 1 ? 'active' : ''"-->
<!--              ></span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->


        <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
          <SplideSlide class="item__body">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
          </SplideSlide>
          <SplideSlide class="item__body">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
          </SplideSlide>
          <SplideSlide class="item__body">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
            <img src="../../src/assets/images/results.jpg" alt="Sample 1">
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent( {
  components: { Splide, SplideSlide },
} );
</script>

<style lang="scss" scoped>
.results {

  &__container {
  }

  &__body {
    padding: 90px 0 0 0;

    @media(max-width: 767.98px) {
      padding: 40px 0 0 0;
    }
  }

  &__title {
    margin: 0 0 30px 0;
    text-align: center;

    @media(max-width: 767.98px) {
      margin: 0 0 20px 0;
    }
  }

  &__subtitle {
    margin: 0 0 30px 0;
    text-align: center;
  }

  &__carousel {
  }
}

.item {
  &__body {
    display: flex;

    img { margin:8px }
  }
}

</style>
