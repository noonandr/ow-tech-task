<template>
  <div class="table-row">
    <span class="title-number" v-text="titleNumber" />
    <span class="tenure" v-text="tenure" />
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
  flex-direction: column;
  color: #3b3b3b;
}
</style>
