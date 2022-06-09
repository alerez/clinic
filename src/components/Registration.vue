<template>
  <section class="main__registration registration">
    <div class="registration__container">
      <div class="registration__body">
        <form action="" class="registration__form form" @submit.prevent="">
          <div class="form__body">
            <div class="form__title title">Запишитесь на примем прямо сейчас !</div>
            <div class="form__subtitle subtitle">Оставьте свои данные и наш менеджер Вам презвонит</div>
            <div class="form__text-areas">
              <input type="text" class="form__name input" placeholder="Ваше имя">
              <input type="text" class="form__phone input" placeholder="Номер телефона">
              <textarea class="form__message input" rows="10" placeholder="Текст обращения"></textarea>
              <button class="form__button button">Наши услуги</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.registration {
  background-image: url('../../src/assets/images/form-1.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__container {
  }

  &__body { padding: 60px 0; }

  &__form {
  }
}

.form {
  margin-left: auto;
  max-width: 565px;

  &__body {
  }

  &__title {
    margin: 0 0 20px 0;
  }

  &__subtitle {
    margin: 0 0 30px 0;
  }

  &__text-areas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    font-size: 14px;

    @media(max-width: 424.98px) { font-size: 16px; }
  }

  &__name,
  &__phone,
  &__message { font-size: inherit; }

  &__name {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  &__phone {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  &__message {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    border-radius: 10px !important;
    resize: none;
  }

  &__button {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    justify-self: end;
  }
}

@media(max-width: 539.98px) {
  .form {
    &__name {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    &__phone {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }

    &__message {
      grid-row: 3 / 4;
      grid-column: 1 / 3;
    }

    &__button {
      grid-row: 4 / 5;
    }
  }
}
</style>
