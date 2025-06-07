<template>
  <ModalComp :show="true" title="Update Expenses" @close="$emit('close')">
    <BaseForm :submit-label="'Update'" @submit="handleUpdate" @cancel="cancel">
      <template #fields>
        <div class="block mb-1">
          <label class="block mb-1 font-medium">Name</label>
          <input
            type="text"
            v-model="title"
            class="w-full border rounded p-2"
            placeholder="ex:John doer"
            required
          />
        </div>
        <div class="block mb-1">
          <label class="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            v-model="amount"
            placeholder="ex: 200.000"
            class="border p-2 w-full rounded"
            required
          />
        </div>
      </template>
    </BaseForm>
    <!-- <form @submit.prevent="handleUpdate" class="space-y-3">
      <input type="text" v-model="title" placeholder="Title" class="border p-2 w-full rounded" />
      <input
        type="number"
        v-model.number="amount"
        placeholder="Amount"
        class="border p-2 w-full rounded"
      />
      <div class="flex justify-end gap-2">
        <button
          @click="$emit('close')"
          class="px-4 py-2 rounded border border-gray-300 text-gray-700"
        >
          Cancel
        </button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </div>
    </form> -->
  </ModalComp>
</template>

<script setup>
import { ref } from 'vue'
import ModalComp from '@/components/shared/ModalComp.vue'
import BaseForm from '@/components/shared/BaseForm.vue'
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