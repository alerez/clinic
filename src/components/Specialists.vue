<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="main__specialists specialists">
    <div class="specialists__container">
      <div class="specialists__body">
        <div class="specialists__title title">Наша команда специалистов</div>
        <div class="specialists__subtitle subtitle">Профессионалы своего дела</div>

        <div class="specialists__carousel">
          <div
            class="specialists__specialist specialist"
            v-for="sp in store.specialists"
            :key="sp.name"
          >
            <div class="specialist__body">
              <!-- <img :src="sp.img" alt="" class="specialist__image"> -->
              <div class="specialist__name">{{ sp.name }}</div>
              <div class="specialist__about">{{ sp.about }}</div>
            </div>
          </div>
        </div>

        <div class="specialists__indicator">
          <span v-for="i in 4"
            :class="i === 1 ? 'active' : ''"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.specialists {

  &__container {
  }

  &__body { padding: 0 0 70px 0; }

  &__title, &__subtitle {
    text-align: center;
    margin: 0 0 30px 0;
  }

  &__carousel {
    display: grid;
    grid-template: 1fr / repeat(auto-fit, minmax(min(370px, 100%), 1fr));
    gap: 15px;
    margin: 0 0 30px 0;
  }

  &__specialist {
  }

  &__indicator {
    display: flex;
    justify-content: center;

    span {
      display: block;
      width: 11px;
      height: 11px;
      background-color: #E0F3F6;;
      border-radius: 50%;

      &:not(:last-child) { margin: 0 10px 0 0; }

      &.active { background-color: #33CBEC; }
    }
  }
}

.specialist {
  min-height: 430px;
  border-radius: 10px;

  background-image: url('../../src/assets/images/specialists/sp-1.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__body {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 30px 20px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 60%;
      width: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 50.83%, rgba(0, 0, 0, 0.4) 100%);
    }
  }

  &__image {
  }

  &__name {
    margin: 0 0 10px 0;
    font-weight: 750;
    font-size: 24px;
    color: #fff;
    z-index: 2;
  }

  &__about {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    z-index: 2;
  }
}

</style>
