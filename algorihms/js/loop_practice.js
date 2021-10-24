function PracticeFunction()

{
    var s = 1
    var n = 0

    n = window.prompt("Please enter an end point.", "11");

    while(s < (n / 2))
    {
        //display a message
        document.write("The number is ", s, "<br>")

        //increment number
        s = s + 1;
    }

    while(s < n)
    {
        //display a message
        document.write("The number is ", s, "<br>")

        //increment number
        s = s + 2;
    }
    document.write("The sums used are s = s + 1, s = s + 2")
}