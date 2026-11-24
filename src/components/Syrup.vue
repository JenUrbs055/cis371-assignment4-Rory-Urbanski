<template>
  <div class="syrup" :style="{'--stripe-color': syrupColor}"></div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useBeverageStore} from "../stores/beverageStore";
const beverageStore = useBeverageStore();

const syrupColor = computed(() => beverageStore.curSyrup.color);
</script>
<style lang="scss" scoped>

.syrup {
  transform: translateY(400%);
  background-color:#c6c6c6;
  background: repeating-linear-gradient(45deg,var(--stripe-color), var(--stripe-color) 10px,#e1cf95 10px, #e1cf95 20px);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>