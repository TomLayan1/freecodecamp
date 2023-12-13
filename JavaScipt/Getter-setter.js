class Thermostat{
  constructor(Fahrenheit) {
    this._celsius = (5 / 9) * (Fahrenheit - 32);
  }
  // getter
  get temperature() {
    return this._celsius;
  }
  // setter
  set temperature(celsius) {
    return this._celsius = celsius;
  }
}

const thermos = new Thermostat(56); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 43;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos.temperature);
