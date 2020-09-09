import Axios from "axios"

const state = {}
const getters = {}
const actions = {
    login({}, user) {
        return Axios.post('/api/login', user)
    },
    register({}, user) {
        return Axios.post('/api/register', user)
    },
    logout({}) {
        localStorage.removeItem('appToken')
        window.location.replace('/')
    }
}
const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}