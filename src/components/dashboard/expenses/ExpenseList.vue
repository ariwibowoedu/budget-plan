<template>
  <div>
    <h2 class="text-xl font-bold">Expenses</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ExpenseCard
        v-for="expense in expenses"
        :key="expense"
        :expense="expense"
        @edit="selectEdit"
        @delete="selectDelete"
      />
      <button @click="showAdd = true">+ add</button>
    </div>

    <AddExpense v-if="showAdd" @close="showAdd = false" @updated="fetchExpenses" />
    <UpdateExpense
      v-if="editExpense"
      :expense="editExpense"
      @close="editExpense = null"
      @updated="fetchExpenses"
    />
    <DeleteExpense
      v-if="deleteExpense"
      :expense="deleteExpense"
      @close="deleteExpense = null"
      @updated="fetchExpenses"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useExpenses } from '@/components/composables/useExpenses'
import AddExpense from '@/components/dashboard/expenses/AddExpense.vue'
import UpdateExpense from '@/components/dashboard/expenses/UpdateExpense.vue'
import DeleteExpense from '@/components/dashboard/expenses/DeleteExpense.vue'
import ExpenseCard from '@/components/dashboard/expenses/ExpenseCard.vue'

const showAdd = ref(false)
const editExpense = ref(null)
const deleteExpense = ref(null)

const { expenses, fetchExpenses } = useExpenses()

onMounted(() => {
  fetchExpenses()
})

const selectEdit = (expense) => {
  editExpense.value = expense
}

const selectDelete = (expense) => {
  deleteExpense.value = expense
}
</script>

<style>
</style>