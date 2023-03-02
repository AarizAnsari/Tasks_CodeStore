function isprime(n)
{

  if (n<=1)
  {
    return false;
  }

  else if(n === 2)
  {
    return true;
  }else
  {
    for(let i = 2; i < n; i++)
    {
      if(n % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
function main(){
    const number = document.getElementById('num').value;
    let i = 1;
    let ans="";
    while(i<=number){
        if(isprime(i)){
           ans+=i.toString()+" ";
        }
        i++;
    }
    document.getElementById('output').innerHTML=ans;
}