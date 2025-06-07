<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    role="dialog"
    aria-modal="true"
  >
    <div class="bg-white p-6 mx-2 rounded-xl shadow-lg w-full max-w-2xl relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-3 text-gray-400 text-2xl"
        aria-label="close modal"
      >
        &times;
      </button>

      <h2 v-if="title" class="text-xl font-semibold mb-4">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: {
    type: String,
    default: '',
  },
})

defineEmits(['close'])
</script>