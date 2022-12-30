<script setup lang="ts">
export interface IProps {
  count: number,
  weight: number,
  name: string,
}

const props = defineProps<IProps>();
</script>

<template lang="pug">
Card.shadow-2
  template(#title) {{ props.name }}
  template(#content)
    p Количество требуемых ПГП c учетом проемов:
      strong {{ props.count }} шт.
    p Вес требуемых ПГП:
      strong {{ props.weight }} кг.
</template>
