<script setup>
const prop = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  tertiary: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    type="button"
    class="focus:outline-none rounded-lg px-3 py-2 text-center inline-flex items-center"
    :class="{
      'bg-primary/10 hover:bg-primary/20': prop.isActive,
      'hover:bg-primary/10': !prop.isActive
    }"
  >
    <slot name="icon"></slot>
    <slot name="title">
      <span class="font-normal text-base">#TeamTwibble</span>
    </slot>
    <svg
      v-if="prop.tertiary"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 ml-auto p-0.5 border border-border rounded"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00065 3.3335V12.6668M3.33398 8.00016H12.6673"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
