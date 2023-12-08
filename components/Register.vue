<!-- components/Register.vue -->
<template>
    <div>
      <h2>Register</h2>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="register">Register</button>
    </div>
  </template>
  
  <script>
  import { auth } from '~/plugins/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log('User registered successfully');
        } catch (error) {
          console.error(error.message);
        }
      },
    },
  };
  </script>
  