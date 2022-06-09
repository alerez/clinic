<script setup>
import Blog from '@/components/Blog.vue';
import Path from '@/components/Path.vue';

import { ref } from 'vue';
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <Path/>
        
        <Blog/>
      </div>
    </div>
  </main>
</template>
