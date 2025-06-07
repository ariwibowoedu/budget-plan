<template>
  <div class="my-4">
    <h2 class="text-xl font-bold my-4">Expenses</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ExpenseCard
        v-for="expense in expenses"
        :key="expense"
        :expense="expense"
        @edit="selectEdit"
        @delete="selectDelete"
      />
      <button @click="showAdd = true">
        <div
          class="flex flex-col justify-center items-center bg-white hover:bg-green-200 rounded-xl shadow-md p-6 transition duration-200"
        >
          <div
            class="w-10 h-10 rounded-full border border-green-500 text-green-500 flex items-center justify-center"
          >
            <feather-icon classess="w-6 h-6" icon="plus" />
          </div>
          <h2 class="text-xl text-black">Add Expense</h2>
        </div>
      </button>
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
import FeatherIcon from '@/components/utils/featherIcon/FeatherIcon.vue'
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