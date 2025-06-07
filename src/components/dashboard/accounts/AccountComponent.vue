<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-lg font-semibold my-4">Source funds</h2>
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
      <SkeletonCard v-for="n in 3" :key="n" />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
      <div v-for="acc in accounts" :key="acc" class="w-full bg-white rounded-xl shadow-md p-6">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-gray-900">{{ acc.name }}</h2>
          <div class="flex items-center gap-2">
            <button
              v-if="editingId !== acc.id"
              @click="startEdit(acc)"
              class="text-sm text-gray-400"
            >
              <feather-icon classes="w-4 h-4" icon="edit-3" />
            </button>
            <button @click="confirmDelete(acc)" class="text-sm text-red-600">
              <feather-icon classes="w-4 h-4" icon="trash-2" />
            </button>
          </div>
        </div>
        <p class="text-3xl font-extrabold mt-2 text-gray-900">
          {{ formatCurrency(acc.amount) }}
        </p>
      </div>
      <!-- add button -->

      <button @click="toggleModal">
        <div
          class="flex flex-col justify-center items-center bg-white hover:bg-green-200 rounded-xl shadow-md p-6 transition duration-200"
        >
          <div
            class="w-10 h-10 rounded-full border border-green-500 text-green-500 flex items-center justify-center"
          >
            <feather-icon classess="w-6 h-6" icon="plus" />
          </div>
          <h2 class="text-xl text-black">Add Account</h2>
        </div>
      </button>
    </div>
  </div>
  <!-- modal add -->
  <AddAccount v-if="showModal" @close="toggleModal" @updated="refreshAccount" />
  <!-- modal update -->
  <UpdateAccount
    v-if="editingAccount"
    :account="editingAccount"
    @close="editingAccount = null"
    @updated="refreshAccount"
  />
  <!-- modal delete -->
  <DeleteAccount
    v-if="deletingAccount"
    :account="deletingAccount"
    @close="deletingAccount = null"
    @updated="refreshAccount"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccounts } from '@/components/composables/useAccounts'
import { formatCurrency } from '@/components/utils/formatCurrency'
import FeatherIcon from '@/components/utils/featherIcon/FeatherIcon.vue'
import AddAccount from '@/components/dashboard/accounts/addAccount.vue'
import UpdateAccount from '@/components/dashboard/accounts/UpdateAccount.vue'
import DeleteAccount from '@/components/dashboard/accounts/DeleteAccount.vue'
import SkeletonCard from '@/components/dashboard/accounts/SkeletonCard.vue'

const showModal = ref(false)
const editingAccount = ref(false)
const deletingAccount = ref(null)

const editingId = ref(null)

const { accounts, fetchAccounts, loading } = useAccounts()

const confirmDelete = (acc) => {
  deletingAccount.value = acc
}

const startEdit = (acc) => {
  editingAccount.value = acc
}

const toggleModal = () => {
  showModal.value = !showModal.value
}

const refreshAccount = async () => {
  await fetchAccounts()
}

onMounted(() => {
  fetchAccounts()
})
</script> 
