//DECLARING AREA CLASS
class Area {

    //METHOD TO CALCULATE AREA OF SQUARE
   static square(length) {
        return length * length;
    }

    //METHOD TO CALCULATE AREA OF RECTANGLE
   static rectangle(length, breadth) {
        return length * breadth;
    }

    //METHOD TO CALCULATE AREA OF TRIANGLE
   static triangle(base, height) {
        return (base * height) / 2;
    }
}

console.log(Area.square(2));

console.log(Area.rectangle(3, 4));

console.log(Area.triangle(2, 3));