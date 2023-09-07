<template>
  <slot name="pending" v-if="status === 'pending'"></slot>
    <slot v-else-if="status === 'fulfilled'" name="fulfilled" :result="result"></slot>
    <slot v-else-if="status === 'rejected'" name="rejected" :error="error"></slot>
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
      status: 'pending',
      result: null,
      error: null,
    };
  },

  watch: {
    promise: {
      handler(newPromise) {
        this.status = 'pending';
        this.result = null;
        this.error = null;

        newPromise
          .then((result) => {
            this.status = 'fulfilled';
            this.result = result;
          })
          .catch((error) => {
            this.status = 'rejected';
            this.error = error;
          });
      },
      immediate: true,
    },
  },
};
</script>
