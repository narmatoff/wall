<script setup lang="ts">
import type {TRect} from "../../types";
export interface IProps {
  modelValue: TRect,
}

const props = defineProps<IProps>();

</script>

<template lang="pug">
.card
  h3 Размер стены
  .grid.p-fluid
    chip.mb-2.pt-2.pb-2

      .col-12(class='md:col-6')
        .p-inputgroup
          span.p-inputgroup-addon Ширина стены
          InputNumber(v-model='props.modelValue.width')
          span.p-inputgroup-addon м.

      .col-12(class='md:col-6')
        .p-inputgroup
          span.p-inputgroup-addon Высота стены
          InputNumber(v-model='props.modelValue.height')
          span.p-inputgroup-addon м.
</template>
