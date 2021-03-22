const oc2rData = {
  navTitle: "OCECO-2R",
  sliderImgPathArrayBlack: [
    "../public/images/scooters/OC2R/OC2R-1.jpg",
    "../public/images/scooters/OC2R/OC2R-2.jpg",
    "../public/images/scooters/OC2R/OC2R-3.jpg",
    "../public/images/scooters/OC2R/OC2R-4.jpeg",
  ],
  infoTitle: "OCECO-2R",
  infoSubtitle: "Two Wheels Electric Scooter",
  infoDescription: `
  Color:Green/Black/Red/Blue<br>
  Max Loading:130KG<br>
  Power: 	500W Brushless Motor<br>
  Battery:	Chinese battery 36V 7.5Ah 25km <br>
  Max Climbing:	≤25°<br>
  Max Speed:	30km/h <br>
  Max Mileage;	20km-25km<br>
  Charging time:	3-5 hours<br>
  Tire Size;	12 Inch <br>
  Brake:	DISC Brake<br>
  Height of handel(cm):	92cm<br>
  Height of Off-ground(cm):	16.5cm<br>
  front lights/rear lights:	Front Lights & Brake Lights <br>
  `,
  infoPrice: "8999 SEK",
  infoSpecification: ``,
};
$(document).ready(function () {
  setPageTitle(oc2rData);
  setSliderData(oc2rData.sliderImgPathArrayBlack);
  setInfoData(oc2rData);
});
