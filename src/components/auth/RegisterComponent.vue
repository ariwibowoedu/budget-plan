<template>
  <div class="mt-4">
    <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>
    <form @submit.prevent="handleRegister">
      <input
        type="text"
        v-model="form.name"
        placeholder="Name"
        class="w-full p-2 border rounded mb-4"
        required
      />
      <input
        type="email"
        v-model="form.email"
        placeholder="Email"
        class="w-full p-2 border rounded mb-4"
        required
      />
      <input
        type="password"
        v-model="form.password"
        placeholder="Password"
        class="w-full p-2 border rounded mb-4"
        required
      />
      <button
        :disabled="loading"
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {{ loading ? 'Registering' : 'Register' }}
      </button>
      <p v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </p>
    </form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useAuth } from '@/components/composables/useAuth'

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const { register, error, loading } = useAuth()

const handleRegister = async () => {
  await register(form)
}
</script>
