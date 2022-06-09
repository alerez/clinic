<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="main__contacts contacts">
    <div class="contacts__container">
      <div class="contacts__body">
        <div class="contacts__title title">Контакты</div>

        <div
          class="contacts__item item"
          v-for="i in store.contacts"
          :key="i.title"
        >
          <div class="item__body">
            <div class="item__icon"><img :src="i.img" alt=""></div>
            <div class="item__title">{{ i.title }}</div>
            <div class="item__subtitle">{{ i.subtitle }}</div>
          </div>
        </div>

        <div class="contacts__socials">
          <a
            href=""
            v-for="social in store.socials"
            :key="social.title"
          ><img :src="social.path" alt=""></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  background-image: url('../../src/assets/images/map.png');
  // background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 45px 0 235px 0;

  &__container {
  }

  &__body {
    max-width: 445px;
    width: 100%;
    padding: 35px 30px;
    background: #fff;
    box-shadow: 0px 24px 35px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
  }

  &__title {
    margin: 0 0 20px 0;
    font-size: 28px;
  }

  &__item {
  }

  &__socials {
    display: flex;

    a:not(:last-child) { margin: 0 10px 0 0; }
  }
}

.item {
  &:not(:last-child) { margin: 0 0 20px 0; }

  &__body {
    position: relative;
    padding: 0 0 0 30px;
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__title {
    margin: 0 0 7px 0;
    font-size: 13px;
    color: #00000080;
  }

  &__subtitle {
  }
}

</style>
