export default {



  created() {

  },

  mounted(){
   // console.log(234);
  },

  computed: {
  

  },

  methods: {
    l(ru, ua) {
      if (this.$store.state.locale == 'ru') {
        return ru;
      }
      return ua;
    }
  }

}
