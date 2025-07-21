<script setup lang="ts">
import { ref } from "vue";
import { useCellStore } from '@/stores/cells';

const cellStore = useCellStore();

const { step, cell} = defineProps({
  step: {
    type: Number,
    default: 0
  },
  cell: {
    type: Object,
    default: {
      color: 1,
      rules: []
    }
  }
});

const color = ref(cell.color);

const cellStyles = {
  "cell": true,
  "white": cell.color, 
  "black": !cell.color
};

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