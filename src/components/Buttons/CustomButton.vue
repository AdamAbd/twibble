<script setup>
const prop = defineProps({
  title: {
    type: String,
    default: 'Create'
  },
  isPrimary: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button
    type="button"
    class="focus:outline-none w-full font-medium rounded-lg text-sm tracking-wider px-4 py-2.5 text-center inline-flex items-center justify-center"
    :class="{
      'text-white bg-primary hover:bg-red-500': prop.isPrimary,
      'text-[#BBBBBB] border border-border hover:bg-primary/30 hover:border-primary/30':
        !prop.isPrimary
    }"
  >
    <slot name="icon"></slot>
    {{ prop.title }}
  </button>
</template>
