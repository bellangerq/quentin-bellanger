import Vuex from 'vuex'
import fetchContent from '../api'

export default function() {
  return new Vuex.Store({
    state: {
      locale: 'en',
      content: {}
    },

    mutations: {
      setContent (state, content) {
        state.content = content
      }
    },

    actions: {
      fetchContent ({ state, commit }) {
        return fetchContent(state.locale)
          .then(content => commit('setContent', content))
      }
    }
  })
}
