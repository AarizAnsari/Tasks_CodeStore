class Automobile {
  public vehichleType() {
    console.log("There are 4 wheelers and 2 wheelers");
  }
}

class Car extends Automobile {
  public vehichleType() {
    console.log("Cars are 4 wheelers");
  }
}

class Bike extends Automobile {
  public vehichleType() {
    console.log("Bikes are 2 wheelers");
  }
}

function getVehichleInfo(vehichle: Automobile) {
  vehichle.vehichleType();
}

const automobile = new Automobile();
getVehichleInfo(automobile);

const car = new Car();
getVehichleInfo(car);

const bike = new Bike();
getVehichleInfo(bike);
