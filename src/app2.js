import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
// 取LocalStorage里的数据
const localKey = "app2.index";
const index = localStorage.getItem(localKey) || 0;

$tabBar.on("click", "li", e => {
  const $li = $(e.currentTarget);
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
  localStorage.setItem(localKey, index);
});

// 自动触发点击事件
$tabBar
  .children()
  .eq(index)
  .trigger("click");
