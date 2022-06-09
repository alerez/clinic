<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>


<template>
  <section class="main__more-contacts more-contacts">
    <div class="more-contacts__container">
      <div class="more-contacts__body">
        <div class="more-contacts__section">
          <div class="more-contacts__title title">Наши контакты</div>

          <div
            class="more-contacts__item item"
            v-for="i in store.contacts"
            :key="i.title"
          >
            <div class="item__body">
              <div class="item__icon"><img :src="i.img" alt=""></div>
              <div class="item__title">{{ i.title }}</div>
              <div class="item__subtitle">{{ i.subtitle }}</div>
            </div>
          </div>

          <div class="more-contacts__socials">
            <a
              href=""
              v-for="social in store.socials"
              :key="social.title"
            ><img :src="social.path" alt=""></a>
          </div>
        </div>

        <div class="more-contacts__image">
          <img src="../../src/assets/images/mini-map.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.more-contacts {
  flex: 1 1 100%;
  background-image: url('../../src/assets/images/more-contacts.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 90px 0 70px 0;

  @media(max-width: 790px) { padding: 30px 0; }

  &__container {
    height: 100%;
  }

  &__body {
    display: grid;
    place-items: center;
    grid-template: 1fr / repeat(auto-fit, minmax(min(375px, 100%), 1fr));
    height: 100%;
  }

  &__section {
    padding: 35px 0px;
  }

  &__image {
    border-radius: 10px;
    // width: 100%;

    img { width: 100%; }
  }

  &__title {
    margin: 0 0 20px 0;
  }

  &__item {
  }

  &__socials {
    display: flex;

    @media(max-width: 790px) { justify-content: center; }

    a {
      img {
        width: 50px;
        height: 50px;

        @media(max-width: 1023.98px) {
          width: 40px;
          height: 40px;
        }
      }

      &:not(:last-child) { margin: 0 20px 0 0; }
    }
  }
}

.item {
  &:not(:last-child) { margin: 0 0 35px 0; }

  &__body {
    position: relative;
    padding: 0 0 0 50px;
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;

    img { width: 100%; }
  }

  &__title {
    margin: 0 0 10px 0;
    font-weight: 400;
    font-size: 18px;
    color: #00000080;
  }

  &__subtitle {
    font-weight: 450;
    font-size: 24px;
    
    @media(max-width: 1023.98px) { font-size: 18px; }
  }
}

</style>
