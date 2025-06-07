<template>
  <header class="flex justify-between items-center mb-2 relative">
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <div class="flex gap-4 items-center">
      <h1 class="hidden md:block text-xl font-semibold">Hi, {{ userData?.name || 'User' }}</h1>
      <button
        @click="toggleDropDownUser"
        class="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center"
      >
        <FeatherIcon classes="h-8 2-8" icon="user" />
      </button>
    </div>
    <user-profile v-if="dropDownOpen" @close="dropDownOpen = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import FeatherIcon from '@/components/utils/featherIcon/FeatherIcon.vue'
import { useUserData } from '@/components/composables/useUser'
import UserProfile from '@/components/auth/UserProfile.vue'

const { userData } = useUserData()

const dropDownOpen = ref(false)

const toggleDropDownUser = () => {
  dropDownOpen.value = !dropDownOpen.value
}
</script>
