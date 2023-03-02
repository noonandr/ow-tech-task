import { mount } from "@vue/test-utils";
import AppButton from "../components/AppButton.vue";
import { expect, describe, it } from "vitest";

describe("AppButton", () => {
  const appButton = mount(AppButton, {
    slots: {
      default: "Click Me!",
    },
  });
  it("should show slots content", async () => {
    expect(AppButton).toBeTruthy();
    expect(appButton.html()).toContain("Click Me!");
  });
});
