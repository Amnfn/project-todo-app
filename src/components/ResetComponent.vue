<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const email = ref();
const schema = yup.object().shape({
    email: yup.string().email('This field must be a valid email').required('This field is required!'),
});
const handleSubmit = async (value) => {
    await userStore.resetPassword(value.email)
    router.push('/signIn');
};
</script>
<template>
    <div class="card task-width">
        <div class="p-5">
            <h4 class="card-title">Forgot your password?</h4>
            <p class="card-text">Please enter your e-mail and we'll send you instructions on how to reset your password.
            </p>
            <div>
            </div>
            <Form :validation-schema="schema" @submit="handleSubmit" class="d-flex flex-column">
                <div class="mb-3">
                    <Field id="input-email" name="email" type="email" placeholder="Your e-mail address" class="form-control" />
                    <ErrorMessage name="email" class="form-text text-danger" />
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" type="submit">Reset password!</button>
                </div>
            </Form>
        </div>
    </div>
</template>



