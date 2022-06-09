<template>
  <section class="main__path path">
    <div class="path__container">
      <div class="path__body">
        <div class="path__row">
          <router-link to="/" class="path__link path__link_active">Главная</router-link>
          <router-link to="/" class="path__link">Хлебные крошки</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.path {
  position: absolute;
  width: 100%;
  // top: 0;

  &__container {
  }

  &__body {
    padding: 20px 0 0px 0;
  }

  &__row {
    display: flex;
  }

  &__link {
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin: 0 30px 0 0;

      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 5px;
        height: 5px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        transform: translateX(15px) rotate(45deg);
      }
    }

    &_active {
      color: #33CBEC;
      text-decoration: underline;

      &:after {
        border-top: 1px solid #33CBEC !important;
        border-right: 1px solid #33CBEC !important;
      }
    }
  }
}

</style>
