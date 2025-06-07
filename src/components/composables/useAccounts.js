import { ref } from 'vue'
import { db } from '@/components/includes/firebase'
import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export function useAccounts() {
    const accounts = ref([])
    const auth = getAuth()
    const user = auth.currentUser
    const userId = user?.uid
    const loading = ref(true)
    const error = ref(null)

    // Ambil data akun
    const fetchAccounts = async () => {
        if (!userId) return
        loading.value = true
        try {
            const q = query(collection(db, 'users', userId, 'accounts'), where('userId', '==', userId))
            const querySnapshot = await getDocs(q)
            accounts.value = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    // Tambah akun baru
    const addAccount = async (name, amount) => {
        loading.value = true
        error.value = null
        try {
            await addDoc(collection(db, 'users', userId, 'accounts'), {
                userId,
                name,
                amount: Number(amount),
            })
            await fetchAccounts()
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    // Update akun
    const updateAccount = async (accountId, updatedData) => {
        const accountRef = doc(db, 'users', userId, 'accounts', accountId)
        await updateDoc(accountRef, updatedData)
        await fetchAccounts()
    }

    // Hapus akun
    const deleteAccount = async (accountId) => {
        const accountRef = doc(db, 'users', userId, 'accounts', accountId)
        await deleteDoc(accountRef)
        await fetchAccounts()
    }

    return {
        accounts,
        fetchAccounts,
        addAccount,
        updateAccount,
        deleteAccount,
    }
}
