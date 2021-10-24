function EuclidFunction()
{
  var a = 0
  var b = 0
  var remain = 0
  var GCD = 0

  a = window.prompt("Input integer 1.", "0");
  b = window.prompt("Input integer 2.", "0");

  if(a > b)
  {
    remain = a % b;
    while(remain != 0)
    {
        a = b;
        b = remain;
        remain = a % b;
    }
    GCD = b;
  }

  if(b > a)
  {
    remain = b % a;
    while(remain != 0)
    {
        b = a;
        a = remain;
        remain = b % a;
    }
    GCD = a;
  }
  document.write("The greatest common denomonator is ", GCD)
}