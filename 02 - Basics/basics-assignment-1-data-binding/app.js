const app = Vue.createApp({
  data() {
    return {
      myName: 'Oguzhan Tohumcu',
      myAge: 29,
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Some_like_it_hot_film_poster.jpg'
    };
  },
  methods: {
    getMyAgeInFiveYears() {
      return this.myAge + 5;
    },
    getFavNumber() {
      return Math.random();
    }
  },
});

app.mount('#assignment');