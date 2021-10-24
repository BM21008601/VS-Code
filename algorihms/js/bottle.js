function BottlesFunction()

{
    var bottles = 99

    while(bottles > 0)
    {
        //display a message
        document.write(bottles, " green bottles hanging on the wall", "<br>")
        document.write(bottles, " green bottles hanging on the wall", "<br>")
        document.write("And if one should accidentally fall", "<br>")
        //increment number
        bottles = bottles - 1;
        document.write("There will be ", bottles, " green bottles hanging on the wall.", "<br>")
    } 
}