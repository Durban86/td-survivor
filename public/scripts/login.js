import { auth } from '../src/firebaseConfig.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "pick.html";
    } catch (error) {
    document.getElementById("loginError").textContent = "Login failed.";
    }
});

document.getElementById("googleLogin").addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        window.location.href = "pick.html";
    } catch (error) {
    document.getElementById("loginError").textContent = "Google sign-in failed.";
    }
});