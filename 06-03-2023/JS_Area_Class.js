
class Area {
   static square(length) {
        return length * length;
    }
   static rectangle(length, breadth) {
        return length * breadth;
    }
   static triangle(base, height) {
        return (base * height) / 2;
    }
}


console.log(Area.square(2));

console.log(Area.rectangle(3, 4));

console.log(Area.triangle(2, 3));