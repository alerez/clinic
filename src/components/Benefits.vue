<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="mian__benefits benefits">
    <div class="benefits__container">
      <div class="benefits__body">
        <div class="benefits__title title">Почему стоит выбрать Dr Beauty?</div>
        <div class="benefits__subtitle">Наши преимущества</div>
        <div class="benefits__tiles">
          <div class="benefits__tile tile"
            v-for="tile in store.benefits"
          >
            <div class="tile__body">
              <div class="tile__icon"><img :src="tile.img" alt=""></div>
              <div class="tile__title">{{ tile.title }}</div>
              <div class="tile__text">{{ tile.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.benefits {

  &__container {
  }

  &__body {
    padding: 0 0 90px 0;

    @media(max-width: 540px) { padding: 0 0 60px 0; }
  }

  &__title {
    margin: 0 0 30px 0;
    text-align: center;
  }

  &__subtitle {
    font-weight: 450;
    font-size: 20px;
    margin: 0 0 30px 0;
    text-align: center;
  }

  &__tiles {
    display: grid;
    grid-template: 1fr / repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    gap: 20px;
  }

  &__tile {
  }
}

.tile {
  box-shadow: 0px 21px 28px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
  }

  &__icon {
    display: grid;
    place-content: center;
    width: 120px;
    height: 120px;
    margin: 0 0 15px 0;
    border-radius: 50%;
    background-color: #E0F3F6;
  }

  &__title {
    max-width: 230px;
    margin: 0 0 15px 0;
    font-weight: 450;
    font-size: 20px;
    text-align: center;
  }

  &__text {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
  }
}

</style>
