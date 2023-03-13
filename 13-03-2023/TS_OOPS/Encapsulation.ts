class Colony {
  protected constructed_area: number = 500;
  protected unconstructed_area: number = 300;
  private readonly colony_area: number =
    this.constructed_area + this.unconstructed_area;
}

class Apartments extends Colony {
  private apart_area: number = this.constructed_area;
  public getConstructedArea(): number {
    return this.constructed_area;
  }
}

class Garden extends Colony {
  private garden_area: number = this.unconstructed_area;
  public getUnconstructedArea(): number {
    return this.unconstructed_area;
  }
}

const apartments = new Apartments();

const garden = new Garden();

console.log("Constructed Area : " + apartments.getConstructedArea());
console.log("Unconstructed Area : " + garden.getUnconstructedArea());
