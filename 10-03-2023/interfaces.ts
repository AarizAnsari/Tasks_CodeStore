
//INTERFACE IS AN OBJECT BLUEPRINT WICH DO NOT REQUIRE A CLASS AND A CONSTRUCTOR  
interface User {         
    email: string;
    UID: number;
    subscribed: number;
    getname(): string; //FUNTIONS WITH RETURN TYPES CAN ALSO BE ADDED IN INTERFACE
  }
  
//ENUM IS A COLLECTION OF CONTANT SIMILAR TYPE VALUES WHICH CAN BE USED FOR REFFERENCES
  enum subscriptions {
    monthly = 199,
    quaterly = 499,
    halfyearly = 899,
    annually = 1699
  }
  
//CREATING A USER USING THE INTERFACE 
  const user1: User = {
    email: "user@123.com",
    UID: 224576,
    subscribed: subscriptions.annually, //DERIVING VALUR FROM ENUM
    getname: function () {
      return "Mike";
    }
  };
  
  const user2: User = {
    email: "user2@123.com",
    UID: 228576,
    subscribed: subscriptions.monthly,
    getname: function () {
      return "Jessy";
    }
  };

  console.log("User Name : " + user1.getname());
  console.log("User ID : " + user1.UID);
  console.log("Subscription Charge : " + user1.subscribed);
  console.log("Email ID : " + user1.email);

  console.log("User Name : " + user2.getname());
  console.log("User ID : " + user2.UID);
  console.log("Subscription Charge : " + user2.subscribed);
  console.log("Email ID : " + user2.email);