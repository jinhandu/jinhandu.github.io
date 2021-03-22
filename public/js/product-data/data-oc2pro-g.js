const oc2proGData = {
  navTitle: "OCECO 2Pro-G",
  sliderImgPathArrayBlack: [
    "../public/images/scooters/OC2pro-G/OC2pro-G-1.jpg",
    "../public/images/scooters/OC2pro-G/OC2pro-G-2.jpg",
    "../public/images/scooters/OC2pro-G/OC2pro-G-3.jpg",
    "../public/images/scooters/OC2pro-G/OC2pro-G-4.jpg",
  ],
  infoTitle: "OCECO 2Pro-G",
  infoSubtitle: "Two Wheels Electric Scooter",
  infoDescription: `
    <ul class="info-description-list">
    <li>You can set self-balancing and keep balance when you are not driving.</li>
    <li>Support GPS positioning, know where your car is anywhere, anytime</li>
    <li>19-inch oversized vacuum explosion-proof disc tires, good shock absorption, strong grip. Can bear 331 pounds (150KG) crowd, suitable for driving on mountains, grass, beaches and other roads!</li>
    <li>Battery quick release, you can charge the battery separately</li>
      </ul>
  `,
  infoPrice: "34999 SEK",
  infoSpecification: `
  Color	Black/Golden/Silver/Grey or Customized Color<br>
  Max Loading:	150KG<br>
  Power:2400W brushless motor<br>
  Battery:55.5V/ 11Ah Imported Lithium-ion<br>
  Max Climbing:≤45°<br>
  Max Speed:20km/h<br>
  Max Mileage:30km-35km<br>
  Charging time:3-5 hours<br>
  Tire Size:19 Inch Vacuum off-road tire<br>
  Water-proof:Water-proof IPX6<br>
  Dimension:820*490*560mm<br>
  Packing Size:860*530*660mm<br>
  front lights/rear lights:Front Lights & Brake Lights <br>
  N.W./ G.W. (kg):43KG/52KG<br>
    `,
};
$(document).ready(function () {
  setPageTitle(oc2proGData);
  setSliderData(oc2proGData.sliderImgPathArrayBlack);
  setInfoData(oc2proGData);
});
