<script>
import { h, isVNode, Fragment } from 'vue';

export default {
  name: 'VNode',

  props: {
    vnode: {
      type: [Object, Array],
      required: true,
      validator: (value) => (Array.isArray(value) ? value.every((item) => isVNode(item)) : isVNode(value)),
    },
  },

  render() {
    if (Array.isArray(this.vnode)) {
      return h(Fragment, this.vnode.map(item => h(item)));
    } else {
      return h(this.vnode);
    }
  }
};
</script>