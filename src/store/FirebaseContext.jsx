import { useContext, createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    function signUp(username, email, phone, password) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            Username: username,
            Email: email,
            Phone: phone,
        })
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        signOut(auth)
    }

    useEffect(() => {
        const onsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            onsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
            { children }
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}

export async function addProduct(name,category,price) {
    try{
        const productData = {
            Name :name,
            Category : category,
            Price : price
        };
        await addDoc(collection(db,'products'), productData);
        console.log("product added successfully!")
    } catch (eror){
        console.error("Error adding product: ", error);
        throw new Error("Error adding product to Firestore");
    }
}