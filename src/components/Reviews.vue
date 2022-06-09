<template>
  <section class="reviews">
    <div class="reviews__container">
      <div class="reviews__body">
        <div class="reviews__title title">О нас говорят</div>
        <div class="reviews__subtitle subtitle">Отзывы клиентов</div>

<!--        <div class="reviews__carousel carousel">-->
<!--          <div class="carousel__body">-->
<!--            <div class="carousel__row">-->
<!--              <div class="carousel__item item" v-for="i in 2">-->
<!--                <div class="item__body">-->
<!--                  <div class="item__image"><img src="../../src/assets/images/girl-1.png" alt=""></div>-->
<!--                  <div class="item__content">-->
<!--                    <div class="item__bio">Имя Фамилия</div>-->
<!--                    <div class="item__comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>-->
<!--                  </div>-->
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
          <SplideSlide class="carousel__body">
            <div class="carousel__row">
              <div class="carousel__item item" v-for="i in 2">
                <div class="item__body">
                  <div class="item__image"><img src="../../src/assets/images/girl-1.png" alt=""></div>
                  <div class="item__content">
                    <div class="item__bio">Имя Фамилия</div>
                    <div class="item__comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="carousel__row">
              <div class="carousel__item item" v-for="i in 2">
                <div class="item__body">
                  <div class="item__image"><img src="../../src/assets/images/girl-1.png" alt=""></div>
                  <div class="item__content">
                    <div class="item__bio">Имя Фамилия</div>
                    <div class="item__comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="carousel__row">
              <div class="carousel__item item" v-for="i in 2">
                <div class="item__body">
                  <div class="item__image"><img src="../../src/assets/images/girl-1.png" alt=""></div>
                  <div class="item__content">
                    <div class="item__bio">Имя Фамилия</div>
                    <div class="item__comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                  </div>
                </div>
              </div>
            </div>
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
.reviews {
  background-image: url('../../src/assets/images/reviews.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__container {
  }

  &__body {
    padding: 60px 0;

    @media(max-width: 540px) { padding: 30px 0; }
  }

  &__title {
    margin: 0 0 20px 0;
    text-align: center;
  }

  &__subtitle {
    margin: 0 0 20px 0;
    text-align: center;
  }

  &__carousel {
  }
}

.carousel {

  &__body {
  }

  &__row {
    display: grid;
    grid-template: 1fr / repeat(auto-fit, minmax(min(555px, 100%), 1fr));
  }

  &__item {
  }

  &__indicator {
    span:not(:first-child) { background-color: #fff; }
  }
}

.item {
  background: #fff;
  box-shadow: 0px 21px 28px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &__body {
    display: grid;
    grid-template: 1fr / auto 1fr;
    gap: 20px;
    padding: 30px;

    @media(max-width: 540px) {
      grid-template: 1fr / 1fr;
    }
  }

  &__image {
    display: grid;
    place-items: center;
  }

  &__bio {
    margin: 0 0 20px 0;
    font-weight: 450;
    font-size: 20px;
  }

  &__comment {
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
  }
}

</style>
