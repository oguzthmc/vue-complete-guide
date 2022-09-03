const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      isShowList: true,
    };
  },
  computed: {
    handleCaptionButton() {
      return this.isShowList ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    toggleTaskVisibility() {
      this.isShowList = !this.isShowList;
    }
  },
});

app.mount('#assignment');