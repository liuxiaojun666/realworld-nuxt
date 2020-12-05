<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="updateUser">
            <fieldset>
                <fieldset class="form-group">
                  <input v-model="user.image" :disabled="formDisabled" class="form-control" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="user.username" :disabled="formDisabled" class="form-control form-control-lg" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="user.bio" :disabled="formDisabled" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="user.email" :disabled="formDisabled" class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="user.password" :disabled="formDisabled" class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
            </fieldset>
          </form>
          <hr>
          <button @click="logout" class="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { updateUser } from '@/api'
const Cookie = process.client ? require('js-cookie') : void 0
export default {
  middleware: ['authentecated'],
  name: 'settingsIndex',
  data () {
    return {
      user: { ...this.$store.state.user },
      formDisabled: false
    }
  },
  head () {
    return {
      title: `Settings - RealWorld`
    }
  },
  methods: {
    async updateUser () {
      if (this.formDisabled) return
      this.formDisabled = true
      const { data } = await updateUser({ user: this.user })
      this.$store.commit('SET_USER', data.user)
      Cookie.set('user', data.user)
      this.$router.push({ name: 'profile', params: { username: data.user.username } })
    },
    logout () {
      this.$store.commit('SET_USER', null)
      Cookie.remove('user')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>