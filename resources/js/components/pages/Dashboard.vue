<template>
    <div class="container">
        <vue-editor placeholder="Write Post...." v-model="post">
        </vue-editor><br>
        <button class="btn btn-primary" @click="onCreate">Create Post</button><hr>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            post: ''
        }
    },
    components: VueEditor,
    methods: {
        ...mapActions(['createPost', 'getPosts']),
        onCreate() {
            this.createPost(this.post)
            .then(r => {
                alert('Post Created Successfully')
            })
            .catch(e => {
                if (e.response.status === 422) {
                    alert('Please Write a Post');
                }
            })
        }
    },
    computed: mapGetters(['posts']),
    created() {
        this.getPosts()
    }
}
</script>