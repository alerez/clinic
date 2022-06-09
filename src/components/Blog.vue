<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>


<template>
  <section class="main__blog blog">
    <div class="blog__container">
      <div class="blog__body">
        <div class="blog__title title">Популярные статьи</div>

        <div class="blog__categories">
          <div class="blog__category category"
            v-for="i in 11"
            :class="i === 1 ? 'category_active' : ''"
          >{{ i % 2 === 0 ? 'Пример' : 'Название категории' }}</div>
        </div>

        <div class="blog__grid">
          <div class="blog__acticle article"
            v-for="article in store.articles"
            :key="article.title"
          >
            <div class="article__image"><img :src="article.img" alt=""></div>

            <div class="article__body">
              <div class="article__title">{{ article.title }}</div>
              <div class="article__date">{{ article.date }}</div>
              <div class="article__description">{{ article.description }}</div>
              <router-link :to="article.path" class="article__link">Читать продолжение</router-link>
            </div>
          </div>
        </div>

        <div class="blog__pagination">123456</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.blog {
  flex: 1 1 100%;

  &__container {
    height: 100%;
  }

  &__body {
    height: 100%;
    padding: 90px 0 70px 0;

    @media(max-width: 790px) { padding: 60px 0; }
  }

  &__title {
    margin: 0 0 30px 0;
  }

  &__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 30px 0;
  }

  &__category {
    // max-width: fit-content;
    font-size: 14px;
    text-align: center;

    @media(max-width: 400px) { width: 100%; }
  }

  &__grid {
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    gap: 20px;
  }

  &__acticle {
  }

  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
