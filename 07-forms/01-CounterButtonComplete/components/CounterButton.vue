<template>
  <button @click="++localCount">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
       localCount: this.count
    }
  },

  emits: ['update:count'],

  watch: {
    count: {
      immediate: true,
      handler(newValue) {
        this.localCount = newValue;
      },
    },

    localCount: {
      handler(newValue) {
        this.$emit('update:count', newValue)
      }
    }
  }
};
</script>
