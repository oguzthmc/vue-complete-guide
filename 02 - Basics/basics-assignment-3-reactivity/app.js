const app = Vue.createApp({
  data() {
    return {
      result: 0,
      message: ''
    };
  },
  methods: {
    add(number) {
      this.result += number;
    }
  },
  watch: {
    result(value) {
      const that = this;
      if (value > 37) {
        that.message = 'Too much!';
        setTimeout(() => {
          that.result = 0;
          that.message = '';
        }, 5000);
      } else if (value > 0 && value <= 37) {
        that.message = 'Not there yet';
      } else {
        return;
      }
    }
  }
});

app.mount('#assignment');