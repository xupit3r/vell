<script setup lang="ts">
const props = defineProps({
  step: {
    type: Number,
    default: 0
  },
  color: {
    type: Number,
    default: 1
  }
});

const cellStyles = [
  "cell",
  (props.color ? "white" : "black")
];
</script>

<template>
  <span :class="cellStyles"></span>
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