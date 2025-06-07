<template>
  <div class="absolute right-4 top-12 mt-2 2-40 bg-white border-gray-200 rounded-lg shadow-lg z-50">
    <button
      class="block w-full text-left text-lg px-4 py-2 rounde-lg text-gray-700 hover:bg-blue-300 rounded-lg transition duration-300"
    >
      Profile
    </button>
    <button
      class="block w-full text-left text-lg px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 transition duration-300"
      @click="toggleModal"
    >
      Logout
    </button>
  </div>
  <logout-component v-if="showModal" @cancel="toggleModal" />
</template>

<script setup>
import LogoutComponent from '@/components/auth/LogoutComponent.vue'
import { ref } from 'vue'

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
// import { useAuth } from '@/components/composables/useAuth'

// const { logout } = useAuth()

// const handleLogout = () => {
//   const confirmed = window.confirm('Are you sure want to logout')
//   if (confirmed) {
//     logout()
//   }
// }
</script>

<style>
</style>