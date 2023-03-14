const array: (string|number)[] = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];

array.forEach(
  function (value) {
  if (isNaN(Number(value))) {
    console.log(value.toString().toUpperCase());
  } 
  else {
    value = Number(value);
  }
 }
);