<template>
  <form @submit.prevent="handleSubmit">
    <slot name="fields" />
    <div class="flex gap-2 mt-2">
      <button class="bg-blue-600 text-white px-4 py-2 rounded mt-2" type="submit">
        {{ submitLabel }}
      </button>
    </div>
  </form>
</template>

<script setup>
defineProps({
  submitLabel: String,
  onSubmit: Function,
})

const emit = defineEmits(['submit'])

const handleSubmit = () => {
  emit('submit')
}
</script>