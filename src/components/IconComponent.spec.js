import { mount } from "@vue/test-utils";
import IconComponent from "../components/IconComponent.vue";
import { expect, describe, it } from "vitest";

describe("IconComponent", () => {
  const googleMap = mount(IconComponent, {
    propsData: {
      width: 80,
      height: 20,
    },
  });
  it("should show valid data when data is valid", async () => {
    expect(IconComponent).toBeTruthy();
    expect(googleMap.vm.width).toBe(80);
    expect(googleMap.vm.height).toBe(20);
  });
});
