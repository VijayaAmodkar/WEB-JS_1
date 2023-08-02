/* Q.9] Print right angled triangle pattern of asterisk (*) without last (*) of line. */
let n = 0, i, j;
for (j = 1; j <= 5; j++) {
  process.stdout.write("\n");
  for (i = 1; i <= n; i++) {
    process.stdout.write("*");
  }
  n++;
}
process.stdout.write("\n")
for (i = 1; i <= n - 1; i++) {
  process.stdout.write("*");
}
n++;

process.stdout.write("\n");