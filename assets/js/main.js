import { throttle } from "./utils.js";
import { initializeGlobalValues } from "./setGlobalValues.js";
import { handleScrollBtnTop } from "./btnTop.js";
import { sectionScrollAni } from "./scrollAnimation.js";
import { changeTheme } from "./changeTheme.js";

$(function () {
  // 전역 변수 값 설정 함수
  initializeGlobalValues();
  // section gsap 스크롤 애니메이션
  sectionScrollAni();
  // header, background theme 전환
  changeTheme();
  // #btn-top 노출 및 클릭 이벤트 적용
  handleScrollBtnTop();

  // resize 이벤트 핸들러
  $(window).on("resize", throttle(initializeGlobalValues, 100));
  // scroll 이벤트 핸들러
  $(window).on("scroll", throttle(initializeGlobalValues, 100));
});
