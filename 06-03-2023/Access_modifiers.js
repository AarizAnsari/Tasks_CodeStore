//A VARIABLE OR METHOD CAN BE OF PUBLIC OR PRIVATE TYPE
//A PRIVATE VARIABLE OR METHOD CAN NOT BE ACCESSED OUTSIDE IT'S CLASS
//EVERY VARIABLE OR METHOD IS PUBLIC BY DEFAULT 
//TO MAKE IS PRIVATE '#' OPERATOR IS ADDED BEFORE ITS NAME
class Data {
    #private_data;//PRIVATE VARIABLE
    public_data = "THIS IS PUBLIC DATA";//PUBLIC VARIABLE

    //IT CAN BE ACCESSED AND MODIFIED IN THE CLASS ONLY
    #private_data= "THIS IS PRIVATE DATA";
    
    //GETTER TO GET PRIVATE VARIABLE DATA
    get priv_data() {
        return this.private_data;
    }

    //GETTER TO GET PUBLIC VARIABLE DATA
    get pub_data() {
        return this.public_data;
    }
}

//CREATING INSTANCE OF THE CLASS 
const instance = new Data();

//EXPECTED OUTPUT UNDEFINED
console.log(instance.priv_data());

//EXPECTED OUTPUT: THIS IS PUBLIC DATA
console.log(instance.pub_data());