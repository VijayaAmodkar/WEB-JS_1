/* Q.2] Calculate sum of n numbers. */
let num, sum=0, n, i;
n = prompt("Enter numbers of values you want to add:");
n = Number.parseInt(n);
for(i=1;i<=n;i++)
{
  num = prompt("Enter Any no:");
  num = Number.parseInt(num);
  sum=sum+num;
}
console.log("\nSum of all %d values is = %d", n, sum);