document.getElementById('convertButton').addEventListener('click', function () {
     const input = document.getElementById('temperatureInput').value;
     const unit = document.getElementById('unitInput').value;
     const output = document.getElementById('output');
   
     // Validate input
     if (isNaN(input) || input.trim() === '') {
       output.textContent = "Please enter a valid number.";
       return;
     }
   
     const temperature = parseFloat(input);
     let convertedTemperature = '';
     let convertedUnit = '';
   
     // Perform conversion based on selected unit
     if (unit === 'C') {
       convertedTemperature = `${(temperature * 9/5 + 32).toFixed(2)} °F, ${(temperature + 273.15).toFixed(2)} K`;
       convertedUnit = "Fahrenheit and Kelvin";
     } else if (unit === 'F') {
       convertedTemperature = `${((temperature - 32) * 5/9).toFixed(2)} °C, ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
       convertedUnit = "Celsius and Kelvin";
     } else if (unit === 'K') {
       convertedTemperature = `${(temperature - 273.15).toFixed(2)} °C, ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
       convertedUnit = "Celsius and Fahrenheit";
     }
   
     // Display result
     output.textContent = `${convertedTemperature}`;
   });
   