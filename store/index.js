import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      references: [
        {
          id: 'romain-gillet',
          title: 'Romain Gillet',
          subtitle: 'Directeur artistique',
          img: 'romain-gillet.png',
          url: 'https://romain-gillet.fr'
        },
        {
          id: 'quentin-bellanger',
          title: 'Quentin Bellanger',
          subtitle: 'Développeur web',
          img: 'quentin-bellanger.png',
          url: 'https://quentin-bellanger.com'
        },
        {
          id: 'quentin-bellanger',
          title: 'Quentin Bellanger',
          subtitle: 'Développeur web',
          img: 'quentin-bellanger.png',
          url: 'https://quentin-bellanger.com'
        },
        {
          id: 'quentin-bellanger',
          title: 'Quentin Bellanger',
          subtitle: 'Développeur web',
          img: 'quentin-bellanger.png',
          url: 'https://quentin-bellanger.com'
        }
      ]
    }
  })
}

export default createStore
