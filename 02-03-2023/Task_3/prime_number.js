//Funtion to check if a number is prime
function isprime(n)
{

  if (n<=1)
  {
    return false;
  }

  else if(n === 2 || n === 3)
  {
    return true;
  }else
  {
    for(let i = 3; i < n; i++)
    {
      if(n % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

//Funtion to iterate all numbers from 1 to n 
//store to output if it is a prime number
function main(){
    const number = document.getElementById('num').value;
    let i = 1;
    let ans="";
    while(i<=number){
        if(isprime(i)){
           ans += i.toString()+" ";
        }
        i++;
    }
    //Writing output to HTML element
    document.getElementById('output').innerHTML=ans;
}