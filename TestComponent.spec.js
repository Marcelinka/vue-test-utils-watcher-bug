import TestComponent from "./TestComponent.vue";
import { shallowMount } from "@vue/test-utils";

it('Test firing watcher for mocked global property', (done) => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'removeEventListener', {
    value: jest.fn()
  });

  const wrapper = shallowMount(TestComponent, {
    mocks: {
      $mq: 'lg'
    }
  });

  // Original propose
  wrapper.vm.$mq = 'sm';

  // Try use SetData
  // wrapper.setData({
  //   $mq: 'sm'
  // });

  // Try use nextTick
  // wrapper.vm.$nextTick(() => {
  //   console.log(window.removeEventListener.mock.calls);
  //
  //   expect(window.removeEventListener).toBeCalled();
  //
  //   done();
  // });

  console.log(window.removeEventListener.mock.calls);

  expect(window.removeEventListener).toBeCalled();
});
