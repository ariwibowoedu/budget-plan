import { ref } from 'vue'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/components/includes/firebase'
import { useAuth } from '@/components/composables/useAuth'

export const useExpenses = () => {
    const { user } = useAuth()
    const expenses = ref([])

    const fetchExpenses = async () => {
        const colRef = collection(db, 'users', user.value.uid, 'expenses')
        const snap = await getDocs(colRef)
        expenses.value = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }

    const addExpense = async (data) => {
        const colRef = collection(db, 'users', user.value.uid, 'expenses')
        await addDoc(colRef, data)
        await fetchExpenses()
    }

    const updateExpense = async (id, data) => {
        const docRef = doc(db, 'users', user.value.uid, 'expenses', id)
        await updateDoc(docRef, data)
        await fetchExpenses()
    }

    const deleteExpense = async (id) => {
        const docRef = doc(db, 'users', user.value.uid, 'expenses', id)
        await deleteDoc(docRef)
        await fetchExpenses()
    }

    return { expenses, fetchExpenses, addExpense, updateExpense, deleteExpense }
}