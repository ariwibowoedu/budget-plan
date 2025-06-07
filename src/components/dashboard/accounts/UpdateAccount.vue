<template>
  <ModalComp :show="true" title="Update Account" @close="$emit('close')">
    <BaseForm :submit-label="'Save'" @submit="handleUpdate" @cancel="cancel">
      <template #fields>
        <div class="block mb-1">
          <label class="block mb-1 font-medium">Name</label>
          <input
            type="text"
            v-model="name"
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
  </ModalComp>
</template>

<script setup>
import { ref } from 'vue'
import ModalComp from '@/components/shared/ModalComp.vue'
import BaseForm from '@/components/shared/BaseForm.vue'
import { useAccounts } from '@/components/composables/useAccounts'

const props = defineProps({
  account: Object,
})

const name = ref(props.account.name || '')
const amount = ref(props.account.amount || 0)

const { updateAccount } = useAccounts()

const emit = defineEmits(['close', 'updated'])

const handleUpdate = async () => {
  await updateAccount(props.account.id, {
    name: name.value,
    amount: parseFloat(amount.value),
  })
  emit('updated')
  emit('close')
}
</script>

