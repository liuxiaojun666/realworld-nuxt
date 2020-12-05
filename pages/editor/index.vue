<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="submit">
            <fieldset>
              <fieldset class="form-group">
                  <input v-model="article.title" type="text" class="form-control form-control-lg" required placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input v-model="article.description" type="text" class="form-control" required placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                  <textarea v-model="article.body" class="form-control" rows="8" required placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input @keydown.enter.prevent="addTag" v-model="tag" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <div class="tag-list">
                <span v-for="(tag, index) in article.tagList" :key="tag" class="tag-default tag-pill">
                  <i class="ion-close-round" @click="removeTag(index)"></i>{{tag}}
                </span>
              </div>
              <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, updateArticle, getArticle } from '@/api'
export default {
  name: 'EditorIndex',
  middleware: ['authentecated'],
  props: ['slug'],
  async asyncData ({ params }) {
    const resultData = {
      tag: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
    if (params.slug) {
      const { data } = await getArticle(params.slug)
      resultData.article = data.article
    }
    return resultData
  },
  methods: {
    addTag () {
      const tag = this.tag.trim()
      if (this.article.tagList.includes(tag)) return
      this.article.tagList.push(tag);
      this.tag = '';
    },
    removeTag (index) {
      this.article.tagList.splice(index, 1)
    },
    async submit () {
      if (this.lock) return
      this.lock = true
      await (this.slug ? updateArticle : createArticle)({ article: this.article, slug: this.slug })
      this.$router.push({ name: 'profile', params: { username: this.$store.state.user.username } })
    }
  }
}
</script>

<style>

</style>