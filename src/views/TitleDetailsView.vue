<script>
import { mapGetters } from "vuex";

import ToastMessage from "@/components/ToastMessage.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import AppButton from "@/components/AppButton.vue";
import TitleDetailsInfomration from "@/components/TitleDetailsInfomration.vue";

export default {
  name: "TitleListView",
  components: {
    ToastMessage,
    LoadingAnimation,
    AppButton,
    TitleDetailsInfomration,
  },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  computed: {
    ...mapGetters(["titles"]),
    id() {
      return this.$route.params.id;
    },
    information() {
      const id = this.$route.params.id;
      const results = this.titles.find((item) => item["Title Number"] === id);
      return results;
    },
  },
  mounted() {
    if (this.titles.length === 0) {
      this.loading = true;
    }
    this.$store
      .dispatch("GetTitleData")
      .then(() => {
        this.loading = false;
        this.eror = null;
      })
      .catch((error) => {
        this.error = error.message;
        this.loading = false;
      });
  },
};
</script>

<template>
  <main class="title-details-view">
    <div class="title-details-view-title">
      <router-link :to="{ name: 'title-list' }">
        <AppButton> Back </AppButton>
      </router-link>
    </div>
    <ToastMessage type="error" :message="error" v-if="error" />
    <LoadingAnimation v-if="loading" />
    <TitleDetailsInfomration
      :information="information"
      v-if="!loading && titles.length > 0"
    />
  </main>
</template>

<style scoped lang="scss">
.title-details-view {
  display: flex;
  flex: 0 1 size(100);
  justify-content: center;
  flex-wrap: wrap;
  padding: size(4) size(2);
}

@media screen and (min-width: $screen-medium) {
  .title-details-view {
    padding: size(4);
  }
}

.title-details-view-title {
  flex: 1 0 100%;
  margin-bottom: size(3);
}
</style>
