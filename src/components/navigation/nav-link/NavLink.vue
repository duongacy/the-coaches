<template>
  <button :class="navLinkStyles(props)">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { type NavLinkProps, navLinkStyles } from '.'

const props = defineProps<NavLinkProps>()
</script>
