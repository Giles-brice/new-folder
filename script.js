

    document.getElementById('convertBtn').addEventListener('click', function() {
        var conversionType = document.getElementById('conversionType').value;
        var temperatureInput = document.getElementById('temperatureInput').value;
        var resultElement = document.getElementById('result');
        var unit = document.getElementById('unit').innerText;
        
        if(!isNaN(temperatureInput)) {
            let temperature = parseFloat(temperatureInput);
            let result;
            
            if(conversionType === 'celsiusToFahrenheit') {
                result = (temperature * 9/5) + 32;
                unit = ' °F';
            } else {
                result = (temperature - 32) * 5/9;
                unit = ' °C';
            }
            
            resultElement.innerHTML = `Le résultat est : ${result.toFixed(2)}${unit}`;
        } else {
            resultElement.innerHTML = 'Veuillez entrer une température valide (chiffres uniquement)';
        }
    });
