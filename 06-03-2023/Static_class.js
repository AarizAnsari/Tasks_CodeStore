//STATIC METHODS, VARIABLES OR BLOCKS CAN BE DIRECTLY ACCESED FROM THE CLASS
//WITHOUT CREATING THE INSTANCE OF THE CLASS
//STATIC METHODS, VARIABLES OR BLOCKS CAN NOT BE ACCESED FROM THE INSTANCE OF THE CLASS 
class Data {
    //STATIC VARIABLE
    static Static_Data = 'THIS IS STATIC DATA';

    //STATIC METHOD
    static Display_static_data() {
        return 'THIS IS STATIC METHOD';
    }

    Non_static_data = 'THIS IS NON STATIC DATA';

    Display_non_static_data() {
        return 'THIS IS NON STATIC METHOD';
    }
}

//ACCESSING STATIC VARIABLE WITHOUT CREATING THE INSTANCE OF ITS CLASS
console.log(Data.Static_Data);

//ACCESSING STATIC METHOD WITHOUT CREATING THE INSTANCE OF ITS CLASS
console.log(Data.Display_static_data());

//CREATING INSTANCE OF THE CLASS 
const data = new Data();

//ACCESSING NON STATIC VARIABLE WITH INSTANCE OF IT'S CLASS
console.log(data.Non_static_data);

//ACCESSING NON STATIC METHOD WITH INSTANCE OF IT'S CLASS
console.log(data.Display_non_static_data());
