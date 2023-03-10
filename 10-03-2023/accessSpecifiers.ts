//MARKET IS THE PARENT CLASS OF SHOP CLASS
class Market {
  protected marketAddress = "123 street, city"; //PROTECTED MEMBER CAN BE ONLY ACCESSED WITHIN THE CLASS AND CHILD CLASS
  private marketRevenue = 10000;                    //PRIVATE MEMBER CAN BE ONLY ACCESSED WITHIN THE CLASS
  constructor(srev) {
    this.marketRevenue += srev;
  }
  public getMartRev() {                         //PUBLIC MEMBER CAN BE ACCESSED FROM EVERYWHERE
    return this.marketRevenue;                  //PUBLIC METHOD CAN RETURN A PRIVATE MEMBER
  }
}
class Shop extends Market {                     //CHILD CLASS CAN ACCESS ALL THE PROTECTED AND PUBLIC MEMBERS OF THE PARENT CLASS
  private shopNo;
  constructor(sno, shopRevenue) {
    super(shopRevenue);                         //SUPER KEYWORD IS REFFERED TO AS THE PARENT CLASS CONSTRUCTOR
    this.shopNo = sno;          
  }
  public getShopAddress() {            
    return "Shop no' " + this.shopNo + " " + this.marketAddress;
  }
}

const shop1 = new Shop(22, 2000);
const shop2 = new Shop(11, 2200);

console.log(shop1.getShopAddress());            
console.log(shop2.getMartRev());                //ACCESSING PUBLIC METHOD OF PARENT CLASS FROM INSTANCE OF CHILD CLASS
