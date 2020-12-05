import { request } from '@/plugins/request'

// 登录
export const login = data => request({ url: '/api/users/login', method: 'POST', data })
// 注册
export const register = data => request({ url: '/api/users', method: 'POST', data })
// 更新用户信息
export const updateUser = data => request({ url: '/api/user', method: 'PUT', data })
// 获取用户简介
export const getUserProfiles = username => request({ url: `/api/profiles/${username}`, method: 'GET' })
// 添加关注
export const addProfiles = username => request({ url: `/api/profiles/${username}/follow`, method: 'POST' })
// 取消关注
export const deleteProfiles = username => request({ url: `/api/profiles/${username}/follow`, method: 'DELETE' })


// 文章tags
export const getTags = params => request({ method: 'GET', url: '/api/tags', params })


// 创建文章
export const createArticle = data => request({ method: 'POST', url: '/api/articles', data })
// 更新文章
export const updateArticle = data => request({ method: 'PUT', url: `/api/articles/${data.slug}`, data })
// 获取文章
export const getArticle = slug => request({ method: 'GET', url: `/api/articles/${slug}` })
// 删除文章
export const deleteArticle = slug => request({ method: 'DELETE', url: `/api/articles/${slug}` })
// 文章列表
export const getArticles = params => request({ method: 'GET', url: '/api/articles', params })


// 用户关注的文章列表
export const getFeedArticles = params => request({ method: 'GET', url: '/api/articles/feed', params })
// 文章点赞
export const addFavorite = slug => request({ method: 'POST', url: `/api/articles/${slug}/favorite` })
// 文章取消点赞
export const deleteFavorite = slug => request({ method: 'DELETE', url: `/api/articles/${slug}/favorite` })


// 获取文章评论
export const getComments = slug => request({ method: 'GET', url: `/api/articles/${slug}/comments` })
// 添加文章评论
export const addComments = (slug, data) => request({ method: 'POST', url: `/api/articles/${slug}/comments`, data })
// 删除文章评论
export const deleteComments = (slug, id) => request({ method: 'DELETE', url: `/api/articles/${slug}/comments/${id}` })