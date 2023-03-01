<template>
  <div class="table-head-item">
    <span v-text="title" />
    <div class="indicator" :class="[column]" v-if="enable">
      <div class="controls">
        <div class="sort-arrow sort-arrow-ascending">
          <IconComponent
            class="icon-svg sort-arrow-icon"
            :class="{ active: direction === 'ascending' }"
            icon-name="sort-arrow"
            width="12"
            viewBox="0 0 8 5"
          >
            <sort-arrow />
          </IconComponent>
        </div>
        <div class="sort-arrow-nil">
          <IconComponent
            class="icon-svg sort-nil-icon"
            icon-name="sort-nil"
            width="12"
            viewBox="0 0 8 3"
          >
            <sort-nil />
          </IconComponent>
        </div>
        <div class="sort-arrow sort-arrow-descending">
          <IconComponent
            class="icon-svg sort-arrow-icon"
            icon-name="sort-arrow"
            width="12"
            viewBox="0 0 8 5"
            :class="{ active: direction === 'descending' }"
          >
            <sort-arrow />
          </IconComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconComponent from "@/components/IconComponent.vue";
import SortArrow from "@/components/icons/SortArrow.vue";
import SortNil from "@/components/icons/SortNil.vue";

export default {
  name: "TableHeadItem",
  components: {
    IconComponent,
    SortArrow,
    SortNil,
  },
  props: {
    title: String,
    column: String,
    direction: String,
    enable: Boolean,
  },
};
</script>

<style scoped lang="scss">
.table-head-item {
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: size(1) size(2);
  border-left: 1px solid $table-border-inverted;
  cursor: pointer;
}

.indicator {
  display: flex;
  align-items: center;
}

.controls {
  display: flex;
  flex-direction: column;
}

.sort-arrow {
  display: flex;
  flex-direction: column;
}

.sort-arrow-descending {
  transform: rotate(180deg);
}

.sort-arrow-icon {
  margin-bottom: 2px;
  opacity: 0.2;

  &.active {
    opacity: 1;
  }
}

.sort-arrow-nil {
  display: flex;
  opacity: 0.2;
}
</style>
