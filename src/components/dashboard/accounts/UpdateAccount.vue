<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl relative">
      <button @click="$emit('close')" class="absolute top-2 right-3 text-gray-400 text-2xl">
        &times;
      </button>
      <h1 class="text-2xl font-bold mb-4">Update Account</h1>
      <form @submit.prevent="handleUpdate" class="space-y-2">
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
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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

