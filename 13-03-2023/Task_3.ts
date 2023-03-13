
const array: any[] = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];

array.forEach(
  function (value) {
  if (value >= "1" && value <= "5") {
    value = Number(value);
  } 
  else {
    console.log(value.toUpperCase());
  }
 }
);