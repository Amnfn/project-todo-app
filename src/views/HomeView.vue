<script setup>

import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.js';

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
console.log('p', user.value);

</script>

<template>
    <div class="task-width homepage">
        <h3>Welcome to To-do List</h3>
        <div class="mask-custom">
        
            <h5>Create tasks fast and easily</h5>
            <p>Input tasks, subtasks and repeating task.</p>

            <h5>Task Reminders</h5>
            <p>Set reminders, and never miss important things.</p>

            <h5>Personalized Widgets</h5>
            <p>Clear at first glance.</p>

            <h5>Custom Themes</h5>
            <p>Choose the theme you like and start your wonderful day.</p>

            <RouterLink :to="{ name: 'signIn'}">
                <button class="button-home">CONTINUE <i class="bi bi-arrow-right"></i> </button>
            </RouterLink> 

        </div>      
    </div>
</template>

<style>
</style>