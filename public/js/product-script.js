let scooterImgPathArrayGolden = [];

$(document).ready(function () {
  setThumbnailbtnClick();
  scooterColorSelector();
  $(".btn-info-buy").on("click", function () {
    window.location.replace("https://www.facebook.com/oceco.se");
  });
});

function setThumbnailbtnClick() {
  let slides = $(".slides").eq(0);
  for (let i = 0; i < 4; i++) {
    let thumbnailbtn = $(".thumnail__img-container").eq(i);
    thumbnailbtn.on("click", function () {
      for (let j = 0; j < 4; j++) {
        $(".thumnail__img-container").eq(j).removeClass("thumnail-seleted");
      }
      $(".thumnail__img-container").eq(i).addClass("thumnail-seleted");
      let scrollWidth = 500;
      if ($(window).width() < 786) {
        scrollWidth = 350;
      }
      slides.scrollLeft(scrollWidth * i);
    });
  }
}

//设置菜单栏Dropdowm Menu
function setDropdownMenuElements() {
  let dropdownMenu = $(".dropdown-menu").eq(0);

  for (let i = scooterArray.length - 1; i >= 0; i--) {
    let newDropdownMenuItem = `<a class='dropdown-item' href='${scooterArray[i].pageURL}'>${scooterArray[i].name}</a>`;
    dropdownMenu.prepend(newDropdownMenuItem);
  }
}

// 阻止用户与滚动视图交互
document
  .getElementsByClassName("slider")[0]
  .addEventListener("mousewheel", function (evt, delta) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
  });

// 设置颜色选择器点击出现边框
function scooterColorSelector() {
  for (let currentColorIndex = 0; currentColorIndex < 5; currentColorIndex++) {
    let colerOption = $(".color-option").eq(currentColorIndex);
    colerOption.on("click", function () {
      for (let i = 0; i < 5; i++) {
        $(".color-option").eq(i).removeClass("color-seleted");
      }
      colerOption.addClass("color-seleted");
      if (currentColorIndex == 0) {
        setSliderData(scooterImgPathArrayBlack);
      }
      if (currentColorIndex == 1) {
        setSliderData(scooterImgPathArrayGolden);
      }
    });
  }
}
