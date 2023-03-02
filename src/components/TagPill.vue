<template>
  <div class="tag-pill" v-text="tag" :class="tagClass" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TagPill",
  props: {
    tag: String,
  },
  computed: {
    tagClass() {
      return this.tag ? this.tag.toLowerCase() : null;
    },
  },
});
</script>

<style scoped lang="scss">
.tag-pill {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  background: $deactive;
  border-radius: 20px;
}

.freehold {
  background: $freehold;
  color: $text-inverted;
}

.leasehold {
  background: $leasehold;
  color: $text-inverted;
}
</style>
