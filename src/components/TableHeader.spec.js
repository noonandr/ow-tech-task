import { mount, shallowMount } from "@vue/test-utils";
import TableHeader from "@/components/TableHeader.vue";
import { vi, expect, describe, it } from "vitest";
let tableHeader;

function createConfig(overrides) {
  const propsData = {};
  return Object.assign({ propsData }, overrides);
}

describe("TableHeader", () => {
  tableHeader = mount(TableHeader);
  it("should show valid data when data is valid", async () => {
    await tableHeader.setProps({
      titles: [
        { title: "Title Number", column: "titleNumber", enable: true },
        { title: "Class of Title", column: "classOfTitle", enable: false },
      ],
      sortColumn: "titleNumber",
      sortDirection: "ascending",
    });
    expect(TableHeader).toBeTruthy();
    expect(tableHeader.text()).toContain("Title Number");
    expect(tableHeader.text()).toContain("Class of Title");
    const titleNumberIndicator = tableHeader.find("div.titleNumber");
    expect(titleNumberIndicator.exists()).toBe(true);
    const classOfTitleIndicator = tableHeader.find("div.classOfTitle");
    expect(classOfTitleIndicator.exists()).toBe(false);
  });

  it("should emit the sort event when header clicked", async () => {
    const config = createConfig({
      propsData: {
        titles: [
          { title: "Title Number", column: "titleNumber", enable: true },
          { title: "Class of Title", column: "classOfTitle", enable: false },
        ],
        sortColumn: "titleNumber",
        sortDirection: "ascending",
      },
    });
    tableHeader = shallowMount(TableHeader, config);
    tableHeader.vm.$nextTick();
    const confirmSpy = vi.spyOn(tableHeader.vm, "sort");
    await tableHeader.find(".table-header-item-0").trigger("click");
    expect(confirmSpy).toBeCalled();
    expect(tableHeader.emitted().sort).toBeTruthy();
    await tableHeader.find(".table-header-item-1").trigger("click");
    expect(confirmSpy).toBeCalled();
    expect(tableHeader.emitted().sort).toBeTruthy();
  });
});
