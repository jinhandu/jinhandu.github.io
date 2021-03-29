let scootersArray = [
  {
    id: "0",
    imgPath: "./public/images/scooters/OC2B/OC2B-0.jpg",
    name: "OCECO OC2B",
    type: "Two Wheels Electric Scooter",
    price: "3999 SEK",
  },
  {
    id: "1",
    imgPath: "./public/images/scooters/OC2pro-G/OC2pro-G-0.jpg",
    name: "OCECO 2Pro-G",
    type: "Two Wheels Electric Scooter",
    price: "34999 SEK",
  },
  {
    id: "2",
    imgPath: "./public/images/scooters/OC2R/OC2R-0.jpg",
    name: "OCECO OC2R",
    type: "Two Wheels Electric Scooter",
    price: "8999 SEK",
  },
  {
    id: "3",
    imgPath: "./public/images/scooters/OC3B/OC3B-0.jpg",
    name: "OCECO OC3B",
    type: "Three Wheels Electric Scooter",
    price: "18999 SEK",
  },
  {
    id: "4",
    imgPath: "./public/images/scooters/OC3R/OC3R-0.jpg",
    name: "OCECO OC3R",
    type: "Three Wheels Electric Scooter",
    price: "24999 SEK",
  },
  {
    id: "5",
    imgPath: "./public/images/scooters/OC4B-G/OC4B-G-0.jpeg",
    type: "Four Wheels Electric Scooter",
    name: "OCECO OC4B-G",
    price: "29999 SEK",
  },
];
$(document).ready(function () {
  mobileDeviceKeepDarkNav();
  setScooterData();
  setUsageSenrioData();
  setVideoPlaylist();
  setOrderSelectorData();
  sendOrder();
});

//点击OrderNow按钮
function sendOrder() {
  $("#send-order-btn-id").on("click", function () {
    alert(
      "Order Send Success!\nOur sales manager will contact you within 24 hours :)"
    );
  });
}

//order-now-scooter-model
function setOrderSelectorData() {
  let modelSelector = $(".order-now-scooter-model").eq(0);
  for (let scooterObj of scootersArray) {
    let scooterModel = `<option value="${scooterObj.name}">${scooterObj.name}</option>`;
    modelSelector.append(scooterModel);
  }
  let quantitySelector = $(".order-now-scooter-quantity").eq(0);
  for (let quantitySelet = 1; quantitySelet < 10; quantitySelet++) {
    let scooterQuantity = `<option value="${quantitySelet}">${quantitySelet}</option>`;
    quantitySelector.append(scooterQuantity);
  }
}

//手机版取消导航栏动画
function mobileDeviceKeepDarkNav() {
  if ($(window).width() < 1000) {
    $("#main-nav").addClass("main-nav-darkbg");
  }
}

//点击菜单后自动收回
$(".main-nav-items").on("click", function () {
  if ($(window).width() < 1000) {
    $(".navbar-toggler").click();
  }
});

//设置高亮楼层
$("body").scrollspy({
  target: "#main-nav",
  offset: 74,
});

//刷新后页面自动回到顶部
window.onload = function () {
  // document.documentElement.scrollTop = 0; //ie下
  //document.body.scrollTop = 0; //非ie
};

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

//图片轮播器时间
$(document).ready(function () {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 4000; // 2 seconds
});

//加载电动车卡片数据
function setScooterData() {
  let scootersImg = $(".scooter-img-container__img");
  let scootersName = $(".scooter-name");
  let scooterPrice = $(".scooter-price");
  let scooterType = $(".scooter-type");
  for (let i = 0; i < 6; i++) {
    scootersImg.eq(i).attr("src", scootersArray[i].imgPath);
    scootersName.eq(i).text(scootersArray[i].name);
    scooterPrice.eq(i).text(scootersArray[i].price);
    scooterType.eq(i).text(scootersArray[i].type);
  }
}

//加载使用场景数据
function setUsageSenrioData() {
  let usageSenarioImgPath = "./public/images/usage-scenario/";
  let usageSenarioImgElements = $(".usage-img-container__img");
  let usageSenarioTextElements = $(".usage-scenario__text");
  let usageSenarioTextArray = [
    "Medical",
    "Nursing Home",
    "Museum/Library",
    "Exhibition",
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

//html标签视频循环播放
function setVideoPlaylist() {
  let prePath = "./public/videos/";
  let playlistFileName = [
    "index-video-1.mp4",
    "index-video-2.mp4",
    "index-video-3.mp4",
  ];
  let indexVideoElement = $("#index-video");
  let playerVideoIndex = 0;
  indexVideoElement.attr("src", prePath + playlistFileName[playerVideoIndex]);

  indexVideoElement[0].addEventListener("ended", function () {
    console.log(playlistFileName.length);
    if (playerVideoIndex < playlistFileName.length - 1) {
      playerVideoIndex++;
    } else {
      playerVideoIndex = 0;
    }
    console.log(playerVideoIndex);
    indexVideoElement.attr("src", prePath + playlistFileName[playerVideoIndex]);
  });
}
