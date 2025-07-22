<script setup>
const { cell } = defineProps({
  cell: {
    type: Object,
    default: {
      color: 1,
      rules: []
    }
  }
});

</script>

<template>
  <span :class="{
    cell: true,
    white: cell.color === 1,
    black: cell.color === 0
  }"></span>
</template>

<style lang="css" scoped>
.cell {
  width: 100%;
  height: 20px;
  border: solid 1px;
  display: inline-block;
}
.white {
  background-color: white;
}
.black {
  background-color: black;
}
</style>