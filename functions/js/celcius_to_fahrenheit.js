function getCelcius()
{
    var newCelcius = 0.00;
    newCelcius = window.prompt("Enter temperature in Celcius", "0.00");
    return(newCelcius)
}

function convertFahrenheit(newCelcius)
{
    var newFahrenheit = 0.00;
    newFahrenheit = (newCelcius * 1.18) + 32;
    return(newFahrenheit)
}

function display(newCelcius, newFahrenheit)
{
    document.write(newCelcius+ " degress Celcius is equal to "+ newFahrenheit.toFixed(2)+ " degrees Fahrenheit.")
}


function CelciusFunction()
{
    var celcius = 0.00;
    var fahrenheit = 0.00;

    celcius = getCelcius();
    fahrenheit = convertFahrenheit(celcius);
    display(celcius, fahrenheit);
}