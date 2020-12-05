<template>
  <div>
    <form @submit.prevent="addComment(article.slug)" class="card comment-form">
      <div class="card-block">
        <textarea v-model="comment.body" required class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img v-if="article.author.image" :src="article.author.image" class="comment-author-img" />
        <button type="submit" class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
    
    <div v-for="comment in comments" :key="comment.slug" class="card">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{ name: 'profile', params: { username: comment.author.username } }" class="comment-author">
          <img v-if="comment.author.image" :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ name: 'profile', params: { username: comment.author.username } }" class="comment-author">{{ comment.author.username }}</nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMMM D, YYYY') }}</span>
        <span v-if="comment.author.username === $store.state.user.username" class="mod-options">
          <i @click="deleteComment(article.slug, comment)" class="ion-trash-a"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, addComments, deleteComments } from '@/api'
export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: [],
      comment: {
        body: ''
      }
    }
  },
  async mounted () {
    this.getComments()
  },
  methods: {
    async getComments () {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments
    },
    async addComment (slug) {
      if (this.lock) return
      this.lock = true
      if (!this.comment.body.trim()) return
      await addComments(slug, { comment: this.comment })
      this.lock = false
      this.comment.body = ''
      this.getComments()
    },
    async deleteComment (slug, comment) {
      if (comment.deleteLock) return
      comment.deleteLock = true
      await deleteComments(slug, comment.id)
      this.getComments()
    }
  }
}
</script>

<style>

</style>