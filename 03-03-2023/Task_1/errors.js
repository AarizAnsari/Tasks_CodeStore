function sqr(){
    const number = document.getElementById('input').value;
    try{
        if(number >= 1000){
            throw "Number is too big"
        }
        else{
            document.getElementById('output').innerHTML = (number*number).toString();
        }
    }
    catch(err){
        document.getElementById('output').innerHTML = err;
    }
}