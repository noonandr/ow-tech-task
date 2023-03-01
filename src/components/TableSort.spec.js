import { mount } from "@vue/test-utils";
import TableHeader from "@/components/TableHeader.vue";
import { expect, describe, it } from "vitest";
let tableSort;

describe("TableHeader", () => {
  tableSort = mount(TableHeader);
  it("should show valid data when data is valid", async () => {
    await tableSort.setProps({
      titles: [
        { title: "Title Number", column: "titleNumber", enable: true },
        { title: "Class of Title", column: "classOfTitle", enable: false },
      ],
      sortColumn: "titleNumber",
      sortDirection: "ascending",
    });
    expect(TableHeader).toBeTruthy();
    expect(tableSort.text()).toContain("Title Number");
    expect(tableSort.text()).toContain("Class of Title");
    const titleNumberIndicator = tableSort.find("div.titleNumber");
    expect(titleNumberIndicator.exists()).toBe(true);
    const classOfTitleIndicator = tableSort.find("div.classOfTitle");
    expect(classOfTitleIndicator.exists()).toBe(false);
  });
});
