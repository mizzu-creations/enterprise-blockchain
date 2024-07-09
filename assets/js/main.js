import { getCustomComputedStyle } from "./utils.js";
import {
  initializeGlobalValues,
  handleResizeGlobalValues,
  handleScrollGlobalValues,
} from "./setGlobalValues.js";
import { renderHeader, changeHeaderTheme } from "./header.js";

$(function () {
  // scrollPercentage, vw, vh값 호출 및 업데이트
  initializeGlobalValues();
  $(window).on("resize", handleResizeGlobalValues);
  $(window).on("scroll", () => {
    handleScrollGlobalValues();

    // 현재 스크롤 값
    let currentScroll = getCustomComputedStyle("--scroll-percentage");

    // header 노출 및 흑/백 색상 전환
    renderHeader(currentScroll);
    changeHeaderTheme(currentScroll);
  });

  // body bg 색상 전환
});
