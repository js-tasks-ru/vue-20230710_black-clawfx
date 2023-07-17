import { createApp } from './vendor/vue.esm-browser.js';

// Требуется создать Vue приложение


const vm = createApp({

  data() {
     return {
      inputs: [],
      inputId: null,
      meetupData: null,
     };
  },

  mounted() {
    this.fetchMeetupById()
  },

  methods: {

     async fetchMeetupById(meetupId) {
      this.meetupData = null;
      const API_URL = 'https://course-vue.javascript.ru/api';
      const res = await fetch(`${API_URL}/meetups/${meetupId}`);
      this.meetupData = await res.json();
    }

  },

  watch: {
    inputId(newValue) {
        this.fetchMeetupById(newValue);
    }
  }
  

}).mount('#app');
