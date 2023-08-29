<template>
    <template v-if="Array.isArray(vnode)">
      <template v-for="(item, index) in vnode" :key="index">
        <component :is="item" />
      </template>
    </template>
    <template v-else>
      <component :is="vnode" />
    </template>
</template>

<script>
import { isVNode } from 'vue';

export default {
  name: 'VNode',

  props: {
    vnode: {
      type: [Object, Array],
      required: true,
      validator: (value) => (Array.isArray(value) ? value.every((item) => isVNode(item)) : isVNode(value)),
    },
  },
};
</script>