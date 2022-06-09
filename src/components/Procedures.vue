<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="main__procedures procedures">
    <div class="procedures__container">
      <div class="procedures__body">
        <div class="procedures__title title">Процедуры в клинике Dr Beauty</div>

        <div class="procedures__tiles">
          <div
            class="procedures__tile tile"
            v-for="tile in store.tiles"
            :key="tile.title"
          >
            <div class="tile__body">
              <div class="tile__image"><img :src="tile.img" alt=""></div>
              <div class="tile__title">{{ tile.title }}</div>

              <div class="tile__list">
                <span
                  v-for="l in tile.list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.procedures {

  &__container {
  }

  &__body {
    padding: 60px 0 0 0;

    @media(max-width: 767.98px) {
      padding: 40px 0 0 0;
    }
  }

  &__title {
    margin: 0 0 60px 0;
    text-align: center;

    @media(max-width: 767.98px) {
      margin: 0 0 15px 0;
    }
  }

  &__tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    row-gap: 30px;
    column-gap: 20px;
  }

  &__tile {
  }

  &__button {
  }
}
.tile {
  box-shadow: 0px 21px 28px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &__body {
    padding: 25px;
  }

  &__image {
    margin: 0 0 15px 0;
    border-radius: 10px;

    img {
      width: 100%;
    }
  }

  &__title {
    max-width: 230px;
    margin: 0 0 15px 0;
    font-weight: 450;
    font-size: 24px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;

    span {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 0 0 25px;

      &:not(:last-child) { margin: 0 0 15px 0; }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #267C8F;
      }
    }
  }
}
</style>
