<template>
  <div v-if="loading" class="text-center mt-10">
    <LoaderDot />
    <p class="text-center mt-2">Loading</p>
  </div>
  <div v-else>
    <AuthComponent v-if="!user" />
    <dashboard-component v-else />
  </div>
</template>


<script setup>
import LoaderDot from '@/components/partials/LoaderDot.vue'
import AuthComponent from '@/components/auth/AuthComponent.vue'
import DashboardComponent from '@/components/dashboard/DashboardComponent.vue'
import { useAuth } from '@/components/composables/useAuth'

const { loading, user } = useAuth()
</script>