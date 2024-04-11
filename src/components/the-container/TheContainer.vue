<template>
  <div :class="containerStyles(props)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type ContainerProps, containerStyles } from '.'
defineOptions({ inheritAttrs: false })
const props = defineProps<ContainerProps>()
</script>
