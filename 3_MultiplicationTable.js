/* Q.3] Print multiplication table of given number up to n times. */
let num, pro, mul, a=1, i;
num = prompt("Enter no for Multiplication Table:");
num = Number.parseInt(num);
mul = prompt("Enter the no upto which you want to print the table:");
mul = Number.parseInt(mul);
for (i=1;i<=mul;i++)
{
  pro=num*a;
  console.log("\t%d x %d = %d", num, a, pro);
  a++;
}