/* Q.10] Print mirrored pattern of right angled triangle. */
let n = 1, i, j, k;
for (i=5;i>=1;i--)
{
  for(j=1;j<=i;j++) //this loop prints the whitespace which gives the pattern a "mirrored" appearance
    {
      process.stdout.write(" ");
    }
  for(k=1;k<=n;k++) //this loop prints asterisk/star (*) like right angle triangle
    {
      process.stdout.write("*");
    }
  process.stdout.write("\n");
  n++;
}