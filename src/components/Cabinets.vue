<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="main__cabinets cabinets">
    <div class="cabinets__container">
      <div class="cabinets__body">
        <div class="cabinets__title title">Наши кабинеты</div>
        <div class="cabinets__tiles">
          <div class="cabinets__image"
            v-for="i in store.cabinets"
          ><img :src="i.img" alt=""></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cabinets {

  &__container {
  }

  &__body {
    padding: 0 0 70px 0;
  }

  &__title {
    text-align: center;
    margin: 0 0 30px 0;
  }

  &__tiles {
    display: grid;
    grid-template: 1fr / repeat(auto-fit, minmax(min(370px, 100%), 1fr));
    gap: 10px;
  }

  &__image {
    img { width: 100%; }
  }
}

</style>
