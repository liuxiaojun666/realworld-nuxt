<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="$store.state.user" class="nav-item">
                <nuxt-link class="nav-link" exact :to="{
                  name: 'home',
                  query: { tab: 'your_feed' }
                }">Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ 'active': tab !== 'your_feed' && !tag }" exact
                  :to="{
                    name: 'home',
                    query: { tab: 'global_feed' }
                  }"
                >Global Feed</nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <span class="nav-link active disabled">#{{ tag }}</span>
              </li>
            </ul>
          </div>

          <div v-for="item in articles" :key="item.slug" class="article-preview">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: item.author.username
                }
              }">
                <img v-if="item.author.image" :src="item.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: item.author.username
                  }
                }" class="author">{{ item.author.username }}</nuxt-link>
                <span class="date">{{ item.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button @click="onFavorive(item)" class="btn btn-outline-primary btn-sm pull-xs-right" :class="{ 'active': item.favorited }">
                <i class="ion-heart"></i> {{ item.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="{ name: 'article', params: { slug: item.slug } }" class="preview-link">
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <ul class="pagination">
            <li class="page-item" :class="{'active': item === page}" v-for="item in totalPage" :key="item">
              <nuxt-link class="page-link" :to="{
                name: 'home',
                query: { page: item, tag, tab }
              }">{{item}}</nuxt-link>
            </li>
          </ul>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div v-for="item in tags" :key="item" class="tag-list">
              <nuxt-link :to="{
                name: 'home',
                query: { tag: item }
              }" class="tag-pill tag-default">{{item}}</nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {
  getArticles,
  getTags,
  getFeedArticles,
  addFavorite,
  deleteFavorite
} from '@/api'
export default {
  name: 'HomeIndex',
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData ({ query, store }) {
    const limit = 20
    const page = +(query.page) || 1
    const { tab = 'global_feed', tag } = query
    const [tagsData, articalData] = await Promise.all([
      getTags(),
      ((tab === 'your_feed' && store.state.user) ? getFeedArticles : getArticles)({ limit, offset: (page - 1) * limit, tag })
    ])
    console.log(tagsData, articalData)
    const { articles, articlesCount } = articalData.data
    return {
      articles,
      articlesCount,
      limit,
      page,
      tab,
      tag,
      tags: tagsData.data.tags
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorive (article) {
      if (article.favoriteDisabled) return
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>