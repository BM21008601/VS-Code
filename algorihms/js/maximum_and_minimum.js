function MaxMinFunction()
{
    var array = [100, 0, 50]
    var min = Math.min.apply(null, array)
    var max = Math.max.apply(null, array)

    document.write("Array: "+array);
    document.write("<br>");
    document.write("Minimum: "+min);
    document.write("<br>");
    document.write("Maximum: "+max);
}