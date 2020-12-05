<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge. </p>
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

          <article-item v-for="article in articles" :key="article.slug" :article="article"></article-item>

          <ul v-if="totalPage > 1" class="pagination">
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

            <div class="tag-list">
              <nuxt-link 
               v-for="item in tags"
               :key="item"
               :to="{
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
  getFeedArticles
} from '@/api'
import articleItem from '../../components/article-item.vue'
export default {
  components: { articleItem },
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
    const { articles, articlesCount } = articalData.data
    const tags = tagsData.data.tags
    return {
      articles,
      articlesCount,
      limit,
      page,
      tab,
      tag,
      tags
    }
  },
  head () {
    return {
      title: `Home - RealWorld`
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  }
}
</script>

<style>

</style>