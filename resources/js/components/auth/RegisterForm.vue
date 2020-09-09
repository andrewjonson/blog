<template>
    <form @submit.prevent="onRegister">
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">Full Name</label>

            <div class="col-md-6">
                <input id="name" type="text" class="form-control" :class="{'is-invalid': errors.name}" v-model="user.name">
                <span class="invalid-feedback" v-if="errors.name" role="alert">
                    <strong>{{ errors.name[0] }}</strong>
                </span>
            </div>
        </div>

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
                <input type="password" v-model="user.password" class="form-control" :class="{'is-invalid': errors.password}">
                <span class="invalid-feedback" v-if="errors.password" role="alert">
                    <strong>{{ errors.password[0] }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row">
            <label for="password_confirmation" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

            <div class="col-md-6">
                <input type="password" v-model="user.password_confirmation" class="form-control" :class="{'is-invalid': errors.password_confirmation}">
                <span class="invalid-feedback" v-if="errors.password_confirmation" role="alert">
                    <strong>{{ errors.password_confirmation[0] }}</strong>
                </span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    Register
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
                name: '',
                email: '',
                password: ''
            },
            errors: []
        }
    },
    methods: {
        ...mapActions(['register']),
        onRegister() {
            this.register(this.user)
            .then(r => {
                localStorage.setItem('appToken', r.data.authToken)
                window.location.replace('/home')
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