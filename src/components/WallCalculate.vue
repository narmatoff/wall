<script setup lang="ts">
import {
  computed,
  ref
} from 'vue'
import SummaryBlock from "./SummaryBlock.vue";
import EnterMainData from "./WallDataForm.vue";
import HoleForm from "./HoleForm.vue";

import type {TRect} from "../types";
import {PGP} from "../constants";

const props = defineProps<{ msg: string }>()


/**
 * Размер стены
 */
const wall = ref<TRect>({
  width: 5,
  height: 2,
});

const holes = ref<Array<TRect>>([]);

/**
 * Площадь стены всего мм^3
 */
const wallArea = computed<number>(() => (wall.value.width * 1000) * (wall.value.height * 1000));

/**
 * Площадь проемов всего мм^3
 */
const holesArea = computed<number>(() => holes.value.reduce((a, i) => a + i.width * i.height * 100, 0));

/**
 * Ширина проемов всего (см)
 */
const holesWidth = computed<number>(() => holes.value.reduce((a, i) => a + i.width, 0));

/**
 * Площадь стены с учетом проемов
 */
const completeArea = computed<number>(() => {
  return (wallArea.value < holesArea.value) ? 0 : wallArea.value - holesArea.value
});

/**
 * Количество требуемых плит
 */
const countPGP = computed<number>(() => Math.ceil(completeArea.value / PGP.ARIA()))

/**
 * Вес требуемых плит
 */
const weightPGP = computed<number>(() => countPGP.value * PGP.WEIGHT);


/**
 * Удалить проем
 * @param idx
 */
const removeOpening = (idx: number) => {
  console.log('holes', holes.value)
  console.log('idx', idx)
  holes.value.splice(idx, 1);
}

/**
 * Добавить проем
 */
const createOpening = () => holes.value.push({width: 0, height: 0});

</script>

<template lang="pug">
summary-block(:count="countPGP" :weight="weightPGP" :name="props.msg")

enter-main-data(:model-value="wall")

hole-form(
  v-for="(hole, idx) in holes"
  :key="hole"
  :idx="idx"
  :wall="wall"
  :invalid-width="wall.width*100 <= holesWidth"
  :model-value="holes[idx]"
  @remove="removeOpening(idx)"
  )

.mt-4
  Button(@click="createOpening" label="Добавить проем" icon="pi pi-plus" iconPos="right")
</template>

<style scoped lang="scss">
</style>
