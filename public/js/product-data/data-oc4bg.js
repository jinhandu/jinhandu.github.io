const oc2bData = {
  navTitle: "OCECO-4B-G",
  sliderImgPathArrayBlack: [
    "../public/images/scooters/OC4B-G/OC4B-G-1.jpeg",
    "../public/images/scooters/OC4B-G/OC4B-G-2.jpeg",
    "../public/images/scooters/OC4B-G/OC4B-G-3.jpeg",
    "../public/images/scooters/OC4B-G/OC4B-G-4.jpg",
  ],
  infoTitle: "OCECO-4B-G",
  infoSubtitle: "Four Wheels Electric Scooter",
  infoDescription: `
    <ul class="info-description-list">
    <li>  Heat-treated aircraft aluminium base and alloy pole.</li>
    <li>  High quality "eagle claw" heavy-duty alloy pole quick release mechanism.</li>
    <li>  Ergonomic fully custom designed handle bars.</li>
    <li>  Weather proof multi-function full colour computer control screen.</li>
    <li>  Main waterproof charging jack on the main stem.</li>
    <li>  Heavy-duty attachment straps to secure golf bag.</li>
    <li>  Quick release Lithium NMC (LiNiMnCoO2) battery (completes 18+ holes).</li>
    <li>  4A mains wall socket charger: 2- 4 hours.</li>
    <li>  Custom computerized mapped software in waterproof alloy housing.</li>
    <li>  Tuned front bush and 3 point suspension with high recoil springs.</li>
    <li>   Weather / water-resistant.</li>
    <li>   Easy to ride (5-10 minute learning curve).</li>
    <li>   Suitable from ages 16 +.</li>
    <li>   Easily transported in your family sedan, hatchback, 4WD etc.</li>
      </ul>
  `,
  infoPrice: "29999 SEK",
  infoSpecification: `
  Color:White <br>
  Max Loading:150KG<br>
  Power :2000W Brushless Dual Motor<br>
  Battery:Chinese battery 48V 14Ah<br>
  Max Climbing:≤20°<br>
  Max Speed:20km/h<br>
  Max Mileage:30km-35km<br>
  Charging time:6 hours<br>
  Tire Size:10 Inch<br>
  Brake:E brake<br>
  Open Size:122*115* 69cm<br>
  Folding Size:112*55*69cm<br>
  Packing Size:128*71*70cm<br>
  front lights/rear lights:Front Lights & Brake Lights <br>
  N.W./ G.W. (kg):36KG/46KG<br>
  Price (Incl. VAT):29999kr<br>
    `,
};
$(document).ready(function () {
  setPageTitle(oc2bData);
  setSliderData(oc2bData.sliderImgPathArrayBlack);
  setInfoData(oc2bData);
});
