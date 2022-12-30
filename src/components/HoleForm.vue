<script setup lang="ts">
import {
  watch,
  defineEmits
} from 'vue';
import type {TRect} from "../types";
import {useToast} from "primevue/usetoast";

const toast = useToast();

const emit = defineEmits(['remove'])

export interface IProps {
  modelValue: TRect,
  idx: number,
  wall: TRect,
  invalidWidth: boolean,
}

const props = defineProps<IProps>();

watch(() => props.invalidWidth, () => {
  if (props.invalidWidth) {
    toast.add({
      severity: 'error',
      summary: 'Ошибка в ширине проема',
      detail: `Ширина проема ${props.modelValue.width}см. не может быть больше или равна ширине стены ${props.wall.width}м.`,
      life: 3000
    });
  }
})
</script>

<template lang="pug">
Toast
h3 Укажите размер проема {{ props.idx + 1 }}
chip.mb-2.pt-2.pb-2(icon='pi pi-microsoft' :removable='true' @remove="emit('remove', $event)")
  .p-inputgroup

    .col-12(class='md:col-6')
      .p-inputgroup
        span.p-inputgroup-addon Ширина проема:
        InputNumber(v-model='props.modelValue.width' placeholder='Ширина проема' :class="props.invalidWidth ? 'p-invalid' : ''" buttonlayout='vertical')
        span.p-inputgroup-addon cм.

    .col-12(class='md:col-6')
      .p-inputgroup
        span.p-inputgroup-addon Высота проема:
        InputNumber(v-model='props.modelValue.height' placeholder='Высота проема' :max='props.wall.height*100')
        span.p-inputgroup-addon cм.
</template>

<style lang="scss" scoped>
</style>
