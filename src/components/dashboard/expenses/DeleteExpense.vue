<template>
  <modal-comp :show="true" title="Delete Expense" @close="$emit('close')">
    <p>
      Are you sure want to delete "<strong>{{ expense.title }} </strong>" from expenses list?
    </p>
    <div class="flex justify-end gap-2 mt-4">
      <button
        @click="$emit('close')"
        class="px-4 py-2 rounded border border-gray-300 text-gray-700"
      >
        Cancel
      </button>
      <button @click="handleDelete" class="px-4 py-2 rounded bg-red-600 text-white">Delete</button>
    </div>
  </modal-comp>
</template>

<script setup>
import ModalComp from '@/components/shared/ModalComp.vue'
import { useExpenses } from '@/components/composables/useExpenses'

const props = defineProps({
  expense: Object,
})

const emit = defineEmits(['close', 'updated'])

const { deleteExpense } = useExpenses()

const handleDelete = async () => {
  await deleteExpense(props.expense.id)
  emit('updated')
  emit('close')
}
</script>

<style>
</style>