<template>
    <form method="POST" @submit.prevent="onLogin">
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>

            <div class="col-md-6">
                <input id="email" type="text" class="form-control" :class="{'is-invalid': errors.email}" v-model="user.email">
                <span class="invalid-feedback" v-if="errors.email" role="alert">
                    <strong>{{ errors.email[0] }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

            <div class="col-md-6">
                <input id="password" type="password" v-model="user.password" class="form-control" :class="{'is-invalid': errors.password}">
                <span class="invalid-feedback" v-if="errors.password" role="alert">
                    <strong>{{ errors.password[0] }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-6 offset-md-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember">

                    <label class="form-check-label" for="remember">
                        Remember me
                    </label>
                </div>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        ...mapActions(['login']),
        onLogin() {
            this.login(this.user)
            .then(r => {
                if (r.data.message) {
                    alert(r.data.message)
                } else {
                    localStorage.setItem('appToken', r.data.appToken)
                    window.location.replace('/dashboard')
                }
            })
            .catch(e => {
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                }
            })
        }
    }
}
</script>

<style>

</style>