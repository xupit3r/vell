<script setup lang="ts">
import Cell from '@/components/Cell.vue';
import Step from '@/components/Step.vue';
import { useCellStore } from '@/stores/cells';

const cellStore = useCellStore();
const numCells = cellStore.cells.length;
const myStyles = `
  width: ${1/cellStore.cells.length * 100}%;
`
</script>

<template>
  <main>
    <cell v-for="cell, i in cellStore.cells"
          :cell="cell"
          :step="cellStore.stepNumber" 
          :style="myStyles"/>
  </main>
  <Step />
</template>
