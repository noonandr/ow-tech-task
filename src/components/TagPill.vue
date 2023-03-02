<template>
  <div class="labels tag-pill" v-text="tag" :class="tagClass" />
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
  height: size(5);
  padding: 0 size(2.5);
  background: $deactive;
  border-radius: size(2.5);
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
