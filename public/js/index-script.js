$(document).ready(function () {
  //手机版取消导航栏动画
  if ($(window).width() < 1000) {
    $("#main-nav").addClass("main-nav-darkbg");
  }
  setScooterData();
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

function setScooterData() {
  let scootersArray = [
    {
      id: "0",
      imgPath: "./public/images/scooters/OC2B/OC2B-0.jpg",
      name: "OC2B",
      price: "3999 SEK",
    },
    {
      id: "2",
      imgPath: "./public/images/scooters/OC2pro-G/OC2pro-G-0.jpg",
      name: "2Pro-G",
      price: "34999 SEK",
    },
    {
      id: "3",
      imgPath: "./public/images/scooters/OC2R/OC2R-0.jpg",
      name: "OC2R",
      price: "8999 SEK",
    },
    {
      id: "4",
      imgPath: "./public/images/scooters/OC3B/OC3B-0.jpg",
      name: "OC3B",
      price: "34999 SEK",
    },
    {
      id: "5",
      imgPath: "./public/images/scooters/OC3R/OC3R-0.jpg",
      name: "OC3R",
      price: "24999 SEK",
    },
    {
      id: "6",
      imgPath: "./public/images/scooters/OC4B-G/OC4B-G0.jpeg",
      name: "OC4B-G",
      price: "29999 SEK",
    },
  ];
  let scootersImg = $(".scooter-img-container__img");
  let scootersName = $(".scooter-name");
  let scooterPrice = $(".scooter-price");
  for (let i = 0; i < 6; i++) {
    scootersImg.eq(i).attr("src", scootersArray[i].imgPath);
    scootersName.eq(i).text(scootersArray[i].name);
    scooterPrice.eq(i).text(scootersArray[i].price);
  }
}
