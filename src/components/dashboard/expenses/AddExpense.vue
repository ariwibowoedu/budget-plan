<template>
  <ModalComp title="Add Account" :show="true" @close="$emit('close')">
    <BaseForm :submit-label="'Save'" @submit="handleSubmit" @cancel="cancel">
      <template #fields>
        <input type="text" v-model="title" placeholder="Title" class="border p-2 w-full rounded" />
        <input
          type="number"
          v-model.number="amount"
          placeholder="Amount"
          class="border p-2 w-full rounded mt-2"
        />
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
  emit('updated')
  emit('close')
}
</script>

<style>
</style>