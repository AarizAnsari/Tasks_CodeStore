//GENERIC RETURN TYPE FUNCTION WHICH CAN ACCEPT ANY TYPE VALUE AS ARGUMENT AND RETURNS THE SAME
function genericReturnType<Type> (args:Type):Type{
    return args;
  }
  
  console.log(genericReturnType(2));                                        //PASSING NUMBER
  console.log(genericReturnType('myname'));                                 //PASSING STRING
  

  //GENERIC DATA TYPE INTERFACE CLASS TO STORE DATA AS KEY VALUE PAIR OF ANY TYPE
  interface MyMap<X,Y> {
    name: X;
    value: Y;
  }
  
  const map: MyMap<string, number> = {                                     //ASSIGNING STRING AND NUMBER VALUES
    name: "Dollar",
    value: 82
  }
  
  const map2: MyMap<string,Array<string>> = {                              //ASSIGNING STRING AND ARRAY VALUES TO SAME INTERFACE
    name : 'Vovels',
    value : ['a','e','i','o','u']
  }
  
  
  console.log(map.value);
  console.log(map2.value);
  

  //GENERIC DATA TYPE ALIAS
  type Pair <Type1,Type2>  = [Type1,Type2];
  
  const pair1:Pair<number,number> = [1,3];                                //ASSIGNING BOTH VALUES AS NUMBER
  
  const pair2:Pair<string,string> = ['National Bird','Peacock'];          //ASSIGNING BOTH VALUES AS STRING
  
  console.log(pair1);
  console.log(pair2);