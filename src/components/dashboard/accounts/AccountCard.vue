<template>
  <div class="p-4 bg-white shadow-lg rounded-xl hover:shadow-md">
    <div class="flex justify-between items-center gap-2 mb-2">
      <h3 text-gray-700>{{ account.name }}</h3>
      <div class="flex gap-2">
        <button @click="$emit('edit', account)" class="text-gray-500">
          <FeatherIcon classes="w-4 h-4" icon="edit-3" />
        </button>
        <button @click="$emit('delete', account)" class="text-red-500 hover:text-red-800">
          <FeatherIcon classes="w-4 h-4" icon="trash-2" />
        </button>
      </div>
    </div>
    <p class="text-2xl md:text-3xl font-extrabold">{{ formatCurrency(account.amount) }}</p>
  </div>
</template>

<script setup>
import FeatherIcon from '@/components/utils/featherIcon/FeatherIcon.vue'
import { formatCurrency } from '@/components/utils/formatCurrency'
defineProps({ account: Object })
</script>

<style>
</style>