<template>
    <div>
        <div class="py-4 px-4 fixed bottom-0 w-full left-0 bg-white border-t border-gray-100 text-gray-900 text-lg font-light text-center">
            This is a toast
        </div>
    </div>
</template>

<script>
export default {
    name: 'toast',
    methods: {
        onClick(event) {
            this.$emit("click", event);
        },
    }
};
</script>