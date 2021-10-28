function getSterling()
{
    var newSterling = 0.00;
    newSterling = window.prompt("Enter amount in Sterling (£).", "0.00");
    return(newSterling)
}

function convertEuro(newSterling)
{
    var newEuro = 0.00;
    newEuro = newSterling * 1.18;
    return(newEuro)
}

function display(newSterling, newEuro)
{
    document.write(newSterling+ " in Sterling equal to "+ newEuro.toFixed(2)+ " in Euros.");
}

function SterlingFunction()
{
    var sterling = 0.00;
    var euro = 0.00;

    sterling = getSterling();
    euro = convertEuro(sterling);
    display(sterling, euro);
}