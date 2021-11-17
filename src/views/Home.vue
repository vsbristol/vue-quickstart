<template>
    <div>
        <div class="text-right">
            <p class="py-1 px-4 hover:text-blue-500"><router-link to="/login">Login</router-link></p>
        </div>
        <div class="pt-12 pb-6">
            <svg class="w-36 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
        </div>
        <div class="text-center">
            <h1 class="text-3xl">Vue.js Quickstart</h1>
            <p>by <a class="text-blue-500" target="_blank" href="https://github.com/Dillonsmart/vue-quickstart">Dillon Smart</a></p>
        </div>
        <div class="w-36 pt-8 mx-auto">
            <div class="flex">
                <div class="flex-1 text-center">
                    <a class="hover:text-blue-500" target="_blank" href="https://twitter.com/dillon_smart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mx-auto w-8 h-8 bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a>
                </div>
                <div class="flex-1 text-center">
                    <a class="hover:text-blue-500" target="_blank" href="https://github.com/Dillonsmart/vue-quickstart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-auto w-8 h-8 bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="w-4/7 mx-auto mt-6 py-8 px-16">
            <h2 class="text-2xl mb-4">About</h2>
            <p class="mb-2"><span class="font-bold">Vue.js Quickstart</span> comes with routing and state management out the box. Below is an example of state management with persisted state.</p>
            <p>Click the button a number of times, then reload the page. Click clear to reset the state.</p>
            <div class="text-center mt-4">
                <button @click="clicked" class="mx-auto bg-primary rounded py-2 px-8 text-white">Total clicks: {{clicks}}</button>
            </div>
            <div class="text-center mt-4">
                <button @click="clear" class="text-blue-500">Clear State</button>
            </div>
        </div>

        <div class="w-4/7 mx-auto mt-6 py-8 px-16">
            <h2 class="text-2xl mb-4">Formatting Dates</h2>
            <p>For information about date formats, see <a class="text-blue-500" target="_blank" href="https://momentjs.com/docs/#/parsing/string-format/">moment.js docs.</a></p>
            <section class="mt-4">
                <p class="mb-2">First import the desired method.</p>
                <pre class="p-4 rounded bg-gray-100 text-sm">import {formatDate} from "../helpers/dates";</pre>
            </section>
            <section class="mt-4">
                <p class="mb-2">Next, create the computed method</p>
                <pre class="p-4 rounded bg-gray-100 text-sm">computed: {
    now() {
        return formatDate('Do MMM YY, HH:mma', new Date())
    }
}</pre>
            </section>
            <section class="mt-4">
                <p class="mb-2">Finally, call the computed method in the template</p>
                <pre class="p-4 rounded bg-gray-100 text-sm">&lcub;&lcub; now &rcub;&rcub;</pre>
            </section>
            <p class="my-2 font-bold">Result</p>
            <p class="my-2">{{ now }}</p>
        </div>
        <div class="w-4/7 mx-auto py-8 px-16">
            <h2 class="text-2xl mb-4">Modals</h2>
            <p>For bounce modals we use 2 separate components and 2 separate transitions, one to bounce the modal in, and one to add a translucent layer behind.</p>
            <div class="mt-4 text-center">
                <button v-on:click="showModal = true" class="mx-auto bg-primary rounded py-2 px-8 text-white">Open</button>
            </div>
            <transition name="bounce" mode="out-in">
                <example-modal-component v-if="showModal" @close="closeModal" class="h-full w-full fixed top-0 left-0 z-20"></example-modal-component>
            </transition>
            <transition name="fade" mode="out-in">
                <modal-layer-component v-if="showModal"></modal-layer-component>
            </transition>
        </div>

    </div>
</template>

<script>
import {formatDate} from "../helpers/dates";
import ExampleModalComponent from "../components/modals/ExampleModalComponent";
import ModalLayerComponent from "../components/modals/ModalLayerComponent";

export default {
    name: "Home",
    components: {ModalLayerComponent, ExampleModalComponent},
    data() {
        return {
            clicks: this.$store.getters.clicks,
            showModal: false,
        }
    },
    computed: {
        now() {
            return formatDate('Do MMM YY, HH:mma', new Date())
        }
    },
    methods: {
        clicked() {
            this.$store.commit('addClick');
            return this.setClicks();
        },
        clear() {
            this.$store.commit('resetState', this.$store);
            return this.setClicks();
        },
        setClicks() {
            this.clicks = this.$store.getters.clicks; // Many getting the state store each time isn't the best idea?
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>

<style scoped>

</style>