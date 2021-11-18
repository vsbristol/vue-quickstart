<template>
    <div>
        <div class="bg-white w-72 h-full fixed top-0 left-0 shadow-lg z-20" id="nav">
            <div class="my-12 text-center">
                <svg class="w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
                <h1 class="font-bold text-xl">Vue.js Quickstart</h1>
            </div>
            <ul class="text-gray-700">

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SidebarComponent",
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all .3s ease-in-out;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>