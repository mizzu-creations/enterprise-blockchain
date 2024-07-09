import {
  debounce,
  getCustomComputedStyle,
  updateBodyBackgroundColor,
} from "./utils.js";
import {
  initializeGlobalValues,
  handleResizeGlobalValues,
  handleScrollGlobalValues,
} from "./setGlobalValues.js";
import { renderHeader, changeHeaderTheme } from "./header.js";
import { handleScrollBtnTop } from "./btnTop.js";
import { scIntroAnimation } from "./scrollAnimation.js";

$(function () {
  // 초기화 함수 호출
  initializeGlobalValues();

  // resize 이벤트 핸들러
  $(window).on("resize", debounce(handleResize, 100));
  // scroll 이벤트 핸들러
  $(window).on("scroll", debounce(handleScroll, 100));

  // #btn-top 노출 및 클릭 이벤트 적용
  handleScrollBtnTop();

  // section intro 스크롤 애니메이션
  scIntroAnimation();
});

function handleResize() {
  handleResizeGlobalValues();
}

function handleScroll() {
  handleScrollGlobalValues();

  // 현재 스크롤 값
  let currentScroll = getCustomComputedStyle("--scroll-percentage");

  // header 노출 및 테마 변경
  renderHeader(currentScroll);
  changeHeaderTheme(currentScroll);

  // body 배경색 전환
  updateBodyBackgroundColor(currentScroll);
}
