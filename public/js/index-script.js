$(document).ready(function () {
  //手机版取消导航栏动画
  if ($(window).width() < 1000) {
    $("#main-nav").addClass("main-nav-darkbg");
  }

  setUsageSenrioData();

  //导航栏动画
  window.onscroll = function () {
    if ($("#main-nav").offset().top > 70) {
      $("#main-nav").addClass("main-nav-darkbg");
      $(".icon-logo").addClass("icon-logo--small");
      $(".nav-container").addClass("nav-container--small-padding");
    } else {
      if ($(window).width() >= 1000) {
        $("#main-nav").removeClass("main-nav-darkbg");
        $(".icon-logo").removeClass("icon-logo--small");
        $(".nav-container").removeClass("nav-container--small-padding");
      }
    }
  };

  //点击菜单后自动收回
  $(".main-nav-items").on("click", function () {
    if ($(window).width() < 1000) {
      $(".navbar-toggler").click();
    }
  });

  // Set highlight section 设置高亮楼层
  $("body").scrollspy({
    target: "#main-nav",
    offset: 74,
  });

  //刷新后页面自动回到顶部
  window.onload = function () {
    document.documentElement.scrollTop = 0; //ie下
    document.body.scrollTop = 0; //非ie
  };
});

function setUsageSenrioData() {
  let usageSenarioImgPath = "./public/images/usage-scenario/";
  let usageSenarioImgElements = $(".usage-img-container__img");
  let usageSenarioTextElements = $(".usage-scenario__text");
  let usageSenarioTextArray = [
    "Medical",
    "Nursing Home",
    "Exhibition",
    "Diana Petersen",
    "Shopping Business",
    "Transportation Terminal",
    "Tourist Attraction",
    "Sports",
  ];
  for (let i = 1; i <= 8; i++) {
    let usageSenarioFullPath = usageSenarioImgPath + i + ".jpg";
    usageSenarioImgElements.eq(i - 1).attr("src", usageSenarioFullPath);
    usageSenarioTextElements.eq(i - 1).text(usageSenarioTextArray[i - 1]);
  }
}
