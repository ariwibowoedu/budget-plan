<template>
  <ModalComp :show="true" title="Add New Account" @close="$emit('close')">
    <BaseForm :submit-label="'save'" @submit="handleSubmit" @cancel="cancel">
      <template #fields>
        <div class="block mb-1">
          <label class="block mb-1 font-medium">Name</label>
          <input
            type="text"
            v-model="name"
            class="w-full border rounded p-2"
            placeholder="ex:BCA Debit"
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
  </ModalComp>
</template>

<script setup>
import { ref } from 'vue'
import ModalComp from '@/components/shared/ModalComp.vue'
import BaseForm from '@/components/shared/BaseForm.vue'
import { useAccounts } from '@/components/composables/useAccounts'

const name = ref('')
const amount = ref('')

const { addAccount } = useAccounts()

const emit = defineEmits(['close', 'updated'])

const handleSubmit = async () => {
  if (!name.value || !amount.value) return
  await addAccount(name.value, amount.value)
  name.value = ''
  amount.value = 0
  emit('updated')
  emit('close')
}
</script>

