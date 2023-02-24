<template>
  <div class="table-row">
    <span class="table-row-cell title-number" v-text="titleNumber" />
    <span class="table-row-cell tenure" v-text="tenure" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableRow",
  props: {
    titleNumber: String,
    tenure: String,
  },
});
</script>

<style scoped lang="scss">
.table-row {
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  background: $table-background;
  border: 1px $table-border;
  border-style: none solid solid solid;

  &:hover {
    background: $table-row-hover;
    cursor: pointer;
  }
}

.table-row-cell {
  flex: 1 0 50%;
  padding: size(1) size(2);
}

.tenure {
  border-left: 1px solid $table-border;
}
</style>
