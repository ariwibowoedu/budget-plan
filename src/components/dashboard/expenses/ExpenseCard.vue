<template>
  <div class="p-4 bg-white shadow-lg rounded-xl hover:shadow-md">
    <div class="flex justify-between items-center gap-2 mb-2">
      <h3 text-gray-900>{{ expense.title }}</h3>
      <div class="flex gap-2">
        <button @click="$emit('edit', expense)" class="text-gray-500">
          <FeatherIcon classes="w-4 h-4" icon="edit-3" />
        </button>
        <button @click="$emit('delete', expense)" class="text-red-500 hover:text-red-800">
          <FeatherIcon classes="w-4 h-4" icon="trash-2" />
        </button>
      </div>
    </div>
    <p class="text-3xl font-bold">{{ formatCurrency(expense.amount) }}</p>
  </div>
</template>

<script setup>
import FeatherIcon from '@/components/utils/featherIcon/FeatherIcon.vue'
import { formatCurrency } from '@/components/utils/formatCurrency'
defineProps({ expense: Object })
</script>

<style>
</style>