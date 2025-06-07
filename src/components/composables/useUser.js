import { ref, onMounted } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/components/includes/firebase'
import { getAuth } from 'firebase/auth'


export function useUserData() {
    const userData = ref(null)
    const auth = getAuth()

    const fetchUserData = async () => {
        const currentUser = auth.currentUser
        if (!currentUser) return

        const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
        if (userDoc.exists()) {
            userData.value = userDoc.data()
        }
    }

    onMounted(() => {
        fetchUserData()
    })

    return { userData }
}