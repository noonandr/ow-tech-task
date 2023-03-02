<template>
  <div class="table-row" :class="{ 'disabled-row': hideData }">
    <span
      class="table-data table-row-cell title-number"
      :class="{ hide: hideData }"
      v-text="titleNumber"
    />
    <span
      class="table-data table-row-cell tenure"
      :class="{ hide: hideData }"
      v-text="tenure"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableRow",
  props: {
    titleNumber: String,
    tenure: String,
    hideData: {
      type: Boolean,
      default: false,
    },
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

.disabled-row {
  &:hover {
    background: none;
    cursor: pointer;
  }
}

.table-row-cell {
  flex: 1 0 50%;
  padding: size(1) size(2);
}

.hide {
  color: transparent;
  user-select: none;
  cursor: default;
}

.tenure {
  border-left: 1px solid $table-border;
}
</style>
