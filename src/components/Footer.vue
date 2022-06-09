<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="footer__top-row">
        <div class="footer__container">
          <div class="footer__logo logo"><img src="@/assets/images/logo-2.svg" alt=""></div>

          <div class="footer__contact-links">
            <a href="" class="contact-link">
              <img src="@/assets/images/footer/icons/location.svg" alt="">
              <span>Бен-Гурион 63, Кирьят-Бялик</span>
            </a>
            <a href="tel:052-4145005" class="contact-link">
              <img src="@/assets/images/footer/icons/telephone-call.svg" alt="">
              <span>052-4145005</span>
            </a>
          </div>

          <div class="footer__button button">Заказать звонок</div>
        </div>
      </div>

      <div class="footer__rights">
        <div class="footer__container">© Copyright 2017 - Dr Beauty</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__container {
    display: flex;
    width: 100%;
  }

  &__body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__top-row {
    padding: 20px 0;
    background-color: #17363D;
  }

  &__logo {
  }

  &__contact-links {
    display: flex;
    gap: 30px;
    margin: 0 30px 0 auto;

    a { color: #fff; }
  }

  &__button {
  }

  &__rights {
    padding: 20px 0;
    background-color: #0F282E;
    color: #fff;
    font-size: 13px;

    div { justify-content: center; }
  }
}
</style>
