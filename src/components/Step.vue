<script setup>
import { useCellStore } from '@/stores/cells';

const cellStore = useCellStore();

const doStep = () => cellStore.step();
</script>

<template>
  <button @click="doStep">step</button>
</template>

<style lang="css" scoped>
</style>