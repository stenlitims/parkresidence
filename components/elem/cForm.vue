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
      <button class="btn btn-def" @click="send">
        <span>{{btnName}}</span>
      </button>
    </div>
    <div v-if="errors.length" class="alert alert-danger">
      <p v-for="(error, i) in errors" :key="i">{{ error }}</p>
    </div>
    <div v-if="showSuccess" class="alert alert-success">
      <p>{{$t('mes["textSuccess"]')}}</p>
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

  props: ["btnName", "action", "fields", "adata"],

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
    if (this.adata) {
      this.data.d = this.adata;
    }
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
      for (let item in data) {
        if (data[item] == "") {
          if ($.inArray(this.$t('mes["emptyErros"]'), this.errors) < 0) {
            this.errors.push(this.$t('mes["emptyErros"]'));
          }
          break;
        }
        if (data[item].length < 10 && item == "phone") {
          if ($.inArray(this.$t('mes["phoneErros"]'), this.errors) < 0) {
            this.errors.push(this.$t('mes["phoneErros"]'));
          }
        }
        if (item == "email" && !this.isAddress(data[item])) {
          if ($.inArray(this.$t('mes["emailErros"]'), this.errors) < 0) {
            this.errors.push(this.$t('mes["emailErros"]'));
          }
        }
      }

      setTimeout(() => {
        if (this.errors.length) {
          this.errors = [];
        }
      }, 4000);

      if (!this.errors.length) {
        return true;
      }
    },
    send() {
      if (this.validate(this.data)) {
        // console.log(this.data);
        $.post(
          this.$store.state.api,
          this.data,
          data => {
            if (data.type == "success") {
              this.showSuccess = true;
              setTimeout(() => {
                this.showSuccess = false;
                $.fancybox.close();
                for (let item in this.data) {
                  this.data[item] = "";
                }
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

