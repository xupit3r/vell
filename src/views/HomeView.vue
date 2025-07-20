<script setup lang="ts">
import Cell from '@/components/Cell.vue';
import { useCellStore } from '@/stores/cells';
import { ref } from "vue";

const cellStore = useCellStore();
const numCells = cellStore.cells.length;
const myStyles = `
  width: ${1/cellStore.cells.length * 100}%;
`
</script>

<template>
  <main>
    <cell v-for="cell in cellStore.cells"
          :color="cell.color"
          :step="cellStore.stepNumber" 
          :style="myStyles"/>
  </main>
</template>
