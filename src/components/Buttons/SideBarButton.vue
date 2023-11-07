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
    class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-3 py-2 text-center inline-flex items-center"
    :class="{ 'bg-red-700 hover:bg-red-800': prop.isActive }"
  >
    <slot name="icon"></slot>
    <slot name="title">
      <span class="font-normal text-base">#TeamTwibble</span>
    </slot>
    <svg
      v-if="prop.tertiary"
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 ml-auto p-0.5 border rounded"
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
