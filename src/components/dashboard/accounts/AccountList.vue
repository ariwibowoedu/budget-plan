<template>
  <div class="mb-8">
    <h2 class="text-xl text-gray-100 font-bold my-4">Source Funds</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <AccountCard
        v-for="account in accounts"
        :key="account"
        :account="account"
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
          <h2 class="text-xl text-black">Add Account</h2>
        </div>
      </button>
    </div>

    <AddAccount v-if="showAdd" @close="showAdd = false" @updated="fetchAccounts" />
    <UpdateAccount
      v-if="editAccount"
      :account="editAccount"
      @close="editAccount = null"
      @updated="fetchAccounts"
    />
    <DeleteAccount
      v-if="deleteAccount"
      :account="deleteAccount"
      @close="deleteAccount = null"
      @updated="fetchAccounts"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAccounts } from '@/components/composables/useAccounts'
import FeatherIcon from '@/components/utils/featherIcon/FeatherIcon.vue'
import AddAccount from '@/components/dashboard/accounts/addAccount.vue'
import UpdateAccount from '@/components/dashboard/accounts/UpdateAccount.vue'
import DeleteAccount from '@/components/dashboard/accounts/DeleteAccount.vue'
import AccountCard from '@/components/dashboard/accounts/AccountCard.vue'

const showAdd = ref(false)
const editAccount = ref(null)
const deleteAccount = ref(null)

const { fetchAccounts, accounts } = useAccounts()

onMounted(() => {
  fetchAccounts()
})

const selectEdit = (account) => {
  editAccount.value = account
}

const selectDelete = (account) => {
  deleteAccount.value = account
}
</script>

<style>
</style>