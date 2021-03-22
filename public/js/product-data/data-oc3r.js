const oc2rData = {
  navTitle: "OCECO-3R",
  sliderImgPathArrayBlack: [
    "../public/images/scooters/OC3R/OC3R-1.jpg",
    "../public/images/scooters/OC3R/OC3R-2.jpg",
    "../public/images/scooters/OC3R/OC3R-3.jpg",
    "../public/images/scooters/OC3R/OC3R-4.jpg",
  ],
  infoTitle: "OCECO-3R",
  infoSubtitle: "Three Wheels Electric Scooter",
  infoDescription: `
  Color:	Black/Red/Blue/White <br>
  Max Loading:	120KG<br>
  Power: 	170W brushless motor<br>
  Battery:	36V 5.8Ah<br>
  Max Climbing:	≤6°<br>
  Max Speed:	6.4km/h<br>
  Max Mileage:	1 battery drive up to 15km<br>
  Charging time:	3hours<br>
  Front tire Size;	8 Inch solid front tire<br>
  Rear tire Size;	10 inch pneumatic rear tire<br>
  Open Size:	109*55*89cm<br>
  Folding Size:	60*55*28cm<br>
  front lights/rear lights:	Front Lights & Brake Lights <br>
  Weight:	Scooter 26.2KG/Battery 1.3KG<br>
  `,
  infoPrice: "24999 SEK",
  infoSpecification: ``,
};
$(document).ready(function () {
  setPageTitle(oc2rData);
  setSliderData(oc2rData.sliderImgPathArrayBlack);
  setInfoData(oc2rData);
});
