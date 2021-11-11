import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

const defaultState = () => {
    return {
        user: null,
        clicks: 0
    }
}

export default createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: defaultState,
    mutations: {
        loginSuccess(state, user){
            state.user = user
        },
        addClick() {
            this.state.clicks++;
        },
        resetState(state) {
            Object.assign(state, defaultState())
        }
    },
    getters: {
        user: state => state.user,
        clicks: state => state.clicks,
    }
});