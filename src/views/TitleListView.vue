<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { mapGetters } from "vuex";
import { useStore } from "vuex";

import TableHeadItem from "../components/TableHeadItem.vue";
import TableHeader from "../components/TableHeader.vue";
import TableSort from "../components/TableSort.vue";
import TableRow from "../components/TableRow.vue";

const store = useStore();
const route = useRoute()
const titles = computed(() => {
  return store.getters.titles;
});
const page = computed(() => {
  return Number.parseInt(route.query.page);
});
const direction = computed(() => {
  return route.query.direction;
});
onMounted(() => {
  store.dispatch("GetTitleData");
});
</script>

<template>
  <main class="title-list-view">
    <h1 class="title title-list-view-title ">
      OW Titles
    </h1>
    <TableSort
      :titles="[{ title: 'Title Number', column: 'titleNumber', enable: true }, { title: 'Class of Title', column: 'classOfTitle', enable: false }]"
      column="Title Number"
      :startPage="page"
      :direction="direction"
      :data="titles"
      v-if="titles.length"
    >
      <template v-slot="props">
        <div class="payments-array">
          <div
            class="payment"
            v-for="(entry, index) in props.pageData"
            :key="index"
          >
            <TableRow :titleNumber="entry['Title Number']" :tenure="entry.Tenure" />
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
  padding: size(4);
}

.title-list-view-title {
  flex: 1 0 100%;
}

.table-sort {
  flex: 0 1 600px;
}
</style>
