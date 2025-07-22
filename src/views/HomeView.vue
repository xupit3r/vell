<script setup>
import { useCellStore } from '@/stores/cells';
import Step from '@/components/Step.vue';

const cellStore = useCellStore();

const doStep = () => cellStore.step();
</script>

<template>
  <main>
    <Step v-for="step in cellStore.steps" :cells="step" />
  </main>
  <button @click="doStep">step</button>
</template>
