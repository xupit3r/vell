<script setup>
import Cell from '@/components/Cell.vue';

const { cells } = defineProps({
  cells: Array
});

const myStyles = `
  width: ${1/cells.length * 100}%;
`;
</script>

<template>
  <div class="step">
    <Cell v-for="cell in cells"
          :cell="cell"
          :style="myStyles"/>
  </div>
</template>

<style lang="css" scoped>
  .step {
    width: 100%;
  }
</style>