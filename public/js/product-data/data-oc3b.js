const oc2bData = {
  navTitle: "OCECO-3B",
  sliderImgPathArrayBlack: [
    "../public/images/scooters/OC3B/OC3B-1.JPG",
    "../public/images/scooters/OC3B/OC3B-2.JPG",
    "../public/images/scooters/OC3B/OC3B-3.JPG",
    "../public/images/scooters/OC3B/OC3B-4.JPG",
  ],
  infoTitle: "OCECO-3B",
  infoSubtitle: "Three Wheels Electric Scooter",
  infoDescription: `
  The scooter pedals are made of imported maple, and the 8.5 solid tires can be used by people weighing 242 pounds! 500W brushless motor, stable performance, top speed of 15.5 mph, easy to travel over 20 ° slope, powerful!<br>
  The scooter can be folded, small size, lightweight (37 lbs) for easy carrying and storage!Driving 16 miles in full and full speed, vehicle interior There is a waterproof ring, waterproof effect.  
  `,
  infoPrice: "3999 SEK",
  infoSpecification: `
  Color:	Optional <br>
  Max: Loading	120KG<br>
  Power: 	450W brushless motor<br>
  Battery:	Lithium Battery: 48V 8.0Ah/8.8Ah<br>
  Max Climbing:	≤25°<br>
  Max Speed:	30km/h<br>
  Max Mileage:	20km-25km<br>
  Charging time:	3-5 hours<br>
  Tire Size:	8.5 Inch<br>
  Brake:	DISC brake/EABS<br>
  Height of handel(cm):	59cm-104.5cm<br>
  Height of pedal(cm):	15cm<br>
  Height of Off-ground(cm):	9cm<br>
  Packing included:	Charger,User manual,Tool<br>
  front lights/rear lights:	Rear lights<br>
  N.W./ G.W. (kg):	18.5KG/23KG<br>
    `,
};
$(document).ready(function () {
  setPageTitle(oc2bData);
  setSliderData(oc2bData.sliderImgPathArrayBlack);
  setInfoData(oc2bData);
});
