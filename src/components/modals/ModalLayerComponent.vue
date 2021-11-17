<template>
    <div class="bg-gray-900 opacity-30 h-full w-full fixed top-0 left-0 z-10"></div>
</template>

<script>
export default {
    name: "ModalLayerComponent"
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>