function reverse(original) {
  return original.split('').reverseList().join('');
}
var input = process.argv[2];

if (input)
  console.log(reverse(input));


