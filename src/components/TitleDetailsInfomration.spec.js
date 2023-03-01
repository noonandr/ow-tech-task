import { mount } from "@vue/test-utils";
import TitleDetailsInfomration from "../components/TitleDetailsInfomration.vue";
import { expect, describe, it } from "vitest";

describe("TitleDetailsInfomration", () => {
  const titleDetailsInfomration = mount(TitleDetailsInfomration, {
    propsData: {
      information: {
        "Title Number": "243751",
        "Property Address": "31-35 Kirby Street, London, EC1N 8TE",
        Tenure: "Freehold",
        X: -0.107690402,
        Y: 51.52028757,
      },
    },
  });
  it("should hide the data when data hideData is true", async () => {
    expect(titleDetailsInfomration.text()).toContain("243751");
    expect(titleDetailsInfomration.text()).toContain(
      "31-35 Kirby Street, London, EC1N 8TE"
    );
    expect(titleDetailsInfomration.text()).toContain("Freehold");
    const googleMap = titleDetailsInfomration.find(".map");
    expect(googleMap.exists()).toBe(true);
  });
});
