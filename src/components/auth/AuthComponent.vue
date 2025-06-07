<template>
  <div class="max-w-sm mx-auto mt-10 p-6 bg-white rounded-shadow">
    <component :is="authModeComponent" />
    <p class="text-sm text-center mt-4">
      <span v-if="authMode === 'login'">
        Don't have account?
        <button @click="authMode = 'register'" class="text-blue-500 underline">Register</button>
      </span>
      <span v-else>
        Already have an account?
        <button @click="authMode = 'login'" class="text-blue-500 underline">Login</button>
      </span>
    </p>
  </div>
</template>

<script setup>
import LoginComponent from '@/components/auth/LoginComponent.vue'
import RegisterComponent from '@/components/auth/RegisterComponent.vue'
import { computed, ref } from 'vue'

const authMode = ref('login')

const authModeComponent = computed(() => {
  return authMode.value === 'login' ? LoginComponent : RegisterComponent
})
</script>
