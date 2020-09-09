import Axios from "axios"

const state = {
    post: {},
    pagination: {}
}
const getters = {
    posts: state => state.post,
    pagination: state => state.pagination
}
const actions = {
    createPost({}, post) {
        return Axios.post('/api/post/create', {
            post: post
        })
    },
    getPosts({commit}, page_url) {
        Axios.get(page_url)
        .then(r => {
            commit('setPost', r.data)
            const pagination = {
                current_page: r.data.current_page,
                last_page: r.data.last_page,
                next_page_url: r.data.next_page_url,
                prev_page_url: r.data.prev_page_url
            }
            commit('setPagination', pagination)
        })
    },

}
const mutations = {
    setPost: (state, post) => state.post = post,
    setPagination: (state, pagination) => state.pagination = pagination
}

export default {
    state,
    getters,
    actions,
    mutations
}