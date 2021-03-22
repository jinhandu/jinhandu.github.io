const oc2bData = {
  navTitle: "OCECO-2B",
  sliderImgPathArrayBlack: [
    "../public/images/scooters/OC2B/OC2B-1.jpg",
    "../public/images/scooters/OC2B/OC2B-2.jpg",
    "../public/images/scooters/OC2B/OC2B-3.jpg",
    "../public/images/scooters/OC2B/OC2B-4.jpg",
  ],
  infoTitle: "OCECO-2B",
  infoSubtitle: "Two Wheels Electric Scooter",
  infoDescription: `
    <ul class="info-description-list">
    <li>Easy folding</li>
    <li>Easy to transpot and store</li>
    <li>Environment protect</li>
    <li>Zero emission&no pollution</li>
    <li>Green tour, energy conservation</li>
    <li>Unique design</li>
      </ul>
  `,
  infoPrice: "3999 SEK",
  infoSpecification: `
    Color: Black, White <br>
    Max: Loading 110KG <br>
    Motor:  250W Brushless Hub Motor <br>
    Battery:  <br>
    Chinese Lithium battery <br>
    36V 7.8Ah <br>
    Max Climbing:   ≤20°  <br>
    Max Speed:  30km/h <br>
    Max Mileage: 20-35km <br>
    Charging Time; 3-5h <br>
    Tire Size:  8.5inch <br>
    Brake: DISC brake <br>
    Height of Handle:  100cm <br>
    Height of Off-ground: 13cm <br>
    Packing Include:<br>
     Charger,User manual,tool <br>
    N.W./ G.W.:  12.1KG/15.2KG <br>
    Dimensions/Packing Size: 114*19.5*114cm/116*21.5*50cm <br>
    `,
};
$(document).ready(function () {
  setPageTitle(oc2bData);
  setSliderData(oc2bData.sliderImgPathArrayBlack);
  setInfoData(oc2bData);
});
