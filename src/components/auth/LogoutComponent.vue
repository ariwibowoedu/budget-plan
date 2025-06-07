<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-60">
    <div class="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Confirm Logout</h2>
      <p class="text-sm text-gray-600 mb-6">Are you sure want to logout?</p>
      <div class="flex justify-end gap-3">
        <button
          @click="$emit('cancel')"
          class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/components/composables/useAuth'

const emit = defineEmits(['cancel', 'updated'])
const { logout } = useAuth()
const handleLogout = async () => {
  await logout()
  emit('updated')
}
</script>