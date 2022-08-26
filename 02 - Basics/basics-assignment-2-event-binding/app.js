const app = Vue.createApp({
  data() {
    return {
      alertText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      userInput: '',
      confirmValue: '',
      userInputPressingEnter: '',
      confirmEnteredValue: ''
    };
  },
  methods: {
    showAlert() {
      alert(this.alertText);
    },
    setUserInput(event) {
      this.userInput = event.target.value;
    },
    confirmUserInput() {
      this.confirmValue = this.userInput;
    },
    setUserInputPressingEnter(event) {
      this.userInputPressingEnter = event.target.value;
    },
    confirmUserInputPressingEnter() {
      this.confirmEnteredValue = this.userInputPressingEnter;
    }
  },
});

app.mount('#assignment');