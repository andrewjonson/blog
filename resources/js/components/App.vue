<template>
    <div class="card">
        <div class="card-header">{{ currentRouteName }}</div>
        <div class="card-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            currentRouteName() {
                return this.$route.name
            }
        },
        created() {
            if (!localStorage.getItem('appToken')) {
                window.location.replace('/')
            }
        }
    }
</script>
