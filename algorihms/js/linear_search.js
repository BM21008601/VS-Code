function SearchFunction()
{
    function linearSearch(arr, item)
    {
        // Go through all the elements of arr to look for item.
        for (var i = 0; i < arr.length; i++)
        {
          if (arr[i] === item)
          { // Found it!
            return i;
          }
        }

        // Item not found in the array.
        return null;
    }
    var search = 4
    var result = linearSearch([1, 2, 3, 4, 5, 6], search)

    document.write("Array: [1, 2, 3, 4, 5, 6]");
    document.write("<br>");
    document.write(search+ " found in slot number "+result)
}