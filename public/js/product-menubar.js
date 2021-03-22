const scooterArray = [
  {
    id: "0",
    name: "OCECO OC2B",
    pageURL: "./OC2B.html",
    type: "Two Wheels Electric Scooter",
    price: "3999 SEK",
  },
  {
    id: "1",
    name: "OCECO 2Pro-G",
    pageURL: "./OC2Pro-G.html",
    type: "Two Wheels Electric Scooter",
    price: "34999 SEK",
  },
  {
    id: "2",
    name: "OCECO OC2R",
    pageURL: "./OC2R.html",
    type: "Two Wheels Electric Scooter",
    price: "8999 SEK",
  },
  {
    id: "3",
    name: "OCECO OC3B",
    pageURL: "./OC3B.html",
    type: "Three Wheels Electric Scooter",
    price: "34999 SEK",
  },
  {
    id: "4",
    name: "OCECO OC3R",
    pageURL: "./OC3R.html",
    type: "Three Wheels Electric Scooter",
    price: "24999 SEK",
  },
  {
    id: "5",
    name: "OCECO OC4B-G",
    pageURL: "./OC4B-G.html",
    type: "Four Wheels Electric Scooter",
    price: "29999 SEK",
  },
];
$(document).ready(function () {
  setDropdownMenuElements();
});

//设置菜单栏Dropdowm Menu
function setDropdownMenuElements() {
  let dropdownMenu = $(".dropdown-menu").eq(0);
  for (let i = scooterArray.length - 1; i >= 0; i--) {
    let newDropdownMenuItem = `<a class='dropdown-item' href='${scooterArray[i].pageURL}'>${scooterArray[i].name}</a>`;
    dropdownMenu.prepend(newDropdownMenuItem);
  }
}
// 设置Home页面跳转
$("#nav-goto-home").on("click", function () {
  $(location).attr("href", "../index.html");
});
