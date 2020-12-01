const cookieparser = process.server ? require('cookieparser') : void 0

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let user = null

    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (error) {
        
      }
      commit('SET_USER', user)
    }
  }
}
