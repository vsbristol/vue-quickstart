<template>
    <div>
        <div class="pt-12 pb-6 text-center">
            <h1 class="text-4xl mb-2">Login</h1>
        </div>
        <div class="w-96 mx-auto">
            <form v-on:submit.prevent="tryAuth">
                <div>
                    <label class="w-full" for="email">Email Address</label>
                    <input class="w-full bg-gray-100 py-2 px-4 mt-2 mb-6 text-lg" type="email" id="email" v-model="email">
                </div>
                <div>
                    <label class="w-full" for="password">Password</label>
                    <input class="w-full bg-gray-100 py-2 px-4 mt-2 mb-6 text-lg" type="password" id="password" v-model="password">
                </div>
                <div>
                    <button class="w-full bg-green-400 py-2 px-4 text-lg text-white font-semibold">Login</button>
                </div>
            </form>
        </div>
        <div v-if="error" class="text-center mt-6">
            <p class="text-red-500">{{ message }}</p>
        </div>
        <div class="text-center mt-6">
            <p class="text-blue-500"><router-link to="/">Back to Home</router-link></p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            apiUrl: process.env.VUE_APP_API_URL,
            error: false,
            errorMessage: null,
        }
    },
    methods: {
        tryAuth() {
            let self = this;
            let data = {
                email: this.email,
                password: this.password
            }
            let url = this.apiUrl + 'auth/login';
            axios.post(url, data)
                .then(function(response) {
                    // check the status code for unauthorized and set error message.
                    // The interceptor handles all 401 errors, but here we want to also show the error message.
                    if(response.data.status_code === 401) {
                        return self.showError(response.data.message)
                    }
                    // store the access token
                    self.$store.commit('loginSuccess', response.data.access_token);
                    return self.getUser();
                }).catch(function() {});
        },
        getUser() {
            let self = this;
            let url = this.apiUrl + '/me';
            axios.get(url)
                .then(function(response) {
                    // No need to handle any 401 errors
                    return self.$store.commit('setUser', response.data.data);
                }).catch(function() {});
        },
        showError(message) {
            this.error = true;
            this.errorMessage = message;
        }
    }
}
</script>

<style scoped>

</style>