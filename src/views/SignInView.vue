<script setup>
import { useUserStore } from '../stores/user';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const schema = yup.object().shape({
    email: yup.string().email('Must be a valid email').required('Please fill out this field!'),
    password: yup.string().required('Please fill out this field!'),
});
const router = useRouter();
const userStore = useUserStore();
const error = ref();
const showPassword = ref(false);
const submit = async (values) => {
    error.value = '';
    try {
        await userStore.signIn(values.email, values.password)
        router.push('/tasks')
    } catch (err) {
        error.value = err.message;
    }
};
</script>

<template>
    <div class="card task-width">
        <div class="p-5">
            <h4 class="card-title">Sign In</h4>
            <div class="alert alert-danger" role="alert" v-if="error">
                {{ error }}
            </div>
            <Form @submit="submit" :validation-schema="schema">
                <div class="mb-3">
                    
                    <Field id="input-email" name="email" type="email" placeholder="Email address" class="form-control" />
                    <ErrorMessage name="email" class="form-text text-danger" />
                </div>
                <div class="mb-3">
                    
                    <div class="input-group">
                        <Field id="input-password" name="password" :type="[showPassword ? 'text' : 'password']"
                            placeholder="Password" class="form-control" />
                        <button class="btn btn-outline-secondary inpout-group-text" @click="showPassword = !showPassword"
                            type="button">
                            <i class="fas fa-eye-slash" :class="[showPassword ? 'bi-eye-slash' : 'bi-eye']"></i>
                        </button>
                    </div>
                    <ErrorMessage name="password" class="form-text text-danger" />
                </div>
                <div class="d-flex justify-content-between">
                    <RouterLink to="/reset-password" class="link-secondary">Forgot your password?</RouterLink>
                    <button class="btn btn-primary" type="submit">Sign In</button>
                </div>
                <div class="d-flex justify-content-center">
                    <RouterLink :to="{ name: 'signUp'}"> 
                        <button  class="btn btn-primary btn-sm alert alert-warning" role="alert">
                        {{
                           "Sign In or create your own TO DO LIST APP! Click to register"
                        }}
                    </button>
                    </RouterLink>                   
                </div>                
            </Form>
        </div>
    </div>
</template>

<style>
</style>



