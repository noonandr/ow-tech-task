<template>
  <div class="pagination-controls">
    <div
      class="pagination-controls-button previous"
      :class="{ disabled: currentPage === 1 }"
      @click="changePage('previous')"
    >
      <div class="progress-arrow-previous">
        <IconComponent
          class="icon-svg progress-arrow"
          icon-name="progress-arrow"
          width="6"
          viewBox="0 0 6 12"
        >
          <progress-arrow />
        </IconComponent>
      </div>
      Previous
    </div>
    <div
      class="pagination-controls-button next"
      :class="{ disabled: currentPage === numberOfPages }"
      @click="changePage('next')"
    >
      Next
      <div class="progress-arrow-next">
        <IconComponent
          class="icon-svg progress-arrow"
          icon-name="progress-arrow"
          width="6"
          viewBox="0 0 6 12"
        >
          <progress-arrow/>
        </IconComponent>
      </div>
    </div>
  </div>
</template>

<script>
import IconComponent from "@/components/IconComponent.vue";
import ProgressArrow from "@/components/icons/ProgressArrow.vue";

export default {
  name: "PaginationControls",
  emits: ["page"],
  components: {
    IconComponent,
    ProgressArrow
  },
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
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.progress-arrow-previous {
  padding: size(1) size(2);
  transform: rotateY(180deg);
}

.progress-arrow-next {
  padding: size(1) size(2);
}

.disabled {
  opacity: 0.2;
  cursor: default;
}
</style>
