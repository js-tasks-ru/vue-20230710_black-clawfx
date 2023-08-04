import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  emits: ['update:count'],

  methods: {
    increaseCount() {
       this.$emit('update:count', this.count + 1);
    }
  },

  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button" @click="increaseCount">{{ count }}</button>`,
});
