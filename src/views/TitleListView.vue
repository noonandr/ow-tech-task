<script>
import { mapGetters } from "vuex";

import TableHeadItem from "../components/TableHeadItem.vue";
import TableHeader from "../components/TableHeader.vue";
import TableSort from "../components/TableSort.vue";
import TableRow from "../components/TableRow.vue";

export default {
  name: "TitleListView",
  components: {
    TableHeadItem,
    TableHeader,
    TableSort,
    TableRow
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
      const numberofRows = this.titles.length;
      const divider = 5;
      const remainder = numberofRows % divider;
      return !remainder ? divider - numberofRows : divider - remainder;
    }
  },
  mounted() {
    this.$store.dispatch("GetTitleData");
  }
};
</script>

<template>
  <main class="title-list-view">
    <h1 class="title title-list-view-title ">
      OW Titles
    </h1>
    <TableSort
      :titles="[
        { title: 'Title Number', column: 'titleNumber', enable: true },
        { title: 'Class of Title', column: 'classOfTitle', enable: false }
      ]"
      column="Title Number"
      :startPage="page"
      :direction="direction"
      :data="titles"
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
                params: { id: entry['Title Number'] }
              }"
            >
              <TableRow
              :titleNumber="entry['Title Number']"
              :tenure="entry.Tenure"
            />
            </router-link>
          </div>
        </div>
        <div class="ow-titles-array">
          <div
            class="ow-title"
            v-for="extra in missingRows"
            :key="extra"
            v-if="page === totalPages"
          >
            <TableRow
              titleNumber="Empty"
              tenure="Empty"
              :hideData="true"
            />
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
  flex: 0 1 600px;
}
</style>
