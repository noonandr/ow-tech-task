<template>
  <div class="pagination-controls">
    <div
      class="pagination-controls-button previous"
      :class="{ disabled: currentPage === 1 }"
      @click="changePage('previous')"
    >
      Previous
    </div>
    <div
      class="pagination-controls-button next"
      :class="{ disabled: currentPage === numberOfPages }"
      @click="changePage('next')"
    >
      Next
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationControls",
  emits: ["page"],
  data() {
    return {
      currentPage: this.startPage,
      numberOfPages: this.pageRange
    };
  },
  props: {
    startPage: Number,
    pageRange: Number
  },
  methods: {
    changePage(direction) {
      if (direction === "next" && this.currentPage !== this.numberOfPages) {
        const page = this.currentPage + 1;
        this.currentPage = page;
        this.$emit("page", page);
      } else if (direction === "previous" && this.currentPage !== 1) {
        const page = this.currentPage - 1;
        this.currentPage = page;
        this.$emit("page", page);
      }
    }
  }
};
</script>

<style scoped lang="scss">

.pagination-controls {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.pagination-controls-button {
  user-select: none;
  cursor: pointer;
}

.disabled {
  opacity: 0.2;
  cursor: default;
}
</style>
