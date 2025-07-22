<script setup>
import Cell from '@/components/Cell.vue';
import { useCellStore } from '@/stores/cells';

const cellStore = useCellStore();
const myStyles = `
  width: ${1/cellStore.cells.length * 100}%;
`;
</script>

<template>
  <div class="step">
    <Cell v-for="cell in cellStore.cells"
          :cell="cell"
          :step="cellStore.stepNumber" 
          :style="myStyles"/>
  </div>
</template>

<style lang="css" scoped>
  .step {
    width: 100%;
  }
</style>