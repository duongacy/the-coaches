<template>
  <div :class="baseButtonStyles(props)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type BaseButtonProps, baseButtonStyles } from '.'
defineOptions({ inheritAttrs: false })
const props = defineProps<BaseButtonProps>()
</script>
