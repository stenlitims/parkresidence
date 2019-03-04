import axios from "axios";

export const state = () => ({
  locales: ['ru', 'ua'],
  locale: 'ru',
  mainClass: [],
  mainUrl: 'https://web.park-residence.com.ua/',
  api: 'https://web.park-residence.com.ua/api',
  siteName: ' | Park Residence',
  mPhone: '(097) 513-00-01',
  mEmail: 'sale.parkresidence@gmail.com',
  actions: [],
  flats: null,
  isMobile: false,
  fav: []
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
  },

  getFlats(state, payload) {
    state.flats = payload;
  },

  setIsMobile(state, pror) {
    state.isMobile = pror;
  },
  getFav(state) {
    let temp = JSON.parse(localStorage.getItem("fav"));
    if (Array.isArray(temp)) {
      state.fav = temp;
    }
  },
  setFav(state, fav) {
    //  let temp = [];
    if (state.fav.indexOf(fav) == -1) {
      state.fav.push(fav);
    } else {
      state.fav.splice(state.fav.indexOf(fav), 1);
    }

    let temp = JSON.stringify(state.fav);
    localStorage.setItem("fav", temp);

    console.log(state.fav);

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
  },
  getFlats({
    commit,
    state
  }) {
    axios.get(state.api + '?action=getFlats').then(res => {
      commit('getFlats', res.data);
    });
  }
}
