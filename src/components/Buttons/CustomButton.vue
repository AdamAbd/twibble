<script setup>
const prop = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Create'
  },
  isPrimary: {
    type: Boolean,
    required: true,
    default: true
  }
})
</script>

<template>
  <button
    type="button"
    class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm tracking-wider px-4 py-2.5 text-center inline-flex items-center"
    :class="{
      'bg-primary hover:bg-red-500': prop.isPrimary,
      'border border-border hover:bg-primary/30 hover:border-primary/30': !prop.isPrimary
    }"
  >
    <slot name="icon"></slot>
    {{ prop.title }}
  </button>
</template>
