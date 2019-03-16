export default {



  created() {

  },

  mounted() {
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
    },

    loadFancy() {
      $(".js-modal").fancybox({
        animationDuration: 300,
        animationEffect: "material",
        arrows: false,
        touch: false
        // baseClass: "b-close"
      });
    },

    loadFullGal() {
      $(".list-hod").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        navText: ["", ""],
        autoplaySpeed: 1000,
        navSpeed: 1000
        //  autoHeight: true
      });
    },

    loadResGal() {
      $(".js-list").owlCarousel({
        loop: false,
        margin: 32,
        nav: true,
        dots: false,
        items: 2,
        // autoplay: true,
        navText: [],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          567: {
            items: 2,
            margin: 16,
          },
          991: {
            items: 3,
          },
          1200: {
            items: 4,
          }
        }
      });
    }

  },
  filters: {
    Price(number, decimals, dec_point, thousands_sep) {
      number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
      var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === "undefined" ? " " : thousands_sep,
        dec = typeof dec_point === "undefined" ? "." : dec_point,
        s = "",
        toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return "" + (Math.round(n * k) / k).toFixed(prec);
        };
      s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
      }
      return s.join(dec);
    },
    // ( 2, ['МЕСЯЦ', 'МЕСЯЦА', 'МЕСЯЦЕВ']  )
    Declension(num, expressions) {
      var result;
      var count = num % 100;
      if (count >= 5 && count <= 20) {
        result = expressions["2"];
      } else {
        count = count % 10;
        if (count == 1) {
          result = expressions["0"];
        } else if (count >= 2 && count <= 4) {
          result = expressions["1"];
        } else {
          result = expressions["2"];
        }
      }
      return result;
    }
  }

}
