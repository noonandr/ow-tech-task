import {mount} from "@vue/test-utils";
import TableRow from "../components/TableRow.vue";
import { expect, describe, it, test, expectTypeOf } from "vitest";

describe("TableRow", () => {
  const tableRow = mount(TableRow);
  it("should show valid data when data is valid", async () => {
    await tableRow.setProps({
      titleNumber: "243751",
      tenure: "Freehold"
    })
    expect(TableRow).toBeTruthy();
    expect(tableRow.vm.titleNumber).toBe("243751");
    expect(tableRow.vm.tenure).toBe("Freehold");
    expect(tableRow.text()).toContain("243751");
    expect(tableRow.text()).toContain("Freehold");
  })
})
