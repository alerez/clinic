<script setup>
import Path from '@/components/Path.vue';
import DetailedArticle from '@/components/DetailedArticle.vue';

import { ref } from 'vue';
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <Path/>
        
        <DetailedArticle/>
      </div>
    </div>
  </main>
</template>
