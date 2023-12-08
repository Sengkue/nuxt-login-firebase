<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);

        // Access the user and token if needed
        const user = userCredential.user;
        const token = await user.getIdToken();

        console.log('User logged in successfully:', user);
        console.log('User token:', token);

        // Set the token in cookies using cookie-universal-nuxt
        this.$cookies.set('auth_token', token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // Example: set the cookie to expire in 7 days
        });

        // Redirect to the dashboard or any other route upon successful login
        this.$router.push('/register');
      } catch (error) {
        console.error('Login error:', error.message);
      }
    },
  },
};
</script>
