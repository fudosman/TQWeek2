function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 /9);
    return celsius;
  }
  
  let temperatureInFahrenheit = 104;
  let temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
  console.log(temperatureInFahrenheit + "℉ is " + temperatureInCelsius + "℃");