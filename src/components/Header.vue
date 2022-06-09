<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__top-row">
          <div class="header__logo logo"><img src="@/assets/images/logo-1.svg" alt=""></div>

          <div class="header__contact-links">
            <a href="" class="contact-link">
              <img src="@/assets/images/header/icons/location.svg" alt="">
              <span>Бен-Гурион 63, Кирьят-Бялик</span>
            </a>
            <a href="tel:052-4145005" class="contact-link">
              <img src="@/assets/images/header/icons/telephone-call.svg" alt="">
              <span>052-4145005</span>
            </a>
          </div>

          <div class="header__button button">Заказать звонок</div>

          <div class="header__lang">
            <img src="@/assets/images/header/icons/ru-Ru.svg" alt="">

            <select name="" id="">
              <option value="">Ru</option>
            </select>
          </div>

          <div class="header__socials">
            <a
              href=""
              v-for="social in store.socials"
              :key="social.title"
            ><img :src="social.path" alt=""></a>
          </div>
        </div>

        <nav class="header__nav">
          <router-link
            class="header__link"
            v-for="links in store.navLinks"
            :key="links.title"
            :to="links.path"
          >{{ links.title }}</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);

  &__container { height: 100%; }

  &__body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #D6D6D6;
  }

  &__logo {
  }

  &__contact-links {
    display: flex;
    gap: 30px;
  }

  &__button {
  }

  &__lang {
    display: flex;
    align-items: center;
  }

  &__socials {
    display: flex;

    a:not(:last-child) { margin: 0 10px 0 0; }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 17px;
  }

  &__link {
    border-bottom: #FFFFFF 2px solid;
    padding-bottom:5px;

    &:hover{
      border-bottom: #33CBEC 2px solid;
    }
  }
}
</style>
