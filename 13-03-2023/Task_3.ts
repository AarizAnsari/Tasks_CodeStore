
const any: (string|number)[] = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];

array.forEach(
  function (value) {
  if (Number(value) != NaN) {
    value = Number(value);
  } 
  else {
    console.log(value.toUpperCase());
  }
 }
);