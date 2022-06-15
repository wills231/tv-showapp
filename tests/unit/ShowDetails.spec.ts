import ShowDetails from "@/views/ShowDetails.vue";
import { shallowMount, VueWrapper } from "@vue/test-utils";

describe("ShowDetails component", () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    wrapper = shallowMount(ShowDetails, {
      props: {
        language: "English",
      }
    });
  });

  it("should render html to display language", () => {
    const expected = '<div><strong>Language:</strong> English</div>';
    expect(wrapper.html()).toContain(expected);
  });
});