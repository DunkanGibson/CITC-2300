let output = document.getElementById('output');
let submit = document.getElementById('submit');

class Car  {
  constructor(carYear, carMake, carModel){
    this.year = carYear
    this.make = carMake
    this.model = carModel
  }
}

submit.addEventListener('click', () =>{

  let carYear = document.getElementById('year').value
  let carMake = document.getElementById('make').value
  let carModel = document.getElementById('model').value

  const inputCar = new Car(carYear, carMake, carModel);
    for(let i in inputCar){
      output.innerText += ` ${inputCar[i]}`;
    }

    carYear.value = "";
    carMake.value = "";
    carModel.value = "";
    
});
