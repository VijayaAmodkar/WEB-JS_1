/* Q.4] Print Factorial of given number using For or While loop. */
let n, i, fact=1;
n = prompt("Enter a no for Factorial:");
n = Number.parseInt(n);
for(i=1;i<=n;i++)
{
  fact=fact*i;
}
console.log("\nFactorial of %d = %d", n, fact);