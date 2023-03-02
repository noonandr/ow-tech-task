import { mount } from "@vue/test-utils";
import TableRow from "../components/TableRow.vue";
import { expect, describe, it } from "vitest";

describe("TableRow", () => {
  const tableRow = mount(TableRow);
  it("should show valid data when data is valid", async () => {
    await tableRow.setProps({
      titleNumber: "243751",
      tenure: "Freehold",
    });
    expect(TableRow).toBeTruthy();
    expect(tableRow.vm.titleNumber).toBe("243751");
    expect(tableRow.vm.tenure).toBe("Freehold");
    expect(tableRow.text()).toContain("243751");
    expect(tableRow.text()).toContain("Freehold");
  });

  it("should hide the data when data hideData is true", async () => {
    await tableRow.setProps({
      titleNumber: "243751",
      tenure: "Freehold",
      hideData: true,
    });
    tableRow.vm.$nextTick();
    const disabledRowClass = tableRow.find(".disabled-row");
    expect(disabledRowClass.exists()).toBe(true);
    const hidelass = tableRow.find(".hide");
    expect(hidelass.exists()).toBe(true);
  });
});
