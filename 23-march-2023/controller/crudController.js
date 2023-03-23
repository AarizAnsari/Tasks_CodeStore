
//-------------TO FIND ALL THE RESERVATIONS OF A TABLE ON PERTICULAR DATE 
async function findReservations(table,date) {
    const response =  await fetch(`http://localhost:3001/reservations${table.toString()}/${date.toString()}`)
    .then(res => res.json())
    .then(data => {return data})
  }

  //--------------TO GET ALL SAVED RESERVATIONS
  async function getAll() {
      const response =  await fetch(`http://localhost:3001/reservations`)
      .then(res => res.json())
      .then(data => {return data})
  }

  //TO SAVE A RESERVATION IN DATABASE
async function reserveTable(table,date,from,to){
    const response = await fetch("http://localhost:3001/reserve", {
      method: "POST",
      mode: "no-cors", 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({
        "table":table.toString(),
        "date":date.toString(),
        "from":Number(from),
        "to":Number(to)
      })
    });
    console.log(table);
    return response.status;
}

//TO DELETE A RECORD FROM THE EXISTING ENTRIES
async function deleteTable(id){
  const response = await fetch(`http://localhost:3001/delete${id}`);
  return response.status;
}

//EXPORTING FUNCTIONS
  export {reserveTable,findReservations,deleteTable,getAll};