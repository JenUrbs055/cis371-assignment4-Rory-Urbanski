<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Base v-if="isCreamer==='transparent' && isSyrup==='#c6c6c6'"/>
        <Creamer v-else/>
      </template>
      <template v-slot:mid>
        <Base v-if="isSyrup==='#c6c6c6'"/>
        <Syrup v-else />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  isCreamer: string;
  isSyrup: string;
};
defineProps<Props>();



</script>
