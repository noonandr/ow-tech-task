<template>
  <div class="title-details-infomration">
    <div class="title-details-infomration-title">
      <h1
        class="title title-details-title"
        v-text="'Title: ' + information['Title Number']"
      />
      <TagPill :tag="information['Tenure']" />
    </div>
    <div class="title-details-infomration">
      <span
        class="title-details-property-address"
        v-text="information['Property Address']"
      />
    </div>
    <GoogleMap :lat="information.Y" :lng="information.X"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import TagPill from "@/components/TagPill.vue";
import GoogleMap from "@/components/GoogleMap.vue";

export default defineComponent({
  name: "TitleDetailsInfomration",
  components: {
    TagPill,
    GoogleMap
  },
  props: {
    information: Object
  }
});
</script>

<style scoped lang="scss">
.title-details-infomration {
  display: flex;
  flex: 1 0 100%;
  flex-wrap: wrap;
}

.title-details-infomration-title {
  display: flex;
  flex: 1 0 100%;
  justify-content: space-between;
  align-items: center;
  margin: size(3) 0 size(2);
}

.title-details-title {
  margin-bottom: 0;
}

.title-details-property-address {
  margin-bottom: size(3)
}
</style>
