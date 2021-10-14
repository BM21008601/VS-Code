function InputFunction()
{
    var score = 0

    score = window.prompt("Please enter a score between 0 and 50.", "0");

    while(score < 0 || score > 50)
    {
        score = window.prompt("This score is not between 0 and 50. Please try again.", "0"); 
    }

    document.write("Score: "+score);
}