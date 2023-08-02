/* Q.5] Add two numbers till user tells. */
let n, a, b, i=1;
n = prompt("Enter how many times you want to perform addition:");
n = Number.parseInt(n);
do
{
  a = prompt("\nEnter First no:");
a = Number.parseInt(a);
  b = prompt("Enter Second no:");
b = Number.parseInt(b);
  console.log("Sum of %d+%d = %d", a, b, a+b);
  i++;
}while(i<=n);