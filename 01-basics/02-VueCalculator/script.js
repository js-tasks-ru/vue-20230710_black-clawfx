import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const vm = createApp({

    data() {
       return {
           firstInputNumber: 0,
           secondInputNumber: 0,
           radioOperator: ''
       };
    },

    computed: {
        result() {
            let outputtedNumber;

            switch(this.radioOperator) {
                case "sum":
                  return outputtedNumber = this.firstInputNumber + this.secondInputNumber;
                case "subtract":
                    return outputtedNumber = this.firstInputNumber - this.secondInputNumber;
                case "multiply":
                    return outputtedNumber = this.firstInputNumber * this.secondInputNumber;
                case "divide":
                    return outputtedNumber = this.firstInputNumber / this.secondInputNumber;
              }

            return outputtedNumber;
        }
    },


}).mount('#app');
