<script setup>
import Fullscreen from '@/components/Fullscreen.vue';
import Procedures from '@/components/Procedures.vue';
import Addition from '@/components/Addition.vue';
import Registration from '@/components/Registration.vue';
import Results from '@/components/Results.vue';
import Benefits from '@/components/Benefits.vue';
import Reviews from '@/components/Reviews.vue';
import Contacts from '@/components/Contacts.vue';

import { ref } from 'vue';
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <Fullscreen/>

        <Procedures/>

        <Addition :data="store.additions[0]"/>

        <Registration/>

        <Results/>

        <Benefits/>

        <Reviews/>

        <Addition :data="store.additions[1]"/>

        <Contacts/>
      </div>
    </div>
  </main>
</template>
