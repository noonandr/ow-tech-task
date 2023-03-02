<script>
import { mapGetters } from "vuex";

import ToastMessage from "@/components/ToastMessage.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import TableSort from "@/components/TableSort.vue";
import TableRow from "@/components/TableRow.vue";

export default {
  name: "TitleListView",
  components: {
    ToastMessage,
    LoadingAnimation,
    TableSort,
    TableRow,
  },
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  computed: {
    ...mapGetters(["titles"]),
    page() {
      return Number.parseInt(this.$route.query.page) || 1;
    },
    totalPages() {
      return Math.ceil(this.titles.length / 5);
    },
    direction() {
      return this.$route.query.direction;
    },
    missingRows() {
      // Calculate missing rows so that table is always five rows height
      const numberofRows = this.titles.length;
      const divider = 5;
      const remainder = numberofRows % divider;
      return !remainder ? divider - numberofRows : divider - remainder;
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
  <main class="title-list-view">
    <h1 class="title title-list-view-title">OW Titles</h1>
    <ToastMessage type="error" :message="error" v-if="error" />
    <LoadingAnimation v-if="loading" />
    <TableSort
      :titles="[
        { title: 'Title Number', column: 'titleNumber', enable: true },
        { title: 'Class of Title', column: 'classOfTitle', enable: false },
      ]"
      column="Title Number"
      :startPage="page"
      :direction="direction"
      :data="titles"
      v-if="titles.length"
    >
      <template v-slot="props">
        <div class="ow-titles-array">
          <div
            class="ow-title"
            v-for="(entry, index) in props.pageData"
            :key="index"
          >
            <router-link
              :to="{
                name: 'title-details',
                params: { id: entry['Title Number'] },
              }"
            >
              <TableRow
                :titleNumber="entry['Title Number']"
                :tenure="entry.Tenure"
              />
            </router-link>
          </div>
        </div>
        <div class="ow-titles-array" v-if="page === totalPages">
          <div class="ow-title" v-for="extra in missingRows" :key="extra">
            <TableRow titleNumber="Empty" tenure="Empty" :hideData="true" />
          </div>
        </div>
      </template>
    </TableSort>
  </main>
</template>

<style scoped lang="scss">
.title-list-view {
  display: flex;
  flex: 0 1 size(100);
  justify-content: center;
  flex-wrap: wrap;
  padding: size(4) size(2);
}

@media screen and (min-width: $screen-medium) {
  .title-list-view {
    padding: size(4);
  }
}

.title-list-view-title {
  flex: 1 0 100%;
}

.table-sort {
  flex: 0 1 size(75);
}
</style>
