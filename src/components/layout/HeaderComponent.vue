<template>
    <div>
        <header class="w-full text-white bg-primary py-2 px-4 mb-8">
            <div class="flex">
                <div>
                    <button class="mr-4 p-1 rounded hover:bg-primary-hover" v-on:click="(!menuState) ? menuState = true : menuState = false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="p-1">
                    <h1 class="capitalize">{{ (title) ? title : $route.name }}</h1>
                </div>
                <div class="flex-1 text-right justify-end">
                    <div>
                        <button class="ml-4 px-2 h-8 pb-1 rounded hover:bg-primary-hover" v-on:click="(showUserMenu) ? showUserMenu = false : showUserMenu = true;">
                            <span class="inline relative" style="top: 2px">{{ $store.getters.user.name }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div v-if="showUserMenu" class="absolute shadow-lg bg-white text-gray-700 right-2 w-48">
                            <ul>
                                <li v-on:click="logout()" class="py-2 px-4 cursor-pointer hover:bg-gray-50">Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <sidebar-component v-if="menuState"></sidebar-component>
    </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent";

export default {
    name: "HeaderComponent",
    components: {SidebarComponent},
    data: function() {
        return {
            menuState: false,
            user: [],
            showUserMenu: false,
        }
    },
    methods: {
        logout() {
            this.$store.commit('resetState');
            this.$router.push({name: 'Login'});
        }
    }
}
</script>

<style scoped>

</style>