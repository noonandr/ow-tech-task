import { mount } from "@vue/test-utils";
import GoogleMap from "../components/GoogleMap.vue";
import { expect, describe, it } from "vitest";

describe("GoogleMap", () => {
  const googleMap = mount(GoogleMap, {
    propsData: {
      lat: -0.107690402,
      lng: 51.52028757,
    },
  });
  it("should show valid data when data is valid", async () => {
    expect(GoogleMap).toBeTruthy();
    expect(googleMap.vm.lat).toBe(-0.107690402);
    expect(googleMap.vm.lng).toBe(51.52028757);
  });
});
