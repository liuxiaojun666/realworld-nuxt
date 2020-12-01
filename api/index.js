import { request } from '@/plugins/request'

// 登录
export const login = data => request({ url: '/api/users/login', method: 'POST', data })
// 注册
export const register = data => request({ url: '/api/users', method: 'POST', data })
// 文章列表
export const getArticles = params => request({ method: 'GET', url: '/api/articles', params })
// 用户关注的文章列表
export const getFeedArticles = params => request({ method: 'GET', url: '/api/articles/feed', params })
// 文章tags
export const getTags = params => request({ method: 'GET', url: '/api/tags', params })
// 文章点赞
export const addFavorite = slug => request({ method: 'POST', url: `/api/articles/${slug}/favorite` })
// 文章取消点赞
export const deleteFavorite = slug => request({ method: 'DELETE', url: `/api/articles/${slug}/favorite` })
// 获取文章详情
export const getArticle = slug => request({ method: 'get', url: `/api/articles/${slug}` })
// 获取文章评论
export const getComments = slug => request({ method: 'get', url: `/api/articles/${slug}/comments` })