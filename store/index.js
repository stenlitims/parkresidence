export const state = () => ({
  locales: ['ru', 'ua'],
  locale: 'ru',
  mainClass: [],
  mainUrl: 'https://web.park-residence.com.ua/',
  api: 'https://web.park-residence.com.ua/api',
  actions: []
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setMainClass(state, payload) {
    state.mainClass = payload;
  },

  getActions(state, payload) {
    state.actions = payload;
  }

}

export const actions = {
  getActions({
    commit,
    state
  }) {
    $.get(state.api + '?action=actions', (data) => {
      commit('getActions', data);
    }, "json");
  }
}
