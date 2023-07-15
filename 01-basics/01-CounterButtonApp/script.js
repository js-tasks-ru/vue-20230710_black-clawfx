import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const vm = createApp({

     data() {
        return {
            counter: 0
        };
     },

     computed: {
        counterIncrementation() {
            return this.counter;
        }
     },

     methods: {
        increment() {
            this.counter++;
        }
     },

}).mount('#app');
