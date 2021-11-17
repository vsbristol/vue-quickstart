<template>
    <div>
        <div class="bg-gray-900 opacity-20 h-full w-full fixed top-0 left-0 z-10" v-on:click="close"></div>
        <div class="bg-white w-72 h-full fixed top-0 left-0 shadow-lg z-20" id="nav">
            <ul class="text-gray-700 my-6">

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SidebarComponent",
    methods: {
        close() {
            this.$parent.menuState = false;
        }
    }
}
</script>

<style scoped>

</style>