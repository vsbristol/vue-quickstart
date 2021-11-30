import toast from "./Toast.vue";

export default {
    install(Vue) {
        Vue.component("toast", toast);
    }
};