<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
      <button @click="$emit('close')" class="absolute top-2 right-3 text-gray-400 text-2xl">
        &times;
      </button>
      <h2 class="text-xl font-semibold mb-4">Confirm Delet</h2>
      <p>
        Are you sure you want to delete <strong>{{ account.name }}</strong
        >?
      </p>
      <div class="mt-4 flex justify-end gap-2">
        <button @click="$emit('close')" class="px-4 py-2 border rounded">Cancel</button>
        <button @click="handleDelete" class="px-4 py-2 bg-red-600 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAccounts } from '@/components/composables/useAccounts'

const props = defineProps({
  account: Object,
})

const emit = defineEmits(['close', 'updated'])

const { deleteAccount } = useAccounts()

const handleDelete = async () => {
  await deleteAccount(props.account.id)
  emit('updated')
  emit('close')
}
</script>
