import Axios from "axios"

const state = {
    user: {}
}
const getters = {
    currentUser: state => state.user
}
const actions = {
    getCurrentUser({commit}) {
        Axios.get('/api/user/currentUser')
        .then(r => {
            commit('setUser', r.data)
        })
    }
}
const mutations = {
    setUser: (state, user) => state.user = user
}

export default {
    state,
    getters,
    actions,
    mutations
}