<template>
  <ModalComp :show="true" title="Delete Account" @close="$emit('close')">
    <p>
      Are you sure you want to delete <strong>{{ account.name }}</strong
      >?
    </p>
    <div class="mt-4 flex justify-end gap-2">
      <button @click="$emit('close')" class="px-4 py-2 border rounded">Cancel</button>
      <button @click="handleDelete" class="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
    </div>
  </ModalComp>
</template>

<script setup>
import ModalComp from '@/components/shared/ModalComp.vue'
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
