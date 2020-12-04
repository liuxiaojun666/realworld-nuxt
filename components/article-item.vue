<template>
  <div class="article-preview">
    <div class="article-meta">
      <nuxt-link :to="{
        name: 'profile',
        params: {
          username: privateArticle.author.username
        }
      }">
        <img v-if="privateArticle.author.image" :src="privateArticle.author.image" />
      </nuxt-link>
      <div class="info">
        <nuxt-link :to="{
          name: 'profile',
          params: {
            username: privateArticle.author.username
          }
        }" class="author">{{ privateArticle.author.username }}</nuxt-link>
        <span class="date">{{ privateArticle.createdAt | date('MMM DD, YYYY') }}</span>
      </div>
      <button @click="onFavorive(privateArticle)" class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ 'active': privateArticle.favorited }">
        <i class="ion-heart"></i> {{ privateArticle.favoritesCount }}
      </button>
    </div>
    <nuxt-link :to="{ name: 'article', params: { slug: privateArticle.slug } }" class="preview-link">
      <h1>{{ privateArticle.title }}</h1>
      <p>{{ privateArticle.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
      <li class="tag-default tag-pill tag-outline" v-for="tag in privateArticle.tagList" :key="tag">{{ tag }}</li>
    </ul>
    </nuxt-link>
  </div>
</template>

<script>
import {
  addFavorite,
  deleteFavorite
} from '@/api'
export default {
  props: ['article'],
  data () {
    return {
      privateArticle: { ...this.article },
      favoriteDisabled: false
    }
  },
  methods: {
    async onFavorive (article) {
      if (this.favoriteDisabled) return
      this.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      this.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>