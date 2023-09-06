<template>
  <slot name="pending" v-if="isPending"></slot>
    <slot v-else-if="isFulfilled" name="fulfilled" :result="result"></slot>
    <slot v-else-if="isRejected" name="rejected" :error="error"></slot>
</template>

<script>
export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },

  data() {
    return {
      isPending: true,
      isFulfilled: false,
      isRejected: false,
      result: null,
      error: null,
    };
  },

  watch: {
    promise: {
      handler(newPromise) {
        this.isPending = true;
        this.isFulfilled = false;
        this.isRejected = false;
        this.result = null;
        this.error = null;

        newPromise
          .then((result) => {
            this.isPending = false;
            this.isFulfilled = true;
            this.result = result;
          })
          .catch((error) => {
            this.isPending = false;
            this.isRejected = true;
            this.error = error;
          });
      },
      immediate: true,
    },
  },
};
</script>
