<template>
  <div class="form">
    <div class="form-group" v-for="(item, i) in fields" :key="i">
      <the-mask
        v-if="i == 'phone'"
        type="text"
        class="form-control"
        v-model="data[i]"
        :placeholder="item"
        :mask="['(38) ### ##-##-###']"
      />
      <textarea v-else-if="i == 'text'" v-model="data[i]" class="form-control" :placeholder="item"></textarea>
      <input type="text" v-else v-model="data[i]" class="form-control" :placeholder="item">
    </div>
    <div class="form-group text-center">
      <button class="btn btn-def" :class="classBtn ? classBtn : ''" @click="send">
        <span>{{btnName}}</span>
      </button>
    </div>
    <div v-if="errors.length" class="alert alert-danger">
      <p v-for="(error, i) in errors" :key="i">{{ error }}</p>
    </div>
    <div v-if="showSuccess" class="alert alert-success">
      <p v-if="textSuccess">{{textSuccess}}</p>
      <p v-else>{{$t('mes["textSuccess"]')}}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { TheMask } from "vue-the-mask";
export default {
  components: {
    TheMask
  },

  props: ["btnName", "action", "fields", "adata", "textSuccess", "classBtn"],

  data() {
    return {
      errors: [],
      showSuccess: false,
      data: {}
    };
  },
  created() {
    for (let item in this.fields) {
      this.data[item] = "";
    }
    this.data.action = this.action;
  },
  methods: {
    isAddress(email) {
      let pattern = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      if (pattern.test(email)) {
        return true;
      }
      return false;
    },
    validate(data) {
      //   console.log(this.errors);
      //   this.errors = [];
      for (let item in data) {
        if (data[item] == "") {
          //    console.log(data);
          if (!this.errors.includes(this.$t('mes["emptyErros"]'))) {
            this.errors.push(this.$t('mes["emptyErros"]'));
          }
          break;
        }
        if (data[item].length < 10 && item == "phone") {
          if (!this.errors.includes(this.$t('mes["phoneErros"]'))) {
            this.errors.push(this.$t('mes["phoneErros"]'));
          }
        }
        if (item == "email" && !this.isAddress(data[item])) {
          if ($.inArray(this.$t('mes["emailErros"]'), this.errors) < 0) {
            this.errors.push(this.$t('mes["emailErros"]'));
          }
        }
      }

      //console.log(this.errors);

      setTimeout(() => {
        if (this.errors.length) {
          this.errors = [];
        }
      }, 4000);

      if (!this.errors.length) {
        return true;
      }
    },
    ga(action) {
      let cat = "call_back";
      let event = "Click1";
      if (action == "writeUs") {
        cat = "Write_us";
        event = "Click3";
      }

      if (action == "zapis") {
        cat = "View_object";
        event = "Click5";
      }

      if (action == "zvFlat") {
        cat = "Request";
        event = "Click6";
      }

      if (action == "zvPrice") {
        cat = "Price_drop";
        event = "Click7";
      }

      if (action == "pdfEmail") {
        cat = "Email";
        event = "Click8";
      }

      if (action == "calc") {
        cat = "Installment_plan";
        event = "Click9";
      }

      if (action == "moreModal") {
        cat = "More_info";
        event = "Click10";
      }

      //  console.log(cat, event);

      if (typeof ga == "function") {
        ga("send", "event", cat, event);
        console.log(cat, event);
      }
    },
    send() {
      if (this.adata) {
        this.data.d = this.adata;
      }
      if (this.validate(this.data)) {
        if (this.action == "adressphone") {
          if (this.getCookie("adressphone")) {
            this.errors.push(
              this.l(
                "Вы уже отправляли сегодня этот адрес",
                "Ви вже відправляли сьогодні цю адресу"
              )
            );
            setTimeout(() => {
              this.errors = [];
            }, 2000);
            return;
          }
        }

        $.post(
          this.$store.state.api,
          this.data,
          data => {
            if (data.type == "success") {
              if (this.action == "adressphone") {
                this.setCookie("adressphone", "adressphone", 1);
              }

              this.showSuccess = true;
              setTimeout(() => {
                this.showSuccess = false;
                $.fancybox.close();
                let d = this.data;
                for (let item in this.fields) {
                  d[item] = "";
                }
                this.data = d;
                $(".def-modal input").val("");
                this.ga(this.data.action);
              }, 4000);
            }
          },
          "json"
        );
      }
    }
  }
};
</script>

