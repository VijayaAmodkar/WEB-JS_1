/* Q.6] Print Factorial of given number using do-While loop. */
let n, i=1, fact=1;
n = prompt("Enter a no for Factorial:");
n = Number.parseInt(n);
do
{
  fact=fact*i;
  i++;
}while(i<=n);
console.log("\nFactorial of %d = %d", n, fact);