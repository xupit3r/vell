<script setup>
import Cell from '@/components/Cell.vue';
import { useCellStore } from '@/stores/cells';

const cellStore = useCellStore();
const myStyles = `
  width: ${1/cellStore.cells.length * 100}%;
`;
</script>

<template>
    <Cell v-for="cell in cellStore.cells"
          :cell="cell"
          :step="cellStore.stepNumber" 
          :style="myStyles"/>
</template>

<style lang="css" scoped>
</style>