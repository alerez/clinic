<script setup>
import Addition from '@/components/Addition.vue';
import Registration from '@/components/Registration.vue';
import Benefits from '@/components/Benefits.vue';
import Contacts from '@/components/Contacts.vue';
import Specialists from '@/components/Specialists.vue';
import Cabinets from '@/components/Cabinets.vue';
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

        <Addition :data="store.additions[2]"/>

        <Specialists/>

        <Benefits/>

        <Registration/>

        <Addition :data="store.additions[3]"/>
        
        <Cabinets/>

        <Contacts/>

      </div>
    </div>
  </main>
</template>
