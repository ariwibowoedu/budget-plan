<template>
  <ModalComp :show="true" title="Update Expenses" @close="$emit('close')">
    <form @submit.prevent="handleUpdate" class="space-y-3">
      <input type="text" v-model="title" placeholder="Title" class="border p-2 w-full rounded" />
      <input
        type="number"
        v-model.number="amount"
        placeholder="Amount"
        class="border p-2 w-full rounded"
      />
      <div class="flex justify-end gap-2">
        <button type="button" @click="$emit('close')" class="text-gray-600">Cancel</button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </div>
    </form>
  </ModalComp>
</template>

<script setup>
import { ref } from 'vue'
import ModalComp from '@/components/shared/ModalComp.vue'
import { useExpenses } from '@/components/composables/useExpenses'

const props = defineProps({
  expense: Object,
})

const emit = defineEmits(['close', 'updated'])

const { updateExpense } = useExpenses()

const title = ref(props.expense.title)
const amount = ref(props.expense.amount)

const handleUpdate = async () => {
  await updateExpense(props.expense.id, { title: title.value, amount: amount.value })
  emit('updated')
  emit('close')
}
</script>

<style>
</style>