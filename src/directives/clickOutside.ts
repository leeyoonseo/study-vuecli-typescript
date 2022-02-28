export const clickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      event.stopPropagation();
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };

    // Wait 1 frame otherwise a potential click that mounted the element will immediately trigger a click-outside event:
    window.requestAnimationFrame(() => {
      document.addEventListener("click", el.clickOutsideEvent);
    });
  },
  unmounted(el: any) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
