<script setup>
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const signOut = () => {
  userStore.signOut();
  router.push('/');
};
</script>

<template>
  <nav class="navbar contrast-primary-background-color">
    <div class="container-fluid">
      <div>
        <RouterLink to="/" class="navbar-brand"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="logo" height="80"> <a href="" class="nav-link">Home Task</a> </RouterLink>
      </div>
      <div>
        <div v-if="!userStore.user">
          <RouterLink to="/signin" class="btn btn-primary me-2">Sign In</RouterLink>
          <RouterLink to="/signup" class="btn btn-primary">Sign Up</RouterLink>
        </div>
        <div v-else>
          <button class="btn btn-primary" @click="signOut">Sign Out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

