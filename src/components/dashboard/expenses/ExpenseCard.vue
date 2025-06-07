<template>
  <div class="p-4 bg-white shadow rounded-xl">
    <div class="flex justify-between">
      <h3>{{ expense.title }}</h3>
      <div class="flex gap-2">
        <button @click="$emit('edit', expense)">Edit</button>
        <button @click="$emit('delete', expense)">Delete</button>
      </div>
    </div>
    <p class="text-lg font-bold">{{ expense.amount }}</p>
  </div>
</template>

<script setup>
defineProps({ expense: Object })
</script>

<style>
</style>