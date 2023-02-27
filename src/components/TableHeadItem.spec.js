import { mount, shallowMount } from "@vue/test-utils";
import TableHeadItem from "../components/TableHeadItem.vue";
import { expect, describe, it } from "vitest";
let tableHeadItem;

function createConfig(overrides) {
  const propsData = {}
  return Object.assign({ propsData }, overrides)
}

describe("TableHeadItem", () => {
  tableHeadItem = mount(TableHeadItem);
  it("should show valid data when data is valid", async () => {
    await tableHeadItem.setProps({
      title: "Title Number",
      column: "titleNumber",
      direction: "ascending",
      enable: true
    })
    expect(TableHeadItem).toBeTruthy();
    expect(tableHeadItem.vm.title).toBe("Title Number");
    expect(tableHeadItem.vm.column).toBe("titleNumber");
    expect(tableHeadItem.vm.direction).toBe("ascending");
    expect(tableHeadItem.text()).toContain("Title Number");
    const indicator = tableHeadItem.find("div.indicator");
    expect(indicator.exists()).toBe(true)
  })

  it("should hide inputs when enable is false", async () => {
    const config = createConfig({ propsData: {
      title: "Title Number",
      column: "titleNumber",
      direction: "ascending",
      enable: false
      }
    });
    tableHeadItem = mount(TableHeadItem, config);
    expect(TableHeadItem).toBeTruthy();
    tableHeadItem.vm.$nextTick();
    expect(tableHeadItem.vm.title).toBe("Title Number");
    expect(tableHeadItem.vm.column).toBe("titleNumber");
    expect(tableHeadItem.vm.direction).toBe("ascending");
    const indicator = tableHeadItem.find("div.indicator");
    expect(indicator.exists()).toBe(false)
  })
})
