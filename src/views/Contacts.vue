<script setup>
import Registration from '@/components/Registration.vue';
import MoreContacts from '@/components/MoreContacts.vue';
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

        <MoreContacts/>

        <Registration/>
      </div>
    </div>
  </main>
</template>
