function getFahrenheit()
{
    var newFahrenheit = 0.00;
    newFahrenheit = window.prompt("Enter temperature in Fahrenheit", "0.00");
    return(newFahrenheit)
}

function convertCelcius(newFahrenheit)
{
    var newCelcius = 0.00;
    newCelcius = (newFahrenheit - 32) / 1.8;
    return(newCelcius)
}

function display(newFahrenheit, newCelcius)
{
    document.write(newFahrenheit+ " degress Fahrenheit is equal to "+ newCelcius.toFixed(2)+ " degrees Celcius.")
}


function FahrenheitFunction()
{
    var fahrenheit = 0.00;
    var celcius = 0.00;

    fahrenheit = getFahrenheit();
    celcius = convertCelcius(fahrenheit);
    display(fahrenheit, celcius);
}