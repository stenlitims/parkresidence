import axios from "axios";

export const state = () => ({
  locales: ['ru', 'ua'],
  locale: 'ru',
  mainClass: [],
  mainUrl: 'https://web.park-residence.com.ua/',
  api: 'https://web.park-residence.com.ua/api',
  siteName: ' | Park Residence',
  mPhone: '(097) 513-00-01',
  mEmail: 'sale@park-residence.com.ua',
  actions: [],
  flats: null,
  commerce: null,
  floorplans: null,
  parking: null,
  plans_floorplans: null,
  floors: null,
  buildings: null,
  sections: null,
  isMobile: false,
  mapUrl: "https://goo.gl/maps/aHCfyfCMoyv",
  op: {
    phone: '(097) 513-00-01',
  },
  galPlan: {},
  fav: [],
  fillQ: null,
  soc: {
    telegram: "http://t.me/Park_Residence_bot",
    facebook_mes: "https://m.me/park.residence.com.ua/",
    facebook: "https://www.facebook.com/park.residence.com.ua",
    instagram: "https://www.instagram.com/park.residence.kyiv/",
  }
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

  getCommerce(state, payload) {
    state.commerce = payload;
  },

  getParking(state, payload) {
    state.parking = payload;
  },

  getOptions(state, payload) {
    state.op = payload;
  },

  getFloorplans(state, payload) {
    state.floorplans = payload.floorplans;
    state.plans_floorplans = payload.plans_floorplans;
    state.floors = payload.floors;
    state.buildings = payload.buildings;
    state.sections = payload.sections;
  },

  setfillQ(state, payload) {
    // console.log(payload);
    state.fillQ = payload;
  },


  getGalPlan(state, payload) {
    let temp = {
      ...state.galPlan
    };
    temp[payload.op.building + payload.op.section + payload.op.type] = payload.data;
    state.galPlan = temp;
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

    //  console.log(state.fav);

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
  },
  getCommerce({
    commit,
    state
  }) {
    axios.get(state.api + '?action=getComm').then(res => {
      commit('getCommerce', res.data);
    });
  },
  getParking({
    commit,
    state
  }) {
    axios.get(state.api + '?action=getPark').then(res => {
      commit('getParking', res.data);
    });
  },
  getOptions({
    commit,
    state
  }) {
    axios.get(state.api + '?action=getOptions').then(res => {
      commit('getOptions', res.data);
    });
  },
  getFloorplans({
    commit,
    state
  }) {
    axios.get(state.api + '?action=getFloorplans').then(res => {
      commit('getFloorplans', res.data);
    });
  },
  getGalPlan({
    commit,
    state
  }, op) {
    // console.log(op);
    axios.get(state.api + '?action=getPlanGal&type=' + op.type + '&building=' + op.building + '&section=' + op.section).then(res => {
      // console.log(res.data);
      if (Array.isArray(res.data)) {
        commit('getGalPlan', {
          data: res.data,
          op
        });
      }
    });
  }
}
