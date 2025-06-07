<template>
  <div class="p-6">
    <div class="max-w-4xl mx-auto">
      <!-- header -->
      <header-dashboard />
      <account-component />
      <expense-list />
    </div>
  </div>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/layouts/HeaderDashboard.vue'
import AccountComponent from '@/components/dashboard/accounts/AccountComponent.vue'
import ExpenseList from '@/components/dashboard/expenses/ExpenseList.vue'
</script>

<style>
</style>
  components: { AccountComponent },