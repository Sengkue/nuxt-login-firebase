<!-- components/ForgotPassword.vue -->
<template>
    <div>
      <h2>Forgot Password</h2>
      <input v-model="email" placeholder="Email" />
      <button @click="resetPassword">Reset Password</button>
    </div>
  </template>
  
  <script>
  import { auth, sendPasswordResetEmail } from '~/plugins/firebase';
  
  export default {
    data() {
      return {
        email: '',
      };
    },
    methods: {
      async resetPassword() {
        try {
          await sendPasswordResetEmail(auth, this.email);
          console.log('Password reset email sent successfully');
        } catch (error) {
          console.error('Password reset error:', error.message);
        }
      },
    },
  };
  </script>
  