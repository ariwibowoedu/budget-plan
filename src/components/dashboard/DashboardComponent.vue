<template>
  <div class="">
    <div class="max-w-4xl mx-auto">
      <div class="bg-teal-500 rounded-b-3xl pb-3">
        <!-- header -->
        <header-dashboard class="mx-4" />
        <account-list class="mx-4" />
      </div>
      <expense-list class="mx-4" />
    </div>
  </div>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/layouts/HeaderDashboard.vue'
import AccountList from '@/components/dashboard/accounts/AccountList.vue'
import ExpenseList from '@/components/dashboard/expenses/ExpenseList.vue'
</script>

<style>
</style>