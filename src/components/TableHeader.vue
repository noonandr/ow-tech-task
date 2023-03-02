<template>
  <div class="table-header">
    <TableHeadItem
      v-for="(title, index) in titles"
      :key="index"
      :class="'table-header-item-' + index"
      @click="title.column ? sort(title.column) : null"
      :title="title.title"
      :column="title.column"
      :direction="sortColumn === title.column ? sortDirection : ''"
      :enable="title.enable"
    />
  </div>
</template>

<script>
import TableHeadItem from "@/components/TableHeadItem.vue";

export default {
  name: "TableHeader",
  components: {
    TableHeadItem,
  },
  props: {
    titles: Array,
    sortColumn: String,
    sortDirection: String,
  },
  methods: {
    sort(column) {
      this.$emit("sort", column);
    },
  },
};
</script>

<style scoped lang="scss">
.table-header {
  display: flex;
  border-radius: $border-radius $border-radius 0 0;
  background: $table-header-background;
  color: $table-header-text;
}

.table-header-item-0 {
  border-left: none;
}
</style>
