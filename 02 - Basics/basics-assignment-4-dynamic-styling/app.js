const app = Vue.createApp({
  data() {
    return {
      specificClass: '',
      isVisibleParagraph: true,
      specificBgColor: ''
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.specificClass === 'user1',
        user2: this.specificClass === 'user2',
        visible: this.isVisibleParagraph,
        hidden: !this.isVisibleParagraph,
      };
    }
  },
  methods: {
    toggleParagraphVisibility() {
      this.isVisibleParagraph = !this.isVisibleParagraph;
    },
  },
});

app.mount('#assignment');