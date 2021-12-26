//Q3. Write a progarm check prime number.
var n=prompt("Enter the number ");
{
    for(i=2; i<=n/2; i++)
    {
        if(n%i==0)
        {
           break;
    }
}
if (i>n/2)
alert("This is a Prime Number");
else
alert("This Is a Not Prime Number");
}