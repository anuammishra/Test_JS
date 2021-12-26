//Q.2 Write a program to find nth number of Geometric progression.
var a=1;
a=parseInt(a);
var b=3;
b=parseInt(b);
var n=8;
n=parseInt(n);
var curr_term;
for(var i=0;i<n;i++){
    curr_term=a*Math.pow(b,i);
    console.log(curr_term+"");
}