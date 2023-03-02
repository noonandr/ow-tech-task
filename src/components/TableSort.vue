<template>
  <div class="table-sort">
    <TableHeader
      :titles="titles"
      @sort="sort"
      :sortColumn="sortColumn"
      :sortDirection="sortDirection"
    />
    <slot :pageData="pageData"></slot>
    <PaginationControls
      :startPage="startPage"
      :pageRange="pageRange"
      @page="page"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import TableHeader from "@/components/TableHeader.vue";
import PaginationControls from "@/components/PaginationControls.vue";

export default defineComponent({
  name: "TableSort",
  emits: ["pageData"],
  components: {
    TableHeader,
    PaginationControls,
  },
  data() {
    return {
      pageData: [],
      copy: JSON.parse(JSON.stringify(this.data)),
      sortColumn: this.column,
      currentPage: this.startPage,
      sortDirection: this.direction,
    };
  },
  props: {
    data: Array,
    titles: Array,
    column: String,
    direction: String,
    numberOfRows: {
      type: Number,
      default: 5,
    },
    startPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    sort(column) {
      if (column === this.sortColumn && this.sortDirection === "descending") {
        this.sortDirection = "";
        this.sortColumn = "";
      } else if (column === this.sortColumn) {
        this.sortDirection =
          this.sortDirection === "ascending" ? "descending" : "ascending";
        this.sortColumn = column;
      } else {
        this.sortDirection = "ascending";
        this.sortColumn = column;
      }
      this.page(this.currentPage);
    },
    sortBy() {
      return new Promise((resolve) => {
        const column = this.column;
        let data = this.copy;
        let direction = this.sortDirection;
        if (column) {
          data.sort((firstItem, secondItem) => {
            return firstItem[column] < secondItem[column]
              ? -1
              : firstItem[column] > secondItem[column]
              ? 1
              : 0;
          });

          if (direction === "descending") {
            data.reverse();
          } else if (direction === "") {
            data = this.data;
          }

          resolve(data);
        }
      });
    },
    page(page) {
      this.currentPage = page;
      this.sortBy().then((data) => {
        const filteredData = data.filter((row, index) => {
          let start = (this.currentPage - 1) * this.numberOfRows;
          let end = this.currentPage * this.numberOfRows;
          if (index >= start && index < end) return true;
        });
        this.pageData = filteredData;
        this.$emit("pageData", filteredData);
        this.$router.replace(
          {
            query: Object.assign(
              { ...this.$route.query },
              { page: this.currentPage, direction: this.sortDirection }
            ),
          },
          () => {}
        );
      });
    },
  },
  computed: {
    pageRange() {
      return Math.ceil(this.data.length / this.numberOfRows);
    },
  },
  mounted() {
    this.page(this.currentPage);
  },
});
</script>

<style scoped lang="scss"></style>
