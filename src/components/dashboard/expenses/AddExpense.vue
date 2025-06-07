<template>
  <ModalComp title="Add Expense" :show="true" @close="$emit('close')">
    <BaseForm :submit-label="'Save'" @submit="handleSubmit" @cancel="cancel">
      <template #fields>
        <div class="block mb-1">
          <label class="block mb-1 font-medium">Name</label>
          <input
            type="text"
            v-model="name"
            class="w-full border rounded p-2"
            placeholder="ex:Rent House"
            required
          />
        </div>
        <div class="block mb-1">
          <label class="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            v-model.number="amount"
            placeholder="ex: 200.000"
            class="border p-2 w-full rounded"
            required
          />
        </div>
      </template>
    </BaseForm>
  </ModalComp>
</template>

<script setup>
import { ref } from 'vue'
import { useExpenses } from '@/components/composables/useExpenses'

import BaseForm from '@/components/shared/BaseForm.vue'
import ModalComp from '@/components/shared/ModalComp.vue'

const title = ref('')
const amount = ref(0)

const emit = defineEmits(['close', 'updated'])
const { addExpense } = useExpenses()

const handleSubmit = async () => {
  await addExpense({ title: title.value, amount: amount.value })
  title.value = ''
  amount.value = 0
  emit('updated')
  emit('close')
}
</script>

<style>
</style>