/* Program to pront the following pattern
*****
*   *
*   *
*   *
*****
*/
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 5) {
            str += '*';
        }
        else {
            str += ' ';
        }
    }
    console.log(str);
    console.log();
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
PROGRAM TO PRINT THE FOLLOWING PATTERN

         1
        123
       12345
      1234567
     123456789
     
*/
let ctr = 1;
for (let i = 6; i <= 10; i++) {
    let str = "";
    let incremeter = 1;
    for (let j = 9; j > 5 - ctr; j--) {

        if (i > j) {
            str += incremeter;
            incremeter++;
        }
        else { str += ' '; }

    }

    console.log(str);
    console.log();
    ctr++;
}