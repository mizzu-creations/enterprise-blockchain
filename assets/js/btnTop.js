import { throttle, getCustomComputedStyle } from "./utils.js";

export function handleScrollBtnTop() {
  let lastScrollTop = 0;

  $(window).on(
    "scroll",
    throttle(() => {
      let currentScroll = getCustomComputedStyle("--scroll-percentage");

      let scrollTop = $(window).scrollTop();
      if (scrollTop === 0 || currentScroll <= 0.142) {
        $("#btn-top").removeClass("show");
      } else if (scrollTop < lastScrollTop || currentScroll >= 0.994) {
        $("#btn-top").addClass("show"); // down
      } else {
        $("#btn-top").removeClass("show"); // up
      }
      lastScrollTop = scrollTop;

      $("#btn-top").on("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }, 100)
  );
}
