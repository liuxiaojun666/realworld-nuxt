<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
            <nuxt-link v-if="isCurrentUser" :to="{ name: 'settings' }" class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
            <button @click="followProfiles" v-else class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ user.following ? 'Unfollow' : 'Follow'}} {{ user.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link class="nav-link" exact :to="{ name: 'profile', params: { username: this.username } }">My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" exact :to="{ name: 'favorites', params: { username: this.username } }">Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <article-item v-for="article in articles" :key="article.slug" :article="article"></article-item>

          <ul v-if="totalPage > 1" class="pagination">
            <li class="page-item" :class="{'active': item === page}" v-for="item in totalPage" :key="item">
              <a class="page-link" href="" @click.prevent="getArticles({page: item})">{{item}}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { getUserProfiles, addProfiles, deleteProfiles, getArticles } from '@/api'
import articleItem from '../../components/article-item.vue'
export default {
  components: { articleItem },
  middleware: ['authentecated'],
  name: 'profileIndex',
  props: ['username'],
  async asyncData ({ store, params }) {
    const result = {
      totalPage: 0,
      page: 1
    }
    if (params.username === store.state.user.username) {
      result.isCurrentUser = true
      result.user = { ...store.state.user }
    } else {
      const { data } = await getUserProfiles(params.username)
      result.isCurrentUser = false
      result.user = data.profile
    }
    result.articles = []
    return result
  },
  head () {
    return {
      title: `${this.username} - RealWorld`
    }
  },
  methods: {
    async followProfiles () {
      if (this.flag) return
      this.flag = true
      const { data } = await (this.user.following ? deleteProfiles : addProfiles)(this.user.username)
      this.user = data.profile
      this.flag = false
    },
    async getArticles (params = { page: 1 }) {
      const reqData = {
        [this.$route.name === 'favorites' ? 'favorited' : 'author']: this.username,
        limit: 5,
        ...params
      }
      reqData.offset = (reqData.page - 1) * reqData.limit
      const { data } = await getArticles(reqData)
      this.articles = data.articles
      this.totalPage = Math.ceil(data.articlesCount / reqData.limit)
      this.page = reqData.page
    }
  },
  mounted () {
    this.getArticles()
  },
  watch: {
    '$route.name' (val, oldValue) {
      if (val === oldValue) return
      this.getArticles()
    }
  }
}
</script>

<style>

</style>