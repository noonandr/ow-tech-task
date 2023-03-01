import { shallowMount } from "@vue/test-utils";
import PaginationControls from "@/components/PaginationControls.vue";
import { expect, describe, it } from "vitest";
let paginationControls;

function createConfig(overrides) {
  const propsData = {};
  return Object.assign({ propsData }, overrides);
}

describe("PaginationControls", () => {
  paginationControls = shallowMount(PaginationControls);
  it("should show valid data when data is valid", async () => {
    await paginationControls.setProps({
      startPage: 1,
      pageRange: 5,
    });
    expect(PaginationControls).toBeTruthy();
    expect(paginationControls.vm.startPage).toBe(1);
    expect(paginationControls.vm.pageRange).toBe(5);
  });

  it("should show not emit 2 when page is 1 and next page button is called", async () => {
    const config = createConfig({
      propsData: {
        startPage: 1,
        pageRange: 5,
      },
    });
    paginationControls = shallowMount(PaginationControls, config);
    paginationControls.vm.$nextTick();
    paginationControls.find("div.next").trigger("click");
    expect(paginationControls.vm.currentPage).toBe(2);
  });

  it("should show not emit 1 when page is 2 and previous page button is called", async () => {
    const config = createConfig({
      propsData: {
        startPage: 2,
        pageRange: 5,
      },
    });
    paginationControls = shallowMount(PaginationControls, config);
    paginationControls.vm.$nextTick();
    paginationControls.find("div.previous").trigger("click");
    expect(paginationControls.vm.currentPage).toBe(1);
  });

  it("should show not emit 0 when page is 1 and previous page button is called", async () => {
    const config = createConfig({
      propsData: {
        startPage: 1,
        pageRange: 5,
      },
    });
    paginationControls = shallowMount(PaginationControls, config);
    paginationControls.vm.$nextTick();
    paginationControls.find("div.previous").trigger("click");
    expect(paginationControls.vm.currentPage).toBe(1);
  });

  it("should show not emit 6 when page is 5 and previous next button is called", async () => {
    const config = createConfig({
      propsData: {
        startPage: 5,
        pageRange: 5,
      },
    });
    paginationControls = shallowMount(PaginationControls, config);
    paginationControls.vm.$nextTick();
    paginationControls.find("div.next").trigger("click");
    expect(paginationControls.vm.currentPage).toBe(5);
  });
});
