// 设置导航栏中间的车型Title
function setPageTitle(dataObj) {
  let brandLogoElement = $(".navbar-brand").eq(0);
  let test = `<p class='product-title'>${dataObj.navTitle}</p>`;
  brandLogoElement.after(test);
}

// 设置轮播器图片数据
function setSliderData(scooterImgPathArray) {
  let silderImg = $(".slider__img");
  let thumbnailImg = $(".thumnail__img");
  for (let i = 0; i < 4; i++) {
    silderImg.eq(i).attr("src", scooterImgPathArray[i]);
    thumbnailImg.eq(i).attr("src", scooterImgPathArray[i]);
  }
}

// 设置
function setInfoData(dataObj) {
  let infoTitleElement = $(".scooter-info-title").eq(0);
  let infoSubtitleElement = $(".scooter-info-subtitle").eq(0);
  let infoStockStatusElement = $(".scooter-info-stock").eq(0);
  let infoPriceElement = $(".info-price").eq(0);
  let infoSpecificationElement = $(".specification-details").eq(0);
  infoTitleElement.text(dataObj.infoTitle);
  infoSubtitleElement.text(dataObj.infoSubtitle);
  infoStockStatusElement.after(dataObj.infoDescription);
  infoPriceElement.html(dataObj.infoPrice);
  infoSpecificationElement.html(dataObj.infoSpecification);
}
