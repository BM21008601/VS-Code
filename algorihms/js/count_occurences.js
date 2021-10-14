function CountFunction()
{
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    var array = [1, 1, 2, 1, 2, 3]
    var one = countOccurrences(array, 1)
    var two = countOccurrences(array, 2)
    var three = countOccurrences(array, 3)

    document.write("Array: "+array);
    document.write("<br>");
    document.write("Occurences of 1: "+one);
    document.write("<br>");
    document.write("Occurences of 2: "+two);
    document.write("<br>");
    document.write("Occurences of 3: "+three);
}