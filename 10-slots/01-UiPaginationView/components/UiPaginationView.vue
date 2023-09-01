<template>
  <div class="pagination-container">
    <!-- Контент страницы -->
     <slot :item="item" v-for="item in itemsOnCurrentPage" :per-page="perPage" :page="page"/>
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    // Вычисляемое свойство для определения элементов текущей страницы
    itemsOnCurrentPage() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },
  },
};
</script>

<style></style>
