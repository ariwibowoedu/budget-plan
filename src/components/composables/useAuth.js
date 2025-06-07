// src/composables/useAuth.js
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/components/includes/firebase'

const auth = getAuth()


const user = ref(null)
const loading = ref(true);
const error = ref(null);
let isInitialized = false


const init = () => {
    if (isInitialized) return
    isInitialized = true

    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser
        loading.value = false
    })
}

const register = async ({ email, password, name }) => {
    error.value = null;
    loading.value = true;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;

        await setDoc(doc(db, 'users', uid), {
            uid,
            email,
            name,
            createdAt: serverTimestamp(),
        });

        loading.value = false;
        return uid;
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

const login = async ({ email, password }) => {
    error.value = null
    loading.value = true

    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

const logout = async () => {
    await signOut(auth)
}


export const useAuth = () => {
    init()
    return { user, register, login, error, loading, logout };
}
