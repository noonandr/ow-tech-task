import {mount} from "@vue/test-utils";
import TagPill from "../components/TagPill.vue";
import { expect, describe, it, test, expectTypeOf } from "vitest";

describe("TagPill", () => {
  const tagPill = mount(TagPill);
  it("should show valid data when data is valid", async () => {
    await tagPill.setProps({
      tag: "Freehold"
    })
    expect(TagPill).toBeTruthy();
    expect(tagPill.vm.tag).toBe("Freehold");
    expect(tagPill.text()).toContain("Freehold");
  })
})
