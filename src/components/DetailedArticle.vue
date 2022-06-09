<script setup>
import { ref } from 'vue';
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="main__detailed-article detailed-article">
    <div class="detailed-article__container">
      <div class="detailed-article__body">
        <div class="detailed-article__section">
          <div class="detailed-article__title title">Название статьи</div>
            <div class="detailed-article__date">19.05.2022</div>

            <div class="detailed-article__image"><img src="../../src/assets/images/articles/det-ar-1.png" alt=""></div>
            <div class="detailed-article__subtitle subtitle">Подзаголовок</div>
            <div class="detailed-article__text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>

            <div class="detailed-article__subtitle subtitle">Подзаголовок</div>
            <div class="detailed-article__text">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
            </div>
            <div class="detailed-article__image"><img src="../../src/assets/images/articles/det-ar-1.png" alt=""></div>

            <div class="detailed-article__subtitle subtitle">Подзаголовок</div>
            <div class="detailed-article__text">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
            </div>
        </div>

        <div class="detailed-article__grid grid">
          <div class="grid__title title">Читайте так же</div>

          <div class="grid__body">
            <div class="detailed-article__acticle article"
              v-for="i in 3"
              :key="i"
            >
              <div class="article__image"><img :src="store.articles[0].img" alt=""></div>

              <div class="article__body">
                <div class="article__title">{{ store.articles[0].title }}</div>
                <div class="article__date">{{ store.articles[0].date }}</div>
                <div class="article__description">{{ store.articles[0].description }}</div>
                <router-link :to="store.articles[0].path" class="article__link">Читать продолжение</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.detailed-article {

  &__container {
  }

  &__body {
    padding: 90px 0 0 0;

    @media(max-width: 790px) { padding: 60px 0; }
  }

  &__title,
  &__date,
  &__subtitle,
  &__text {
    padding: 0 55px;

    @media(max-width: 539.98px) { padding: 0 20px; }
    @media(max-width: 424.98px) { padding: 0; }

  }

  &__title {
    margin: 0 0 10px 0;
  }

  &__date {
    margin: 0 0 30px 0;
  }

  &__image {
    margin: 0 0 30px 0;

    img { width: 100%; }
  }

  &__subtitle {
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 32px;
  }

  &__text {
    margin: 0 0 20px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
}

.grid {
  &__body {
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    gap: 20px;
  }

  &__title {
    margin: 70px 0 30px 0;
  }
}
</style>
